SELECT event_id, COUNT(session_id) AS morning_sessions
FROM Sessions
WHERE TIME(start_time) >= '10:00:00' AND TIME(start_time) <= '12:00:00'
GROUP BY event_id;