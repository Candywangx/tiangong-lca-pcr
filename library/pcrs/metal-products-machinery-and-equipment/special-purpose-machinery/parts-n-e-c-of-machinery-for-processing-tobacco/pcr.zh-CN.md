---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-n-e-c-of-machinery-for-processing-tobacco
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未另列明的加工烟草用机械的零件

## 1. 范围与适用性

本规则适用于已验收、单独供应且明确用于烟草加工机械的零件在制造厂门口的生产。应明确零件、图纸或件号、材料牌号、适配机器、制造路线及验收状态。机加工合金钢零件是代表性路线；清单卡片逐项列出该路线的具体交换。若本类别中的实际零件采用另一种经核实的材料或路线，数据编制者须在使用数据集前补充同样具体的交换及路线记录。所引金属加工资料支持适用的过程与采集要求，不能作为所有烟草机械零件的通用配方或数值基准。[来源：`un-cpc-3-2025-notes`、`eu-pef-2021-annex-i`、`us-epa-clean-lines-2007`、`djordjevic-2018-conveyor`]

整台烟草加工机械、食品或谷物机械零件、通用包装机零件、烟草原料、安装、机器运行、维修服务以及零件废弃处理，均不属于本产品规则。仅用于包装的零件，若无证据表明其为烟草加工机械零件，不纳入本类别。[来源：`un-cpc-3-2025-notes`]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-n-e-c-of-machinery-for-processing-tobacco |
| classification_refs | CPC 3.0 44523，未另列明的加工烟草用机械的零件；分类代码不决定前景制造路线。 |
| covered_products | 经确认用于烟草加工机械并单独供应的合格零件；包括有机器用途记录的机加工金属备件。 |
| excluded_products | 整机、食品或谷物机械零件、缺乏烟草加工用途证据的通用包装机零件、烟草原料，以及不拥有零件所有权的加工服务。 |
| representative_product | 一个经检验合格的机加工合金钢零件，声明图纸、牌号及适配的烟草加工机械。 |
| production_route | 声明厂区的进料和外购部件、制造或机加工、检验，以及有条件适用的包装；披露外协工序。 |
| market_state | 准备离开生产厂门口的合格成品零件；其净质量不含运输包装。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产一个经检验合格的烟草加工机械成品零件。 |
| How much | 一个验收成品单元，其净质量为 M kg。 |
| How well | 符合声明的图纸、材料牌号、尺寸和验收记录。 |
| How long or cycle | 一个生产和验收周期；使用寿命不属于厂门口模型。 |
| reference_flow_link | finished_part |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 未另列明的加工烟草用机械的零件 `19c3afd3-63c6-43fa-8d60-03b77f0370ce` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件名称、图纸或件号；适配的加工机械及用途；材料牌号；配置；生产路线和场址；验收状态；测得的净质量 M；报告期。 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `one_unit_basis` | 所有清单行 | 各原子流声明的属性 | 各原子流声明的单位 | 按同一配置的每台验收成品设备采集各项交换；保留原始计量或称重记录，以及共用生产记录的分摊依据。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明材料及外购部件到达生产者收货门口时的状态，包括牌号、前期加工、供应商和数量。 |
| starting_condition_role | 前景零件制造从收到的材料和部件开始；其上游生产由相连的背景数据集表示。 |
| product_classification_scope | 经检验合格的烟草加工机械零件，与投入品所用的具体 CPC 代码无关。 |
| recursive_input_rule | 同一类别的外购零件作为有计量值的产品投入并连接其供应商数据集；在该投入处停止产品类别递归追溯。 |
| upstream_dataset_requirement | 为材料、外购部件、电力、包装和废物处理连接地理位置及技术适用的上游数据集。 |
| disclosure | 披露收货状态、外协工序、场址、报告期、路线、排除的阶段和未建模交换。 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_gate` | 前景生产 | 纳入从投入品入厂到合格零件离厂期间的现场制造、机加工、检验、厂内搬运、有条件适用的包装及制造废物。 | `eu-pef-2021-annex-i`; `us-epa-clean-lines-2007` |
| `boundary_upstream` | 产品投入 | 通过相连数据集纳入上游生产与入厂运输；其数量与现场制造记录分别保存。 | `eu-pef-2021-annex-i` |
| `boundary_exclusions` | 后续生命周期阶段 | 本从摇篮到厂门口的结果不含离厂后配送、安装、机器使用、维修和寿命终结；披露这些排除项。 | `eu-pef-2021-annex-i`; `djordjevic-2018-conveyor` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `part_fabrication` | 零件制造、检验及发运准备 | required | 声明的生产场址制造该合格零件。 | 前景生产；仅在使用相应路线时纳入切削油和瓦楞纸箱交换。 | 同一配置的一个验收成品单元。 |

### 过程：零件制造、检验及发运准备（`part_fabrication`）

#### 输入

##### 产品流

###### 合金钢棒材投入（`alloy_steel_bar`）

对于代表性的机加工金属路线，记录跨越收货门口的热轧合金钢棒材。采用实际牌号和采购质量；仅在零件物料清单确认采用这种棒材时适用此行。[来源：`us-epa-clean-lines-2007`、`djordjevic-2018-conveyor`]

- 选定流：除锻造、热轧、热拉拔或挤压外未经进一步加工的合金钢条和杆（高速钢或硅锰钢条或杆除外） `c11c7e9a-d020-4b89-a50c-4a82c0f76943`
- 流属性/单位：质量 / kg
- 数量规则：归属于每台验收成品设备的实测合金钢棒材投入；将不合格件消耗的材料计入分子，分母仅用合格件数。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_alloy_bar`
- 来源：`us-epa-clean-lines-2007`; `djordjevic-2018-conveyor`

