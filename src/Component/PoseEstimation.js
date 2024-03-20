import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { drawKeypoints, drawSkeleton } from "./utilities";
import * as tf from "@tensorflow/tfjs";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import React, { useRef } from "react";


const PoseEstimation = () => {

    const [isPoseEstimationRunning, setIsPoseEstimationRunning] = useState(false);
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    // const [refreshKey, setRefreshKey] = useState(0);
    let net;

    useEffect(() => {
        const initializePosenet = async () => {
            net = await posenet.load({
                inputResolution: { width: 640, height: 480 },
                scale: 0.8,
            });
        };
        initializePosenet();
    }, []);

    const startPoseEstimation = () => {
        setIsPoseEstimationRunning(true);
        runPosenet();
    };

    const stopPoseEstimation = () => {
        setIsPoseEstimationRunning(false);
        // Refresh the component
        // setRefreshKey(prevKey => prevKey + 1);
        clearInterval(intervalId);
    };

    let intervalId;

    const runPosenet = async () => {
        intervalId = setInterval(() => {
            detect(net);
        }, 1000);
    };

    const detect = async (net) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            const pose = await net.estimateSinglePose(video);
            drawCanvas(pose, videoWidth, videoHeight);
        }
    };

    const drawCanvas = (pose, videoWidth, videoHeight) => {
        const ctx = canvasRef.current.getContext("2d");
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        drawKeypoints(pose["keypoints"], 0.6, ctx);
        drawSkeleton(pose["keypoints"], 0.7, ctx);
    };


    return (
        <div  >
        {/* <div key={refreshKey}> */}
            <div className="bgimg">
                <Container className="content">
                    <h1 className="text-center text-light">Welcome to PoseEstimation</h1>
                    {isPoseEstimationRunning ? (
                        <button type="button" className="btn btn-danger" onClick={stopPoseEstimation}>Stop PoseEstimation</button>
                    ) : (
                        <button type="button" className="btn btn-primary" onClick={startPoseEstimation}>Start PoseEstimation</button>
                    )}
                    <div style={{ position: "relative" }}>
                        <Webcam
                            ref={webcamRef}
                            style={{
                                position: "absolute",
                                marginLeft: "auto",
                                marginRight: "auto",
                                left: 0,
                                right: 0,
                                textAlign: "center",
                                zIndex: 9,
                                width: 640,
                                height: 480,
                            }}
                        />
                        <canvas
                            ref={canvasRef}
                            style={{
                                position: "absolute",
                                marginLeft: "auto",
                                marginRight: "auto",
                                left: 0,
                                right: 0,
                                textAlign: "center",
                                zIndex: 9,
                                width: 640,
                                height: 480,
                            }}
                        />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default PoseEstimation;
