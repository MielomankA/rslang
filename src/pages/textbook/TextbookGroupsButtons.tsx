import { useEffect, useState } from 'react';

import { Button } from '@mui/material';
import { deepPurple, indigo, blue, lightBlue, cyan, teal, green } from '@mui/material/colors';

import { ITextbookGroupsButtonsProps } from '../../shared/ts/models';

import './TextbookGroupsButtons.scss';
import { useAppSelector } from '../../store/hooks/redux';

export const TextbookGroupsButtons: React.FC<ITextbookGroupsButtonsProps> = ({ setGroup }) => {
  const colorDeepPurple = deepPurple[300];
  const colorIndigo = indigo[300];
  const colorBlue = blue[300];
  const colorLightBlue = lightBlue[300];
  const colorCyan = cyan[300];
  const colorTeal = teal[300];
  const colorGreen = green[300];
  const [complexWordsSection, setComplexWordsSection] = useState<boolean>(false);

  const username = useAppSelector((state) => state.userReducer.user.name);

  useEffect(() => {
    if (username) {
      setComplexWordsSection(true);
    } else {
      setComplexWordsSection(false);
    }
  }, [username]);

  return (
    <div className="textbook-page__group">
      <h3 className="textbook-page__group_title">Groups</h3>
      <div className="textbook-page__group_buttons">
        <Button
          onClick={() => setGroup(0)}
          variant="contained"
          sx={{
            bgcolor: colorDeepPurple,
            borderRadius: '50%',
            minWidth: 50,
            '&:hover': colorGreen,
          }}
        >
          A1
        </Button>
        <Button
          onClick={() => setGroup(1)}
          variant="contained"
          sx={{
            bgcolor: colorIndigo,
            borderRadius: '50%',
            minWidth: 50,
          }}
        >
          A2
        </Button>
        <Button
          onClick={() => setGroup(2)}
          variant="contained"
          sx={{
            bgcolor: colorBlue,
            borderRadius: '50%',
            minWidth: 50,
          }}
        >
          B1
        </Button>
        <Button
          onClick={() => setGroup(3)}
          variant="contained"
          sx={{
            bgcolor: colorLightBlue,
            borderRadius: '50%',
            minWidth: 50,
          }}
        >
          B2
        </Button>
        <Button
          onClick={() => setGroup(4)}
          variant="contained"
          sx={{
            bgcolor: colorCyan,
            borderRadius: '50%',
            minWidth: 50,
          }}
        >
          C1
        </Button>
        <Button
          onClick={() => setGroup(5)}
          variant="contained"
          sx={{
            bgcolor: colorTeal,
            borderRadius: '50%',
            minWidth: 50,
          }}
        >
          C2
        </Button>
        {complexWordsSection && (
          <Button
            onClick={() => setGroup(6)}
            variant="contained"
            sx={{
              bgcolor: colorGreen,
              minWidth: 100,
            }}
          >
            Complex words
          </Button>
        )}
      </div>
    </div>
  );
};
