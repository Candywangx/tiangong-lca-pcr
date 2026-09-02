---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.photovoltaic-ac-dc-generators
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 光伏交流/直流发电机

## 1. 范围与适用性

本 PCR 指导为作为一个产品销售、在工厂大门处交付的成品光伏发电机建立前景数据包。产品以太阳辐射产生直流电，或通过销售产品内集成的电子装置输出交流电。覆盖对象可以是有框或无框光伏组件、由一个或多个组件组成的发电机，或组件集成设备，但必须申报准确架构与所含部件。

本类别保持技术中立。晶体硅、薄膜及其他商业化光伏转换技术均可使用，但不得在没有书面混合模型的情况下把单一技术数据集表示为类别平均。直流产品包括光伏转换总成及达到所申报直流输出所需的集成连接硬件；交流产品还包括与同一发电机一同销售的逆变或其他电力转换电子装置。单独销售的光伏电池片、硅片、逆变器、储能电池、支架、电缆及其他系统平衡部件均不是参考产品。已安装光伏电站、施工服务、发电过程、电力流、使用阶段服务和寿命终止处理不在本工厂门边界内。

前景边界始于申报的光伏电池片、组件或层压件、承载和连接材料、电气电子部件、过程助剂、公用工程和包装在报告工厂被接收之时，终于一件合格、经测试并包装的光伏发电机在工厂门处放行。采购投入必须有上游数据集。若生产者从半导体原料而非采购电池片或组件开始生产，则必须将晶锭、硅片、电池片或薄膜沉积作为独立前景单元过程，并披露扩展路线。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.photovoltaic-ac-dc-generators |
| classification_refs | CPC 3.0：46113，光伏交流/直流发电机（准确语义参考；共享映射中的接受决定不属于本 PCR 记录） |
| covered_products | 工厂门成品光伏直流发电机，以及逆变器或电力转换电子装置集成在同一销售产品中的成品光伏交流发电机；准确申报架构时覆盖有框组件、层压件与组件集成设备 |
| excluded_products | 单独的电池片和硅片；单独销售的逆变器、优化器、储能电池、支架、电缆和其他系统平衡部件；使用非光伏原动机的发电机组；已安装光伏电站；施工、运行、发电和寿命终止服务 |
| representative_product | 一件经测试并包装的光伏发电机，申报光伏技术、额定直流功率、输出形式与所含部件清单 |
| production_route | 光伏转换部件的路线特定接收或制造、发电机装配、交流电力电子装置的条件性集成、电气鉴定、包装与工厂门放行 |
| market_state | 制造工厂大门处、分销与安装之前的耐用电气成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在工厂大门处交付一件作为一个产品销售的成品合格光伏发电机 |
| How much | 1 件发电机；以 Wp 或 kWp 表示的额定直流功率是必填并行限定信息和强度分母，不替代天工参考属性 |
| How well | 产品满足申报的铭牌性能、输出配置以及适用的设计鉴定与安全符合性要求；保留所含部件清单和测试证据 |
| How long or cycle | 一件耐用产品的一次制造和放行周期；下游使用需披露寿命与衰减假设，但本数据包不包含发电服务 |
| reference_flow_link | 一件放行产品等于申报参考量；全部前景清单按一件产品归一，并在需要容量比较时按申报 kWp 同时报告 |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | PV system `3f66ec10-aedd-4032-baff-5f7764c1670e` |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | 光伏转换技术；产品架构及组件数量或有效面积；申报额定条件下的额定直流功率；仅直流或交流输出配置；标称电压和电流；集成逆变器、优化器、变压器、储能及其他系统平衡部件的包含或排除；产品总质量；工厂地域与生产期；适用鉴定和安全规范；供下游建模使用的申报寿命与衰减假设 |

建立前景数据包时，必须在数据集元数据、过程注释、参考流注释、产品说明或等效字段中申报上述 `Required qualifiers`。缺少任一必要限定信息会使该数据包的参考流定义不完整。

## 4. 测量与单位规则

