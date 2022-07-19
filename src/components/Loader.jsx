import React from "react";

import { Html, useProgress } from '@react-three/drei'

export function Loader() {
  const { progress = progress.toFixed(2) } = useProgress()
  return <Html center>{progress} % loaded</Html>
}