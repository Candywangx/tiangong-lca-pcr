---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43141
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 子类43141所列货物（蒸汽轮机及其他汽轮机）的零件

## 1. 范围与适用性

本 PCR 适用于专门用于蒸汽轮机及其他汽轮机、单独交付零件的从门到门生产。申报边界从已备妥的材料投入开始，到工厂门口经检验合格的零件为止。代表产品为以已备妥锻钢毛坯制造的机加工、热处理合金钢零件。

完整汽轮机、液压/燃气/风力/航空或内燃机械零件、通用轴和轴承，以及安装、修理、再制造、使用和报废阶段不在范围内。铸造、锻造、增材制造、连接、涂层和热处理仅在报告工厂内实施时纳入；否则须为收到的投入或外包服务链接上游数据集。不得平均合并存在实质差异的零件设计、材料、路线、热处理、表面状态或场址。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-for-the-goods-of-subclass-43141 |
| classification_refs | CPC 3.0：43153，子类43141所列货物的零件 |
| covered_products | 专用于蒸汽轮机或其他汽轮机并符合 CPC 43153 的单独交付转子、叶片、缸体、隔板、汽封、喷嘴及其他零件 |
| excluded_products | 完整汽轮机；液压、燃气、风力、航空或内燃机械零件；通用轴、轴承、阀门和控制装置；服务、修理件和再制造件 |
| representative_product | 工厂门口交付的经机加工和热处理的合格合金钢汽轮机零件 |
| production_route | 接收已备妥锻钢毛坯；机加工；路线特定热处理；有条件的水洗、氧燃料作业或碱洗；检验和放行 |
| market_state | 工厂门口单独交付的成品合格零件，并声明防护与包装边界 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在蒸汽轮机或其他汽轮机中提供所声明机械、流道、密封或结构功能的成品零件 |
| How much | 1 kg 合格零件净质量 |
| How well | 符合所声明图样、材料牌号、尺寸公差、热处理状态、表面状态和验收标准 |
| How long or cycle | 工厂门口一次制造放行；服役寿命不属于本从门到门参考 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 汽轮机成品零件 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件类型与图样；汽轮机用途；材料牌号；接收投入形态及制备路线；制造技术；热处理状态；表面处理；净质量与毛质量；验收标准；场址与地域；参考期；包装边界 |

构建前景数据包时，所有必需限定信息须在元数据或等效数据包字段中声明；缺失时参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及质量平衡流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化至 1 kg 合格零件净质量；包装另行报告。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 按 1 kWh = 3.6 MJ 换算；声明电压、地域、计量边界和损耗。 |
| `gas_volume` | 天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 声明温度、压力、干/湿基，并始终采用一致参考条件。 |
| `liquid_mass` | 水、氢氧化钠、切削液和液体废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告供应或移除质量，并声明浓度、稀释和回收量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 工厂接收的已备妥钢坯或其他准确识别的零件材料，并声明牌号、形态和上游路线 |
| starting_condition_role | 汽轮机零件前景制造的上游产品投入 |
| product_classification_scope | CPC 43153 所对应、专用于蒸汽轮机及其他汽轮机的单独交付零件 |
| recursive_input_rule | 属于本 PCR 类别的外购未完工零件只作为带上游数据集的可追溯产品投入记录一次，不在同一边界内递归重建。 |
| upstream_dataset_requirement | 所有跨界外购材料、化学品、能源载体和外包处理均须链接具代表性的上游数据集。 |
| disclosure | 声明成形、机加工、热处理、连接、涂层、清洗、检验、包装、废物处理和燃烧是前景、外购、排除还是不适用。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景边界 | 纳入从接收已声明投入至合格零件放行的场内交换；排除汽轮机装配、安装、使用和报废。 | `eu-jrc-sf-bref`; `us-doe-harsh-service-materials-2020` |
| `boundary_route_specific` | 制造路线 | 锻造、铸造、增材制造、热处理、连接和涂层仅在所声明路线实际发生时纳入；不得平均互斥路线。 | `eu-jrc-sf-bref`; `us-doe-harsh-service-materials-2020` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_part_manufacture` | 汽轮机零件一体化机加工与精整 | required | 始终纳入；下列条件性交换仅在其工序实际发生时记录 | 前景制造、精整、检验和放行 | 1 kg 合格零件净产出 |

### 过程：汽轮机零件一体化机加工与精整（`integrated_part_manufacture`）

#### 输入

##### 产品流

###### 已备妥机加工钢坯（`prepared_steel_blank`）

已备妥毛坯作为申报零件的主要材料投入跨越工厂边界。
- 选定流：机加工用钢坯 `a511bdc0-a8ac-443f-8dab-fc185d29aec3`
- 流属性/单位：Mass / kg
- 数量规则：实测批次投入减退回未用毛坯；声明合金牌号、锻造状态、尺寸、供应商和上游路线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格汽轮机零件净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 外购电力（`electricity`）

外购电力供应纳入的机器和辅助设备，并按申报生产批次采集。
- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量或按因果关系分配的 kWh 换算为 MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格汽轮机零件净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_records`
- 来源：