###### 外购电力（`purchased_electricity`）

记录归属于零件制造、检验及发运准备的计量交流电力，保留电表边界和共用电表的分摊记录。[来源：`eu-pef-2021-annex-i`、`djordjevic-2018-conveyor`]

- 选定流：电力 `b989a649-ca09-44b8-abab-a069148d0b1e`
- 流属性/单位：净热值 / MJ
- 数量规则：归属于每台验收成品设备的外购电力计量能量，单位 MJ。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`djordjevic-2018-conveyor`

###### 矿物油基切削液（`mineral_oil_cutting_fluid`）

仅当声明的机加工路线使用矿物油基切削液时，单独纳入这种配制液投入；记录进入过程的补加量，不把循环存量当作消耗量。该流的天工数据库精确公开身份尚未解决。[来源：`us-epa-clean-lines-2007`]

- 选定流：矿物油基切削液
- 流属性/单位：质量 / kg
- 数量规则：使用这种切削液进行湿式机加工时，归属于每台验收成品设备的实测净补加量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_fluid`
- 来源：`us-epa-clean-lines-2007`

###### 瓦楞运输纸箱（`corrugated_box`）

仅在合格零件使用瓦楞纸箱发运时计入纸箱质量；说明一个纸箱容纳多个零件时的分摊。[来源：`eu-pef-2021-annex-i`]

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：质量 / kg
- 数量规则：使用这种包装时，归属于每台验收成品设备的实测瓦楞纸箱质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_box`
- 来源：`eu-pef-2021-annex-i`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收成品零件（`finished_part`）

合格零件是参考输出。仅记录声明配置下的实测零件净质量，不含运输包装。[来源：`un-cpc-3-2025-notes`]

- 选定流：未另列明的加工烟草用机械的零件 `19c3afd3-63c6-43fa-8d60-03b77f0370ce`
- 流属性/单位：质量 / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`un-cpc-3-2025-notes`

##### 废物流

###### 钢机加工切屑（`steel_machining_chips`）

记录从合金钢工件去除并送往实际废物处理或回收路线的切屑。若污染与洁净切屑的处理不同，生产记录应将两者分开。[来源：`us-epa-clean-lines-2007`]

