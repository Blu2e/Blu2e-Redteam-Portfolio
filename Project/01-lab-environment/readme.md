# Lab Environment

## Goal
 가상 환경에서 모의 침투 테스트를 수행하기 위한 실습 환경을 구축합니다.

## Planned Environment
 - VirtualBox
 - Kali Linux
 - Ubuntu

# Ubuntu-Target 구축 기록

## 1. 구축 목적
 - 모의 해킹에 필요한 가상 환경 필요에 의한 구축

## 2. 사용 환경
 - 가상화 프로그램 : Oracle VirtulaBox
 - 운영체제 : Ubuntu Server 24.04.5 LTS
 - 가상 디스크 : VDI, 최대 30GB (동적 할당)
 - 메모리 : 4GB
 - CPU : 2개
 - 네트워크 인터페이스 : enp0s3
 - IPv4 : 10.0.2.15/24

## 3. 설치 과정
 - VirtualBox에 Ubuntu-Target 가상 머신 생성
 - Ubuntu Server 설치 이미지 연결
 - 키보드 및 네트워크 설정
 - 가상 디스크 및 파일 시스템 구성
 - 사용자 계정 생성
 - OpenSSH Server 설치
 - 설치 완료 후 재부팅 및 로그인 확인

## 4. 문제 발생 및 해결
 - 발생한 문제 : Ubuntu 설치 후 로그인 실패
 - 원인 : 사용자 계정 이름을 입력하는 과정에서 오타 발생
 - 확인 과정 : 복구 모드에 진입하여 사용자 계정 정보를 확인
 - 해결 방법 : 계정 이름을 확인하고 수정한 뒤 로그인 재시도
 - 결과 : Ubuntu Server 로그인 성공

## 5. 설치 완료 후 확인
 - 사용자 로그인 : 성공
 - 서버 이름 : ubuntu-target
 - 운영체제 : Ubuntu Server 24.04.5 LTS
 - IP 주소 확인 : 10.0.2.15
 - SSH 서버 : 설치 완료
 - SSH 실행 상태 : inactive → active 변경 및 확인
 - SSH 자동 실행 : enable 설정 완료

## 6. 다음 단계
 - Kali Linux 가상 머신 구성
 - 가상 머신 간 네트워크 구성
 - 통신 가능 여부 확인
 - 구축 과정과 실습 결과를 GitHub에 기록