| rule_id | 适用对象 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_item` | 放行参考产品 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 前景数据包严格归一到一件放行发电机；仅计入通过放行准则的完整产品。 |
| `rated_power_disclosure` | 参考产品及容量归一强度 | 申报额定直流功率 | Wp 或 kWp | 保留实测或铭牌额定直流功率及额定条件；Wp 除以 1,000 转为 kWp，不得由组件数、面积或其他技术推断。 |
| `item_capacity_bridge` | 不同尺寸产品的比较 | 件数及申报额定直流功率 | Item(s) 和 kWp | 比较不同容量产品时同时报告每件和每 kWp 结果；换算因子来自所代表配置的测试值或铭牌值。 |
| `mass_composition` | 产品及来料质量平衡 | 质量 | kg | 测量产品总质量及按部件组申报的物料清单质量，并与产品质量及制造损耗核对。 |
| `energy_units` | 外购电力与测试能耗 | 能量 | kWh | 保留仪表单位，只用明确的量纲换算因子转换；供应合同、地域或生产期有重大差异时分别报告。 |
| `water_balance` | 过程用水 | 体积 | m3 | 一致记录取水与排放或消耗，申报回用水，禁止把同一回用体积重复计作新水取用。 |

## 5. 系统边界

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告工厂大门处接收的光伏转换部件或其申报上游原料、承载和连接材料、适用时的集成电子装置、过程助剂、公用工程和包装 |
| starting_condition_role | 前景制造投入条件；每个部件组均申报准确的自制或外购边界 |
| product_classification_scope | 语义对应 CPC 3.0 46113 的光伏交流/直流发电机成品，而非电力、安装服务或单独交易部件 |
| recursive_input_rule | 已符合本产品类别定义的采购投入只作为同类别产品投入记录一次并链接上游数据集；除非明确细分且防止重复计算，不得在消费过程中重新展开其内部生产 |
| upstream_dataset_requirement | 每项采购的电池片、组件、层压件、逆变器、电子总成、框架、玻璃、封装材料、电缆、接线部件、助剂、公用工程和包装均需具有地域、时间和技术代表性的上游数据集或已披露代理 |
| disclosure | 申报技术、架构、交流/直流配置、额定功率、所含部件、自制或外购边界、工厂地域、生产期、分配选择、再生含量建模、排除阶段及全部代理数据集 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景数据包 | 包括接收、发电机装配、条件性集成电力电子装置、电气鉴定、内部搬运、现场公用工程、直接排放、现场废物处理、包装与工厂门放行；排除出门后的分销、安装、运行、发电与寿命终止。 | `jrc-2025-pv-carbon-footprint`; `iea-pvps-t12-18-2020` |
| `boundary_route_expansion` | 上游光伏转换路线 | 报告组织若制造晶锭、硅片、电池片或薄膜层，将其建模为独立前景过程；否则用上游产品数据集表示。 | `jrc-2025-pv-carbon-footprint` |
| `boundary_ac_configuration` | 交流输出产品 | 仅包括集成于发电机并与其一同销售的逆变或转换电子装置；单独交易的逆变器仍是独立产品投入，不会单独使参考产品成为交流发电机。 | `iec-62109-2-2011`; `iec-62109-3-2020` |
| `boundary_no_power_station_substitution` | 参考产品 | 不得以已安装电站、施工服务、光伏发电过程或电力流替代工厂门发电机产品。 | `unsd-cpc-v3-photovoltaic-generators`; `iea-pvps-t12-18-2020` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入 | 纳入条件 | 作用 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_receipt` | 部件接收、检验与配套 | required | 始终 | 建立自制或外购边界与接收部件清单 | 一件放行产品的已接收配套部件 |
| `generator_assembly` | 光伏发电机装配 | required | 始终；报告组织自行制造电池片或组件时细分 | 结合光伏转换、承载、连接和外壳部件 | 鉴定前的一件已装配发电机 |
| `ac_electronics_integration` | 集成交流电力转换总成 | conditional | 销售产品输出交流电或含组件集成电子装置时 | 将逆变、控制、保护等电子装置集成到产品 | 一件具备交流能力的发电机总成 |
| `electrical_qualification` | 电气鉴定和安全测试 | required | 始终；使用产品专用测试计划 | 验证输出、结构和放行准则 | 一件经测试合格的发电机 |
| `packing_release` | 包装和工厂门放行 | required | 始终 | 包装、标识并放行参考产品 | 1 件放行光伏发电机 |

### 清单流要求

下表与英文规范使用相同的稳定流标识。所有物料、废物及直接排放必须选择与实际技术、材料和环境介质相符的天工流；未核实的 UUID 保持空缺，不得用分类命中替代语义核验。

