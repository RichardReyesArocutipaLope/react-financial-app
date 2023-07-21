import { useContext } from 'react'
import { useSelector } from 'react-redux';
import { ModalContext } from '../../../context/modalContext';
import { CreditContext } from '../../context';
import { Filter, ModuleOption, ModuleOptions, ModuleTitle, PaginationContainer, Table } from '../../../ui/components';
import { moduleOptions } from './';

export const Credits = () => {

  const { isLoading, credits, numberOfCredits } = useSelector(state => state.credits);
  const { currentOffset, setCurrentOffset, parameters } = useContext(CreditContext);
  const { handleModal } = useContext(ModalContext);

  return (
    <>
      <ModuleTitle title='Créditos' />
      <ModuleOptions titleInfoLeft="CREDITOS INFO" titleInfoRight="REGISTRO INFO" >
        {moduleOptions.map(({ moduleOptionData, moduleOptionModal }) => (
          <ModuleOption key={moduleOptionData.id}
            moduleOptionData={moduleOptionData}
            moduleOptionModal={moduleOptionModal}
            handleModal={handleModal}
          />
        ))}
      </ModuleOptions>
      <Filter credits={credits} />
      <Table isLoading={isLoading} arrayData={credits} />
      <PaginationContainer
        currentOffset={currentOffset}
        setCurrentOffset={setCurrentOffset}
        totalPages={Math.ceil(numberOfCredits / parameters.limit)}
        totalRegisters={numberOfCredits}
      />
    </>
  )
}
