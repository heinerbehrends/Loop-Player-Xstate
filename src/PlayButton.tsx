import { Snapshot } from "./machine";
import { LoopPlayerContext } from "./ContextProvider";

const { useActorRef, useSelector } = LoopPlayerContext;

const ariaLabel = {
  playing: "Pause audio",
  paused: "Play audio",
  loading: "Loading audio",
};

export function PlayButton() {
  const { send } = useActorRef();
  const state = useSelector(getState);
  const isPlaying = state === "playing";

  return (
    <button
      onClick={() => send({ type: "TOGGLE_PLAY" })}
      disabled={state === "loading"}
      aria-pressed={isPlaying}
      aria-label={ariaLabel[state]}
    >
      {state === "playing" ? "Pause" : "Play"}
    </button>
  );
}

function getState(snapshot: Snapshot) {
  return snapshot.value;
}

export type TogglePlayEvent = {
  type: "TOGGLE_PLAY";
};
