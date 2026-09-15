---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-of-soil-machinery
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 整地或耕作机械零件

## 1. 范围与适用性

本 PCR 适用于在市场上单独交易，且主要可识别为农业、园艺或林业整地或耕作机械（包括草坪或运动场地滚压机）专用的原装或维修替换成品零件。典型产品包括犁铧、犁壁、犁刀、圆盘耙片、中耕机柄和齿、土壤作业机架以及专用悬挂连接件或分总成。成品零件可以不涂覆，也可以采用已声明的防护涂层。

完整的犁、耙、播种机、栽植机、移栽机、施肥机、滚压机及其他完整土壤作业机械不在本 PCR 范围内。单独销售的通用紧固件、轴承、轮胎、液压元件、电机和电气总成不在范围内，除非该上市产品主要可识别为 CPC 44115 专用整地或耕作机械零件。其他农业机械零件、未另分类的通用非电气机械零件、工装、资本设备、使用、维护和报废阶段均不在范围内。

前景边界从材料、能源、水和辅助材料交付至报告工厂开始，到质量验收合格且未包装的成品零件在工厂门口放行为止。本 PCR 采用三种限定的代表性变体：碳钢板材制造、合金钢闭式模锻和铸铁湿型砂铸造。数据生产者必须选择实际变体，声明机加工和热处理步骤、涂覆状态及任何外包工序；采用其他成形或造型系统时必须明确扩展清单。2024 年锻造与铸造 BREF 支持该条件性路线分解及所列锻造和铸造交换；EPA 来源支持条件性金属预处理和涂装边界，但这些定性来源均不提供产品特定清单数量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-of-soil-machinery |
| classification_refs | CPC 3.0：44115，Parts of soil machinery |
| covered_products | 主要可识别为整地或耕作机械或草坪/运动场地滚压机专用的原装或维修替换成品零件 |
| excluded_products | 完整机械；单独交易的通用元件；其他农业机械零件；不能主要识别为整地或耕作机械零件的电气或液压模块 |
| representative_product | 按已声明图纸和材料规范制造并通过质量验收的钢铁土壤接触零件或专用分总成 |
| production_route | 声明采用碳钢板材制造、合金钢闭式模锻或铸铁湿型砂铸造路线；按实际情况纳入机加工/热处理；液体涂装为条件性工序；其他变体须明确扩展 |
| market_state | 制造场址门口质量验收合格且未包装的成品零件；声明涂覆状态和原装/维修替换市场状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在指定整地或耕作机械内提供已声明的结构、土壤接触、调节、传动或滚压功能的成品零件 |
| How much | 1 kg 验收合格的成品零件 |
| How well | 符合已声明图纸、材料牌号、尺寸/公差、硬度或热处理状态，并在适用时符合涂层规范 |
| How long or cycle | 在工厂门口放行的一个生产批次；不主张使用寿命等效性 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 整地或耕作机械成品零件 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件名称及图纸/版本；适配机械类型/型号；主要材料及牌号；板材制造/锻造/铸造路线；验收质量；尺寸或规格等级；热处理及硬度状态；涂层体系/状态；原装或维修替换市场状态；制造场址和地理范围；报告期和批次覆盖 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。尚未确认覆盖整个类别的成品 UUID：经审计的 CPC 44115 候选流区分未涂覆和已涂覆中间状态。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和所有质量归一化交换 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量验收合格的成品净质量，不含夹具、可回运运输器具及被排除的包装；所有交换归一化至 1 kg 验收合格成品。 |
| `energy_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原始电表或发票能量及换算记录；将 kWh 换算为 Tiangong 参考单位时采用 1 kWh = 3.6 MJ，且不得改变所报告电网组合或交付边界。 |
| `gas_volume_conditions` | 天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明温度、压力、干湿基准、计量位置及任何标准体积换算；两种气体不得合并。 |
| `water_mass_basis` | 工艺用水输入和水性废物流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用直接质量记录；由体积换算质量时，保留实测体积、温度、密度来源和计算。 |
| `stock_change_balance` | 材料、涂料和切削液 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 消耗量等于期初库存加接收量减期末库存再减有记录的退回量；内部循环材料必须单独记录，不得重复计作新的边界输入。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 交付至报告工厂的外购金属坯料或铸造炉料、电力、燃料、气体、水和工艺辅助材料；每项输入均关联地理和技术代表性适当的上游数据集 |
| starting_condition_role | 从摇篮到工厂门的前景门口输入 |
| product_classification_scope | 主要可识别为整地/耕作机械或草坪/运动场地滚压机专用的 CPC 44115 成品零件 |
| recursive_input_rule | 外购 CPC 44115 分总成作为一个产品输入记录并关联不同的上游数据集；不得对同一前景制造递归套用本 PCR |
| upstream_dataset_requirement | 优先采用供应商特定数据；否则披露所选区域/技术数据集、产品状态、适用时的再生含量及交付边界 |
| disclosure | 声明纳入场址、路线、外包工序、涂覆状态、内部循环、截断、分配、合格与不合格产出，以及包装是否位于未包装参考状态之外 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | 产品系统 | 纳入所有交付输入的上游生产，以及到未包装成品放行为止的所有前景材料准备、成形/锻造/铸造、热处理、机加工、清洗、适用时的涂装、检验、直接排放和外运废物。除非单独建模并披露，否则排除使用、维护、工厂门外分销和报废阶段。 | `eu-jrc-smitheries-foundries-bref-2024`; `un-cpc-3-0-structure-2025` |
| `boundary_route_declaration` | 制造路线 | 仅选择实际采用的板材制造、锻造或铸造路线，并纳入达到声明产品状态所需的每项场内或外包工序；不得将未报告路线当作零值。 | `eu-jrc-smitheries-foundries-bref-2024` |
| `boundary_representative_variants` | 制造路线 | 板材变体采用碳钢板；锻造变体为含切边和氧化皮管理的合金钢闭式模锻；铸造变体为采用硅砂、膨润土以及实际存在时煤粉的铸铁湿型砂铸造。不同合金、自由锻、非砂型或化学粘结砂型、非铁铸造均须明确扩展清单，不得沿用不适用行。 | `eu-jrc-smitheries-foundries-bref-2024` |
| `boundary_outsourced_operations` | 外包成形、热处理、机加工或涂装 | 工序外包时，在来料中关联其供应商特定或具有代表性的上游过程；凭采购订单和供应商证据将相应场内输入、废物及排放行标记为不适用；不得把外包交换作为零值场内流报告。 | `eu-jrc-smitheries-foundries-bref-2024` |
| `boundary_coating_condition` | 预处理和涂装 | 使用液体涂料时，纳入预处理、涂料施涂、流平、固化、相关收集/控制、NMVOC 直接排放、废物和漂洗流；未使用时明确记录为不适用。 | `us-epa-misc-metal-coating-tsd`; `us-epa-sector-aa-fabricated-metal-2021` |
| `boundary_direct_exchanges` | 前景工厂 | 记录烟囱和无组织直接排放以及每项物理上独立的外运废物流；电力上游排放留在电力数据集中，不得作为前景排放重复记录。 | `us-epa-misc-metal-coating-tsd`; `us-epa-sector-aa-fabricated-metal-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `manufacture_uncoated_part` | 材料准备、成形、热处理、机加工和精整 | required | 采用一种限定变体——碳钢板材制造、合金钢闭式模锻或铸铁湿型砂铸造——及实际后续工序；其他变体须明确扩展 | 未涂覆零件的前景生产 | 转入涂装或最终放行的合格未涂覆零件 kg |
| `surface_coating` | 表面预处理和液体涂装 | conditional | 仅在产品系统内采用液体涂料及相关预处理时纳入 | 零件的前景处理 | 转入最终放行的合格涂装零件 kg |
| `final_release` | 最终检验和放行 | required | 同一产品质量只能选择未涂覆或已涂覆路线之一，不得同时选择 | 前景质量放行 | 1 kg 合格未包装成品零件 |

