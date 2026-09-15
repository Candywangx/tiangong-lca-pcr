---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.revolution-counters-production-counters-taximeters-mileometers-pedometers-and-the-like-047b2a38
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 转数计、产量计数器、车费计、里程计、步数计及类似仪表；速度指示器及转速表（水文和气象仪器除外）；频闪观测仪

## 1. 范围与适用性

本 PCR 适用于制造能够累计转数或产量事件、计算或记录距离或步数、指示速度或转速，或进行频闪观测的仪器时所编制的前景数据包。适用产品包括作为成品销售的机械式、机电式和电子式出租汽车计价器、车辆或设备用速度指示器、转速表、里程计、计步器、产量计数器和频闪观测仪。

水文和气象仪器不在范围内。气体、液体或电力供应/生产计量表；自动调节或控制仪器；内置此类指示器的整车或整机；能够以软件模拟计数器的通用计算设备；以及独立销售的上游组件亦不在范围内。前景边界从材料和组件进入生产场址起，涵盖装配、适用时的编程、校准或功能试验以及工厂大门前的包装。分销、使用、维护和报废不属于本制造数据包，除非下游研究明确另行增加。

数据生产者应声明仪器类型、传感原理、显示技术、动力来源、外壳材料、功能规范、合格评定制度、附件、包装状态、制造地域和报告期。下列清单仅列通用的原子交换；实际边界内的其他每一种材料、组件、废物或直接基本流排放均须以单独原子流增加。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.revolution-counters-production-counters-taximeters-mileometers-pedometers-and-the-like-047b2a38 |
| classification_refs | CPC 3.0: 48264 (`un-cpc-3-0-structure-2025`) |
| covered_products | 转数计、产量计数器、出租汽车计价器、里程计、计步器、速度指示器、转速表和频闪观测仪成品，包括机械式、机电式和电子式产品 |
| excluded_products | 水文和气象仪器；气体、液体或电力供应/生产计量表；自动控制设备；整车和整机；通用计算设备；独立组件 |
| representative_product | 已声明架构和性能规范且完成校准或功能试验的计数或指示仪器成品 |
| production_route | 材料/组件接收；适用时在场址内成形或安装线路板；机械/电子装配；适用时编程/配置；校准和功能试验；最终包装 |
| market_state | 工厂大门处的仪器成品；产品质量不含单独报告的包装和附件，除非数据集明确声明纳入 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 由仪器成品提供已声明的计数、距离、速度、转速或频闪指示功能 |
| How much | 1 kg 仪器成品，不含单独报告的包装 |
| How well | 满足声明的量程、分辨率、准确度或指示公差、环境等级、接口和合格评定要求；出租汽车计价器还须声明距离/时间和计费功能（`oiml-r21-2007-taximeters`） |
| How long or cycle | 完成所声明的校准或功能试验周期并在工厂大门放行；设计使用寿命作为下游使用阶段建模元数据 |
| reference_flow_link | `finished_instrument_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 转数计、生产计数器、出租汽车计价表、里程记录器、步数计及类似表计，速度指示器及转速计，水文及气象用表计除外，闪光仪 `560acd9e-9e1a-4b2e-b304-5a17f8a4ba3c` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 仪器类型；传感和指示原理；架构；量程和分辨率；准确度或指示公差；动力来源和额定电压；外壳材料；显示技术；固件/配置；校准或功能试验程序及通过准则；法制计量或合格评定制度；附件；包装纳入情况；产品质量；制造场址/地域；报告期 |

缺少必需限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及按质量归一化的交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按 1 kg 合格仪器成品归一化。包装质量不计入分母并单独报告，除非明确声明其他市场状态。 |
| `batch_to_reference_mass` | 批次和年度记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg reference product | 每项交换除以同一边界和期间内的合格成品质量；废品不计入分母。 |
| `electricity_energy_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留计量能量基准并严格按 3.6 MJ/kWh 将 kWh 换算为 MJ。不得与燃料、蒸汽或热合并。 |
| `component_mass_consistency` | 外购组件/材料 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用进入过程的净质量。按件记录时，以核实件数乘实测或供应商声明的单件质量，并保存证据。 |

