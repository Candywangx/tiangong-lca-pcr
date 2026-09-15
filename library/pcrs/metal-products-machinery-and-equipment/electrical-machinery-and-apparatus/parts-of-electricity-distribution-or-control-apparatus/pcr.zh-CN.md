---
pcr_id: pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-electricity-distribution-or-control-apparatus
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 配电或控制设备的零件

## 1. 范围与适用性

本 PCR 适用于专用于或主要用于配电或控制设备、并作为零件而非完整设备供应的离散零件的工厂门生产，包括导电连接件和触头、母排连接片、端子、机械操作零件、专用外壳、安装件和绝缘支撑件等。

前景边界始于生产就绪的外购投入品到达工厂门，终止于合格成品零件可供发运。边界包括适用的成形、模塑、机械加工、连接、装配、检验和测试，以及水系表面处理、涂装准备和现场供热。外购投入品的上游生产必须用所连接的数据集表示。

完整设备、装配电器后的配电盘或机柜、光纤连接器、通用紧固件、建筑物、资本设备、安装、使用、工厂门后的配送和报废阶段不在范围内。包装不计入参考产品质量；研究范围若纳入包装，必须把每个实际包装组件分别作为原子交换添加。

CPC 46220 包含材料和工艺差异较大的零件，因此每个数据集必须代表一个已声明零件或同质零件族。功能、材料、电压等级或路线不同的零件不得在未披露且未按产量加权的情况下平均。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.parts-of-electricity-distribution-or-control-apparatus |
| classification_refs | CPC 3.0：46220，配电或控制设备的零件 |
| covered_products | 专用于或主要用于配电或控制设备并作为零件供应的离散导电、机械、外壳、安装和绝缘零件 |
| excluded_products | CPC 4621 完整设备；装配电器后的配电盘、控制台或机柜；光纤连接器；通用紧固件；变压器及其零件；电缆；建筑物；资本设备；安装、使用和报废服务 |
| representative_product | 作为零件供应且符合要求、可投入使用的连接件、触头、端子、母排连接片、机构件、外壳、安装件或绝缘支撑件 |
| production_route | 生产就绪外购投入品；成形、模塑或机械加工；可选表面处理或氧气辅助切割；连接或装配；检验和测试；工厂门放行 |
| market_state | 工厂门成品零件，已声明规范修订版、功能、材料牌号、适用时的电压等级、表面或绝缘规范、质量、路线和地域 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供专用于或主要用于配电或控制设备的合格零件 |
| How much | 1 kg 合格成品零件净质量，不含包装 |
| How well | 满足已声明的图纸、材料牌号、公差、功能、适用时的电压等级及表面处理或绝缘规范 |
| How long or cycle | 一个在工厂门放行的生产批次；不计入使用阶段寿命 |
| reference_flow_link | 恰好 1 kg 已声明参考产品流实现该功能单位 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 配电或控电设备的零件 `a7efcaee-e37f-42ab-8b39-2ae4d572bb2b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件号或同质零件族；图纸或规范修订版；零件功能；材料牌号和购入形态；零件净质量；适用时的电压等级；表面或绝缘规范；制造路线、技术、地域和报告期；使用再生成分声明时的该声明；包装排除；不合格品和废料处理 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品和质量计量清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 清单归一化至 1 kg 合格成品零件净质量。按声明一致使用干基或收到态质量；分母不含包装和不合格品。 |
| `electricity_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表计量基准，以 1 kWh = 3.6 MJ 换算；不得把上游电网排放列为直接基本流。 |
| `gas_volume_basis` | 气态天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 按已声明温压条件报告计量体积；保留标方或标准立方米的参考条件和换算。 |
| `water_mass_basis` | 工艺用水和水系废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先直接计量质量；仅在记录体积、密度假设、温度和公式时进行体积—质量换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 生产就绪的外购材料、组件、化学品和能源载体到达前景工厂门 |
| starting_condition_role | 前景制造从接收入库开始；外购投入品的开采、精炼和制造由上游数据集表示 |
| product_classification_scope | 单独供应的配电或控制设备专用零件；不包括完整设备和通用物品 |
| recursive_input_rule | 外购 CPC 46220 投入品作为产品投入及其上游数据集记录一次，不在本前景边界内递归制造 |
| upstream_dataset_requirement | 每项外购产品或能源投入均连接地域和技术具有代表性且声明状态及交付边界的数据集 |
| disclosure | 声明产品定义、组成、购入形态、纳入及外包工序、地域、期间、能源供应、废料去向、废水和污泥交接及遗漏项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景制造 | 纳入从投入品接收到合格零件放行的全部现场工序；排除配送、安装、使用、维护和报废。 | `schneider-electric-masterpact-rear-connection-pep-2024` |
| `boundary_surface_treatment` | 水系表面处理 | 路线适用时纳入用水、每种化学品、电力和热、槽液损失、废水、污泥及直接计量排放；否则逐行记录为不适用。 | `eu-jrc-stm-bref-2006` |
| `boundary_actual_materials` | 外购投入品 | 对每种实际外购材料或组件新增一个原子产品投入行，不得用材料族总称代替。 | `schneider-electric-masterpact-rear-connection-pep-2024` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `part_manufacturing` | 零件制造、精整和放行 | required | 始终纳入；路线条件交换在各原子卡片中说明 | 前景成形、模塑、机械加工、可选处理、连接、装配、检验和测试 | 工厂门 1 kg 合格成品零件净质量 |

