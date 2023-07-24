// Interfaces
import { IVideoContextProps } from "@/interfaces/iContexts/IVideoContext";
// Hooks
import { createContext, useState } from "react";

export const VideoContext = createContext<IVideoContextProps>({
  isAudioOn: false,
  isVideoActive: true,
  toggleAudio: () => {},
  toggleVideo: () => {},
});

export const VideoProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(true);

  const toggleAudio = () => {
    setIsAudioOn((prev) => !prev);
  };

  const toggleVideo = () => {
    setIsVideoActive((prev) => !prev);
    setIsAudioOn(false);
  };

  return (
    <VideoContext.Provider
      value={{ isAudioOn, toggleAudio, isVideoActive, toggleVideo }}
    >
      {children}
    </VideoContext.Provider>
  );
};