| process_id | direction / flow type | flow_id | 记录规则 | protocol_id | 范围状态 |
| --- | --- | --- | --- | --- | --- |
| `component_receipt` | input / product | `conversion_components_received` | 按技术和供应商数据集记录准确自制或外购边界处的电池片、组件、层压件或半导体原料 | `cp_component_bom` | 实测 |
| `component_receipt` | input / product | `carrier_connection_components` | 分组记录玻璃、框架、封装材料、背板、接线盒、导体、连接器和外壳 | `cp_component_bom` | 实测计算 |
| `component_receipt` | input / product | `integrated_electronics_received` | 仅记录集成并随参考产品销售的逆变、优化、控制、保护、变压器等装置 | `cp_component_bom` | 实测 |
| `component_receipt` | output / waste | `incoming_rejects` | 按处理路线记录拒收部件与来料包装，退回供应商财产与废物分开披露 | `cp_waste_records` | 实测 |
| `component_receipt` | output / product | `accepted_component_kit` | 按一套装配投入记录已接收配套部件 | `cp_component_bom` | 计算 |
| `generator_assembly` | input / product | `assembly_component_kit` | 记录转入装配的配套部件及装配新增物料 | `cp_component_bom` | 实测 |
| `generator_assembly` | input / product | `assembly_electricity` | 计入装配线、环境控制、通风及因果分配的共用设施电力 | `cp_energy_records` | `reasoned_estimate` QA：0.01–10000 kWh/kWp |
| `generator_assembly` | input / product | `assembly_water_aids` | 分别记录新水及清洗、层压、密封、连接等路线特定助剂 | `cp_water_aid_records` | `reasoned_estimate` QA：0–1000 m3/kWp（用水） |
| `generator_assembly` | input / elementary | `direct_water_withdrawal` | 若水直接从环境取用，以介质特定基本流记录且避免与采购水重复 | `cp_water_aid_records` | 实测 |
| `generator_assembly` | output / product | `assembled_generator` | 一件待最终鉴定的已装配直流光伏发电机 | `cp_output_release` | 实测 |
| `generator_assembly` | output / waste | `assembly_scrap` | 按材料和处理路线记录边角料、破损、层压与装配不合格品 | `cp_waste_records` | `reasoned_estimate` QA：0–1000 kg/kWp |
| `generator_assembly` | output / elementary | `assembly_direct_emissions` | 仅记录经测量且越过环境边界的空气、水体和土壤排放 | `cp_direct_emissions` | 实测或可追溯计算 |
| `ac_electronics_integration` | input / product | `dc_generator_for_ac_integration` | 转入一件已装配直流发电机 | `cp_output_release` | 实测 |
| `ac_electronics_integration` | input / product | `ac_power_electronics` | 按配置记录实际集成的逆变、控制、保护和相关电子部件 | `cp_ac_integration_records` | 实测 |
| `ac_electronics_integration` | input / product | `ac_integration_electricity` | 记录装配和配置集成电力 | `cp_energy_records` | 实测 |
| `ac_electronics_integration` | output / product | `ac_generator_assembly` | 一件待鉴定的交流能力光伏发电机总成 | `cp_output_release` | 实测 |
| `ac_electronics_integration` | output / waste | `electronics_rejects` | 按材料和处理路线记录电子不合格品 | `cp_waste_records` | 实测 |
| `electrical_qualification` | input / product | `generator_test_input` | 记录送交产品专用鉴定计划的发电机 | `cp_output_release` | 实测 |
| `electrical_qualification` | input / product | `test_electricity` | 记录电气性能及安全测试用电并单独识别可回收测试输出 | `cp_energy_records` | 实测 |
| `electrical_qualification` | output / product | `tested_generator` | 仅输出满足申报放行准则的发电机 | `cp_test_records` | 实测 |
| `electrical_qualification` | output / waste | `test_rejects` | 记录不可修复测试不合格品；返工品只在最终放行后计一次 | `cp_waste_records` | 实测 |
| `packing_release` | input / product | `tested_generator_for_packing` | 转入一件合格发电机 | `cp_output_release` | 实测 |
| `packing_release` | input / product | `outbound_packaging` | 按材料记录一次性包装，并按核实周转次数分摊可复用包装 | `cp_packaging_records` | `reasoned_estimate` QA：0–1000 kg/kWp |
| `packing_release` | output / product | `released_photovoltaic_generator` | 定量参考输出：1 Item(s) 的 PV system `3f66ec10-aedd-4032-baff-5f7764c1670e`，属性 Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | `cp_output_release` | 固定值 1 |
| `packing_release` | output / waste | `packing_scrap` | 按材料和处理路线记录包装边角料、破损和标签废物 | `cp_waste_records` | 实测 |

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 全部前景过程 | 在可行时通过细分、独立计量和独立物料记录避免分配；前景过程之间转移的同类别中间产品承接负荷，但不产生第二个最终产品。 | `iea-pvps-t12-18-2020` |
| `allocation_shared_facility` | 共用电力、水、环境控制和废物处理 | 使用机器小时、计量能耗、受控面积时间或处理质量等书面因果驱动分配；仅在没有因果驱动时使用产量或收入，并披露敏感性。 | `iea-pvps-t12-18-2020` |
| `allocation_recycling` | 再生投入与可回收制造废物 | 默认采用再生含量截断法；避免负荷或系统扩展结果须单独报告，不得暗中与工厂门负荷相抵。 | `iea-pvps-t12-18-2020`; `jrc-2025-pv-carbon-footprint` |
| `allocation_bipv` | 建筑集成光伏产品 | 当一个 BIPV 销售产品同时替代建筑构件时，申报多功能性，只按清晰说明的物理或功能标准分配，禁止未披露抵扣。 | `iea-pvps-t12-18-2020` |