### 过程：材料准备、成形、热处理、机加工和精整（`manufacture_uncoated_part`）

已声明路线可组合原材料准备、加热、锻造、铸造、热处理、切割、机加工和精整。仅记录路线适用的原子交换。只有路线工艺卡或外包证据能够证明相关交换不在前景场址发生时，方可标记不适用；适用但未计量的交换属于数据缺失，不是零值。

#### 输入

##### 产品流

###### 板材制造路线用碳钢板（`carbon_steel_plate`）

碳钢板作为已声明板材制造路线的主要金属输入跨越前景边界。

- 选定流：碳钢板
- 流属性/单位：Mass / kg
- 数量规则：板材制造路线适用时，计量已领用板材并考虑库存变化后的净消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_materials`

###### 锻造用合金钢棒材（`alloy_steel_bar`）

合金钢棒材作为已声明锻造路线的主要锻坯跨越前景边界。

- 选定流：除锻造、热轧、热拉拔或挤压外未经进一步加工的合金钢条和杆（高速钢或硅锰钢条或杆除外）`c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- 流属性/单位：Mass / kg
- 数量规则：锻造路线适用时计量合金钢棒材净消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_materials`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 铸造路线用铸铁炉料（`cast_iron_charge`）

外部铸铁炉料作为已声明铸造路线的主要金属输入跨越前景边界。

- 选定流：铸铁铸造炉料
- 流属性/单位：Mass / kg
- 数量规则：铸造路线适用时，计量进入熔炼的外部铸铁炉料净量，扣除有记录的内部回炉料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_materials`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 铸铁湿型砂型用硅砂（`foundry_silica_sand`）

仅对已声明的铸铁湿型砂路线，外购硅砂才作为新增型砂补充料跨越前景边界。

- 选定流：硅砂 `854527a0-1a8f-43af-b7c5-8c20d22e61ff`
- 流属性/单位：Mass / kg
- 数量规则：场内采用湿型砂造型时，计量新增硅砂净补充量，扣除有记录的内部再生砂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry_materials`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 铸铁湿型砂型用膨润土粘结剂（`foundry_bentonite`）

仅对已声明的铸铁湿型砂路线，膨润土才作为新鲜黏土粘结剂跨越前景边界。

- 选定流：膨润土 `93806a54-46f5-409c-99c5-4144a1e73b5d`
- 流属性/单位：Mass / kg
- 数量规则：场内使用该粘结剂时，计量进入湿型砂制备的膨润土净补充量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry_materials`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 铸铁湿型砂型用煤粉添加剂（`foundry_coal_dust`）

仅在铸铁造型中有意向湿型砂加入铸造用煤粉时，该煤粉才跨越前景边界。

- 选定流：铸造用煤粉添加剂
- 流属性/单位：Mass / kg
- 数量规则：计量实际加入湿型砂的煤粉牌号净质量；记录煤阶和配方，未使用时标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry_materials`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 外购电力（`electricity_manufacturing`）

外购电力为前景边界内路线适用的制造设备和共用服务供能。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量或合理分配用于路线适用的材料准备、成形、炉窑、机加工、通风和控制的外购电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_energy`

###### 直接热工工序用天然气（`natural_gas_manufacturing`）

天然气仅在已声明路线采用直接燃烧制造工序时跨越边界。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量路线适用的坯料加热、熔炼、热处理或干燥所燃烧的天然气；全电路线不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_energy`

###### 氧气切割用工业氧气（`industrial_oxygen_cutting`）

工业氧气仅在已声明制造路线采用氧气燃料切割时跨越边界。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：仅在采用氧气燃料切割时，记录计量值或供应商记录的氧气消耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_fluids`

###### 制造工序用工艺用水（`process_water_manufacturing`）

工艺用水作为路线适用制造工序的补充水净量跨越边界。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：路线适用的冷却、机加工、清洗或淬火所需且跨越工厂边界的补充水净量；不计闭路循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_fluids`

###### 机加工用切削液（`cutting_fluid`）

采用湿式机加工时，新鲜切削液作为机加工补充液跨越边界。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：湿式机加工适用时，记录跨越边界的新鲜切削液补充净量，包括按供应状态计量的浓缩液和预混液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_fluids`
- 来源：`us-epa-sector-aa-fabricated-metal-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未涂覆成形机加工零件（`uncoated_part_output`）

验收合格的未涂覆零件离开制造过程并转入涂装或最终放行。该公开 state-100 流的英文名称及 CPC 44115 分类指向 soil machinery，但中文 baseName 使用“土方机械”，该词也可能指工程土方机械。本 PCR 在中文清单中保留直接读取的中文 baseName，仅以 CPC 分类和英文身份限定未涂覆中间流；此双语措辞歧义须披露，且该 UUID 不得泛化用于工程土方机械零件。

- 选定流：成形及机加工的土方机械零件（未涂覆）`d71194b3-dd43-437f-9706-b90232a59e62`
- 流属性/单位：Mass / kg
- 数量规则：称量转入涂装或最终放行的合格未涂覆产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_outputs`

##### 废物流

###### 碳钢边角料和机加工废料（`scrap_steel`）

单独收集的碳钢废料离开前景制造过程，送往外部回收或处理。

