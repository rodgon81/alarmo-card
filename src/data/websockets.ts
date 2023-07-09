import { HomeAssistant } from 'custom-card-helpers';
import { AlarmoEntry, AlarmoConfig, CountdownConfig } from '../types';

export const fetchEntities = (hass: HomeAssistant): Promise<AlarmoEntry[]> =>
  hass.callWS({
    type: 'hikvision_alarm/entities',
  });

export const fetchConfig = (hass: HomeAssistant): Promise<AlarmoConfig> =>
  hass.callWS({
    type: 'hikvision_alarm/config',
  });

export const fetchCountdown = (hass: HomeAssistant, entity_id: string): Promise<CountdownConfig> =>
  hass.callWS({
    type: 'hikvision_alarm/countdown',
    entity_id: entity_id,
  });
