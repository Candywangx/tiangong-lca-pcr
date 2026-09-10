---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electric-accumulators
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 蓄电池

## 1. 范围与适用性

本 PCR 适用于 CPC 46420 蓄电池成品电芯、电池、模组与电池包的工厂门前景数据包。铅酸、镍镉、镍氢、锂离子及其他可充电化学体系，只有在申报化学体系、产品层级、用途、工厂与制造路线后方可适用。原电池、单独销售的零件、废电池、充电器、逆变器及完整储能系统不在范围内。

前景边界始于工厂接收的材料、电极或极板、电解液、隔膜、外壳、电子器件、成品电芯和公用工程，止于合格蓄电池在工厂门放行。分销、使用、第二寿命和报废处理属于下游。每项外购投入必须连接上游数据集或明确的数据缺口。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electric-accumulators |
| classification_refs | CPC 3.0：46420 蓄电池 |
| covered_products | 可充电电芯、电池、模组和电池包成品 |
| excluded_products | 原电池；单独销售零件；废电池；充电器；功率转换设备；完整储能装置 |
| representative_product | 合格 3C 锂电池；仅代表已核实的该路线 |
| production_route | 路线特定的电极或极板制备；电芯装配；化成与测试；可选模组或电池包装配；分载能体公用工程 |
| market_state | 在工厂门放行的新合格蓄电池 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 工厂门合格可充电蓄电池成品的生产 |
| How much | 1 kg 已放行成品 |
| How well | 符合申报的化学体系、电压、容量、能量、安全构型与放行测试规范 |
| How long or cycle | 一个生产批次；寿命性能作为独立限定信息 |
| reference_flow_link | 放行成品净质量归一化为 1 kg |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | 3C 锂电池 `000abc1e-59e3-4336-bfd6-66575a4b0bda` |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 化学体系；产品层级；用途；型号；电压；容量；适用时的额定能量；荷电状态；包含的部件与包装；路线；工厂；地域；期间 |

该 state100 流为 Product/Mass，且精确分类至 CPC 46420。它不是铅酸、镍系或其他蓄电池路线的身份；这些产品在核实精确 state100 流前保持 UUID 未解析。

## 4. 计量与单位规则

| rule_id | 适用对象 | 要求属性 | 要求单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 成品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用校准秤测量放行成品净质量，并保留包装口径。 |
| `material_mass` | 每项具名材料、部件、废物或排放物质 | 质量 | kg | 每项原子交换单独记录；件数转质量须使用型号特定的单件质量。 |
| `electricity_energy` | 每项电力行 | 能量 | kWh | 进口、返还、内部复用与外送电力分别保留台账。 |
| `thermal_carrier_energy` | 蒸汽、热水、天然气、柴油、LPG | 能量 | MJ | 各具名载能体分别计量与换算；禁止报告集合“热”。 |
| `water_stream` | 水与废水 | 质量或体积 | kg 或 m3 | 保留水流身份；按浓度与流量计算每项水排放物质。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_declaration` | 所有数据包 | 选行前申报化学体系、产品层级、起始条件、过程适用性及纳入的公用工程。 | `eu-batteries-regulation-2023`; `ec-battery-pefcr-2018` |
| `boundary_atomic_inventory` | 材料、能源、废物、废水、空气与水排放 | 每行只含一个具体交换；实际物质、材料、载能体、介质或废物不同时另增具名行。 | `ec-pef-method-2021`; `us-epa-battery-effluent-guidelines` |
| `boundary_purchased_inputs` | 外购材料、部件、电芯、公用工程与包装 | 每项投入可见并连接上游数据集；不得递归复制外购蓄电池制造。 | `ec-pef-method-2021` |
| `boundary_terminal_gate` | 参考产品 | 边界止于工厂门放行；使用与报废处理置于下游。 | `eu-batteries-regulation-2023` |
| `boundary_no_route_extrapolation` | 路线证据 | 不得将锂离子、铅酸、镍镉或镍氢路线的身份或数量推广至其他路线。 | `ec-battery-pefcr-2018`; `argonne-battery-lca-2010` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 申报工厂接收的是活性材料、已制备电极或极板、可充电成品电芯、成品模组或其他具名中间产品，并说明化学体系、物理状态及所含部件。 |
| starting_condition_role | 起始条件决定哪些电极、极板、电芯、化成、模组、电池包、公用工程与处理作业属于前景，以及哪些外购投入需要上游数据集。 |
| product_classification_scope | CPC 3.0 代码 46420，仅限蓄电池成品；原电池、单独销售零件、废电池、充电器、功率转换设备与完整储能装置仍在范围外。 |
| recursive_input_rule | 将外购成品电芯、模组或其他蓄电池保留为一个可见产品投入并连接其上游数据集；不得在接收过程中递归复现其制造清单。 |
| upstream_dataset_requirement | 每项外购原子材料、部件、电芯、公用工程载能体、制冷剂和随产品交付的包装均须连接地域、技术与时间代表性适当的上游数据集，否则记录具体未解决数据缺口。 |
| disclosure | 披露化学体系、产品层级、起始条件、适用与省略过程、截断、内部返回、废物与排放处理、随附包装，以及每项代理或未解决上游链接。 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `electrode_plate_preparation` | 电极与极板制备 | conditional | 仅当电极或极板在现场制造或精整时纳入。 | 化学体系特定的电极或极板制造 | 合格已制备电极或极板的 kg |
| `cell_assembly_sealing` | 电芯装配、注液与封装 | conditional | 当现场制造可充电电芯时纳入。 | 化学体系特定的电芯制造 | 已封装未化成电芯的 kg |
| `formation_ageing_testing` | 化成、老化与出厂测试 | required | 适用于现场化成及每项最终放行测试。 | 电化学激活与质量放行 | 合格已测试蓄电池的 kg |
| `module_pack_assembly` | 模组与电池包装配 | conditional | 当现场装配电芯、模组、控制器、连接件、外壳、冷却件或随产品交付的包装时纳入。 | 最终蓄电池装配 | 合格蓄电池成品的 kg |
| `site_utilities_treatment` | 厂区公用工程与污染控制 | conditional | 仅当各载能体或处理系统服务于申报产品且未在其他前景过程计量时纳入。 | 分载能体的公用工程供应与排放核算 | 所服务合格蓄电池成品的 kg |

### 过程： 电极与极板制备 (`electrode_plate_preparation`)

#### 输入

##### 产品流

###### 镍锰钴酸锂正极活性材料 (`nmc_cathode_active_input`)

仅适用于所述特定化学体系与配方路线。

- 选定流: 镍锰钴酸锂正极活性材料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 磷酸铁锂正极活性材料 (`lfp_cathode_active_input`)

仅适用于所述特定化学体系与配方路线。

- 选定流: 磷酸铁锂正极活性材料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 锰酸锂正极活性材料 (`lmo_cathode_active_input`)

仅适用于所述特定化学体系与配方路线。

- 选定流: 锰酸锂正极活性材料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 石墨负极活性材料 (`graphite_anode_active_input`)

仅适用于所述特定化学体系与配方路线。

- 选定流: 石墨负极活性材料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 蓄电池铅膏用氧化铅 (`lead_oxide_active_input`)

仅适用于铅酸极板路线。

- 选定流: 蓄电池铅膏用氧化铅
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 铅合金板栅 (`lead_alloy_grid_input`)

仅适用于铅酸极板路线。

- 选定流: 铅合金板栅
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 氢氧化镍正极材料 (`nickel_hydroxide_active_input`)

仅适用于所述特定化学体系与配方路线。

- 选定流: 氢氧化镍正极材料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 氢氧化镉负极材料 (`cadmium_hydroxide_active_input`)

仅适用于镍镉负极路线。

- 选定流: 氢氧化镉负极材料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 储氢合金负极材料 (`metal_hydride_alloy_input`)

仅适用于镍氢负极路线。

- 选定流: 储氢合金负极材料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 聚偏二氟乙烯粘结剂 (`pvdf_binder_input`)

仅适用于所述特定化学体系与配方路线。

- 选定流: 聚偏二氟乙烯粘结剂
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 丁苯橡胶粘结剂 (`sbr_binder_input`)

仅适用于所述特定化学体系与配方路线。

- 选定流: 丁苯橡胶粘结剂
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 导电炭黑 (`carbon_black_input`)

仅适用于所述特定化学体系与配方路线。

- 选定流: 导电炭黑
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### N-甲基-2-吡咯烷酮（NMP） (`nmp_solvent_input`)

仅适用于锂离子 PVDF 电极浆料路线；原生及外部再生 NMP 与内部循环量分开记录。

- 选定流: N-甲基-2-吡咯烷酮（NMP） `5c41bfdd-a740-4672-aa66-88df7ea25f81`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 去离子水 (`deionised_water_slurry_input`)

仅适用于水性浆料、清洗或和膏路线；不得与冷却水合并。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `ec-battery-pefcr-2018`

###### 铝箔集流体 (`aluminium_foil_collector_input`)

仅适用于所述特定电极路线。

- 选定流: 铝箔集流体
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `ec-battery-pefcr-2018`; `us-epa-nickel-battery-1996`

###### 铜箔集流体 (`copper_foil_collector_input`)

仅适用于所述特定电极路线。

- 选定流: 铜箔集流体
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `ec-battery-pefcr-2018`; `us-epa-nickel-battery-1996`

###### 镀镍钢电极基体 (`nickel_plated_steel_substrate_input`)

仅适用于所述特定电极路线。

- 选定流: 镀镍钢电极基体
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `ec-battery-pefcr-2018`; `us-epa-nickel-battery-1996`

###### 厂内交流电 (`electrode_electricity_input`)

可归属于电极或极板制备的厂内计量电力；适用于所有使用电气设备的现场路线。

- 选定流: 厂内交流电
- 流属性/单位: Energy / kWh
- 数量规则: 记录可归属于本过程的混合、涂布、干燥、固化、辊压、分切、通风及干燥间计量电力；不得与热载能体合并。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_utilities`
- 来源: `ec-battery-pefcr-2018`; `porzio-scown-2021`