- 选定流：钢废料，机加工切屑 `c978e4fc-350b-4fb6-8021-90eb5a6ed034`
- 流属性/单位：质量 / kg
- 数量规则：归属于每台验收成品设备的称重钢机加工切屑废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chips`
- 来源：`us-epa-clean-lines-2007`

###### 废切削油（`spent_cutting_oil`）

仅在使用矿物油基切削液且有单独收集的废油流离厂时纳入此废物。记录处理方式及切屑夹带的油量。[来源：`us-epa-clean-lines-2007`]

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：质量 / kg
- 数量规则：存在这一废物流时，归属于每台验收成品设备的称重废切削油。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每台验收成品设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spent_oil`
- 来源：`us-epa-clean-lines-2007`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_direct` | 零件制造 | 在记录允许的情况下，将材料、能源、包装和废物直接归属于声明的零件配置。 | `eu-pef-2021-annex-i` |
| `allocation_shared` | 共用设备和电表 | 对共用记录，说明物理分配依据和验收单元分母；在将交换归属于该零件前，保留未分配总量和核对结果。 | `eu-pef-2021-annex-i` |
| `allocation_scrap` | 切屑和废油 | 记录离厂废物质量及其实际处理路线；不得悄然扣减回收抵扣，也不得将同一切屑质量同时记为保留产品与废物。 | `eu-pef-2021-annex-i`; `us-epa-clean-lines-2007` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `part_fabrication` | 验收参考产品 | 验收和称重记录 | 型号；配置；序列号；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每个合格配置或代表性验收单元 | 声明的报告期 | 生产场址 | M = 同一配置的一台完整设备的验收净质量 | 秤校准记录；验收与配置记录 |
| `cp_alloy_bar` | `part_fabrication` | 合金钢棒材投入 | 采购与领用记录 | 材料牌号；坯料形态；收货质量；领用质量；不合格件数；合格件数 | 核对声明配置的收货量和生产领用质量。 | kg | 每生产批次 | 声明的报告期 | 生产场址 | 分配合金钢棒材质量 / 验收设备数量 | 供应商牌号证明；库存和批次核对 |
| `cp_electricity` | `part_fabrication` | 外购电力 | 电表和生产日志 | 电表边界；用电 MJ；验收设备数量；设备运行期 | 读取经校准的电表，并记录共用电表的分配方法。 | MJ | 每生产批次 | 声明的报告期 | 生产场址 | 分配电量 / 验收设备数量 | 电表校准；读数及分配日志 |
| `cp_cutting_fluid` | `part_fabrication` | 矿物油基切削液 | 领用和补加日志 | 切削液配方；补加质量；验收设备数量；湿式机加工状态 | 称量或核对新液领用量，并扣除未使用退回量。 | kg | 每个湿式机加工生产批次 | 声明的报告期 | 生产场址 | 分配切削液补加量 / 验收设备数量 | 领用记录；配方标识；库存核对 |
| `cp_box` | `part_fabrication` | 瓦楞运输纸箱 | 包装领用日志 | 纸箱规格；纸箱质量；包装的验收设备数量 | 称量纸箱或采用可追溯的供应商单箱质量，并核对包装件数。 | kg | 每包装批次 | 声明的报告期 | 生产场址 | 分配瓦楞纸箱质量 / 验收设备数量 | 供应商规格；包装领用记录 |
| `cp_chips` | `part_fabrication` | 钢机加工切屑 | 废料称重和出厂日志 | 切屑质量；金属牌号；污染状态；验收设备数量；去向 | 称量收集的切屑，核对厂内存量及出厂数量。 | kg | 每生产批次 | 声明的报告期 | 生产场址 | 分配钢切屑质量 / 验收设备数量 | 地磅单；废料和去向记录 |
| `cp_spent_oil` | `part_fabrication` | 废切削油 | 废物贮存和出厂日志 | 废油质量；切削液身份；验收设备数量；处理去向 | 称量单独收集的废油，核对贮存及出厂量。 | kg | 每次废物出厂及生产批次 | 声明的报告期 | 生产场址 | 分配废切削油质量 / 验收设备数量 | 废物联单；称重及处理记录 |

### 计算规则

采集协议将各项实测交换直接分配至每个验收单元。本规则不规定外部单件系数或件数到质量的换算；实测净质量 M 仍为该单元的参考数量。

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | 成品零件与投入品 | 保存图纸、适配机器、材料牌号、路线、验收状态和供应商身份。 | 批准的图纸、物料清单、验收与供应商记录。 |
| `quality_coverage` | 前景交换 | 按相同期间和配置核对材料投入、合格零件质量、不合格件、切屑及其他已记录废物；解释差额。 | 批次质量平衡和库存核对。 |
| `quality_time` | 电表与废物记录 | 使用统一的声明报告期，说明共用能源和废物对合格单元的分配。 | 有日期的电表、生产和废物日志。 |
| `quality_uncertainty` | 未核实数量和背景数据 | 披露估算、缺失的精确流身份、数据时效、地理与技术不匹配以及排除阶段。 | 数据质量声明和来源文件。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_part` | 参考输出 | 若缺少适配的烟草加工机械、零件标识、验收配置或实测净质量 M，则不接受该数据集。 | `un-cpc-3-2025-notes` |
| `validate_exchange` | 每个清单行 | 核对方向、物理流类型、属性、单位、纳入条件、采集协议及单个验收单元基准；在确认精确身份前，未解决的 UUID 保持空白。 | `eu-pef-2021-annex-i` |
| `validate_balance` | 金属路线 | 核对记录的合金钢投入、合格零件质量、切屑、不合格件和库存变化；不虚构成品率或废料范围。 | `us-epa-clean-lines-2007` |
| `validate_waste` | 有条件适用的切削油路线 | 只有有文件证明湿式机加工产生废切削油时才纳入该废物；保留处理证据，避免切屑或油的重复计量。 | `us-epa-clean-lines-2007` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对一个声明的合格零件配置的前景单元过程数据包。 |
| downstream_use | 连接至 process 和 lifecyclemodel，用于单独供应零件的厂门口评估。 |
| allowed_use | 产品和流身份经核实的配置特定制造清单。 |
| excluded_use | 所有烟草机械零件的通用数值基准，或使用阶段与寿命终结结果。 |
| required_metadata | 零件及机器身份；图纸；牌号；路线；场址；报告期；实测 M；供应商；纳入条件。 |
| required_quality_disclosure | 测量记录、共用记录分配、缺失或代理背景数据，以及未解决的切削液 UUID。 |
| update_trigger | 零件配置、材料、路线、场址、报告期、供应商、流身份或实测清单发生变化。 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-3-2025-notes` | official_guidance | CPC Ver. 3.0 Explanatory Notes，联合国统计司，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 产品边界及相邻机械和零件次级。 |
| `eu-pef-2021-annex-i` | official_guidance | Annex I. Product Environmental Footprint Method，欧盟委员会，2021，https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 制造阶段边界、上游投入、废物和前景数据披露。 |
| `us-epa-clean-lines-2007` | official_guidance | Clean Lines: Strategies for Reducing Your Environmental Footprint — Metal Fabrication Operations，美国环境保护署，2007-11，https://www.epa.gov/sites/default/files/2015-03/documents/fabrication.pdf | 适用的机加工、切屑和切削液过程分解；未采用数值基准。 |
| `djordjevic-2018-conveyor` | literature | LCA of the Manufacturing Stage of the Laboratory Belt Conveyor，FME Transactions 46(3)，2018，https://www.mas.bg.ac.rs/_media/istrazivanje/fme/vol46/3/18_m_djordjevic_et.pdf | 机械制造和电力记录方法类比；产品不同，不移用定量数值。 |
