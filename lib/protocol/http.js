// Copyright 2015, EMC, Inc.

'use strict';

module.exports = httpProtocolFactory;

httpProtocolFactory.$provide = 'Protocol.Http';

function httpProtocolFactory () {
    function HttpProtocol() {
    }

    return new HttpProtocol();
}