### 过程：零件制造、精整和放行（`part_manufacturing`）

#### 输入

##### 产品流

###### 精炼铜料（`refined_copper_input`）

仅在已声明零件消耗精炼铜时记录；声明牌号、合金、形态、再生成分和供应商边界。

- 选定流：精炼铜 `176d7abf-4f6c-4584-a720-f9a518ce7d2d`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：向批次发放的合格铜料减去有记录的未开封退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`schneider-electric-masterpact-rear-connection-pep-2024`

###### 冷轧钢板（`steel_sheet_input`）

仅对钢板路线记录；经有界 state-100 审查后 UUID 仍未解决。

- 选定流：冷轧钢板
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：向批次发放的合格冷轧钢板减去有记录的未开封退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`schneider-electric-masterpact-rear-connection-pep-2024`

###### 外购电力（`manufacturing_electricity_input`）

记录供应给所有纳入生产设备及所分配场址辅助设备的电力；直接输出不含上游发电排放。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / 能量 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：计量或生产核算后归属于该批次的外购电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 工艺用水（`process_water_input`）

适用清洗、漂洗、表面处理或测试用水时记录；声明水质、来源和交付边界。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量或储罐平衡所得工艺用水；无用水工序时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_chemical_records`
- 来源：`eu-jrc-stm-bref-2006`

###### 氢氧化钠（`sodium_hydroxide_input`）

仅在已声明清洗或处理槽液消耗氢氧化钠时记录；保留供应状态和浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：投加或补充的活性氢氧化钠质量；所用化学体系不含氢氧化钠时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_water_chemical_records`
- 来源：`eu-jrc-stm-bref-2006`

###### 工业氧气（`industrial_oxygen_input`）

仅对适用的氧气辅助工序记录外供氧气；声明纯度、压力和体积参考条件。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / 体积 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：计量或气瓶库存核算的氧气消耗；无氧气辅助加工时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

###### 气态天然气（`natural_gas_input`）

仅在现场燃烧为零件提供可归属过程热时记录；声明组成、供应地域和参考条件。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / 体积 `93a60a57-a3c8-12da-a746-0800200c9a66` / m3
- 数量规则：计量或发票平衡所得天然气；无天然气时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格成品零件（`reference_product_output`）

仅记录合格成品零件质量；不含不合格品、包装和发运附件。

- 选定流：配电或控电设备的零件 `a7efcaee-e37f-42ab-8b39-2ae4d572bb2b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：固定参考输出 1 kg 合格成品零件净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 采集协议：
- 来源：

##### 废物流

###### 工业后钢废料（`steel_scrap_output`）

记录作为废物离开过程的分类收集钢制边角料、冲裁料和不合格件；不得与材料投入净额抵销。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：发运或归集的钢废料实测质量；未加工钢材时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：

###### 废铜（`copper_scrap_output`）

记录分类收集的铜制边角料、冲裁料、切屑和不合格件；声明分选状态、污染情况和去向。

- 选定流：废铜 `4fbbb5f1-560a-4052-ba0c-652c5dfc282e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：发运或归集的废铜实测质量；未加工铜材时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：

###### 表面处理废水（`surface_treatment_wastewater_output`）

记录漂洗、槽液排放和清洗产生的水系废水；声明组成、含水基准和处理交接。其 UUID 仍未解决。

- 选定流：金属表面处理废水
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：计量或储罐平衡所得、离开前景边界的废水；未产生时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：`eu-jrc-stm-bref-2006`