###### 场内加热用气态天然气（`natural_gas`）

仅当申报路线内的场内热工设备消耗天然气时，该流才跨越边界。
- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：声明参考条件下的计量用气；仅在场内炉窑或燃烧器服务该批次时记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格汽轮机零件净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_records`
- 来源：

###### 氧燃料作业用工业氧气（`industrial_oxygen`）

工业氧气仅因纳入的氧燃料切割或加热而跨越边界。
- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：计量、钢瓶核算或发票记录的氧气；仅在氧燃料切割或加热时记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格汽轮机零件净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gas_records`
- 来源：

###### 水洗用工艺用水（`process_water`）

工艺用水仅在纳入水洗或漂洗时跨越边界。
- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：供应水实测质量减单独计量的内部回用水；仅在水洗发生时记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格汽轮机零件净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liquid_input_records`
- 来源：

###### 碱洗用氢氧化钠（`sodium_hydroxide`）

氢氧化钠仅作为纳入碱洗槽的有效化学品投入跨越边界。
- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：投加并分配至批次的有效成分质量；仅在碱洗发生时记录
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格汽轮机零件净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_liquid_input_records`
- 来源：

###### 切削液补加（`cutting_fluid`）

新鲜切削液作为申报批次机加工的补加投入跨越边界。
- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：分配至批次的新鲜切削液或浓缩液当量补加实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格汽轮机零件净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_liquid_input_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格汽轮机零件（`reference_product`）

经检验和验收的零件作为参考产品离开本过程。
- 选定流：汽轮机成品零件
- 流属性/单位：Mass / kg
- 数量规则：经检验、验收且符合 CPC 43153 的净产出实测质量；归一化为 1 kg
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：按声明批次记录后归一化至 1 kg
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 机加工钢废料（`steel_machining_chips`）

钢切屑作为单独计量的废物交换离开机加工系统。
- 选定流：钢废料，机加工切屑 `c978e4fc-350b-4fb6-8021-90eb5a6ed034`
- 流属性/单位：Mass / kg
- 数量规则：转出批次的实测质量，并与材料平衡核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格汽轮机零件净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_balance`
- 来源：

###### 废切削液（`spent_cutting_fluid`）

废切削液离开机加工系统并进入所声明的处理或处置路线。
- 选定流：废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位：Mass / kg
- 数量规则：从机加工系统移除的实测质量；声明含水率、污染物和去向
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格汽轮机零件净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_liquid_records`
- 来源：

###### 废碱液（`waste_alkaline_liquor`）