- 选定流：废钢 `c3fc5605-baa3-4b25-9934-ecf7fcbc72da`
- 流属性/单位：Mass / kg
- 数量规则：分别称量板材制造路线外运的碳钢边角料、切屑和不合格件
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_outputs`
- 来源：`us-epa-sector-aa-fabricated-metal-2021`

###### 合金钢闭式模锻飞边（`alloy_steel_forging_flash`）

扣除有记录的内部回炉量后，切除的合金钢飞边离开闭式模锻工序并送往外部回收或处理。

- 选定流：合金钢闭式模锻飞边
- 流属性/单位：Mass / kg
- 数量规则：分别称量合金钢闭式模锻路线外运的锻造飞边；排除返回同一产品系统内部的飞边
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forging_outputs`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 不合格低合金钢锻件（`rejected_alloy_steel_forgings`）

只有不返回内部返工或回炉时，不合格低合金钢锻件才作为废料跨越前景边界。

- 选定流：低合金钢废料 `afedcccd-b9f3-4941-8ba4-d3135b8abb67`
- 流属性/单位：Mass / kg
- 数量规则：按不合格原因和去向称量作为废料外运的不合格低合金钢锻件；排除有记录的内部返回或返工
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forging_outputs`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 锻造氧化皮（`forging_scale`）

从合金钢锻坯或锻件上去除的氧化皮作为单独收集的废物流离开该路线。

- 选定流：氧化铁皮 `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- 流属性/单位：Mass / kg
- 数量规则：分别称量外运回收或处理的锻造氧化皮，并扣除有记录的内部返回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_forging_outputs`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 废硅砂型砂（`spent_foundry_sand`）

扣除场内再生和内部回用后，废硅砂型砂离开铸铁湿型砂路线。

- 选定流：硅砂残余物 `3027d52d-f24a-4e81-848a-11140a980a67`
- 流属性/单位：Mass / kg
- 数量规则：称量外运回收或处置的废硅砂型砂；声明粘结剂、煤粉、金属、含水率和再生状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry_outputs`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 黑色金属铸造炉渣（`foundry_slag`）

从铸铁熔炼工序撇除的炉渣或浮渣作为独立废物流离开前景路线。

- 选定流：黑色金属铸造炉渣
- 流属性/单位：Mass / kg
- 数量规则：分别称量铸铁熔体制备产生并外运的炉渣或浮渣，注明炉型、炉料、处理方式和去向；排除有记录的内部返回
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry_outputs`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 不合格铸铁铸件（`rejected_ferrous_castings`）

只有不返回铸造炉料时，不合格铸铁铸件才跨越前景边界。

- 选定流：不合格铸铁铸件
- 流属性/单位：Mass / kg
- 数量规则：按不合格原因和去向称量外运回收或处理的不合格铸铁铸件；排除有记录的内部回炉量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry_outputs`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 铸铁机加工切屑（`iron_metal_chips`）

单独收集的铸铁切屑离开机加工过程，送往外部回收或处理。

- 选定流：铁金属切屑 `8aa263a4-39e5-475e-966b-d967747ecc9c`
- 流属性/单位：Mass / kg
- 数量规则：分别称量机加工产生的外运铸铁切屑，并扣除有记录的内部回炉量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_outputs`

###### 废水溶性切削液（`spent_cutting_fluid`）

废水溶性切削液作为单独管理的废物流离开机加工过程。

- 选定流：废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位：Mass / kg
- 数量规则：称量外运处理或回收的废切削液混合物；声明含水率，且不得与废油合并
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_outputs`
- 来源：`us-epa-sector-aa-fabricated-metal-2021`

##### 基本流

###### 闭式模锻颗粒物排放（`forging_particulate_to_air`）

经控制后，粒径未特指的颗粒物作为适用的锻造加热、搬运、锻打、冷却、除鳞、打磨、焊接或喷丸工序的直接空气排放跨越前景边界。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：按排放源和控制装置监测或计算场内闭式模锻路线的残余直接颗粒物；只有锻造外包或不存在时才标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_particulate`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 铸铁铸造工序颗粒物排放（`foundry_particulate_to_air`）

经控制后，粒径未特指的颗粒物作为适用的砂处理、造型、熔炼、浇注、落砂、清理和精整工序的直接空气排放跨越前景边界。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：Mass / kg
- 数量规则：按排放源和控制装置监测或计算场内铸铁湿型砂路线的残余直接颗粒物；只有铸造外包或不存在时才标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_particulate`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 湿型砂添加剂产生的一氧化碳（`foundry_carbon_monoxide_to_air`）

浇注、冷却和落砂期间，煤粉或其他含碳湿型砂添加剂热解及不完全氧化所产生的残余一氧化碳，作为直接大气排放越过前景边界。

- 选定流：一氧化碳（化石源）`08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：当经核实的型砂配方含煤粉或其他含碳替代物时，测量或计算场内铸铁湿型砂路线经收集和治理后的烟囱及无组织残余一氧化碳；不得以一氧化碳定量代替苯、甲苯、二甲苯或二氧化碳
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry_additive_gases`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 湿型砂添加剂产生的化石源二氧化碳（`foundry_fossil_carbon_dioxide_to_air`）

煤粉或其他化石含碳湿型砂添加剂氧化或治理销毁所产生的化石源二氧化碳，与燃料燃烧二氧化碳分开越过前景边界。

- 选定流：二氧化碳（化石源）`08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：依据排放源数据及添加剂碳去向平衡，测量或计算归属于经核实含碳型砂添加剂的残余化石源二氧化碳，包括治理销毁产物；排除燃料燃烧二氧化碳、生物源碳、留存碳以及随残余物外运的碳
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：基于采集计算（`calculated_from_collection`）
- 采集协议：`cp_foundry_additive_gases`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 湿型砂添加剂产生的苯（`foundry_benzene_to_air`）

煤粉或其他适用湿型砂添加剂热降解产生的残余苯，作为具名直接大气排放越过前景边界。

- 选定流：苯
- 流属性/单位：质量 / kg
- 数量规则：测量或计算浇注、冷却和落砂经收集及治理后的烟囱与无组织残余苯；仅在实际添加剂配方和排放源评估支持时适用，无成苯添加剂时以证据说明不适用而不得静默赋零
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry_additive_gases`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 湿型砂添加剂产生的甲苯（`foundry_toluene_to_air`）

煤粉或其他适用湿型砂添加剂热降解产生的残余甲苯，作为具名直接大气排放越过前景边界。

