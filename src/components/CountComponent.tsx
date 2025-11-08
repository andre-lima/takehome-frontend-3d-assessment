import React, { useEffect, useState } from 'react';
import { getNotificationCenter } from '../notification';
import ThreeEngineController from '../3d/engine';

const CountComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countChangeAction = () => {
      setCount(ThreeEngineController.getInstance().getObjectCount());
    };

    getNotificationCenter().subscribe('shapeAdded', countChangeAction);
    getNotificationCenter().subscribe('shapeRemoved', countChangeAction);

    return () => {
      getNotificationCenter().unsubscribe('shapeAdded', countChangeAction);
      getNotificationCenter().unsubscribe('shapeRemoved', countChangeAction);
    };
  }, []);

  return <h2>{count} objects</h2>;
};

export default CountComponent;
