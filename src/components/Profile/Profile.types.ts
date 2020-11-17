interface Event {
  target: {
    type: string;
    name: string;
    value?: number | string;
    checked?: boolean;
  };
}

export default Event;