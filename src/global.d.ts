/// <reference types="svelte" />

enum NodeTypes {
    SUM = 'sum'
}

type InputPort = {}

type OutputPort = {
    connect(destination : InputPort) : void
    disconnect(destination? : InputPort) : void
}

type VisualSynthNode = {
    readonly type : NodeTypes
    readonly inputPorts : InputPort[]
    readonly outputPorts : OutputPort[]
    title : string
    x : number
    y : number
}