#### 输出

##### 产品流

###### 已制备锂离子正极 (`lithium_cathode_electrode_output`)

仅适用于所述特定化学体系路线。

- 选定流: 已制备锂离子正极
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`; `argonne-lib-flows-2012`

###### 已制备锂离子负极 (`lithium_anode_electrode_output`)

仅适用于所述特定化学体系路线。

- 选定流: 已制备锂离子负极
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`; `argonne-lib-flows-2012`

###### 已制备铅酸正极板 (`lead_positive_plate_output`)

仅适用于所述特定化学体系路线。

- 选定流: 已制备铅酸正极板
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`; `argonne-lib-flows-2012`

###### 已制备铅酸负极板 (`lead_negative_plate_output`)

仅适用于所述特定化学体系路线。

- 选定流: 已制备铅酸负极板
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`; `argonne-lib-flows-2012`

###### 已制备氢氧化镍正极板 (`nickel_positive_plate_output`)

仅适用于所述特定化学体系路线。

- 选定流: 已制备氢氧化镍正极板
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`; `argonne-lib-flows-2012`

###### 已制备镉负极板 (`cadmium_negative_plate_output`)

仅适用于所述特定化学体系路线。

- 选定流: 已制备镉负极板
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`; `argonne-lib-flows-2012`

###### 已制备金属氢化物负极板 (`metal_hydride_negative_plate_output`)

仅适用于所述特定化学体系路线。

- 选定流: 已制备金属氢化物负极板
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_materials`
- 来源: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`; `argonne-lib-flows-2012`

##### 废物流

###### NMP 蒸馏残渣 (`nmp_distillation_residue_output`)

仅适用于所述特定化学体系路线。

- 选定流: NMP 蒸馏残渣
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_waste_releases`
- 来源: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 锂离子正极涂层废料 (`lithium_cathode_coating_scrap_output`)

仅适用于所述特定化学体系路线。

- 选定流: 锂离子正极涂层废料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_waste_releases`
- 来源: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 锂离子负极涂层废料 (`lithium_anode_coating_scrap_output`)

仅适用于所述特定化学体系路线。

- 选定流: 锂离子负极涂层废料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_waste_releases`
- 来源: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 含铅铅膏废料 (`lead_paste_scrap_output`)

仅适用于所述特定化学体系路线。

- 选定流: 含铅铅膏废料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_waste_releases`
- 来源: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 含镉极板废料 (`cadmium_plate_scrap_output`)

仅适用于所述特定化学体系路线。

- 选定流: 含镉极板废料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_waste_releases`
- 来源: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 含镍极板废料 (`nickel_plate_scrap_output`)

仅适用于所述特定化学体系路线。

- 选定流: 含镍极板废料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_waste_releases`
- 来源: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

##### 基本流

###### 排放至空气的 N-甲基-2-吡咯烷酮 (`nmp_to_air_output`)