## 5. 系统边界

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing_gate` | foreground manufacturing | 纳入材料/组件入厂后在场址内进行的成形或线路板安装、装配、编程/配置、校准或功能试验、返工/废品处理和最终包装，直至工厂大门放行。 | `eu-pef-method-2021` |
| `boundary_purchased_inputs` | upstream products and energy | 每一种外购材料、组件、电力和包装采用相容的上游数据集；上游生产排放不得计入前景过程。 | `eu-pef-method-2021` |
| `boundary_waste_and_emissions` | manufacturing wastes and direct releases | 纳入边界内产生的每一种制造废物和直接计量的基本流排放。按声明去向建模废物处理，不得以处理服务标识替代废物流。 | `eu-pef-method-2021` |
| `boundary_excluded_stages` | distribution, use, maintenance, and end of life | 排除工厂大门之后的阶段；从摇篮到坟墓研究可另行增加独立过程和情景。 | `eu-pef-method-2021` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购组件、材料、能源和包装进入场址大门时，记录其标识、状态、数量、供应商和地域。 |
| starting_condition_role | 大门到大门前景起点；上游开采、材料/组件生产和交付使用链接数据集。 |
| product_classification_scope | 第 1 节及 CPC 3.0 代码 48264 的成品；分类背景不能替代产品限定信息。 |
| recursive_input_rule | 若输入本身属于本类别成品，仅将其作为产品输入记录一次并链接独立上游数据集，不在同一过程内递归应用本 PCR。 |
| upstream_dataset_requirement | 每项外购输入须链接技术、地域、时间和状态相容的数据集，或披露为数据缺口；不得静默使用代理。 |
| disclosure | 声明场址、期间、架构、场内/外包工序、组件和包装纳入情况、产品/废品质量、废物去向、电力组合/电压、分配、排除项及数据缺口。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `instrument_manufacturing` | 仪器装配、校准/试验和包装 | required | 始终纳入；仅在架构或路线证据证明不存在时，将条件流行标为 `not_applicable`。 | 从入厂投入到工厂大门处合格成品的前景制造 | 1 kg 合格仪器成品输出，包装不计入分母 |

### 过程：仪器装配、校准/试验和包装（`instrument_manufacturing`）

#### 输入

##### 产品流

###### 场内零件成形使用的铝合金（`aluminium_alloy_input`）

仅在场址内成形或机加工铝件时记录；外购铝制成品零件须采用其自身的准确组件流。

- 选定流：铝合金 `d2335464-e0fd-574c-b56f-83fdf8c65b0c`
- 流属性/单位：Mass / kg
- 数量规则：领用铝合金质量减去有记录的退库质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格仪器成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：

###### 场内安装的印制线路板（`printed_wire_board_input`）

仅在场内安装或装配裸板时记录，不用于外购已装配线路板或电子元器件集合。

- 选定流：印制线路板 `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- 流属性/单位：Mass / kg
- 数量规则：实测或由件数换算的印制线路板投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格仪器成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：

###### 产品中安装的液晶显示模组（`lcd_display_module_input`）

仅在产品含 LCD 模组时记录；其他显示技术须另加原子流。

- 选定流：液晶显示模组 `264605c6-41b8-4baa-82b0-e27e815063a0`
- 流属性/单位：Mass / kg
- 数量规则：实测或由件数换算的模组投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格仪器成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：

###### 外购电力（`electricity_input`）

记录场内成形、装配、编程、校准/试验、返工、分配给生产的环境控制及包装所用电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量电力换算为 MJ 后分配给前景过程
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格仪器成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_records`
- 来源：

###### 运输用瓦楞纸箱（`corrugated_board_boxes_input`）

在工厂大门处包含成品瓦楞纸箱时记录；其他包装组件须分开记录。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：用于合格产品的纸箱实测质量或件数换算质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格仪器成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_component_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格计数器、指示器或频闪观测仪成品（`finished_instrument_output`）

记录通过校准或功能试验的合格产品；包装不计入 1 kg 分母。

- 选定流：转数计、生产计数器、出租汽车计价表、里程记录器、步数计及类似表计，速度指示器及转速计，水文及气象用表计除外，闪光仪 `560acd9e-9e1a-4b2e-b304-5a17f8a4ba3c`
- 流属性/单位：Mass / kg
- 数量规则：恰为 1 kg 合格仪器成品输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 合格仪器成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 废弃装配印制线路板（`waste_populated_printed_wiring_board_output`）

记录场内产生的报废或不可修复装配线路板，另行声明危险性分类和去向。

- 选定流：废弃装配印制线路板 `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- 流属性/单位：Mass / kg
- 数量规则：移交至声明去向的净实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格仪器成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-pef-method-2021`

###### 场内成形产生的铝废料（`aluminium_scrap_output`）

仅在场内成形或机加工产生铝废料时记录，并声明合金、污染和去向。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：离开前景过程的铝废料净实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格仪器成品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-pef-method-2021`

