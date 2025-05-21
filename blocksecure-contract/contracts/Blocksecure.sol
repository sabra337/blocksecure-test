//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;


contract BlockSecure{
    struct DeploymentEvent {
        string eventType;
        string status;
        string timestamp;
        string committer;
    }

    DeploymentEvent[] public events;

    event EventLogged(
        string eventType,
        string status,
        string timestamp,
        string commiter,
        address indexed sender
    );


    function logEvent(
        string memory eventType,
        string memory status,
        string memory timestamp,
        string memory committer
    )public{
        events.push(DeploymentEvent(eventType, status, timestamp, committer));
        emit EventLogged(eventType, status, timestamp, committer, msg.sender);
    }

    function getEventCount() public view returns (uint) {
        return events.length;
    }

    function getEvent(uint index) public view returns (
        string memory, string memory, string memory, string memory
    ) {
        DeploymentEvent memory e = events[index];
        return (e.eventType, e.status, e.timestamp, e.committer);
    }



}