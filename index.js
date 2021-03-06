import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Animated } from "react-native";
import PropTypes from "prop-types";

export default class ProgressBar extends Component {

    componentWillMount() {
        this.animation = new Animated.Value(this.props.progress);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.progress !== this.props.progress) {
            Animated.timing(this.animation, {
                toValue: this.props.progress,
                duration: this.props.duration
            }).start();
        }
    }

    render() {
        const { height, progressColor, borderColor, borderRadius, borderWidth } = this.props;

        const widthInterpolated = this.animation.interpolate({
            inputRange: [0, 100],
            outputRange: ["0%", "100%"],
            extrapolate: "clamp"
        });

        return (
            <View style={[styles.container, { height, borderColor, borderRadius, borderWidth }]}>
                <Animated.View
                    style={[
                        {
                            width: widthInterpolated,
                            backgroundColor: progressColor,
                            borderRadius
                        },
                        styles.bar
                    ]}
                />
            </View>
        );
    }
}

ProgressBar.defaultProps = {
    height: 24,
    progressColor: "#3B7FD2",
    borderColor: "#ccc",
    borderRadius: 25,
    borderWidth: 1
};

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
    height: PropTypes.number,
    progressColor: PropTypes.string,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.number,
    borderWidth: PropTypes.number
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        padding: 2
    },
    bar: {
        flex: 1
    }
});