## 8. 前景数据收集、计算与质量规则

### 数据收集协议

| protocol_id | process_id | 记录与方法 | 单位与频率 | 质量证据 |
| --- | --- | --- | --- | --- |
| `cp_component_bom` | `component_receipt`; `generator_assembly` | 工程 BOM 与收货、领退料、替代和盘点核对；净领用量为领用减未用退回 | kg、Item(s)；逐批并按月汇总 | 批准 BOM、供应商追溯、校准/称量、替代批准、库存核对 |
| `cp_energy_records` | `generator_assembly`; `ac_electronics_integration`; `electrical_qualification`; `packing_release` | 仪表/分表与账单核对，仅分配残余共用量 | kWh；每月或更细 | 仪表校准、账单核对、分配驱动、缺失区间日志 |
| `cp_water_aid_records` | `generator_assembly` | 按批次核对取排水、回用和助剂领退料 | m3、kg；逐批或每月 | 仪表状态、批记录、采购核对、排放记录 |
| `cp_ac_integration_records` | `ac_electronics_integration` | 按序列号核对逆变/控制/保护配置、固件、数量与交直流额定值 | Item(s)、kg；逐件 | 批准配置、序列号追溯、工单、不符合记录 |
| `cp_test_records` | `electrical_qualification` | 测试结果关联序列号、程序、额定条件和放行状态 | Item(s)、Wp、V、A；逐件或合理抽样 | 校准证书、程序版本、原始结果、抽样依据、放行签字 |
| `cp_packaging_records` | `packing_release` | 包装 BOM 与领料、发运和可复用包装周转记录核对 | kg、周转次数；逐批并按月汇总 | 包装规范、称量、周转日志、发运记录 |
| `cp_waste_records` | 全部前景过程 | 废物联单、称量和内部废料记录核对，按处理路线分开 | kg 或 Item(s)；逐次发运并按月汇总 | 称量校准、废物联单、承包方收据、库存核对 |
| `cp_direct_emissions` | `generator_assembly`; `ac_electronics_integration`; `electrical_qualification` | 优先实测；计算须有可追溯活动量和因子，且不得重复计算捕集物 | kg；监测区间或批次 | 实验室资质、仪器校准、采样计划、许可报告、计算表 |
| `cp_output_release` | 全部前景过程 | 核对过程转移、成品放行和期初期末库存 | Item(s)、kg、kWp；逐批或逐件 | ERP 核对、放行记录、测试链接、盘点 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_item_normalization` | 全部清单行 | 归一量 = 同一产品配置生产期过程量 / 合格放行件数 | 生产期数量、放行件数、库存变化 | 每件数量 |  |
| `calc_capacity_intensity` | 容量归一披露 | 容量强度 = 每件数量 / 该配置实测或铭牌额定直流功率（kWp） | 每件数量、Wp 或 kWp | 每 kWp 数量 | `iea-pvps-t12-18-2020` |
| `calc_net_material_use` | 部件、助剂和包装 | 净物料用量 = 领用 - 未用退回 + 期初在制 - 期末在制 | 领退料与库存 | 净消耗质量或件数 | `jrc-2025-pv-carbon-footprint` |
| `calc_shared_utility` | 共用能源和水 | 分配量 = 共用实测量 × 因果驱动份额；直接计量量不再分配 | 共用仪表、过程驱动、总驱动 | 分配的过程公用量 | `iea-pvps-t12-18-2020` |
| `calc_waste_balance` | 制造废物 | 产生废物 = 发运废物 + 期末贮存 - 期初贮存 - 已记录退回可用物料 | 发运、贮存、退回记录 | 按材料和路线的废物 |  |
| `calc_mass_reconciliation` | 产品和制造损耗 | 接收物料质量 = 放行产品质量 + 发运废物 + 物料和在制品期末减期初库存 + 实测直接质量排放 | BOM、称量、废物、库存、排放 | 核对差异和完整率 | `jrc-2025-pv-carbon-footprint` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 名称、技术、架构、额定功率、交流/直流配置和所含部件必须唯一识别一个销售配置。 | 批准规范、BOM、铭牌、序列号/批次 |
| `dq_temporal` | 前景活动数据 | 使用代表性生产期，通常至少连续 12 个月；披露起止日期、停机、爬坡及替代。 | 有日期的仪表、账单、生产和库存记录 |
| `dq_geography` | 前景和上游数据 | 识别各制造地点及电力/供水地域，说明代理地域理由。 | 场地记录、供应合同、代理说明 |
| `dq_technology` | 路线特定数据 | 无权重和独立路线证据时，不得平均晶体硅、薄膜、新兴、仅直流和交流集成路线。 | 路线图、产量、加权计算 |
| `dq_completeness` | BOM、公用工程、废物和排放 | 核对物料、能源、产出、废物和直接排放，解释未闭合平衡与遗漏流。 | 核对表、完整率 |
| `dq_secondary_data` | 采购投入 | 选择当前且地域和技术代表性适当的上游数据；在 PCR UUID 字段之外记录建模时采用的数据集身份、版本和代理限制。 | 数据选择日志、代表性评估 |
| `dq_testing` | 产品放行 | 将性能和安全证据关联到所代表配置，保留校准与抽样证据。 | 测试报告、校准证书、放行记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | 数据集身份 | canonical PCR id、产品流 UUID、Product flow 类型、CPC 46113 范围或必需产品限定信息缺失或矛盾时失败。 | `unsd-cpc-v3-photovoltaic-generators` |
| `validation_reference_amount` | 定量参考 | 要求恰好 1 Item(s) 的 `3f66ec10-aedd-4032-baff-5f7764c1670e`，属性为 Number of items `01846770-4cfe-4a25-8ad9-919d8d378345`；必须申报额定直流功率以支持每 kWp 披露。 |  |
| `validation_boundary` | 前景边界 | 若用电力流、已安装电站、施工服务、单独销售的逆变器或电池作参考产品，或暗中混入分销、安装、使用、寿命终止负荷，则失败。 | `unsd-cpc-v3-photovoltaic-generators`; `jrc-2025-pv-carbon-footprint` |
| `validation_route` | 产品技术和配置 | 要求分别披露并建模技术、架构、交流/直流输出及集成电子装置；拒绝把无标签的单一技术数据集表示为类别平均。 | `jrc-2025-pv-carbon-footprint`; `iea-pvps-t12-18-2020` |
| `validation_bom_mass` | 部件和产出 | 要求 BOM 至产品与损耗质量核对；超过生产者所记录测量不确定度的差异必须调查。 | `jrc-2025-pv-carbon-footprint` |
| `validation_energy_water` | 公用工程 | 要求生产期一致的仪表或账单核对、共用公用工程的因果分配，并禁止重复计算回用水。 | `iea-pvps-t12-18-2020` |
| `validation_test_release` | 性能和安全 | 要求所代表产品配置具有可追溯测试/放行证据；交流集成产品必须识别适用的逆变器或组件集成电子装置测试依据。 | `iec-61215-1-2021`; `iec-61730-1-2023`; `iec-62109-2-2011`; `iec-62109-3-2020` |
| `validation_recursive_input` | 同类别投入 | 采购光伏发电机投入须有独立上游数据集，并防止在消费前景过程中再次展开并重复计算。 |  |
| `validation_estimate_status` | 暂定范围 | 所有 `reasoned_estimate` 范围仅作为候选阶段筛查；若发布关键允许范围依赖其且没有明确评审接受，则发布就绪检查失败。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 工厂门前景产品数据包；方法学和翻译评审后可作为 `secondary_dataset` 或 `background_dataset` 发布 |
| downstream_use | 建立光伏发电机制造前景过程；在配置和额定功率基准相同时进行容量归一产品比较；作为独立产品阶段数据投入更广泛的光伏系统、安装、发电及生命周期模型 |
| allowed_use | 仅用于申报的技术、架构、工厂地域、生产期、交流/直流配置和部件边界；只有在权重透明且具有路线特定源数据时才能建立加权市场组合 |
| excluded_use | 不得用作光伏电力、已安装电站、仅逆变器或仅电池数据集、未申报通用技术平均，或使用/寿命终止数据集 |
| required_metadata | canonical PCR id；产品流 UUID；产品规范；技术；架构；组件数或有效面积；额定直流功率及额定条件；交流/直流输出；集成部件清单；总质量；自制或外购边界；工厂地域；生产期；分配；上游数据集身份；测试依据 |
| required_quality_disclosure | 前景覆盖和生产期；计量与分配方法；BOM 和质量核对；缺失数据；代理；技术混合；reasoned estimates；数据质量评估；直接排放方法；测试抽样和校准 |
| update_trigger | 光伏技术、产品架构、额定功率基准、集成电子装置、主要 BOM、工厂或能源供应变化；成品率、废物或排放重大变化；测试规范修订；出现新的代表性来源证据；或超过申报代表期 |

## 11. 数据来源

| Source id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-v3-photovoltaic-generators` | official_guidance | 联合国统计司，*Overview of the proposed main changes introduced in the revised CPC*，CPC 3.0 随附说明，第 11 页，https://unstats.un.org/unsd/classifications/CPC/Documents/4-Accompanying-note-Overview-of-the-proposed-main-changes-introduced-in-the-revised-CPC.pdf（检索于 2026-08-09） | CPC 46113 身份及其与非光伏发电机和发电机组的区分 |
| `jrc-2025-pv-carbon-footprint` | official_guidance | 欧盟委员会联合研究中心，Ardente 等，*Harmonised rules for the calculation of the carbon footprint of photovoltaic modules in the context of the EU Ecodesign Directive*，JRC141275，2025，DOI 10.2760/4062978，https://publications.jrc.ec.europa.eu/repository/handle/JRC141275（检索于 2026-08-09） | 光伏技术范围、BOM、物料和能源热点、组件制造边界、装配、包装和次级数据质量 |
| `iea-pvps-t12-18-2020` | official_guidance | IEA PVPS Task 12，Frischknecht 等，*Methodology Guidelines on Life Cycle Assessment of Photovoltaic Electricity*，第 4 版，T12-18:2020，https://iea-pvps.org/key-topics/methodology-guidelines-on-life-cycle-assessment-of-photovoltaic-2020/（检索于 2026-08-09） | 光伏系统部件、工厂清单、kWp 披露、水平衡、分配、回收和报告参数 |
| `iec-61215-1-2021` | standard | IEC 61215-1:2021，*Terrestrial photovoltaic (PV) modules - Design qualification and type approval - Part 1: Test requirements*，https://webstore.iec.ch/en/publication/61345（检索于 2026-08-09） | 组件设计鉴定、输出测量及产品测试证据 |
| `iec-61730-1-2023` | standard | IEC 61730-1:2023，*Photovoltaic (PV) module safety qualification - Part 1: Requirements for construction*，https://webstore.iec.ch/en/publication/59803（检索于 2026-08-09） | 光伏组件结构和安全放行证据 |
| `iec-62109-2-2011` | standard | IEC 62109-2:2011，*Safety of power converters for use in photovoltaic power systems - Part 2: Particular requirements for inverters*，https://webstore.iec.ch/en/publication/6471（检索于 2026-08-09） | 交流输出产品内集成直流至交流逆变功能的边界和安全依据 |
| `iec-62109-3-2020` | standard | IEC 62109-3:2020，*Safety of power converters for use in photovoltaic power systems - Part 3: Particular requirements for electronic devices in combination with photovoltaic elements*，https://webstore.iec.ch/en/publication/27684（检索于 2026-08-09） | 作为一个产品销售的光伏元件与组件集成电子装置的产品边界和测试依据 |