##### 基本流

本类别不规定所有产品共有的直接基本流。场内燃烧、涂装、焊接、清洗等作业的每一种实测排放均须按化学物种和接收环境分开增加。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared lines, utilities, and waste handling | 技术可行时通过过程细分或直接计量避免分配。 | `eu-pef-method-2021` |
| `allocation_physical_relation` | unavoidable shared burdens | 否则按机器时间、计量能量、处理质量或受试单元小时等有因果关系的物理驱动量分配。 | `eu-pef-method-2021` |
| `allocation_economic_last_resort` | multi-output operations without a physical relation | 仅在无法建立物理关系时采用经济分配，并使用一致价格、披露敏感性。 | `eu-pef-method-2021` |
| `allocation_scrap_no_avoided_burden` | manufacturing scrap | 在本前景包内仅报告废料质量和去向，不计入替代生产信用；回收负荷或信用仅按下游研究方法处理。 | `eu-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_component_records` | `instrument_manufacturing` | 每项原子材料/组件/包装投入 | ERP 领退料、发票、BOM、称量或件数换算记录 | 标识；供应商；牌号/型号；领用/退回质量；件数；单件质量；批次；日期 | 按批次核对净领用量并验证件数换算系数 | kg | 每批次，按月汇总 | 有代表性的 12 个月或完整短周期 | 所有纳入场址 | 按准确流汇总净投入并除以合格输出质量 | 校准秤；批准 BOM；ERP/发票核对；单件质量证据 |
| `cp_electricity_records` | `instrument_manufacturing` | 外购电力 | 分表或经核对的场址总表 | 读数；单位；表号；电压；电网组合；分配驱动量；输出质量；期间 | 优先分表，否则按第 7 节分配同期总表电量 | kWh 和 MJ | 每月/生产周期 | 同一生产期间 | 所有纳入场址 | kWh × 3.6 后乘分配份额，再除以合格输出质量 | 仪表校准/账单；分配工作表；电网证据 |
| `cp_finished_product_records` | `instrument_manufacturing` | 合格产品和合格状态 | 称量、放行记录、校准证书、试验日志 | 型号；批次；合格/废品质量；程序；结果；公差；通过/失败；配置；日期 | 称量未包装合格产品并链接放行证据 | kg | 每批次/批号 | 完整报告期 | 所有纳入场址 | 仅汇总合格放行质量 | 秤校准；签署放行；可追溯试验/合格证据 |
| `cp_waste_records` | `instrument_manufacturing` | 每项原子废物输出 | 称量单、转移联单、库存核对 | 标识；质量；状态；危险分类；去向；处理；日期 | 转移时分别称量并扣除有记录的回用 | kg | 每次转移，按月汇总 | 同一生产期间 | 所有纳入场址 | 按准确流汇总净废物并除以合格输出质量 | 秤校准；转移/承包商回执；危险分类 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | each mass input/waste | 归一化数量 = 同期净交换质量 / 未包装合格输出质量 | 净流质量；合格输出质量 | kg/kg reference product | |
| `calc_count_to_mass` | piece-recorded inputs | 质量 = 已核实件数 × 实测或供应商单件质量，再执行 `calc_mass_normalization` | 件数；单件质量；输出质量 | kg/kg reference product | |
| `calc_electricity_normalization` | electricity | 归一化电力 = 净 kWh × 3.6 MJ/kWh × 分配份额 / 合格输出质量 | 读数；分配；输出质量 | MJ/kg reference product | |
| `calc_mass_reconciliation` | completeness | 用全部原子材料/组件投入核对合格产品、每项废物和在制品变化；调查并披露差额，不得建立未指定平衡流。 | 原子投入；产品；废物；在制品 | 有记录的差额 | `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_architecture` | product/components | 记录型号、仪器类型、架构、传感/指示原理、牌号/型号和状态；实际 BOM 交换须原子化增加。 | BOM、产品/供应商规范、Tiangong UUID |
| `dq_measurement_traceability` | mass, electricity, calibration, waste | 使用经校准或账单核对的仪表，并将记录链接至同一生产期。 | 证书、发票、仪表/称量日志、计算表 |
| `dq_temporal_and_site_coverage` | reporting period | 覆盖所有纳入场址和有代表性的 12 个月，或披露完整短周期及局限。 | 场址清单、生产日历、期间核对 |
| `dq_completeness` | inventory | 核对材料/组件、产品、废品、废物和在制品；每个遗漏交换均原子化增加。 | 质量平衡、BOM/ERP、废物记录 |
| `dq_functional_conformity` | released product | 保存试验/校准程序、准则、结果和合格状态；出租汽车计价器保存距离/时间和计费功能证据。 | 试验/校准/放行记录；适用时 `oiml-r21-2007-taximeters`、`samr-compulsory-verification-catalogue-2020` |
| `dq_background_compatibility` | purchased input datasets | 核查技术、地域、时间和状态并披露代理/缺口。 | 数据集元数据；`eu-pef-method-2021` |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | 确认恰为 1 kg 未包装合格产品，且参考 UUID、属性、单位组和所有限定信息相符。 | `un-cpc-3-0-structure-2025` |
| `validation_process_coverage` | foreground boundary | 确认场内成形/线路板作业、装配、编程、试验/校准、返工/废品及包装均已覆盖。 | `eu-pef-method-2021` |
| `validation_atomic_inventory` | all exchanges | 确认每行仅为一个具体交换且 UUID、属性、单位、状态和路线条件相容；拒绝集合项及处理服务替代。 | |
| `validation_mass_and_energy` | quantities | 复算分母、件数换算、电力换算、分配和质量差额。 | `eu-pef-method-2021` |
| `validation_conditional_rows` | architecture/route | 确认不存在的通用行附证据标为 `not_applicable`，并已原子化增加所有实际交换。 | |
| `validation_conformity_evidence` | performance | 确认放行记录证明所声明性能及适用合格评定制度。 | `oiml-r21-2007-taximeters`; `samr-compulsory-verification-catalogue-2020` |
| `validation_boundary_and_allocation` | exclusions/upstream/shared burdens | 确认上游链接、后门阶段排除、废物去向、分配驱动量和数据缺口均已披露。 | `eu-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已声明计数器、指示器、距离/速度仪器、转速表、计步器、出租汽车计价器或频闪观测仪的前景制造数据集 |
| downstream_use | 可发布为 `secondary_dataset`，并用作消费该仪器之系统的 `background_dataset` |
| allowed_use | 功能、架构、性能、地域、技术、市场状态、期间、包装和上游数据集相容的 LCA |
| excluded_use | 无功能等效性的比较声明；排除的仪器/设备；未单独建模的使用/维护/报废主张；静默代理 |
| required_metadata | PCR id/版本；产品型号/类型；功能/性能；架构；传感/显示；动力来源；产品/包装质量；场址/地域；期间；场内/外包步骤；电力；组件/废物标识及去向；分配；来源/上游版本 |
| required_quality_disclosure | 校准/计量证据；BOM/质量平衡完整性；时间/场址覆盖；合格证据；分配；代理/缺口登记；不确定性/排除项；未解决范围证据状态 |
| update_trigger | 架构、BOM、场址、供应商/上游数据集、路线、试验程序、电力组合、分配、包装、废物去向、合格要求或报告期发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0 版结构，代码 48264，2025。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-07） | 分类标识和类别边界 |
| `eu-pef-method-2021` | 官方指南（`official_guidance`） | 欧盟委员会，Commission Recommendation (EU) 2021/2279，Environmental Footprint methods。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230（检索日期 2026-09-07） | 制造边界、上游投入、废物、分配、采集、质量和校验 |
| `oiml-r21-2007-taximeters` | 标准（`standard`） | 国际法制计量组织，OIML R 21:2007，Taximeters。https://www.oiml.org/en/files/pdf_r/r021-e07.pdf/@@download/file/R021-e07.pdf（检索日期 2026-09-07） | 出租汽车计价器功能、距离/时间信号、校准和试验 |
| `samr-compulsory-verification-catalogue-2020` | 官方指南（`official_guidance`） | 国家市场监督管理总局，2020 年第 42 号公告《实施强制管理的计量器具目录》。https://www.samr.gov.cn/cms_files/filemanager/samr/www/samrnew/samrgkml/nsjg/jls/202010/W020201027321582061939.pdf（检索日期 2026-09-07） | 车辆测速仪和出租汽车计价器中文术语及检定/合格信息披露 |