- 选定流：甲苯
- 流属性/单位：质量 / kg
- 数量规则：测量或计算浇注、冷却和落砂经收集及治理后的烟囱与无组织残余甲苯；仅在实际添加剂配方和排放源评估支持时适用，无成甲苯添加剂时以证据说明不适用而不得静默赋零
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry_additive_gases`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 湿型砂添加剂产生的二甲苯（`foundry_xylene_to_air`）

煤粉或其他适用湿型砂添加剂热降解产生的残余二甲苯异构体，作为具名直接大气排放越过前景边界。

- 选定流：二甲苯
- 流属性/单位：质量 / kg
- 数量规则：测量或计算浇注、冷却和落砂经收集及治理后的烟囱与无组织残余二甲苯；保留所报告的异构体或混合二甲苯基准，仅在实际添加剂配方和排放源评估支持时适用，且不得与单独报告的异构体重复
- 数值模式：前景记录（`foreground_record`）
- 特异性：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_foundry_additive_gases`
- 来源：`eu-jrc-smitheries-foundries-bref-2024`

###### 制造燃料产生的直接化石源二氧化碳（`fossil_co2_manufacturing`）

化石源二氧化碳作为场内制造燃料燃烧的直接空气排放跨越前景边界。

- 选定流：二氧化碳（化石源）`08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据监测记录或有文件依据的工厂计算，记录制造燃料燃烧产生的场内直接化石源 CO2；排除上游燃料和电力排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_manufacturing_emissions`

### 过程：表面预处理和液体涂装（`surface_coating`）

仅在产品系统内零件接受液体涂装时纳入本过程。对已声明生产线记录预处理、施涂、流平、固化、控制、废物和排放。

#### 输入

##### 产品流

###### 进入涂装的未涂覆零件（`uncoated_part_coating_input`）

验收合格的未涂覆零件从制造过程转入条件性涂装过程。

- 选定流：成形及机加工的土方机械零件（未涂覆）`d71194b3-dd43-437f-9706-b90232a59e62`
- 流属性/单位：Mass / kg
- 数量规则：称量进入涂装线的未涂覆零件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_materials`

###### 涂装线外购电力（`electricity_coating`）

外购电力为条件性涂装线及其相关控制装置供能。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量或合理分配用于预处理、施涂、通风、控制和收集的涂装线外购电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_energy`

###### 涂层固化炉用天然气（`natural_gas_coating`）

天然气仅在涂装线采用直接燃烧流平或固化时跨越边界。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：计量涂层流平或固化燃烧的天然气；电加热或外供热路线不适用
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：技术特定（`technology_specific`)
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_coating_energy`
- 来源：`us-epa-misc-metal-coating-tsd`

###### 预处理和漂洗用工艺用水（`process_water_coating`）

工艺用水作为涂装预处理和漂洗的补充水净量跨越边界。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：已声明预处理和漂洗工序的补充水净量，不计循环水
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：场址特定（`site_specific`)
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_coating_materials`

###### 碱性清洗用氢氧化钠（`sodium_hydroxide`）

氢氧化钠作为条件性清洗槽液中的有效碱跨越边界。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：根据供应用清洗液质量和已核实浓度计算进入碱性清洗液的有效氢氧化钠质量；未使用时不适用
- 数值来源模式：计算值（`calculated_value`)
- 适用范围：技术特定（`technology_specific`)
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`)
- 证据类型：由采集记录计算（`calculated_from_collection`)
- 采集协议：`cp_coating_materials`
- 来源：`us-epa-sector-aa-fabricated-metal-2021`

###### 液体涂料（`paint`）

液体涂料作为施加到已声明产品上的涂层材料跨越边界。

- 选定流：涂料 `b2aa1a35-1823-4b13-96db-d5b89eda2db5`
- 流属性/单位：Mass / kg
- 数量规则：根据领用量、退回量、回收过喷物和库存变化计算液体涂料净消耗；记录配方、载体和固含量
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：产品特定（`product_specific`)
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_coating_materials`
- 来源：`us-epa-misc-metal-coating-tsd`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 涂装整地或耕作机械分总成（`coated_part_output`）

验收合格的涂装整地或耕作机械分总成离开涂装过程并转入最终放行。该带 UUID 行仅适用于涂装产品为分总成的情形；不得用于单件犁铧、圆盘、齿或其他单件零件。

- 选定流：土壤机械用涂装分总成 `1b26569c-b724-4892-9a5a-a4d8e78a6b45`
- 流属性/单位：Mass / kg
- 数量规则：称量转入最终放行的合格涂装分总成产出；单件涂装零件不适用
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：产品特定（`product_specific`)
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_coating_outputs`

###### 涂装整地或耕作机械单件零件（`coated_individual_part_output`）

验收合格的涂装单件整地或耕作机械零件采用区别于已审计分总成流的 UUID 空缺身份离开涂装过程并转入最终放行。

- 选定流：整地或耕作机械用涂装单件零件
- 流属性/单位：Mass / kg
- 数量规则：称量转入最终放行的合格涂装单件零件产出；分总成不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_outputs`

##### 废物流

###### 液体涂装废涂料（`waste_paint`）

收集的液体涂料残渣和未回收过喷物作为一项单独管理的废物流离开涂装线。

- 选定流：废涂料残渣 `877e5a04-76c8-4c5b-ac4c-062f5beeb2bd`
- 流属性/单位：Mass / kg
- 数量规则：称量作为废物外运的液体涂料残渣和未回收过喷物；不含单独记录的漂洗废水和容器
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：技术特定（`technology_specific`)
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_coating_outputs`
- 来源：`us-epa-sector-aa-fabricated-metal-2021`

###### 碱性清洗漂洗废水（`alkaline_rinse_wastewater`）

单独输送的水性漂洗流在碱性清洗后离开涂装线。

- 选定流：碱性清洗漂洗废水
- 流属性/单位：Mass / kg
- 数量规则：计量碱性清洗后单独输送的水性漂洗流质量，并声明 pH 和相关污染物；不含废浓缩槽液
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：技术特定（`technology_specific`)
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_coating_outputs`
- 来源：`us-epa-sector-aa-fabricated-metal-2021`

###### 废浓缩碱性清洗槽液（`spent_alkaline_cleaning_bath`）

排放清洗槽时，废浓缩碱性清洗槽液须作为区别于稀漂洗废水的独立废物流离开涂装线。

