SELECT e.title, COUNT(s.session_id) AS total_sessions
FROM Events e
JOIN Sessions s ON e.event_id = s.event_id
GROUP BY e.event_id, e.title
HAVING COUNT(s.session_id) = (
    SELECT COUNT(session_id)
    FROM Sessions
    GROUP BY event_id
    ORDER BY COUNT(session_id) DESC
    LIMIT 1
);