interface Event {
  target: {
    type: string;
    name: string;
    value?: number | string;
    checked?: boolean;
  };
  preventDefault: () => void;
}

export default Event;