import React, { Component } from "react";
import { Input, Modal, Icon, message } from "antd";
import AMap from "../CutomAMap";

export default class LocationPicker extends Component {
  map = null;

  state = {
    mapVisible: false,
    position: undefined,
    formattedAddress: undefined,
    isMounted: false
  };

  componentDidMount() {
    this.setState({
      isMounted: true
    });
  }

  handleMapCreated = map => {
    console.log("amap is created.");
    if (map) this.map = map;
  };

  handleMapClick = (longitude, latitude) => {
    this.setState({
      position: {
        longitude,
        latitude
      }
    });
  };

  handleMapOk = () => {
    const { onChange } = this.props;
    const { position, formattedAddress } = this.state;
    onChange({
      position,
      formattedAddress
    });
    this.setState({
      mapVisible: false
    });
  };

  handleAfterMapClose = () => {
    this.setState({
      position: undefined,
      formattedAddress: undefined
    });
    if (this.map) {
      this.map.clearMap();
    }
  };

  render() {
    const { value = {}, onChange, ...rest } = this.props;
    const { mapVisible, position, formattedAddress, isMounted } = this.state;
    const { formattedAddress: inputFormattedAddress } = value;

    let map = (
      <AMap
        position={position}
        formattedAddress={formattedAddress}
        onCreated={this.handleMapCreated}
        onClick={this.handleMapClick}
        getFormattedAddress={address => {
          if (!address) {
            message.error("根据经纬度转换地址失败");
            this.setState({
              formattedAddress: null
            });
            return;
          }
          this.setState({ formattedAddress: address });
        }}
      />
    );
    if (!isMounted) map = null;

    return (
      <>
        <Input
          placeholder="请选择地址"
          {...rest}
          value={inputFormattedAddress}
          suffix={
            <Icon
              type="environment"
              onClick={() => this.setState({ mapVisible: true })}
            />
          }
        />
        <Modal
          title="高德地图"
          width={600}
          visible={mapVisible}
          onCancel={() => this.setState({ mapVisible: false })}
          onOk={this.handleMapOk}
          afterClose={this.handleAfterMapClose}
        >
          {map}
        </Modal>
      </>
    );
  }
}