仅适用于所述特定化学体系路线。

- 选定流: 排放至空气的 N-甲基-2-吡咯烷酮
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_waste_releases`
- 来源: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 排放至空气的铅 (`lead_to_air_output`)

仅适用于所述特定化学体系路线。

- 选定流: 排放至空气的铅
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_waste_releases`
- 来源: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 排放至空气的镍 (`nickel_to_air_output`)

仅适用于所述特定化学体系路线。

- 选定流: 排放至空气的镍
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_waste_releases`
- 来源: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 排放至空气的镉 (`cadmium_to_air_output`)

仅适用于所述特定化学体系路线。

- 选定流: 排放至空气的镉
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_electrode_waste_releases`
- 来源: `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

### 过程： 电芯装配、注液与封装 (`cell_assembly_sealing`)

#### 输入

##### 产品流

###### 已制备锂离子正极 (`lithium_cathode_electrode_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 已制备锂离子正极
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 已制备锂离子负极 (`lithium_anode_electrode_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 已制备锂离子负极
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 已制备铅酸正极板 (`lead_positive_plate_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 已制备铅酸正极板
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 已制备铅酸负极板 (`lead_negative_plate_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 已制备铅酸负极板
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 已制备氢氧化镍正极板 (`nickel_positive_plate_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 已制备氢氧化镍正极板
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 已制备镉负极板 (`cadmium_negative_plate_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 已制备镉负极板
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 已制备金属氢化物负极板 (`metal_hydride_negative_plate_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 已制备金属氢化物负极板
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 聚乙烯蓄电池隔膜 (`polyethylene_separator_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 聚乙烯蓄电池隔膜
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 聚丙烯蓄电池隔膜 (`polypropylene_separator_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 聚丙烯蓄电池隔膜
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 玻璃纤维毡蓄电池隔膜 (`glass_fibre_mat_separator_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 玻璃纤维毡蓄电池隔膜
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 碳酸乙烯酯电解液溶剂 (`ethylene_carbonate_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 碳酸乙烯酯电解液溶剂
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 碳酸二甲酯电解液溶剂 (`dimethyl_carbonate_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 碳酸二甲酯电解液溶剂
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 六氟磷酸锂电解质盐 (`lithium_hexafluorophosphate_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 六氟磷酸锂电解质盐
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 硫酸电解液 (`sulfuric_acid_electrolyte_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 硫酸电解液
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 氢氧化钾电解液 (`potassium_hydroxide_electrolyte_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 氢氧化钾电解液
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 钢制电芯壳体 (`steel_cell_can_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 钢制电芯壳体
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 铝塑复合软包膜 (`aluminium_pouch_laminate_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 铝塑复合软包膜
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 聚丙烯蓄电池壳体 (`polypropylene_battery_case_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 聚丙烯蓄电池壳体
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 铜蓄电池端子 (`copper_terminal_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 铜蓄电池端子
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 铅蓄电池端子 (`lead_terminal_input`)

仅适用于所述特定化学体系或产品构型。

- 选定流: 铅蓄电池端子
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 厂内交流电 (`cell_assembly_electricity_input`)

可归属于电芯装配、注液、封装、真空及干燥间设备的厂内计量电力。

- 选定流: 厂内交流电
- 流属性/单位: Energy / kWh
- 数量规则: 记录叠片或卷绕、注液、封装、真空、干燥间及直接归属通风的计量电力；不得与热载能体合并。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_utilities`
- 来源: `ec-battery-pefcr-2018`; `porzio-scown-2021`

#### 输出

##### 产品流

###### 未化成锂离子可充电电芯 (`unformed_lithium_ion_cell_output`)

仅适用于所述特定化学体系路线。

- 选定流: 未化成锂离子可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 未化成铅酸可充电电芯 (`unformed_lead_acid_cell_output`)

仅适用于所述特定化学体系路线。

- 选定流: 未化成铅酸可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 未化成镍镉可充电电芯 (`unformed_nickel_cadmium_cell_output`)

仅适用于所述特定化学体系路线。

- 选定流: 未化成镍镉可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

###### 未化成镍氢可充电电芯 (`unformed_nickel_metal_hydride_cell_output`)

仅适用于所述特定化学体系路线。

- 选定流: 未化成镍氢可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_materials`
- 来源: `ec-battery-pefcr-2018`; `us-epa-ap42-lead-acid-1995`; `us-epa-nickel-battery-1996`

##### 废物流

###### 碳酸乙烯酯电解液废料 (`ethylene_carbonate_waste_output`)

仅适用于锂离子碳酸酯电解液路线；通过直接分流或有文件支撑的废物组成平衡确定该组分。

- 选定流: 碳酸乙烯酯电解液废料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_waste_releases`
- 来源: `ec-battery-pefcr-2018`; `us-epa-battery-effluent-guidelines`

###### 碳酸二甲酯电解液废料 (`dimethyl_carbonate_waste_output`)

仅适用于锂离子碳酸酯电解液路线；通过直接分流或有文件支撑的废物组成平衡确定该组分。

- 选定流: 碳酸二甲酯电解液废料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_waste_releases`
- 来源: `ec-battery-pefcr-2018`; `us-epa-battery-effluent-guidelines`

###### 六氟磷酸锂电解质盐废料 (`lithium_hexafluorophosphate_waste_output`)

仅适用于使用 LiPF6 的锂离子电解液路线；通过直接分流或有文件支撑的废物组成平衡确定该组分。

- 选定流: 六氟磷酸锂电解质盐废料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_waste_releases`
- 来源: `ec-battery-pefcr-2018`; `us-epa-battery-effluent-guidelines`

###### 废硫酸电解液 (`sulfuric_acid_electrolyte_waste_output`)

仅适用于所述特定化学体系或材料路线。

- 选定流: 废硫酸电解液
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_waste_releases`
- 来源: `ec-battery-pefcr-2018`; `us-epa-battery-effluent-guidelines`

###### 废氢氧化钾电解液 (`potassium_hydroxide_electrolyte_waste_output`)

仅适用于所述特定化学体系或材料路线。

- 选定流: 废氢氧化钾电解液
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_waste_releases`
- 来源: `ec-battery-pefcr-2018`; `us-epa-battery-effluent-guidelines`

###### 聚乙烯隔膜废料 (`polyethylene_separator_scrap_output`)

仅适用于所述特定化学体系或材料路线。

- 选定流: 聚乙烯隔膜废料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_waste_releases`
- 来源: `ec-battery-pefcr-2018`; `us-epa-battery-effluent-guidelines`

###### 聚丙烯隔膜废料 (`polypropylene_separator_scrap_output`)

仅适用于所述特定化学体系或材料路线。

- 选定流: 聚丙烯隔膜废料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_waste_releases`
- 来源: `ec-battery-pefcr-2018`; `us-epa-battery-effluent-guidelines`

##### 基本流

###### 排放至空气的碳酸乙烯酯 (`ethylene_carbonate_to_air_output`)

仅适用于使用碳酸乙烯酯的锂离子路线；与其他每种电解液溶剂分开记录。

- 选定流: 排放至空气的碳酸乙烯酯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_waste_releases`
- 来源: `us-epa-ap42-lead-acid-1995`; `ec-battery-pefcr-2018`

###### 排放至空气的碳酸二甲酯 (`dimethyl_carbonate_to_air_output`)

仅适用于使用碳酸二甲酯的锂离子路线；与其他每种电解液溶剂分开记录。

- 选定流: 排放至空气的碳酸二甲酯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_waste_releases`
- 来源: `us-epa-ap42-lead-acid-1995`; `ec-battery-pefcr-2018`

###### 排放至空气的硫酸雾 (`sulfuric_acid_mist_cell_to_air_output`)

仅适用于所述特定化学体系路线；具体数据集须按单一物质继续细分。

- 选定流: 排放至空气的硫酸雾
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_cell_waste_releases`
- 来源: `us-epa-ap42-lead-acid-1995`; `ec-battery-pefcr-2018`

### 过程： 化成、老化与出厂测试 (`formation_ageing_testing`)

#### 输入

##### 产品流

###### 未化成锂离子可充电电芯 (`unformed_lithium_ion_cell_input`)

仅适用于所述特定化学体系路线。

- 选定流: 未化成锂离子可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `ec-battery-pefcr-2018`

###### 未化成铅酸可充电电芯 (`unformed_lead_acid_cell_input`)

仅适用于所述特定化学体系路线。

- 选定流: 未化成铅酸可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `ec-battery-pefcr-2018`

###### 未化成镍镉可充电电芯 (`unformed_nickel_cadmium_cell_input`)

仅适用于所述特定化学体系路线。

- 选定流: 未化成镍镉可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `ec-battery-pefcr-2018`

###### 未化成镍氢可充电电芯 (`unformed_nickel_metal_hydride_cell_input`)

仅适用于所述特定化学体系路线。

- 选定流: 未化成镍氢可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `ec-battery-pefcr-2018`

###### 厂内交流电 (`formation_electricity_input`)

可归属于化成、老化、循环与放行测试的进口厂内计量电力。

- 选定流: 厂内交流电
- 流属性/单位: Energy / kWh
- 数量规则: 记录化成、老化、循环与放行测试的进口计量电力；仅可扣除另行计量且内部复用的返还电力。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `ec-battery-pefcr-2018`; `porzio-scown-2021`

###### 去离子水 (`formation_cooling_water_input`)

跨越化成冷却边界的去离子补水；仅在实际采用该水质时适用。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 仅记录跨越过程边界的去离子冷却水补水；闭路循环量不得重复作为投入。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `ec-battery-pefcr-2018`

#### 输出

##### 产品流

###### 已测试锂离子可充电电芯 (`tested_lithium_ion_cell_output`)

仅适用于所述特定化学体系路线。

- 选定流: 已测试锂离子可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `ec-battery-pefcr-2018`

###### 已测试铅酸可充电电芯 (`tested_lead_acid_cell_output`)

仅适用于所述特定化学体系路线。

- 选定流: 已测试铅酸可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `ec-battery-pefcr-2018`

###### 已测试镍镉可充电电芯 (`tested_nickel_cadmium_cell_output`)

仅适用于所述特定化学体系路线。

- 选定流: 已测试镍镉可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `ec-battery-pefcr-2018`

###### 已测试镍氢可充电电芯 (`tested_nickel_metal_hydride_cell_output`)

仅适用于所述特定化学体系路线。

- 选定流: 已测试镍氢可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `ec-battery-pefcr-2018`

###### 化成测试外送电力 (`formation_exported_electricity_output`)

单独计量、离开化成测试并跨越申报前景边界的电力。

- 选定流: 化成测试外送电力
- 流属性/单位: Energy / kWh
- 数量规则: 仅记录单独计量且跨越前景边界的电力；不得同时从进口电力中扣减。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `ec-pef-method-2021`

##### 废物流

###### 报废锂离子可充电电芯 (`rejected_lithium_ion_cell_output`)

仅适用于所述特定路线；废水流不得替代逐物质水排放。

- 选定流: 报废锂离子可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `us-epa-ap42-lead-acid-1995`; `us-epa-battery-effluent-guidelines`

###### 报废铅酸可充电电芯 (`rejected_lead_acid_cell_output`)

仅适用于所述特定路线；废水流不得替代逐物质水排放。

- 选定流: 报废铅酸可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `us-epa-ap42-lead-acid-1995`; `us-epa-battery-effluent-guidelines`

###### 报废镍镉可充电电芯 (`rejected_nickel_cadmium_cell_output`)

仅适用于所述特定路线；废水流不得替代逐物质水排放。

- 选定流: 报废镍镉可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `us-epa-ap42-lead-acid-1995`; `us-epa-battery-effluent-guidelines`

###### 报废镍氢可充电电芯 (`rejected_nickel_metal_hydride_cell_output`)

仅适用于所述特定路线；废水流不得替代逐物质水排放。

- 选定流: 报废镍氢可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `us-epa-ap42-lead-acid-1995`; `us-epa-battery-effluent-guidelines`

###### 化成过程废水 (`formation_wastewater_output`)

仅适用于所述特定路线；废水流不得替代逐物质水排放。

- 选定流: 化成过程废水
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `us-epa-ap42-lead-acid-1995`; `us-epa-battery-effluent-guidelines`

##### 基本流

###### 排放至空气的氢气 (`formation_hydrogen_to_air_output`)

仅适用于铅酸化成路线。

- 选定流: 排放至空气的氢气
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `us-epa-ap42-lead-acid-1995`

###### 排放至空气的硫酸雾 (`sulfuric_acid_mist_formation_to_air_output`)

仅适用于铅酸化成路线。

- 选定流: 排放至空气的硫酸雾
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_formation_testing`
- 来源: `us-epa-ap42-lead-acid-1995`

### 过程： 模组与电池包装配 (`module_pack_assembly`)

#### 输入

##### 产品流

###### 已测试锂离子可充电电芯 (`tested_lithium_ion_cell_input`)

仅适用于所述特定产品构型或包装边界。

- 选定流: 已测试锂离子可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 已测试铅酸可充电电芯 (`tested_lead_acid_cell_input`)

仅适用于所述特定产品构型或包装边界。

- 选定流: 已测试铅酸可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 已测试镍镉可充电电芯 (`tested_nickel_cadmium_cell_input`)

仅适用于所述特定产品构型或包装边界。

- 选定流: 已测试镍镉可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 已测试镍氢可充电电芯 (`tested_nickel_metal_hydride_cell_input`)

仅适用于所述特定产品构型或包装边界。

- 选定流: 已测试镍氢可充电电芯
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 铝制电池包外壳 (`aluminium_pack_enclosure_input`)

仅适用于所述特定产品构型或包装边界。

- 选定流: 铝制电池包外壳
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 钢制电池包外壳 (`steel_pack_enclosure_input`)

仅适用于所述特定产品构型或包装边界。

- 选定流: 钢制电池包外壳
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 铜母排 (`copper_busbar_input`)

仅适用于所述特定产品构型或包装边界。

- 选定流: 铜母排
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 绝缘铜电缆 (`insulated_copper_cable_input`)

仅适用于所述特定产品构型或包装边界。

- 选定流: 绝缘铜电缆
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 电池管理系统印制电路板 (`battery_management_pcb_input`)

仅适用于所述特定产品构型或包装边界。

- 选定流: 电池管理系统印制电路板
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 电池包电连接器 (`electrical_connector_input`)

仅适用于所述特定产品构型或包装边界。

- 选定流: 电池包电连接器
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 乙二醇冷却液 (`ethylene_glycol_coolant_input`)

仅适用于所述特定产品构型或包装边界。

- 选定流: 乙二醇冷却液
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 去离子水 (`deionised_water_coolant_input`)

仅适用于所述特定产品构型或包装边界。

- 选定流: 去离子水 `5b3acbab-2518-4406-8736-d21f222d757a`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 瓦楞纸箱 (`corrugated_cardboard_carton_input`)

仅适用于所述特定产品构型或包装边界。

- 选定流: 瓦楞纸箱
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 木托盘 (`wood_pallet_input`)

仅适用于所述特定产品构型或包装边界。

- 选定流: 木托盘
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 聚乙烯包装膜 (`polyethylene_packaging_film_input`)

仅适用于所述特定产品构型或包装边界。

- 选定流: 聚乙烯包装膜
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`; `argonne-lib-flows-2012`

###### 厂内交流电 (`pack_assembly_electricity_input`)

可归属于模组或电池包连接、紧固、焊接、控制器安装及最终测试的厂内计量电力。

- 选定流: 厂内交流电
- 流属性/单位: Energy / kWh
- 数量规则: 记录连接、紧固、焊接、电子器件安装、泄漏测试及最终装配的计量电力；不得与热或燃料合并。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`

#### 输出

##### 产品流

###### 3C 锂电池 (`reference_product_output`)

已核实的 CPC 46420 Product/Mass 参考产出，仅适用于申报的 3C 锂电池路线。

- 选定流: 3C 锂电池 `000abc1e-59e3-4336-bfd6-66575a4b0bda`
- 流属性/单位: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: 对通过放行测试的 CPC 46420 代表性锂电池路线精确设为 1 kg；其他化学体系在核实精确的 Product/Mass、CPC 46420 state100 流前保持未解析。
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 产品特定 (`product_specific`)
- 归一化基准: 1 kg 合格蓄电池成品
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `unsd-cpc-3-0`

##### 废物流

###### 铝外壳废料 (`aluminium_enclosure_scrap_output`)

仅适用于所述特定材料或产品构型。

- 选定流: 铝外壳废料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`

###### 钢外壳废料 (`steel_enclosure_scrap_output`)

仅适用于所述特定材料或产品构型。

- 选定流: 钢外壳废料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`

###### 铜母排废料 (`copper_busbar_scrap_output`)

仅适用于所述特定材料或产品构型。

- 选定流: 铜母排废料
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`

###### 电池管理电子废物 (`battery_electronic_waste_output`)

仅适用于所述特定材料或产品构型。

- 选定流: 电池管理电子废物
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`

###### 瓦楞纸包装废物 (`cardboard_packaging_waste_output`)

仅适用于所述特定材料或产品构型。

- 选定流: 瓦楞纸包装废物
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`

###### 聚乙烯包装膜废物 (`polyethylene_packaging_waste_output`)

仅适用于所述特定材料或产品构型。

- 选定流: 聚乙烯包装膜废物
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 技术特定 (`technology_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_pack_assembly`
- 来源: `ec-battery-pefcr-2018`

### 过程： 厂区公用工程与污染控制 (`site_utilities_treatment`)

#### 输入

##### 产品流

###### 蓄电池制造用蒸汽 (`site_steam_input`)

服务于申报蓄电池制造路线的计量蒸汽；与热水及燃料分开记录。

- 选定流: 蓄电池制造用蒸汽
- 流属性/单位: Energy / MJ
- 数量规则: 记录服务于申报产品的实际计量载能体；不得合并为“热”。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_utilities`
- 来源: `ec-battery-pefcr-2018`

###### 蓄电池制造用热水 (`site_hot_water_input`)

服务于申报蓄电池制造路线的计量热水能量；与蒸汽分开记录。

- 选定流: 蓄电池制造用热水
- 流属性/单位: Energy / MJ
- 数量规则: 记录服务于申报产品的实际计量载能体；不得合并为“热”。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_utilities`
- 来源: `ec-battery-pefcr-2018`

###### 厂内燃烧天然气 (`site_natural_gas_input`)

在服务于申报产品的设备中燃烧的计量天然气；与其他燃料分开记录。

- 选定流: 厂内燃烧天然气
- 流属性/单位: Energy / MJ
- 数量规则: 记录该单一燃料服务于申报产品的低位发热量计量能量；不同燃料不得合并。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_utilities`
- 来源: `ec-pef-method-2021`

###### 厂内燃烧柴油 (`site_diesel_input`)

在服务于申报产品的设备中燃烧的计量柴油；与其他燃料分开记录。

- 选定流: 厂内燃烧柴油
- 流属性/单位: Energy / MJ
- 数量规则: 记录该单一燃料服务于申报产品的低位发热量计量能量；不同燃料不得合并。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_utilities`
- 来源: `ec-pef-method-2021`

###### 厂内燃烧液化石油气 (`site_lpg_input`)

在服务于申报产品的设备中燃烧的计量 LPG；与其他燃料分开记录。

- 选定流: 厂内燃烧液化石油气
- 流属性/单位: Energy / MJ
- 数量规则: 记录该单一燃料服务于申报产品的低位发热量计量能量；不同燃料不得合并。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_utilities`
- 来源: `ec-pef-method-2021`

###### R-134a 制冷剂 (`site_r134a_refrigerant_input`)

补充至服务于申报产品冷却设备的具名 R-134a；其他制冷剂须另设独立行。

- 选定流: R-134a 制冷剂
- 流属性/单位: Mass / kg
- 数量规则: 记录补充至服务于申报产品设备的外购 R-134a；其他制冷剂必须另设具体名称行。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_utilities`
- 来源: `ec-pef-method-2021`

#### 输出

##### 废物流

###### 含铅蓄电池制造废水 (`lead_bearing_wastewater_output`)

仅适用于所述特定路线；记录实际收集的废水，且不得替代逐物质水排放。

- 选定流: 含铅蓄电池制造废水
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_releases`
- 来源: `us-epa-battery-effluent-guidelines`

###### 含镍蓄电池制造废水 (`nickel_bearing_wastewater_output`)

仅适用于所述特定路线；记录实际收集的废水，且不得替代逐物质水排放。

- 选定流: 含镍蓄电池制造废水
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_releases`
- 来源: `us-epa-battery-effluent-guidelines`

###### 含镉蓄电池制造废水 (`cadmium_bearing_wastewater_output`)

仅适用于所述特定路线；记录实际收集的废水，且不得替代逐物质水排放。

- 选定流: 含镉蓄电池制造废水
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_releases`
- 来源: `us-epa-battery-effluent-guidelines`

###### 含钴蓄电池制造废水 (`cobalt_bearing_wastewater_output`)

仅适用于所述特定路线；记录实际收集的废水，且不得替代逐物质水排放。

- 选定流: 含钴蓄电池制造废水
- 流属性/单位: Mass / kg
- 数量规则: 依据已核对的收货、领用、仪表、实验室或废物记录填写该路线的前景数量；只有在书面判定不适用时才可填零。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_releases`
- 来源: `us-epa-battery-effluent-guidelines`

##### 基本流

###### 排放至水体的铅 (`lead_to_water_output`)

仅适用于所述特定路线或现场排放源。

- 选定流: 排放至水体的铅
- 流属性/单位: Mass / kg
- 数量规则: 依据监测或有文件支撑的物质平衡，记录该单一具名物质排入指定环境介质的质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_releases`
- 来源: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

###### 排放至水体的镍 (`nickel_to_water_output`)

仅适用于所述特定路线或现场排放源。

- 选定流: 排放至水体的镍
- 流属性/单位: Mass / kg
- 数量规则: 依据监测或有文件支撑的物质平衡，记录该单一具名物质排入指定环境介质的质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_releases`
- 来源: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

###### 排放至水体的镉 (`cadmium_to_water_output`)

仅适用于所述特定路线或现场排放源。

- 选定流: 排放至水体的镉
- 流属性/单位: Mass / kg
- 数量规则: 依据监测或有文件支撑的物质平衡，记录该单一具名物质排入指定环境介质的质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_releases`
- 来源: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

###### 排放至水体的钴 (`cobalt_to_water_output`)

仅适用于所述特定路线或现场排放源。

- 选定流: 排放至水体的钴
- 流属性/单位: Mass / kg
- 数量规则: 依据监测或有文件支撑的物质平衡，记录该单一具名物质排入指定环境介质的质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_releases`
- 来源: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

###### 排放至空气的化石二氧化碳 (`carbon_dioxide_fossil_to_air_output`)

仅适用于所述特定路线或现场排放源。

- 选定流: 排放至空气的化石二氧化碳
- 流属性/单位: Mass / kg
- 数量规则: 依据监测或有文件支撑的物质平衡，记录该单一具名物质排入指定环境介质的质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_releases`
- 来源: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

###### 排放至空气的一氧化氮 (`nitric_oxide_to_air_output`)

仅适用于所述特定路线或现场排放源。

- 选定流: 排放至空气的一氧化氮
- 流属性/单位: Mass / kg
- 数量规则: 依据监测或有文件支撑的物质平衡，记录该单一具名物质排入指定环境介质的质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_releases`
- 来源: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

###### 排放至空气的二氧化氮 (`nitrogen_dioxide_to_air_output`)

仅适用于按二氧化氮质量报告的实测或计算现场燃烧排放。

- 选定流: 排放至空气的二氧化氮
- 流属性/单位: Mass / kg
- 数量规则: 依据监测或有文件支撑的物质平衡，记录该单一具名物质排入指定环境介质的质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_releases`
- 来源: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

###### 排放至空气的二氧化硫 (`sulfur_dioxide_to_air_output`)

仅适用于所述特定路线或现场排放源。

- 选定流: 排放至空气的二氧化硫
- 流属性/单位: Mass / kg
- 数量规则: 依据监测或有文件支撑的物质平衡，记录该单一具名物质排入指定环境介质的质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_releases`
- 来源: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

###### 排放至空气的 R-134a 制冷剂 (`r134a_to_air_output`)

仅适用于所述特定路线或现场排放源。

- 选定流: 排放至空气的 R-134a 制冷剂
- 流属性/单位: Mass / kg
- 数量规则: 依据监测或有文件支撑的物质平衡，记录该单一具名物质排入指定环境介质的质量。
- 数值来源模式: 前景记录 (`foreground_record`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每 kg 本过程合格产出
- 基准类型: 过程产出 (`process_output`)
- 证据类型: 采集记录 (`collected_record`)
- 采集协议: `cp_site_releases`
- 来源: `us-epa-battery-effluent-guidelines`; `ec-pef-method-2021`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用过程 | 分配前按化学体系、型号、产线、批次与仪表细分。 | `ec-pef-method-2021` |
| `allocation_causal_driver` | 剩余共用公用工程 | 使用计量能量、设备时间、干燥间体积时间、处理量或产量等有文件支撑的因果因子；质量为最后手段。 | `ec-pef-method-2021`; `porzio-scown-2021` |
| `allocation_internal_recovery` | 内部返回的废料、溶剂、水与电力 | 内部返回只建模一次；记录补充量、回收负荷与损失，禁止重复抵扣。 | `ec-pef-method-2021` |
| `allocation_export` | 外送电力及离开系统的材料 | 作为独立产出并披露下游方法；不得在前景总量中再次扣减或抵扣。 | `ec-pef-method-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_electrode_materials` | electrode_plate_preparation | 路线特定材料与已制备电极 | 源记录 | 收货、领用、退回、库存、批次产出 | 将具名交换记录与过程产出和库存变化核对 | kg | 逐批；每月核对 | 同一代表性期间 | 所有服务产线与系统 | 仅合并相同流、路线、介质与单位 | 校准、发票、BOM、实验室或联单证据 |
| `cp_electrode_utilities` | electrode_plate_preparation | 电力 | 源记录 | 仪表编号、读数、分配因子、产出质量 | 将具名交换记录与过程产出和库存变化核对 | kWh | 连续；每月核对 | 同一代表性期间 | 所有服务产线与系统 | 仅合并相同流、路线、介质与单位 | 校准、发票、BOM、实验室或联单证据 |
| `cp_electrode_waste_releases` | electrode_plate_preparation | 废料与单一物质空气排放 | 源记录 | 废物标识、质量、物质、介质、浓度、体积 | 将具名交换记录与过程产出和库存变化核对 | kg | 逐次转移或监测 | 同一代表性期间 | 所有服务产线与系统 | 仅合并相同流、路线、介质与单位 | 校准、发票、BOM、实验室或联单证据 |
| `cp_cell_materials` | cell_assembly_sealing | 电芯部件、电解液组分与封装电芯 | 源记录 | BOM 版本、物料、批次、领用、退回、产出质量 | 将具名交换记录与过程产出和库存变化核对 | kg | 逐批；每月核对 | 同一代表性期间 | 所有服务产线与系统 | 仅合并相同流、路线、介质与单位 | 校准、发票、BOM、实验室或联单证据 |
| `cp_cell_utilities` | cell_assembly_sealing | 电力 | 源记录 | 仪表编号、读数、分配因子、产出质量 | 将具名交换记录与过程产出和库存变化核对 | kWh | 连续；每月核对 | 同一代表性期间 | 所有服务产线与系统 | 仅合并相同流、路线、介质与单位 | 校准、发票、BOM、实验室或联单证据 |
| `cp_cell_waste_releases` | cell_assembly_sealing | 分材料废物与单一物质空气排放 | 源记录 | 废物标识、质量、物质、介质、浓度、体积 | 将具名交换记录与过程产出和库存变化核对 | kg | 逐次转移或监测 | 同一代表性期间 | 所有服务产线与系统 | 仅合并相同流、路线、介质与单位 | 校准、发票、BOM、实验室或联单证据 |
| `cp_formation_testing` | formation_ageing_testing | 电芯、电力、水、报废品、废水与排放 | 源记录 | 化成设备日志、仪表读数、批次、合格判定、质量、排放结果 | 将具名交换记录与过程产出和库存变化核对 | kg, kWh | 逐循环与批次 | 同一代表性期间 | 所有服务产线与系统 | 仅合并相同流、路线、介质与单位 | 校准、发票、BOM、实验室或联单证据 |
| `cp_pack_assembly` | module_pack_assembly | 电芯、电池包部件、包装、电力、产品与分材料废物 | 源记录 | 实装 BOM、领用、退回、仪表、放行质量、废物票据 | 将具名交换记录与过程产出和库存变化核对 | kg, kWh | 逐批；每月核对 | 同一代表性期间 | 所有服务产线与系统 | 仅合并相同流、路线、介质与单位 | 校准、发票、BOM、实验室或联单证据 |
| `cp_site_utilities` | site_utilities_treatment | 蒸汽、热水、燃料与制冷剂补充 | 源记录 | 载能体标识、仪表或发票、发热量、分配因子 | 将具名交换记录与过程产出和库存变化核对 | kg, MJ | 连续或逐发票 | 同一代表性期间 | 所有服务产线与系统 | 仅合并相同流、路线、介质与单位 | 校准、发票、BOM、实验室或联单证据 |
| `cp_site_releases` | site_utilities_treatment | 路线特定废水与单一物质排放 | 源记录 | 水流标识、体积、物质、浓度、介质、处理 | 将具名交换记录与过程产出和库存变化核对 | kg, m3 | 逐监测事件；每月核对 | 同一代表性期间 | 所有服务产线与系统 | 仅合并相同流、路线、介质与单位 | 校准、发票、BOM、实验室或联单证据 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每行 | 可归属期间量 / 同期放行合格成品净 kg。 | 具名期间交换；库存变化；放行质量 | 每 1 kg 参考产品的量 |  |
| `calc_material_consumption` | 每项材料或部件 | 收货 + 期初库存 - 期末库存 - 外部退货；有文件支撑的内部转移只抵消一次。 | 物料特定库存记录 | 外部净消耗 |  |
| `calc_substance_release` | 每项空气或水排放物质 | 浓度 × 实测流量，或有文件支撑的投入产出物质平衡，并保留换算。 | 物质浓度；流量；需要时的密度 | 按物质与介质的 kg | `us-epa-battery-effluent-guidelines` |
| `calc_energy_register` | 电力 | 进口电力减去单独计量的内部返还量；外送电力保持独立产出。 | 进口；内部返还；外送 | 净投入及独立外送 | `ec-pef-method-2021` |
| `calc_mass_balance` | 每个过程与数据包 | 将投入和期初库存与产品、每项废物、每项排放及期末库存核对；调查残差。 | 原子行与库存 | 残差及说明 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 产品与路线 | 保留化学体系、产品层级、型号、用途、容量、能量、荷电状态、起始条件和 BOM 版本。 | 规格书、放行证书、BOM |
| `dq_atomicity` | 每个清单行 | 一个具名交换、一个方向、一个流类型、一个属性、一个单位、一个路线条件，基本流还须一个介质。 | 行级映射复核 |
| `dq_completeness` | 前景边界 | 核对每项适用材料、公用工程载能体、废物、废水及空气或水排放；记录不适用行。 | 过程图、仪表、联单、许可 |
| `dq_traceability` | 采集或计算值 | 保留原始记录、换算、分配因子、计算版本、复核人及与归一化值的链接。 | 审计轨迹与计算摘要 |
| `dq_uuid_identity` | 天工链接行 | 增加 UUID 前，须经混合检索发现并由 state100 直读确认精确语义、类型、属性与单位。 | 检索结果与 state100 直读记录 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 要求精确 1 kg、CPC 46420、Product flow、质量 `93a60a56-a3c8-11da-a746-0800200b9a66` 及单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`。 | `unsd-cpc-3-0` |
| `validate_route_applicability` | 清单 | 要求申报一条路线且只纳入适用原子行；禁止以化学体系特定集合标签替代缺失行。 | `ec-battery-pefcr-2018` |
| `validate_no_unverified_uuid` | 清单链接 | 拒绝缺少精确混合检索与 state100 双核证据的 UUID。 |  |
| `validate_no_estimated_range` | 清单数量 | 拒绝 reasoned-estimate、AI 生成或跨路线宽泛数量范围；使用前景记录或明确计算规则。 |  |
| `validate_carrier_separation` | 公用工程 | 要求电力、蒸汽、热水、天然气、柴油、LPG 及每种制冷剂分别记录。 | `ec-pef-method-2021` |
| `validate_release_separation` | 废水与基本流 | 要求实际废水流与每项具名物质空气排放或水排放分别记录。 | `us-epa-battery-effluent-guidelines` |
| `validate_bilingual_alignment` | 英文原文与中文译文 | 要求 process_id、row_id、rule_id、source_id、UUID 与卡片顺序完全一致。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个具体蓄电池成品的工厂门前景数据包 |
| downstream_use | 连接代表性上游数据集用于摇篮到工厂门建模，或作为 process 或 lifecyclemodel 的生产阶段，并一致地增加分销、使用、第二寿命与报废处理。 |
| allowed_use | 连接上游数据集的摇篮到工厂门建模；工厂改进；下游生命周期模型 |
| excluded_use | 未含下游阶段的全生命周期声明；仅按 kg 比较；跨化学路线替代 |
| required_metadata | 化学体系；产品层级；用途；型号；工厂；地域；期间；荷电状态；起始条件；BOM；路线；边界；分配；包装 |
| required_quality_disclosure | 时间、地域与技术代表性；仪表、秤、BOM、废物与排放记录覆盖；分配份额与因子；库存修正；质量平衡残差；数据缺口、代理、截断、测量不确定性、复核人及计算可追溯性。 |
| update_trigger | 化学体系、构型、BOM、电极路线、电解液、工厂、电力、干燥间、化成、分配或包装发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | Dataset (`dataset`) | United Nations Statistics Division, Central Product Classification Version 3.0, code 46420 Electric accumulators, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-13) | 用于本 PCR 对应规则；不将路线特定数值推广到 CPC 46420 全部产品。 |
| `eu-batteries-regulation-2023` | Standard (`standard`) | Regulation (EU) 2023/1542 concerning batteries and waste batteries, consolidated text, https://eur-lex.europa.eu/eli/reg/2023/1542/2024-07-18/eng (retrieved 2026-08-13) | 用于本 PCR 对应规则；不将路线特定数值推广到 CPC 46420 全部产品。 |
| `ec-pef-method-2021` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en (retrieved 2026-08-13) | 用于本 PCR 对应规则；不将路线特定数值推广到 CPC 46420 全部产品。 |
| `ec-battery-pefcr-2018` | Official guidance (`official_guidance`) | European Commission, Product Environmental Footprint Category Rules for High Specific Energy Rechargeable Batteries for Mobile Applications, version 2018, https://www.sazp.sk/dokument/f/baterie-a-akumulatory-pdf.pdf (retrieved 2026-08-13) | 用于本 PCR 对应规则；不将路线特定数值推广到 CPC 46420 全部产品。 |
| `jrc-cfb-battery-2025` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Rules for calculating the Carbon Footprint of Batteries, https://eplca.jrc.ec.europa.eu/LCDN/developerEF.xhtml (retrieved 2026-08-13) | 用于本 PCR 对应规则；不将路线特定数值推广到 CPC 46420 全部产品。 |
| `argonne-battery-lca-2010` | Literature (`literature`) | Sullivan and Gaines, A Review of Battery Life-Cycle Analysis: State of Knowledge and Critical Needs, ANL/ESD/10-7, Argonne National Laboratory, 2010, https://publications.anl.gov/anlpubs/2010/11/68455.pdf (retrieved 2026-08-13) | 用于本 PCR 对应规则；不将路线特定数值推广到 CPC 46420 全部产品。 |
| `argonne-lib-flows-2012` | Literature (`literature`) | Dunn et al., Material and Energy Flows in the Materials Production, Assembly, and End-of-Life Stages of the Automotive Lithium-Ion Battery Life Cycle, Argonne National Laboratory, 2012, https://publications.anl.gov/anlpubs/2012/06/73645.pdf (retrieved 2026-08-13) | 用于本 PCR 对应规则；不将路线特定数值推广到 CPC 46420 全部产品。 |
| `porzio-scown-2021` | Literature (`literature`) | Porzio and Scown, Life-Cycle Assessment Considerations for Batteries and Battery Materials, Advanced Energy Materials 11 (2021), DOI 10.1002/aenm.202100771, https://www.osti.gov/pages/biblio/1808206 (retrieved 2026-08-13) | 用于本 PCR 对应规则；不将路线特定数值推广到 CPC 46420 全部产品。 |
| `us-epa-ap42-lead-acid-1995` | Official guidance (`official_guidance`) | US EPA, AP-42 Section 12.15 Storage Battery Production, 1995, https://www.epa.gov/sites/default/files/2020-11/documents/c12s15.pdf (retrieved 2026-08-13) | 用于本 PCR 对应规则；不将路线特定数值推广到 CPC 46420 全部产品。 |
| `us-epa-nickel-battery-1996` | Official guidance (`official_guidance`) | US EPA, Locating and Estimating Air Emissions from Sources of Nickel, battery manufacturing section, 1996, https://www.epa.gov/sites/default/files/2020-11/documents/nickel.pdf (retrieved 2026-08-13) | 用于本 PCR 对应规则；不将路线特定数值推广到 CPC 46420 全部产品。 |
| `us-epa-battery-effluent-guidelines` | Official guidance (`official_guidance`) | US EPA, Battery Manufacturing Effluent Guidelines, https://www.epa.gov/eg/battery-manufacturing-effluent-guidelines (retrieved 2026-08-13) | 用于本 PCR 对应规则；不将路线特定数值推广到 CPC 46420 全部产品。 |
| `eu-bref-battery-status-2026` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, BAT reference documents portal, Production of Batteries in Giga-Factories status: drawing up started, https://eippcb.jrc.ec.europa.eu/reference (retrieved 2026-08-13) | 用于本 PCR 对应规则；不将路线特定数值推广到 CPC 46420 全部产品。 |
