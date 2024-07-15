// ==UserScript==
// @name         B28n
// @namespace    http://bbc.co.uk/
// @version      2024-07-15
// @description  Numeronyms!
// @author       J3s L5y
// @match        http*://bbc.co.uk/*
// @match        http*://*.bbc.co.uk/*
// @match        http*://bbc.com/*
// @match        http*://*.bbc.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bbc.co.uk
// @grant        none
// ==/UserScript==

(function () {
  const LOGO =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjEwMDAiCiAgIGhlaWdodD0iMjg1LjcxNDg0IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc0IgogICBzb2RpcG9kaTpkb2NuYW1lPSJCMjhuLnN2ZyIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMS4yLjIgKGIwYTg0ODY1LCAyMDIyLTEyLTAxKSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzOCIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9Im5hbWVkdmlldzYiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMC45ODQ3MTU2NyIKICAgICBpbmtzY2FwZTpjeD0iNDg0LjkxMTU1IgogICAgIGlua3NjYXBlOmN5PSI5OS4wMTMzNTMiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNzI4IgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwNTEiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjAiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjM4IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNCIKICAgICBpbmtzY2FwZTpzaG93cGFnZXNoYWRvdz0iMCIKICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiPgogICAgPGlua3NjYXBlOmdyaWQKICAgICAgIHR5cGU9Inh5Z3JpZCIKICAgICAgIGlkPSJncmlkNDU2OSIKICAgICAgIG9yaWdpbng9Ii0xZS0wNSIKICAgICAgIG9yaWdpbnk9IjAiIC8+CiAgPC9zb2RpcG9kaTpuYW1lZHZpZXc+CiAgPHBhdGgKICAgICBpZD0icGF0aDEzMTQtNiIKICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO3N0cm9rZS13aWR0aDoxMS45MDQ4IgogICAgIGQ9Ik0gMCAwIEwgMCAyODUuNzE0ODQgTCAyODUuNzE0ODQgMjg1LjcxNDg0IEwgMjg1LjcxNDg0IDAgTCAwIDAgeiBNIDM1Ny4xNDI1OCAwIEwgMzU3LjE0MjU4IDI4NS43MTQ4NCBMIDY0Mi44NTc0MiAyODUuNzE0ODQgTCA2NDIuODU3NDIgMCBMIDM1Ny4xNDI1OCAwIHogTSA3MTQuMjg1MTYgMCBMIDcxNC4yODUxNiAyODUuNzE0ODQgTCAxMDAwIDI4NS43MTQ4NCBMIDEwMDAgMCBMIDcxNC4yODUxNiAwIHogTSA0NDkuMzQxOCA2My43NTU4NTkgQyA0NTYuODY5NzMgNjMuNzU1ODU5IDQ2My40MTc3IDY1LjUwMDgyMSA0NjguOTg2MzMgNjguOTkyMTg4IEMgNDc0LjU1NDkzIDcyLjQ4MzU1MiA0NzguODg0ODQgNzcuNDMxMTk1IDQ4MS45Nzg1MiA4My44MzIwMzEgQyA0ODUuMDcyMTcgOTAuMjMyODY5IDQ4Ni42MTkxNCA5Ny43OTY5NzcgNDg2LjYxOTE0IDEwNi41MjUzOSBDIDQ4Ni42MTkxNCAxMTIuMTk4ODUgNDg2LjIwNzc5IDExNy4zNjI0MiA0ODUuMzgyODEgMTIyLjAxNzU4IEMgNDg0LjU1NzgzIDEyNi42NzI3MiA0ODMuMTY0NDEgMTMxLjAzODA2IDQ4MS4yMDUwOCAxMzUuMTExMzMgQyA0NzkuMjQ1NzUgMTM5LjAzOTEgNDc2LjU2NTE2IDE0My4wNDAwMyA0NzMuMTYyMTEgMTQ3LjExMzI4IEMgNDY5Ljc1OTA2IDE1MS4wNDEwNyA0NjUuNTMxNSAxNTUuMzMxMTYgNDYwLjQ3ODUyIDE1OS45ODYzMyBDIDQ1Ni4wNDQyNCAxNjMuOTE0MSA0NTIuMzMyMzMgMTY3LjU1MjU0IDQ0OS4zNDE4IDE3MC44OTg0NCBDIDQ0Ni40NTQzNyAxNzQuMjQ0MzEgNDQ0LjA4Mjc3IDE3Ny41MTYzNyA0NDIuMjI2NTYgMTgwLjcxNjggQyA0NDAuMzcwMzUgMTgzLjkxNzIgNDM4Ljk3NjkzIDE4Ny4yNjI1MyA0MzguMDQ4ODMgMTkwLjc1MzkxIEwgNDg5LjI1IDE5MC43NTM5MSBMIDQ4OS4yNSAyMTkuMTIzMDUgTCA0MTMuNDU1MDggMjE5LjEyMzA1IEwgNDEzLjQ1NTA4IDIxMy4wMTE3MiBDIDQxMy40NTUwOCAyMDUuMTU2MTYgNDEzLjkxNzYgMTk4LjE3NDM2IDQxNC44NDU3IDE5Mi4wNjQ0NSBDIDQxNS43NzM4IDE4NS44MDkxIDQxNy4zMjA3NSAxODAuMDYzMjQgNDE5LjQ4NjMzIDE3NC44MjYxNyBDIDQyMS43NTUwMiAxNjkuNDQzNjYgNDI0Ljc0NjU5IDE2NC4yNzgxNCA0MjguNDU4OTggMTU5LjMzMjAzIEMgNDMyLjI3NDUzIDE1NC4yNDA0NyA0MzYuOTY2NTQgMTQ5LjA3NjkgNDQyLjUzNTE2IDE0My44Mzk4NCBDIDQ0Ny42OTEyNyAxMzkuMDM5MjIgNDUxLjcxMjE3IDEzNC44OTE3NiA0NTQuNTk5NjEgMTMxLjQwMDM5IEMgNDU3LjQ4NzA1IDEyNy45MDkwMiA0NTkuNDk4NDYgMTI0LjYzNjk4IDQ2MC42MzI4MSAxMjEuNTgyMDMgQyA0NjEuODcwMjggMTE4LjM4MTYgNDYyLjQ4ODI4IDExNC45NjMwMiA0NjIuNDg4MjggMTExLjMyNjE3IEMgNDYyLjQ4ODI4IDk4LjA4ODA4IDQ1Ni40NTU5NSA5MS40Njg3NSA0NDQuMzkwNjIgOTEuNDY4NzUgQyA0MzkuMzM3NjMgOTEuNDY4NzUgNDM0LjQzODk1IDkyLjYzMzM2IDQyOS42OTUzMSA5NC45NjA5MzggQyA0MjUuMDU0ODEgOTcuMTQzMDM5IDQyMC40NjcwNiAxMDAuNjMyOTggNDE1LjkyOTY5IDEwNS40MzM1OSBMIDQxNS45Mjk2OSA3Ni40MTIxMDkgQyA0MjEuMTg4OTIgNzIuMDQ3OTA0IDQyNi40OTg5NSA2OC44NDcxNzcgNDMxLjg2MTMzIDY2LjgxMDU0NyBDIDQzNy4yMjM2OCA2NC43NzM5MTcgNDQzLjA1MTMyIDYzLjc1NTg1OSA0NDkuMzQxOCA2My43NTU4NTkgeiBNIDU0NC40NzA3IDYzLjc1NTg1OSBDIDU1Mi41MTQyNyA2My43NTU4NTkgNTU5LjQ3NTUyIDY1LjUwMDgxOCA1NjUuMzUzNTIgNjguOTkyMTg4IEMgNTcxLjIzMTQ5IDcyLjMzODA4MiA1NzUuNzE2ODcgNzcuMjEyNDM4IDU3OC44MTA1NSA4My42MTMyODEgQyA1ODIuMDA3MzQgOTAuMDE0MTI1IDU4My42MDc0MiA5Ny41NzgyMTggNTgzLjYwNzQyIDEwNi4zMDY2NCBDIDU4My42MDc0MiAxMTMuMjg5MzggNTgyLjIxMzk5IDExOS41NDQyNiA1NzkuNDI5NjkgMTI1LjA3MjI3IEMgNTc2LjY0NTM3IDEzMC42MDAyNiA1NzIuNzI2ODIgMTM0Ljk2NTU5IDU2Ny42NzM4MyAxMzguMTY2MDIgQyA1NzQuMDY3NDIgMTQyLjM4NDc1IDU3OC44MTA2MiAxNDcuNzY4MTQgNTgxLjkwNDMgMTU0LjMxNDQ1IEMgNTg0Ljk5Nzk3IDE2MC43MTUzIDU4Ni41NDQ5MiAxNjguNDk3MjYgNTg2LjU0NDkyIDE3Ny42NjIxMSBDIDU4Ni41NDQ5MiAxODYuNjgxNDggNTg0Ljc5MzI4IDE5NC41MzY3MSA1ODEuMjg3MTEgMjAxLjIyODUyIEMgNTc3Ljg4NDA3IDIwNy43NzQ4MyA1NzMuMDM2NTggMjEyLjg2NzA2IDU2Ni43NDYwOSAyMTYuNTAzOTEgQyA1NjAuNDU1NjIgMjIwLjE0MDc0IDU1My4wMjk4NyAyMjEuOTU4OTggNTQ0LjQ3MDcgMjIxLjk1ODk4IEMgNTM1LjkxMTUzIDIyMS45NTg5OCA1MjguNDM2NTYgMjIwLjIxNDAyIDUyMi4wNDI5NyAyMTYuNzIyNjYgQyA1MTUuNzUyNDkgMjEzLjIzMTI4IDUxMC45MDUgMjA4LjI4MzY2IDUwNy41MDE5NSAyMDEuODgyODEgQyA1MDQuMDk4OTEgMTk1LjMzNjUgNTAyLjM5ODQ0IDE4Ny41NTQ1MiA1MDIuMzk4NDQgMTc4LjUzNTE2IEMgNTAyLjM5ODQ0IDE3MC4zODg2MiA1MDQuMDQ3NzMgMTYzLjE4NzAxIDUwNy4zNDc2NiAxNTYuOTMxNjQgQyA1MTAuNzUwNjkgMTUwLjUzMDggNTE1LjU0NTA3IDE0NS41ODUxMiA1MjEuNzMyNDIgMTQyLjA5Mzc1IEMgNTEwLjgwMTQzIDEzNC42NzQ1OSA1MDUuMzM1OTQgMTIyLjc0NTE2IDUwNS4zMzU5NCAxMDYuMzA2NjQgQyA1MDUuMzM1OTQgOTcuNzIzNjkyIDUwNi45MzQwNiA5MC4yMzI4NzUgNTEwLjEzMDg2IDgzLjgzMjAzMSBDIDUxMy40MzA3OSA3Ny40MzExODggNTE4LjAyMDQ1IDcyLjQ4MzU1NiA1MjMuODk4NDQgNjguOTkyMTg4IEMgNTI5Ljc3NjQyIDY1LjUwMDgxOCA1MzYuNjMzMzkgNjMuNzU1ODU5IDU0NC40NzA3IDYzLjc1NTg1OSB6IE0gODAuMDg3ODkxIDY0LjA4OTg0NCBMIDE0MC44OTg0NCA2NC4wODk4NDQgQyAxNTguODE4MzcgNjQuMDg5ODQ0IDE3Mi42OTk3NCA2Ny42MTU1NDQgMTgyLjU0MTAyIDc0LjY2NjAxNiBDIDE5Mi4zODIzIDgxLjU2OTU4OCAxOTcuMzAyNzMgOTEuNTU2MTQyIDE5Ny4zMDI3MyAxMDQuNjI4OTEgQyAxOTcuMzAyNzMgMTEyLjEyMDAyIDE5NS41Mzg5MiAxMTguNjU2NjggMTkyLjAxMzY3IDEyNC4yMzgyOCBDIDE4OC40ODg0NiAxMjkuNjczMDQgMTgzLjI3NDcxIDEzNC4wMDY4IDE3Ni4zNzEwOSAxMzcuMjM4MjggQyAxODUuOTE4NiAxNDAuMzIyODcgMTkzLjE4OTUzIDE0NS4yNDMzMSAxOTguMTgzNTkgMTUyIEMgMjAzLjMyNDU4IDE1OC42MDk4IDIwNS44OTQ1MyAxNjYuNjg4ODIgMjA1Ljg5NDUzIDE3Ni4yMzYzMyBDIDIwNS44OTQ1MyAxODUuNjM2OTUgMjAzLjM5ODM2IDE5My43MTU5MiAxOTguNDA0MyAyMDAuNDcyNjYgQyAxOTMuNTU3MDggMjA3LjIyOTM0IDE4Ni41Nzk1MiAyMTIuNDQzMTMgMTc3LjQ3MjY2IDIxNi4xMTUyMyBDIDE2OC4zNjU4MiAyMTkuNzg3MzcgMTU3LjQyMzUyIDIyMS42MjMwNSAxNDQuNjQ0NTMgMjIxLjYyMzA1IEwgODAuMDg3ODkxIDIyMS42MjMwNSBMIDgwLjA4Nzg5MSA2NC4wODk4NDQgeiBNIDU0NC40NzA3IDg5LjI4NzEwOSBDIDUzOS4yMTE0NSA4OS4yODcxMDkgNTM1LjA4ODIgOTEuMDMyMDY4IDUzMi4wOTc2NiA5NC41MjM0MzggQyA1MjkuMjEwMjIgOTcuODY5MzMyIDUyNy43NjU2MyAxMDIuNTk3MTQgNTI3Ljc2NTYyIDEwOC43MDcwMyBDIDUyNy43NjU2MiAxMTQuMDg5NTYgNTI5LjEwNTkyIDExOC40NTQ4OCA1MzEuNzg3MTEgMTIxLjgwMDc4IEMgNTM0LjQ2ODMgMTI1LjAwMTIgNTM4LjIzMzMxIDEyNy4xMTA1OCA1NDMuMDgwMDggMTI4LjEyODkxIEwgNTUwLjE5NTMxIDEyOS40Mzc1IEMgNTUzLjU5ODM2IDEyNy41NDYzNCA1NTYuMjc4OTYgMTI0Ljg1NDY2IDU1OC4yMzgyOCAxMjEuMzYzMjggQyA1NjAuMTk3NjEgMTE3LjcyNjQ0IDU2MS4xNzc3MyAxMTMuNTA3NjcgNTYxLjE3NzczIDEwOC43MDcwMyBDIDU2MS4xNzc3MyAxMDIuNTk3MTQgNTU5LjY4MTk1IDk3Ljg2OTMzMiA1NTYuNjkxNDEgOTQuNTIzNDM4IEMgNTUzLjgwMzk4IDkxLjAzMjA2OCA1NDkuNzI5OTYgODkuMjg3MTA5IDU0NC40NzA3IDg5LjI4NzEwOSB6IE0gMTEyLjkxNjAyIDg5LjY0NjQ4NCBMIDExMi45MTYwMiAxMjguODY1MjMgTCAxMzcuODE0NDUgMTI4Ljg2NTIzIEMgMTQ2LjMzMzc2IDEyOC44NjUyMyAxNTIuNzk2NiAxMjcuMTAzMzcgMTU3LjIwMzEyIDEyMy41NzgxMiBDIDE2MS43NTY1NiAxMTkuOTA2MDMgMTY0LjAzMzIgMTE0LjgzNzkxIDE2NC4wMzMyIDEwOC4zNzUgQyAxNjQuMDMzMiA5NS44ODk3ODQgMTU1LjI5Mzc2IDg5LjY0NjQ4NCAxMzcuODE0NDUgODkuNjQ2NDg0IEwgMTEyLjkxNjAyIDg5LjY0NjQ4NCB6IE0gODczLjMxMDU1IDEwNC40Njg3NSBDIDg4NS45OTYyNyAxMDQuNDY4NzUgODk1LjczMjE4IDEwOC4zNzczNiA5MDIuNTE3NTggMTE2LjE5NTMxIEMgOTA5LjQ1MDQ4IDEyMy44NjU3NiA5MTIuOTE2MDIgMTM0Ljg1NTc0IDkxMi45MTYwMiAxNDkuMTY0MDYgTCA5MTIuOTE2MDIgMjIxLjk1ODk4IEwgODgwLjE2OTkyIDIyMS45NTg5OCBMIDg4MC4xNjk5MiAxNTAuNDkwMjMgQyA4ODAuMTY5OTIgMTQ0LjE0NzM3IDg3OC42OTQzMSAxMzkuMzU0NTcgODc1Ljc0NDE0IDEzNi4xMDkzOCBDIDg3Mi45NDE0OCAxMzIuODY0MTggODY4LjczODEzIDEzMS4yNDAyMyA4NjMuMTMyODEgMTMxLjI0MDIzIEMgODU0LjU3NzMxIDEzMS4yNDAyMyA4NDcuMzQ5NTYgMTM0Ljg1NjA2IDg0MS40NDkyMiAxNDIuMDgzOTggTCA4NDEuNDQ5MjIgMjIxLjk1ODk4IEwgODA4LjcwMTE3IDIyMS45NTg5OCBMIDgwOC43MDExNyAxMDcuMzQzNzUgTCA4MzYuODAyNzMgMTA3LjM0Mzc1IEwgODM4LjU3MjI3IDEyMS4yODUxNiBDIDg0OC4wMTI4MSAxMTAuMDc0NTEgODU5LjU5MjI1IDEwNC40Njg3NSA4NzMuMzEwNTUgMTA0LjQ2ODc1IHogTSA1MzkuODMyMDMgMTUxLjA0MTAyIEMgNTM1LjI5NDY0IDE1My4wNzc2MyA1MzEuNzM2MjcgMTU2LjEzMTgxIDUyOS4xNTgyIDE2MC4yMDUwOCBDIDUyNi42ODMyNyAxNjQuMTMyODYgNTI1LjQ0NTMxIDE2OC45MzM5NSA1MjUuNDQ1MzEgMTc0LjYwNzQyIEMgNTI1LjQ0NTMxIDE4MS4yOTkyMiA1MjcuMTQ3NzMgMTg2LjYwOTMxIDUzMC41NTA3OCAxOTAuNTM3MTEgQyA1MzQuMDU2OTUgMTk0LjQ2NDkgNTM4LjY5NTg0IDE5Ni40Mjc3MyA1NDQuNDcwNyAxOTYuNDI3NzMgQyA1NTAuMzQ4NjkgMTk2LjQyNzczIDU1NC45ODk1MyAxOTQuNTM2MjIgNTU4LjM5MjU4IDE5MC43NTM5MSBDIDU2MS43OTU2MSAxODYuODI2MTIgNTYzLjQ5ODA1IDE4MS4zNzE0MSA1NjMuNDk4MDUgMTc0LjM4ODY3IEMgNTYzLjQ5ODA1IDE2OC4xMzMzIDU2Mi4wMDIyOCAxNjMuMTg3NjMgNTU5LjAxMTcyIDE1OS41NTA3OCBDIDU1Ni4xMjQyOSAxNTUuNzY4NDcgNTUxLjg0NTU2IDE1My4zNjc5MiA1NDYuMTczODMgMTUyLjM0OTYxIEwgNTM5LjgzMjAzIDE1MS4wNDEwMiB6IE0gMTEyLjkxNjAyIDE1My41NDI5NyBMIDExMi45MTYwMiAxOTYuMDY2NDEgTCAxNDEuNTU4NTkgMTk2LjA2NjQxIEMgMTUxLjM5OTg3IDE5Ni4wNjY0MSAxNTguOTY2MDQgMTk0LjMwMjU5IDE2NC4yNTM5MSAxOTAuNzc3MzQgQyAxNjkuNTQxNzUgMTg3LjEwNTI2IDE3Mi4xODU1NSAxODEuODkxNDYgMTcyLjE4NTU1IDE3NS4xMzQ3NyBDIDE3Mi4xODU1NSAxNjAuNzQwMDUgMTYyLjEyMzIxIDE1My41NDI5NyAxNDIgMTUzLjU0Mjk3IEwgMTEyLjkxNjAyIDE1My41NDI5NyB6ICIgLz4KICA8ZwogICAgIGFyaWEtbGFiZWw9IjI4IgogICAgIHRyYW5zZm9ybT0ic2NhbGUoMC44NDE5NDY1NSwxLjE4NzcyMzkpIgogICAgIGlkPSJ0ZXh0Nzc0OTIiCiAgICAgc3R5bGU9ImZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjE4My43MjJweDtmb250LWZhbWlseTonQkJDIFJlaXRoIFNhbnMnOy1pbmtzY2FwZS1mb250LXNwZWNpZmljYXRpb246J0JCQyBSZWl0aCBTYW5zIEJvbGQnO3RleHQtYWxpZ246Y2VudGVyO3RleHQtYW5jaG9yOm1pZGRsZTtmaWxsOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjUuNzg2NTI7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIiAvPgogIDxnCiAgICAgYXJpYS1sYWJlbD0ibiIKICAgICBpZD0idGV4dDc3NDk2IgogICAgIHN0eWxlPSJmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToyMjEuMjYzcHg7Zm9udC1mYW1pbHk6J0JCQyBSZWl0aCBTYW5zJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidCQkMgUmVpdGggU2FucyBCb2xkJzt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LWFuY2hvcjptaWRkbGU7ZmlsbDojZmZmZmZmO3N0cm9rZS13aWR0aDo2Ljk2ODkyO3N0cm9rZS1saW5lam9pbjpyb3VuZCIgLz4KPC9zdmc+Cg==';

  function wordToNumeronym(word) {
    if (word.length < 3) {
      return word;
    }

    if (word == 'BBC') {
      return 'B28n';
    }

    if (word == 'bbc') {
      return 'b28n';
    }

    return `${word[0]}${word.length - 2}${word.slice(-1)}`;
  }

  function numeronymifyText(text) {
    return text.replace(/\w+/g, function (match, capture) {
      return wordToNumeronym(match);
    });
  }

  function numeronymifyDocument() {
    var children = [];
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

    if (document.querySelector('.ssrcss-qm4a7x-LogoIconWrapper')) {
      document.querySelector(
        '.ssrcss-qm4a7x-LogoIconWrapper'
      ).innerHTML = `<img src="${LOGO}">`;
    }

    if (document.querySelector('.ssrcss-1vyfvn-LogoLink')) {
      document.querySelector('.ssrcss-1vyfvn-LogoLink').innerHTML =
        window.location.href.split('/')[3].toLocaleUpperCase();
      document.querySelector('.ssrcss-1vyfvn-LogoLink').style.fontSize =
        '2.2rem';
    }

    while (walker.nextNode()) {
      if (walker.currentNode.numeronymified) {
        continue;
      }

      walker.currentNode.textContent = numeronymifyText(
        walker.currentNode.textContent
      );

      walker.currentNode.numeronymified = true;
    }

    return children;
  }

  window.addEventListener('load', function () {
    numeronymifyDocument();

    setInterval(function () {
      numeronymifyDocument();
    }, 1000);
  });
})();
