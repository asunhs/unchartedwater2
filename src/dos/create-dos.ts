
import { DosFactory, DosRuntime } from 'js-dos'
import { DosKeyEventConsumer } from 'js-dos/dist/typescript/js-dos-ci'

require('js-dos') // eslint-disable-line @typescript-eslint/no-require-imports

const Dos = (window as any).Dos as DosFactory
const DosController = (window as any).DosController

export function createDos(canvas: HTMLCanvasElement): Promise<DosRuntime> {
  return new Promise((resolve) => {
    Dos(canvas, {
      wdosboxUrl: '/unchartedwater2/static/wdosbox.js',
      cycles: 4000,
    }).ready((fs, main) => resolve({ fs, main }))
  })
}

export function applyMove(elem: HTMLDivElement, consumer: DosKeyEventConsumer) {
  DosController.Move(elem, consumer)
}
