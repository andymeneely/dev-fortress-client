import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import SliderMonitor from 'redux-slider-monitor';

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    changeMonitorKey="ctrl-m"
    defaultIsVisible={true}
    defaultPosition="bottom"
  >
    <LogMonitor />
    <SliderMonitor keyboardEnabled={true} />
  </DockMonitor>,
  );

export default DevTools;
