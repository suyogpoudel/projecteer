import { useOptimistic, useTransition } from "react";

type ToggleState = {
  active: boolean;
  count: number;
};

type ToggleReturn = {
  active: boolean;
  count: number;
  toggle: () => void;
  isPending: boolean;
};

export function useOptimisticToggle(
  initialState: ToggleState,
  action: () => Promise<void>,
): ToggleReturn {
  const [isPending, startTransition] = useTransition();

  const [state, setOptimisticState] = useOptimistic(
    initialState,
    (_, newState: ToggleState) => newState,
  );

  const toggle = () => {
    const nextActive = !state.active;

    const nextCount = nextActive
      ? state.count + 1
      : Math.max(0, state.count - 1);

    startTransition(async () => {
      setOptimisticState({
        active: nextActive,
        count: nextCount,
      });

      await action();
    });
  };

  return {
    active: state.active,
    count: state.count,
    toggle,
    isPending,
  };
}
