import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { CssBaseline } from '@mui/material';

function EtaItens2() {
  return (
    <>
        <div>
            <h1>Resumindo</h1>
            <p>Abaixo, temos um resumo organizando os itens do roteiro do PPDA às etapas de desenvolvimento de um projeto. Clique nas imagens para ler uma descrição da etapa escolhida:</p>
        </div>

        <div>
        <Timeline>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Code</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Sleep</TimelineContent>
            </TimelineItem>
            </Timeline>
        
        </div>
    </>
  )
}

export default EtaItens2