- 选定流：废碱液 `ce738ef0-a711-4650-a38b-34479efd7559`
- 流属性/单位：Mass / kg
- 数量规则：称量外运处理或回收的废浓缩碱性槽液，声明组成、浓度、污染物、含水率和去向；排除留在产品系统内或场内再生的槽液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_outputs`
- 来源：`us-epa-sector-aa-fabricated-metal-2021`

##### 基本流

###### 排放到空气的非甲烷挥发性有机化合物（`nmvoc_to_air`）

残余非甲烷挥发性有机化合物作为涂装相关直接空气排放跨越边界。

- 选定流：非甲烷挥发性有机化合物 `08a91e70-3ddc-11dd-a302-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：记录收集和去除后的实测值或工厂认可的涂装质量平衡排放量，包括施涂、流平、固化、烟囱和无组织排放；不得再叠加单独列出的物种
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：场址特定（`site_specific`)
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_coating_emissions`
- 来源：`us-epa-misc-metal-coating-tsd`

###### 涂装燃料产生的直接化石源二氧化碳（`fossil_co2_coating`）

化石源二氧化碳作为涂装线燃料燃烧的直接空气排放跨越前景边界。

- 选定流：二氧化碳（化石源）`08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：根据监测记录或有文件依据的工厂计算，记录涂装线燃料燃烧产生的场内直接化石源 CO2；排除上游燃料和电力排放
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：场址特定（`site_specific`)
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_coating_emissions`

### 过程：最终检验和放行（`final_release`）

#### 输入

##### 产品流

###### 进入放行的合格未涂覆零件（`uncoated_part_release_input`）

仅对声明不涂覆的产品，验收合格未涂覆零件才进入最终放行。

- 选定流：成形及机加工的土方机械零件（未涂覆）`d71194b3-dd43-437f-9706-b90232a59e62`
- 流属性/单位：Mass / kg
- 数量规则：仅在涂装不适用时，称量进入最终放行的合格未涂覆零件
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：产品特定（`product_specific`)
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_final_release`

###### 进入放行的合格涂装分总成（`coated_part_release_input`）

仅对采用涂装路线的分总成，验收合格涂装分总成才进入最终放行；该 UUID 不得用于涂装单件零件。

- 选定流：土壤机械用涂装分总成 `1b26569c-b724-4892-9a5a-a4d8e78a6b45`
- 流属性/单位：Mass / kg
- 数量规则：仅在分总成采用涂装时，称量进入最终放行的合格涂装分总成
- 数值来源模式：前景记录（`foreground_record`)
- 适用范围：产品特定（`product_specific`)
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`)
- 证据类型：采集记录（`collected_record`)
- 采集协议：`cp_final_release`

###### 进入放行的合格涂装单件零件（`coated_individual_part_release_input`）

仅在涂装适用于单件产品时，验收合格的涂装单件零件才以 UUID 空缺的单件零件身份进入最终放行。

- 选定流：整地或耕作机械用涂装单件零件
- 流属性/单位：Mass / kg
- 数量规则：称量进入最终放行的合格涂装单件零件；分总成和未涂覆产品不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_release`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整地或耕作机械成品零件（`reference_product`）

质量验收合格的成品零件作为参考产品离开前景系统。

