export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (e) {
    queue.push(e.stack.split('\n')[0]);
  } finally {
    queue.push('Guardrail was processed');
    /* eslint-disable no-unsafe-finally */
    return queue;
  }
}