###### 含金属表面处理污泥（`surface_treatment_sludge_output`）

记录槽液维护或废水处理污泥；声明湿基或干基、金属含量、危险属性和去向。其 UUID 仍未解决。

- 选定流：含金属表面处理污泥
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按已声明基准计量的离界污泥质量；未产生时不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_mass`
- 来源：`eu-jrc-stm-bref-2006`

##### 基本流

###### 直接化石源二氧化碳（`fossil_carbon_dioxide_output`）

仅记录前景燃烧直接排放的化石源 CO2；不含上游电力、燃料供应和材料排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：实测或由燃料平衡计算的直接化石源 CO2；无化石燃料燃烧时不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品零件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emission`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用产线和服务 | 首先通过批次、产线或设备级计量及过程细分避免分配。 | |
| `allocation_physical` | 无法避免的共用交换 | 按能代表因果关系且有记录的物理驱动量分配，如机器时间、计量能源、加工质量、槽液负荷或占用体积；不得默认按收入分配。 | |
| `allocation_scrap` | 可回收废料 | 分别报告投入总量和废料输出总量，不得净额抵销。声明废物终止边界和回收方法；除非目标与范围明确要求并记录，否则本前景清单内不计避免生产信用。 | |
| `allocation_quality` | 零件族数据集 | 仅当功能、规范、材料和路线充分同质时才允许按产量加权的族平均；否则发布独立数据集。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `part_manufacturing` | 外购材料投入 | ERP 发放、退库和称量单 | 身份；牌号；形态；供应商；批次；发放和退回质量；再生成分 | 核对 ERP 移动、批次流转单和校准秤 | kg | 每批；每月核对 | 至少连续 12 个代表性月份，较短活动则覆盖全期 | 所有纳入产线和外包添加 | 发放量减有记录的未开封退库量，再按合格输出归一化 | 规范；供应商声明；流转单；校准；核对记录 |
| `cp_energy_records` | `part_manufacturing` | 电力和气体投入 | 仪表、发票、气瓶或储罐库存 | 载体；读数；数量；参考条件；分配驱动量 | 优先专用仪表，否则核对商业或库存记录 | MJ；m3 | 计量或交付间隔；每月核对 | 生产报告期 | 纳入工序及所分配辅助系统 | 剔除无关负荷；按声明驱动量分配；按输出归一化 | 校准；发票；库存核对；分配表 |
| `cp_water_chemical_records` | `part_manufacturing` | 水和化学品投入 | 仪表、储罐平衡、批次单、浓度证书 | 水量；密度；溶液质量；活性浓度；槽液投加和补充 | 核对仪表和批次，计算活性化学品质量 | kg | 每次投加或计量间隔；每月核对 | 生产报告期 | 每条纳入水系产线 | 汇总可归属投入；按有记录密度换算体积；按输出归一化 | 校准；证书；批次单；储罐核对 |
| `cp_output_mass` | `part_manufacturing` | 产品和废物输出 | 检验放行、秤、联单、储罐记录 | 产品质量；废物身份；湿基或干基；组成；去向；发运质量 | 称量合格产品和分类废物；核对储罐与联单 | kg | 每批或每次发运；每月核对 | 生产报告期 | 所有纳入工序和交接点 | 各原子输出分别汇总；按输出归一化；废料不净额抵销 | 放行记录；校准；联单；分析；质量平衡 |
| `cp_direct_emission` | `part_manufacturing` | 直接化石源 CO2 | 烟气或燃料记录 | 排放；燃料；碳含量；化石比例；氧化基准；驱动量 | 合规测量或由采集燃料数据按披露方法计算 | kg | 测试或核算间隔；每月核对 | 生产报告期 | 纳入燃烧源 | 汇总可归属直接化石源 CO2，按输出归一化 | 烟气报告或燃料证书；计算表；燃料平衡 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每个清单行 | 归一化量 = 可归属交换量 / 合格成品零件净质量 | 交换量；合格输出质量 | 每 1 kg 参考产品的数量 | |
| `calc_electricity` | 外购电力 | MJ = 计量 kWh × 3.6 | kWh | MJ 电力 |
| `calc_active_naoh` | 氢氧化钠溶液 | 活性 NaOH 质量 = 溶液质量 × 认证质量分数 | 溶液质量；质量分数 | kg 活性氢氧化钠 |
| `calc_water_mass` | 按体积计量的水 | 水质量 = 体积 × 已记录温度下的密度 | 体积；密度；温度 | kg 水或废水 |
| `calc_direct_fossil_co2` | 现场燃烧 | 采用直接测量，或基于燃料量、碳含量、化石比例和氧化基准的披露计算 | 烟气或燃料记录 | kg 直接化石源 CO2 | |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和材料 | 保留零件族规则、图纸修订版、功能、适用时的电压等级、牌号、购入形态及表面或绝缘规范。 | 规范；图纸；物料清单；供应商证书 |
| `dq_time` | 前景记录 | 使用一个有代表性的统一报告期；说明异常批次和短于 12 个月的期间。 | 日历；月度核对；异常日志 |
| `dq_measurement` | 数量 | 使用校准仪器或经核对的商业记录；保留单位、参考条件、换算和分配驱动量。 | 校准；发票；仪表摘录；工作簿 |
| `dq_completeness` | 清单 | 核对合格输出、主要投入和废物；记录排除项及每个不适用条件行。 | 质量平衡；联单；路线核对表 |
| `dq_geography_technology` | 上游和前景数据 | 匹配已声明材料状态、地域、能源供应和技术，或说明替代。 | 数据集元数据；供应商地域；理由 |
| `dq_uncertainty` | 无范围清单行 | 保留前景证据且不得虚构基准范围；保留待审查的双来源范围需求。 | 未解决范围证据登记；审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | 参考流 | 确认一个 1 kg CPC 46220 参考输出及全部必需限定信息。 | `un-cpc-3-0-structure-2025` |
| `validate_atomic_rows` | 清单 | 确认每项选定流均为一个原子交换；拒绝材料、能源、公用工程、包装、废物或排放总称。 | |
| `validate_applicability` | 条件交换 | 要求提供采集值，或提供与路线相连的不适用记录。 | `eu-jrc-stm-bref-2006` |
| `validate_mass_balance` | 前景制造 | 按一致基准核对合格输出加废物与质量投入；调查差异。 | |
| `validate_energy_boundary` | 电力和燃料 | 分开记录外购电力和现场燃料；基本流输出仅含前景直接燃烧排放。 | |
| `validate_uuid_semantics` | UUID 清单行 | 复核 state-100 身份、名称、流类型、分类、属性、单位组、状态和 generalComment。 | |
| `validate_unresolved` | UUID 和范围缺口 | 保持缺口可见；不得用代理 UUID 或虚构范围替代。 | |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 审查并发布后的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 指定配电或控制设备、装配体、过程或生命周期模型的从摇篮到工厂门投入 |
| allowed_use | 已声明零件或同质零件族、场址和期间，且限定信息、路线、组成、分配、上游连接和质量仍具代表性 |
| excluded_use | 完整设备；异质零件族；未披露的功能或电压变化；安装、使用或报废声明；未加权的跨场址或跨路线平均 |
| required_metadata | PCR id；CPC 参考；产品定义；修订版；功能；电压；材料；净质量；表面或绝缘规范；路线；场址；地域；期间；能源；分配；废物去向；未解决项 |
| required_quality_disclosure | 前景比例；覆盖期；计量质量；物料清单完整性；上游替代；分配；质量平衡；不适用行；外包；不确定性 |
| update_trigger | 材料、图纸、功能、电压、表面、绝缘、路线、供应商、场址、能源、分配或期间发生足以实质改变清单的变化；UUID 或范围问题得到解决 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 官方指南（`official_guidance`） | 联合国统计司，*CPC Version 3.0 Structure*，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-04） | 分类身份，以及 4622/46220 零件与 4621 完整设备的区分 |
| `schneider-electric-masterpact-rear-connection-pep-2024` | 数据集（`dataset`） | Schneider Electric，*PEP ecopassport SCHN-01170-V01.01-EN: Rear horizontal connection, MasterPact MTZ2 fixed/drawout, 3P, top connection, 2500A-3200A*，2024-09，https://download.se.com/files?p_Doc_Ref=ENVPEP2404003EN&p_File_Name=PEP+ecopassport+SCHN-01170-V01.01-EN.pdf&p_enDocType=Environmental+Disclosure（检索于 2026-09-04） | 独立连接零件身份、铜和钢组成材料及制造阶段划分 |
| `eu-jrc-stm-bref-2006` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，*Surface Treatment of Metals and Plastics BREF*，2006-08 通过，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics（检索于 2026-09-04） | 条件性电解或化学处理边界、水系工序和相关活动 |