废碱液作为单独计量的废物交换离开纳入的清洗槽。
- 选定流：废碱液 `ca310225-50c8-4d41-8353-4338b41e19a1`
- 流属性/单位：Mass / kg
- 数量规则：分配至批次的排放槽液实测质量；仅在碱洗发生时记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格汽轮机零件净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_liquid_records`
- 来源：

##### 基本流

###### 直接排放至空气的化石源二氧化碳（`fossil_carbon_dioxide`）

化石源二氧化碳由纳入的场内燃烧跨越环境边界。
- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：分配至批次的经核证或直接测量场内化石源 CO2；排除上游电力及外包工序排放
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格汽轮机零件净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emission_records`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 共享前景工序 | 分配前优先按批次、机器时间、计量或质量平衡细分。 |  |
| `allocation_shared_burdens` | 无法避免的共享负荷 | 采用有文件记录且具因果关系的物理驱动量；仅在没有更佳驱动量时用质量，并披露敏感性。 |  |
| `allocation_scrap` | 机加工钢屑 | 将切屑作为废物报告，不计入替代生产收益；收入及下游回收/处理另行披露。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `integrated_part_manufacture` | 毛坯、产品、切屑 | 秤量、领料、生产和转移记录 | 批次；零件；投入；退回；合格产出；切屑 | 经校准秤并与记录核对 | kg | 每批 | 完整期间 | 纳入工序 | 按批求和、扣除退回、除以合格产出 | 校准；核对；转移单 |
| `cp_electricity_records` | `integrated_part_manufacture` | 电力 | 电表及分配记录 | 电表；起止 kWh；机时；驱动量 | 分表或有文件记录的因果分配 | kWh | 班次或账期 | 完整期间 | 纳入设备 | 分配、按 `calc_electricity_mj` 换算并归一化 | 校准；发票；分配表 |
| `cp_gas_records` | `integrated_part_manufacture` | 天然气、氧气 | 流量计、钢瓶、供应商记录 | 身份；体积；温压；干湿基；分配 | 计量、钢瓶平衡或发票 | m3 | 批次或交付期 | 完整期间 | 纳入用气设备 | 参考条件换算及批次分配 | 证书；发票；换算记录 |
| `cp_liquid_input_records` | `integrated_part_manufacture` | 水、NaOH、切削液 | 计量、批记录、采购和补加记录 | 身份；质量；浓度；稀释；回收；批次 | 经校准仪表或秤 | kg | 每次事件 | 完整期间 | 纳入系统 | 汇总净新鲜投入、计算有效 NaOH 并归一化 | 校准；批记录；供应商规格 |
| `cp_waste_liquid_records` | `integrated_part_manufacture` | 废切削液、废碱液 | 储罐、容器、联单记录 | 身份；质量；含水率；化学组成；去向 | 经校准储罐或秤 | kg | 每次移除 | 完整期间 | 收集点 | 按身份和批次汇总并归一化 | 校准；联单；接收单 |
| `cp_direct_emission_records` | `integrated_part_manufacture` | 化石源 CO2 | 排放或烟道记录 | 排放源；化石归属；CO2；期间；驱动量 | 经核证监测及分配 | kg | 报告间隔 | 完整期间 | 纳入燃烧源 | 分配经核证 CO2 并归一化 | 监测 QA/QC；校准；核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 每项清单流 | 归一化量 = 批次交换量 / 批次合格净产出质量 | 交换量；合格产出 | 每 kg 参考产品交换量 |  |
| `calc_electricity_mj` | 电力 | MJ = kWh × 3.6 | 计量 kWh | MJ 交付电力 |  |
| `calc_active_sodium_hydroxide` | 氢氧化钠 | 有效 NaOH = 溶液质量 × 经核实质量分数 | 溶液质量；浓度 | kg 有效 NaOH |  |
| `calc_mass_balance` | 材料收率 | 差额 = 毛坯投入 − 退回毛坯 − 产品 − 切屑 − 其他已声明金属产出 | 实测质量 | 差额 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和材料 | 每批链接图样、材料证书、路线、热处理、验收放行及 CPC 43153 资格。 | 图样；证书；工艺流转卡；放行记录 |
| `dq_completeness` | 边界 | 核对期间内工序、外包、能源、材料、废物和直接排放。 | 边界清单；计量图；台账；登记表 |
| `dq_measurement` | 交换 | 使用经校准仪表或有文件记录的发票，并保留换算、分配及不确定性说明。 | 校准；发票；工作表；不确定性声明 |
| `dq_route_separation` | 变体 | 不同设计、材料、成形路线、热处理和涂层须分开，除非证明同质性并披露权重。 | 物料表；流转卡；同质性检验；权重记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 若未证明单独交付的蒸汽/其他汽轮机零件身份、材料/路线或 1 kg 净质量参考，则拒绝数据包。 | `un-cpc-3-0-structure-2025` |
| `validate_mass_balance` | 材料 | 调查并披露差额；不得将氧化皮、切屑、废品或退回材料隐藏在参考产品中。 |  |
| `validate_conditional_rows` | 条件性交换 | 条件性原子交换缺失时，须提供有文件记录的不适用说明。 | `eu-jrc-sf-bref` |
| `validate_uuid_semantics` | UUID 流 | 复核流类型、分类、属性、单位组、产品状态、地域、技术和 generalComment。 |  |
| `validate_ranges` | 定量 QA | 使用前景记录；无两项独立兼容原始来源或经审查数据集时不得添加外部数值范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已声明蒸汽/其他汽轮机零件及路线的从门到门前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 限定信息及上游链接匹配时用于产品特定 LCA、汽轮机系统建模、采购比较和供应链清单 |
| excluded_use | 完整汽轮机代表；通用机械零件代理；无限定的跨材料、跨路线、跨场址或修理件比较 |
| required_metadata | PCR id；零件/图样；CPC；材料/投入状态；路线；热处理；表面状态；场址；地域；期间；净/毛质量；包装；分配；上游数据集 |
| required_quality_disclosure | 测量覆盖；校准；材料平衡；分配；路线排除；外包阶段；UUID 与范围证据缺口；不确定性 |
| update_trigger | 设计、材料、投入路线、技术、热处理、表面状态、场址、能源、分配、废物路线或证据缺口发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 3.0 结构（2025年6月30日）》，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-05） | CPC 43153 身份及其与子类43141的关系 |
| `eu-jrc-sf-bref` | official_guidance | 欧盟委员会联合研究中心，《Best Available Techniques Reference Document for the Smitheries and Foundries Industry》，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry（检索于 2026-09-05） | 加热、金属处理、锻造、机加工、精整和热处理过程分解 |
| `us-doe-harsh-service-materials-2020` | official_guidance | 美国能源部，《2020 Workshop on Materials for Harsh Service Conditions》，https://www.energy.gov/sites/default/files/2021-04/Materials%20for%20Harsh%20Environments_%202020%20Virtual%20Workshop%20Summary%20Report.pdf（检索于 2026-09-05） | 汽轮机部件的锻造、机加工、连接、涂层和近净成形路线区分 |
