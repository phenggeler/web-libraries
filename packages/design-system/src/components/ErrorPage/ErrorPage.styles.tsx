// Recidiviz - a data platform for criminal justice reform
// Copyright (C) 2020 Recidiviz, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
// =============================================================================
import styled from "styled-components";
import { rem } from "polished";
import { fonts, spacing } from "../../styles";

export const OuterErrorPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const InnerErrorPageContainer = styled.div`
  width: ${rem(700)};
`;

export const ErrorPageHeader = styled.h1`
  font-family: ${fonts.heading};
  font-weight: normal;
  font-style: normal;
  font-size: ${rem(34)};

  margin: ${rem(spacing.xl)} 0;
`;

export const ErrorPageBody = styled.div`
  font-family: ${fonts.body};
  font-size: ${rem(19)};
  line-height: ${rem(32)};
`;
