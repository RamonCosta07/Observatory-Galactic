// Styles
import * as S from "@/styles/BackgroundVideoStyles";
// Hooks
import { useContext, useState, useEffect } from "react";
// Context
import { VideoContext } from "@/contexts/VideoContext";
// Components
import Loading from "./Loading";

const BackgroundVideo = () => {
  const [loading, setLoading] = useState(true);
  const { isAudioOn, isVideoActive } = useContext(VideoContext);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <S.VideoContainer>
      {loading && <Loading />}
      {!loading && isVideoActive && (
        <S.VideoElement autoPlay loop muted={!isAudioOn}>
          <source src="/galaxy_video.mp4" type="video/mp4" />
        </S.VideoElement>
      )}
    </S.VideoContainer>
  );
};

export default BackgroundVideo;