- 选定流：整地或耕作机械成品零件
- 流属性/单位：Mass / kg
- 数量规则：将验收合格成品产出质量归一化为恰好 1 kg；声明涂覆状态及所有必需限定信息
- 数值来源模式：计算值（`calculated_value`)
- 适用范围：产品特定（`product_specific`)
- 归一化基准：1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`)
- 证据类型：由采集记录计算（`calculated_from_collection`)
- 采集协议：`cp_final_release`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 不合格整地或耕作机械成品零件（`rejected_finished_part`）

最终检验不合格的零件只有外运而非返回有记录的内部返工时，才作为独立废物输出跨越前景边界。

- 选定流：不合格整地或耕作机械成品零件
- 流属性/单位：Mass / kg
- 数量规则：按材料、涂覆状态、不合格原因和去向称量外运回收或处理的最终检验不合格件；排除内部返工返回量并在批次谱系中关联
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_final_release`

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用生产线和公用工程 | 优先按路线、生产线、产品族或批次细分，并使用直接计量、领用记录、机器时间或因果工程驱动量。 |  |
| `allocation_scrap` | 外运金属废料、锻造飞边、氧化皮、炉渣、切屑和不合格件 | 每项原子外运输出分别报告，并披露质量、材料或合金、污染状态、收入、去向和内部回用。除非声明的研究方法明确要求，否则不得在前景清单内扣除原生材料避免负荷。 |  |
| `allocation_multioutput` | 无法避免的共用负荷 | 在可辩护时采用有文件依据的物理因果关系；否则基于一致报告期价格采用经济分配并披露敏感性。不得仅为消除不平衡而分配。 |  |
| `allocation_internal_recycling` | 金属、型砂、涂料、水、槽液和流体内部循环 | 不得将内部循环或返工材料同时计作新输入和废物输出。仅记录补充输入、库存变化、损失、外运输出及跨越产品系统边界的材料。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_manufacturing_materials` | `manufacture_uncoated_part` | 路线特定金属输入 | 地磅、ERP 领料、采购和库存记录 | 材料身份；牌号；期初库存；接收；领用；退回；期末库存；内部回用 | 每种合金/形态分别与覆盖批次对账 | kg | 每次接收/领用及期末 | 所有覆盖批次和报告期 | 所有纳入制造场址 | 保留期初 + 接收 - 期末 - 退回并排除经核实内部循环的原始量，再以 `cp_final_release` 合格成品质量归一化一次 | 校准秤；供应商证书；库存对账 |
| `cp_manufacturing_energy` | `manufacture_uncoated_part` | 电力和天然气 | 计量表、发票和分配记录 | 表号；期初/期末读数；单位；燃料；温度/压力；共用驱动量 | 优先直接分表计量，否则采用有文件依据的因果分配 | MJ; m3 | 计量间隔或发票期 | 完整报告期 | 纳入路线设备和共用服务 | 保留路线原始量，再以 `cp_final_release` 合格成品质量归一化一次 | 仪表校准；发票；分配工作表 |
| `cp_manufacturing_fluids` | `manufacture_uncoated_part` | 氧气、水和切削液 | 仪表、气瓶交付、化学品领用和库存记录 | 物质；配方；浓度；数量；退回；库存变化；循环量 | 分开记录每种物质，仅计算边界净输入 | m3; kg | 每次领用/交付及期末 | 所有覆盖批次 | 纳入制造工序 | 保留各物质原始净输入，再以 `cp_final_release` 合格成品质量归一化一次 | 交付单；仪表检查；浓度证书 |
| `cp_foundry_materials` | `manufacture_uncoated_part` | 铸铁湿型砂造型用硅砂、膨润土和煤粉 | 采购、批次、砂处理系统、库存和再生记录 | 材料身份；牌号；新增补充量；内部再生量；粘结剂/添加剂配方；期初/期末库存 | 每项原子造型材料分别对账，并从新边界输入中排除内部再生砂 | kg | 每批及期末 | 所有代表性铸铁湿型砂批次 | 纳入场内湿型砂制备 | 保留各材料新增补充原始量，再以 `cp_final_release` 合格成品质量归一化一次 | 供应商规范；批次单；库存和再生对账 |
| `cp_forging_outputs` | `manufacture_uncoated_part` | 锻造飞边、不合格低合金钢锻件和锻造氧化皮 | 生产、切边、氧化皮箱、不合格、回收和外运记录 | 输出身份；质量；合金；来源工序；不合格原因；内部返回；去向 | 分别称量各项输出；区分外运材料与内部返工或回炉 | kg | 每批或每次外运 | 所有代表性闭式模锻批次 | 纳入场内锻造工序 | 保留各原子流原始质量，扣除有记录的内部返回，再以 `cp_final_release` 合格成品质量归一化一次 | 校准秤；不合格日志；回收或废物联单 |
| `cp_foundry_outputs` | `manufacture_uncoated_part` | 废硅砂型砂、铸造炉渣或浮渣和不合格铸铁铸件 | 型砂再生、炉窑、不合格、称量、回收和外运记录 | 输出身份；质量；炉型；炉料；粘结剂；污染物；含水率；内部返回；去向 | 扣除有记录的场内型砂再生或金属回炉后，分别称量各项输出 | kg | 每批或每次外运 | 所有代表性铸铁湿型砂批次 | 纳入场内铸造工序 | 保留各原子流原始质量，扣除有记录的内部返回，再以 `cp_final_release` 合格成品质量归一化一次 | 再生平衡；炉窑日志；不合格日志；废物或回收联单 |
| `cp_manufacturing_outputs` | `manufacture_uncoated_part` | 合格未涂覆零件、板材路线废料、铸铁机加工切屑和废切削液 | 生产、称量、废物联单和回收记录 | 产出身份；质量；合金；不合格原因；含水/含油率；内部回用；去向 | 分别称量合格产出和每项废物流 | kg | 每批或每次外运 | 所有覆盖批次 | 纳入制造工序 | 保留各流身份原始质量，扣除有记录的内部回用，再以 `cp_final_release` 合格成品质量归一化一次 | 校准秤；生产放行；废物联单 |
| `cp_route_particulate` | `manufacture_uncoated_part` | 锻造和铸造工序直接颗粒物 | 烟囱和无组织监测、源测试、控制装置和运行记录 | 路线；排放源；工序；粒径基准；实测排放；收集；控制效率；运行小时 | 使用一种有文件依据且获工厂认可的方法，分别量化锻造和铸造源的残余排放 | kg | 监测或报告间隔 | 所有代表性场内锻造或铸造工序 | 纳入排放源、收集、控制、烟囱和无组织点 | 保留各路线及排放源原始排放，再以 `cp_final_release` 合格成品质量归一化一次 | 监测 QA；源测试报告；控制日志；计算文件 |
| `cp_foundry_additive_gases` | `manufacture_uncoated_part` | 含碳湿型砂添加剂产生的一氧化碳、化石源二氧化碳、苯、甲苯和二甲苯 | 型砂配方、添加剂领用、铸造批次、烟囱和无组织监测、收集/治理及残余物表征记录 | 添加剂标识；煤阶或替代物；化石源和生物源碳比例；批次质量；浇注/冷却/落砂排放源；物种及异构体基准；收集量；销毁效率；留存碳；残余排放；运行小时 | 首先记录实际型砂配方。存在煤粉或含碳替代物时，分别量化治理后各适用具名物种的烟囱和无组织残余排放；不存在时保留配方证据说明不适用。不得依据一氧化碳或总有机物测量值推算其他单一物种。 | kg | 每次配方、批次和监测/报告间隔 | 所有代表性场内铸铁湿型砂批次 | 声明产品系统内的型砂制备、浇注、冷却、落砂、收集、治理、烟囱、无组织点、留存型砂和外运残余物 | 保留物种特定原始排放和碳去向项，闭合 `calc_foundry_additive_carbon_fate`，再以 `cp_final_release` 合格成品质量归一化一次 | 供应商规格或 SDS；批次单；源测试或监测 QA；控制日志；残余物分析；碳平衡工作表 |
| `cp_manufacturing_emissions` | `manufacture_uncoated_part` | 直接化石源二氧化碳 | 连续/定期监测或认可的工厂计算记录 | 排放源；燃料量；碳基准；因子/方法；氧化率；实测排放；运行小时 | 使用监测结果或有文件依据的法规/工厂方法，且不重复上游排放 | kg | 监测/报告间隔 | 所有覆盖热工工序 | 纳入直接燃烧源 | 保留各源原始排放，再以 `cp_final_release` 合格成品质量归一化一次 | 监测 QA；计算文件；燃料记录 |
| `cp_coating_materials` | `surface_coating` | 未涂覆零件、水、氢氧化钠和涂料 | 批次、仪表、领用、配方、浓度和库存记录 | 零件质量；水表；化学品质量；溶液浓度；涂料领用/退回/回收；固含量 | 对已声明涂装批次的每种材料进行对账 | kg | 每批/领用及期末 | 所有涂装批次 | 纳入涂装线 | 保留各原子流原始净输入，再以 `cp_final_release` 合格成品质量归一化一次 | 批次单；仪表校准；SDS/规范；库存对账 |
| `cp_coating_energy` | `surface_coating` | 电力和天然气 | 生产线仪表、发票和运行记录 | 表号；读数；单位；运行小时；温度/压力；共用驱动量 | 分表计量或按有文件依据的生产线运行驱动量分配 | MJ; m3 | 计量间隔 | 所有涂装批次 | 纳入涂装线及控制装置 | 保留各能源流原始量，再以 `cp_final_release` 合格成品质量归一化一次 | 校准；发票；分配工作表 |
| `cp_coating_outputs` | `surface_coating` | 涂装分总成或单件零件、废涂料、碱性漂洗废水和废碱性槽液 | 称量、批次、槽液、废物联单和排放记录 | 产品形态；涂装件质量；不合格或返工质量；废物质量；水质量；槽液库存；pH；浓度；污染物；含水率；去向 | 分别计量每项输出；核对槽液期初、补加、保留库存、再生、排放和内部返回 | kg | 每批、每次换槽或每次外运 | 所有涂装批次 | 纳入涂装线 | 保留各原子流原始输出，再以 `cp_final_release` 合格成品质量归一化一次 | 放行记录；秤检查；槽液平衡；废物/排放联单；实验室结果 |
| `cp_coating_emissions` | `surface_coating` | NMVOC 和直接化石源二氧化碳 | 烟囱/无组织监测、涂料质量平衡、控制装置和燃料记录 | 涂料/溶剂组成；使用量；收集量；去除效率；实测排放；燃料；方法 | 使用一种有文件依据且获工厂认可的方法，避免 NMVOC 总量与物种重复计算 | kg | 每批和报告间隔 | 所有涂装批次及固化运行 | 施涂、流平、固化、控制、烟囱和无组织点 | 保留各原子流原始排放，再以 `cp_final_release` 合格成品质量归一化一次 | 监测 QA；配方数据；控制日志；计算文件 |
| `cp_final_release` | `final_release` | 未涂覆、涂装分总成或涂装单件路线输入；合格参考产品；外运最终不合格件 | 检验、不合格、返工、批次谱系、外运和校准秤记录 | 零件 ID；图纸/版本；路线；产品形态；涂覆状态；输入质量；合格质量；不合格质量；内部返工返回；外运不合格件；批次；场址 | 将合格与不合格产出关联至且仅关联至一条路线，称量产品净质量，并区分内部返工与外运不合格件 | kg | 每批 | 所有代表批次 | 所有纳入放行地点 | 以合格成品质量作为所有归一化交换的唯一分母；保留不合格与返工质量供转移平衡 | 检验放行；不合格和返工记录；秤校准；批次谱系；废物或回收联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单交换 | 归一化数量 = 覆盖批次交换数量 / 覆盖批次验收合格成品质量 | 原子交换数量；`cp_final_release` 的合格质量 | 每 1 kg 验收合格成品的数量 |  |
| `calc_active_sodium_hydroxide` | `sodium_hydroxide` | 有效 NaOH 质量 = 供应清洗剂质量 × 已核实 NaOH 质量分数 | 清洗剂领用质量；浓度证书或检测 | kg 有效氢氧化钠 |  |
| `calc_stock_consumption` | 金属坯料、铸造材料、涂料和切削液 | 每个原子流须选择并记录且仅采用一种核算基准。外部库存基准：新边界输入 = 外购材料期初库存 + 外部接收量 - 外购材料期末库存 - 退还供应商量；内部循环不进入该公式并在产品系统内抵消。总工艺投料基准：新材料投料 = 总工艺投料 - 已包含在总量中的内部再生或循环投料；不得再通过库存核算重复扣除同一内部量。QA 示例：10 kg 外部新砂加 90 kg 内部循环砂且库存不变时，两种基准均得到 10 kg 新边界输入，绝非 -80 kg。 | 库存和外部交易记录；采用总投料基准时的总投料记录；单独标识的内部循环；所选核算基准 | 不重复扣除的各原子流边界净输入 |  |
| `calc_route_transfer` | 未涂覆、已涂覆中间产品和最终放行 | 按批次原始质量核对制造产出与涂装输入或未涂覆放行输入，再加路线特定外运不合格件、内部返工/返回和库存变化；分别核对每种涂装产品形态与对应最终放行输入；核对最终放行输入与合格参考产品、外运最终不合格件、内部返工返回和库存变化。完成平衡后方可应用 `calc_reference_normalization`。 | 批次谱系；按产品形态分列的中间产品质量；路线特定不合格件；最终不合格件；内部返工或返回；库存变化 | 单次最终质量归一化前的路线转移对账 |  |
| `calc_alkaline_bath_balance` | `spent_alkaline_cleaning_bath` | 定义一个包含清洗槽、相连暂存罐及任何场内再生单元的控制体。每批次：槽液期初库存 + 外部化学品和水补加 = 槽液期末库存 + 外运废槽液 + 单独测量并进入漂洗废水的槽液带出量 + 其他实测边界损失。送往及返回场内再生的转移为成对内部流并相互抵消；留存或再生槽液仅计入一次期末库存，不得再次扣除。若再生位于产品系统边界外，则须明确记录外运和返回转移而不得净额抵销。 | 槽液期初和期末库存；外部化学品和水补加；成对内部转移记录；适用时的场外转移；废槽液外运；漂洗记录中的槽液带出；实测损失 | 按批次质量守恒的碱性槽液控制体平衡 |  |
| `calc_foundry_additive_carbon_fate` | `foundry_carbon_monoxide_to_air`、`foundry_fossil_carbon_dioxide_to_air`、`foundry_benzene_to_air`、`foundry_toluene_to_air` 和 `foundry_xylene_to_air` | 在原始批次层面核对：边界内添加剂碳期初库存 + 外部添加剂碳 = 边界内添加剂碳期末库存 + 合格铸件留存碳 + 随废型砂或其他单独标识残余物外运的碳 + 经销毁并转化为明确报告产物的碳 + 残余直接排放碳物种 + 其他实测边界损失。内部型砂循环以及场内收集/返回转移为成对内部流并相互抵消。适用时分别报告一氧化碳、化石源二氧化碳、苯、甲苯和二甲苯；不得为强行闭合而将差额分配给任何具名排放或“未知排放”总括流。 | 添加剂配方及化石源/生物源碳比例；型砂系统碳期初和期末库存；合格铸件及残余物分析；收集和销毁记录；物种特定直接排放 | 归一化前闭合的添加剂碳去向平衡及分别报告的残余排放 | `eu-jrc-smitheries-foundries-bref-2024` |
| `calc_energy_to_mj` | 以 kWh 记录的电力 | MJ = kWh × 3.6 | 原始电力记录 | MJ 外购电力 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留图纸/版本、适配机械、材料证书、路线、尺寸、热处理/硬度、涂覆状态、批次和放行状态。 | 图纸；证书；检验和批次谱系记录 |
| `dq_route_completeness` | 过程图 | 证明达到声明状态所需的每项场内和外包工序已纳入或关联上游过程；解释每个不适用的条件行。 | 路线卡；采购订单；外包商记录 |
| `dq_temporal_coverage` | 所有前景数据 | 覆盖数据集所代表报告期内的每个批次；说明缺口、停产、异常批次和较短周期。 | 生产日历；仪表覆盖；异常日志 |
| `dq_mass_reconciliation` | 金属、铸造用砂及添加剂、涂料、碱性槽液、流体、产品和废物 | 核对期初库存、输入、输出、内部回用或返工、库存变化和有记录的损失，不得通过分配隐藏不平衡。 | 经签署的平衡表；库存、再生、返工、槽液和外运记录 |
| `dq_energy_coverage` | 电力和天然气 | 计量/发票周期与生产周期匹配；披露共用负荷分配和被排除负荷。 | 仪表图；发票；分配工作表 |
| `dq_emission_method` | 直接排放 | 说明排放源位置、监测或计算方法、汇总、控制装置处理和不确定性；避免重复上游排放或总量/物种排放。对湿型砂变体，须保留配方证据，区分添加剂不存在、碳留存在产品/型砂/残余物中、治理销毁以及残余具名排放，并解释未闭合的添加剂碳差额而不得分配给总括流。 | 监测 QA、许可证/报告、配方和残余物记录、控制日志、碳去向计算文件 |
| `dq_upstream_selection` | 交付输入 | 记录每个上游数据集的供应商/产品状态、地理、技术、适用时的再生含量和交付边界。 | 供应商文件和数据集选择日志 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考流 | 缺失任何必需限定信息、合格质量、涂覆状态、制造路线、场址、报告期或批次覆盖时失败。 | `un-cpc-3-0-structure-2025`; `china-mof-serbia-tariff-2024` |
| `validate_route` | 过程清单 | 在未提供路线份额时合并不相容的板材制造、闭式模锻或铸铁湿型砂输入；将适用辅助材料、残余物、不合格件或直接排放静默赋零；或在未明确扩展时把这些限定行用于其他路线，均失败。 | `eu-jrc-smitheries-foundries-bref-2024` |
| `validate_internal_loop_balance` | 库存、再生、循环及碱性槽液平衡 | 混用外部接收量与总工艺投料核算基准、同一内部循环量被扣除两次、声明控制体内成对场内转移未抵消，或留存/再生槽液既计入期末库存又被单独扣除时，均失败。 |  |
| `validate_foundry_additive_fate` | 铸铁湿型砂添加剂排放 | 使用煤粉或含碳替代物时，若未分别评估实际配方、收集/治理、留存/外运碳以及适用的残余一氧化碳、化石源二氧化碳、苯、甲苯和二甲苯，则失败；仅有颗粒物、仅有燃料二氧化碳、以一氧化碳替代其他物种或使用“未知排放”总括记录均不完整。 | `eu-jrc-smitheries-foundries-bref-2024` |
| `validate_outsourcing` | 过程清单 | 外包工序未关联上游过程，或缺少采购订单和供应商证据却将其场内行标记为不适用时失败。 | `eu-jrc-smitheries-foundries-bref-2024` |
| `validate_atomic_flows` | 清单行 | 将金属形态、能源载体、工艺化学品、废物、废水流或直接排放合并为伞状交换时失败。 | `us-epa-sector-aa-fabricated-metal-2021` |
| `validate_transfer_balance` | 中间产品流 | 未涂覆、涂装分总成、涂装单件或最终放行的原始质量在单次按合格成品质量归一化前，无法与对应输入、合格产出、原子外运不合格件、内部返工或返回及库存变化核对时失败。 |  |
| `validate_bath_balance` | 碱性清洗 | 废浓缩碱性槽液、保留或再生槽液、工艺损失和碱性漂洗废水未分别识别并核对时失败。 | `us-epa-sector-aa-fabricated-metal-2021` |
| `validate_boundary_and_double_counting` | 能源和排放 | 将电力或燃料链上游排放重复计作直接排放，或将 NMVOC 与单独列入的物种重复计算时失败。 | `us-epa-misc-metal-coating-tsd` |
| `validate_unresolved_uuid` | UUID 为空的行 | 报告 manifest 评审元数据中列出的每个 UUID 空缺身份，包括路线特定煤粉、锻造飞边、铸造炉渣、不合格铸件、涂装单件中间产品、最终不合格件及原有未解决行；不得代入代理 UUID。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已声明整地或耕作机械成品零件的产品特定从摇篮到工厂门前景生产数据集 |
| downstream_use | `secondary_dataset`；方法学、代表性和未解决身份经评审后可作为 `background_dataset` |
| allowed_use | 零件身份、路线、材料、涂覆状态、地理、技术和时间与声明数据集相匹配的机械系统 LCA 或碳足迹建模 |
| excluded_use | 完整土壤机械；通用机械零件；无功能等效性的使用寿命比较；使用或报废建模；替代不同材料/成形/涂装路线 |
| required_metadata | PCR id/版本；零件及图纸身份；适配机械；材料/牌号；路线；涂覆；合格质量；场址/地理；报告期；批次覆盖；分配；上游数据集选择；未解决 UUID |
| required_quality_disclosure | 仪表和库存覆盖；分配驱动量；路线完整性；质量对账；废物去向；排放方法及不确定性；外包工序；截断；偏离 |
| update_trigger | 图纸或材料牌号、主要成形路线、热处理、涂层体系、场址、能源供应、分配、废物去向、排放控制或报告期代表性发生变化 |

## 11. 数据源

| 来源 ID | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC Version 3.0 Structure，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 441/4411/44115 正式身份及与完整土壤机械的区分 |
| `china-mof-serbia-tariff-2024` | official_guidance | 中华人民共和国财政部，《2024年对塞尔维亚实施的协定税率表》，第 6630 行（HS 84329000），https://m.mof.gov.cn/zcfb/202406/P020240625320768010766.pdf | 整地、耕作机械和滚压机零件的专业中文术语 |
| `eu-jrc-smitheries-foundries-bref-2024` | official_guidance | 欧盟委员会 JRC，Best Available Techniques Reference Document for the Smitheries and Foundries Industry，2024，DOI 10.2760/4805267 | 限定的闭式模锻和铸铁湿型砂路线分解；锻造飞边、氧化皮、不合格件和颗粒物源；硅砂、膨润土和煤粉输入；废型砂、炉渣/浮渣及不合格铸件；浇注、冷却和落砂期间的添加剂分解源；以及表 2.59 所列湿型砂具名排放一氧化碳、二氧化碳、苯、甲苯和二甲苯 |
| `us-epa-misc-metal-coating-tsd` | official_guidance | 美国 EPA，National Emission Standards for Hazardous Air Pollutants for Miscellaneous Metal Parts and Products Surface Coating Operations: Technical Support Document，农业和工程机械行业，第 8-16、8-18 页，https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=P1006FDO.PDF | 农业机械涂装适用性及预处理/施涂/流平/固化排放点 |
| `us-epa-sector-aa-fabricated-metal-2021` | official_guidance | 美国 EPA，Sector AA: Fabricated Metal Products Manufacturing Facilities，EPA-833-F-06-042，2021 年 2 月，表 1，https://www.epa.gov/sites/default/files/2015-10/documents/sector_aa_fabmetal.pdf | 机加工流体、金属废料、清洗、涂装废物和污染物采集的定性反证交叉检查 |
