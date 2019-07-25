import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
   [rValue, setrValue] = useLocalStorage(rval)
}
