---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.waste-and-scrap-of-tungsten-molybdenum-tantalum-magnesium-cobalt-titanium-zirconium-ant-1d9f63f4
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 钨、钼、钽、镁、钴、钛、锆、锑、铍、铬、铊、镉的废料和碎料

## 1. 范围与适用性

本 PCR 适用于制备具有成分控制要求并可销售的废料和碎料批次，其声明的主要可回收金属或合金为钨、钼、钽、镁、钴、钛、锆、锑、铍、铬、铊或镉。前景边界从接收进厂废料开始，包括接收、称量、表征、分选、按路线有条件实施的非热机械制备、最终定级、集批及装载，终点为制备设施大门。

CPC 英文标题将 antimony 拼为“antinomy”；本 PCR 将其解释为化学元素锑，不另设材料身份。输出仍是为金属生产者制备的废料或碎料，而不是再生金属。冶金回收、焙烧、冶炼、熔化、精炼、合金制造、完整电池或电子设备处理、上游产品使用、进厂前收集和运输、场外残余物处理及出厂后运输不在前景边界内。数据集应声明进料属于新废料还是消费后废料；若无代表性论证，不得合并不同品级、主要金属、制备路线或危险组分状态。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.waste-and-scrap-of-tungsten-molybdenum-tantalum-magnesium-cobalt-titanium-zirconium-ant-1d9f63f4 |
| classification_refs | CPC 3.0：41609（语义完全对应；映射接受另行治理） |
| covered_products | 经定级及必要的非热机械制备后，以钨、钼、钽、镁、钴、钛、锆、锑、铍、铬、铊或镉为主要成分的可销售废料和碎料批次，包括已声明的这些金属的合金废料 |
| excluded_products | 贵金属废料；黑色金属废料；完整的原电池和蓄电池；未分选电子设备；不按所声明废料品级交易的含金属液体、污泥、炉渣、浮渣、袋式除尘灰及过程残余物；再生未锻轧金属；锻轧制品；金属陶瓷；未声明主要所列金属或合金的混合物 |
| representative_product | 在废料制备设施大门处满足已声明的买方、行业或设施规格并完成称量、定级的所列金属或合金制备废料批次 |
| production_route | 接受与表征、物理分选、按条件实施的非热尺寸减小或分离、最终定级、集批和装载；不包括冶金回收 |
| market_state | 散装块料、车屑、切屑、边角料、颗粒或压实件，并声明金属或合金品级、物理形态、水分、外来物含量、危险组分状态和交付形式 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一个具有成分控制要求、可由已声明金属生产者接收并进一步回收或制造的二次原料批次 |
| How much | 1 kg 制备后可销售废料和碎料的净质量 |
| How well | 满足已声明的金属或合金品级及买方、行业或设施规格，并具有实测或有文件依据的水分和外来物含量 |
| How long or cycle | 在设施大门完成的一个制备批次或发运批次；不赋予使用寿命 |
| reference_flow_link | `grading_dispatch` 的归一化输出 `reference_scrap_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 制备后所列金属废料和碎料 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 主要所列金属或合金及成分基准；新废料或消费后来源；来源行业；物理形态和粒径类别；品级或规格；毛重、皮重、净重、水分及外来物基准；危险组分与去污染状态；制备路线和设备；设施地域；时间覆盖；交付形式及所含包装 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_reference_net_mass` | 参考产品及所有固体材料交换 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准的毛重和皮重测量得到净质量。说明商业品级是否包含水分和附着的非金属材料；若无明确换算，不得混合干基与收到时基准的结果。 |
| `mu_electricity_energy` | 电力投入 | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表记录的原始单位，并严格按 3.6 MJ/kWh 将 kWh 换算为 MJ。仅计入可归属于所声明过程和期间的电量。 |
| `mu_water_mass` | 工艺用水投入 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先直接测量质量。测量体积时，应使用有文件记录的同期密度或有依据的水密度值换算，并保留原始体积记录。 |
| `mu_composition_basis` | 金属品级、水分和外来物结果 | 质量分数 | kg/kg | 各分数均按一种已声明的湿基或干基报告，注明试验或分选方法及取样方案，并与批次实测质量核对。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `sb_start_at_acceptance` | 前景起始条件 | 仅在设施已接收、称量并识别所列金属废料后开始前景边界。若研究纳入废料产生、收集、接收前所需去污染及进厂运输，应使用独立上游数据集建模。 | jrc-waste-treatment-bref-2018; us-epa-metal-shredders-2024 |
| `sb_include_preparation` | 前景作业 | 若由报告设施实施，应纳入接收和检查、表征和分选、材料搬运和储存、按路线实施的切割、剪切、破碎、筛分或物理分离、最终定级、集批及装载。 | us-epa-metal-shredders-2024 |
| `sb_exclude_recovery` | 下游转化 | 排除焙烧、冶炼、熔化、湿法冶金、精炼、合金制造及任何产生再生金属而非制备废料或碎料的转化。 | ec-jrc-non-ferrous-metals-bref-2016 |
| `sb_route_and_residue_disclosure` | 条件作业和处理 | 声明实际使用的每种制备技术并计量其交换，将每项外运残余物流连接至具体处理数据集。不得插入笼统的制备路线或笼统的废物处理过程。 | jrc-waste-treatment-bref-2018; us-epa-metal-shredders-2024 |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已接收并称量的进厂废料，且已记录主要所列金属或合金、来源、物理形态、污染、危险组分状态和水分基准 |
| starting_condition_role | 在废料制备设施大门接收的二次材料投入 |
| product_classification_scope | 以一种已声明所列金属或合金为主要成分并符合本 PCR 语义边界的废料和碎料；CPC 3.0 代码 41609 仅为分类参考，不是规范身份 |
| recursive_input_rule | 进料已符合本 PCR 类别时，仅引用供应数据集并记录其交付品级和状态；不得在接收数据集中递归重建供应方的制备过程 |
| upstream_dataset_requirement | 研究范围纳入相关交换时，应对废料产生或前处理、进厂运输、电力和水供应以及各残余物的场外处理采用地域与技术具有代表性的独立数据集 |
| disclosure | 披露主要金属或合金、来源和废料新旧类别、接收准则、物理形态、取样和分析方法、水分及外来物基准、制备路线、设施位置、报告期间、质量平衡、残余物去向、分配及排除的作业 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_sorting` | 接收、表征和分选 | `required` | 对接收的进厂废料始终纳入 | 确定已接收批次的身份、品级、质量和分选后中间体 | 离开该阶段的分选后废料 kg |
| `mechanical_preparation` | 非热机械制备 | `conditional` | 接收废料在销售前进行切割、剪切、破碎、筛分、物理分离或喷水时纳入 | 形成所需物理形态并分离不可销售组分 | 离开该阶段的制备后废料 kg |
| `grading_dispatch` | 最终定级、集批和发运 | `required` | 对可销售参考批次始终纳入 | 核验最终品级、确定参考质量、集批并装载 | 1 kg 可销售参考产品净质量 |

### 过程：接收、表征和分选（`receiving_sorting`）

#### 输入

##### 产品流

###### 接收和分选用外购电力（`receiving_sorting_electricity_input`）

电力用于称量、分析、输送、照明和动力分选设备并跨越过程边界。记录可归属于已接收批次的实测或有充分依据的分表电量。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：可归属于接收、表征和分选的实测电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_sorting`
- 来源：us-epa-metal-shredders-2024

##### 废物流

###### 已接收的未制备所列金属废料（`accepted_unprepared_scrap_input`）

这是前景分选或尺寸制备前已接收的进厂实物废物流。按批次记录，并将主要金属或合金、形态、污染、水分和来源与质量记录一并保存。

- 选定流：已接收的未制备所列金属废料和碎料
- 流属性/单位：质量 / kg
- 数量规则：由毛重和皮重得到并与批次库存变化核对的接收净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_sorting`
- 来源：jrc-waste-treatment-bref-2018; us-epa-metal-shredders-2024

##### 基本流

#### 输出

##### 产品流

###### 分选后所列金属废料中间体（`sorted_scrap_output`）

该内部中间体是已经表征和分选、但尚未完成所需尺寸或分离处理的已接收所列金属废料。依据实测批次转移量和库存变化计算。

- 选定流：分选后所列金属废料中间体
- 流属性/单位：质量 / kg
- 数量规则：根据批次转移记录和实测库存变化计算分选输出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_sorting`
- 来源：us-epa-metal-shredders-2024

##### 废物流

##### 基本流

### 过程：非热机械制备（`mechanical_preparation`）

#### 输入

##### 产品流

###### 转入制备的分选后废料（`sorted_scrap_input`）

仅在采用机械制备时，本行转移分选阶段的实测中间体。核对库存变化后，该值应等于 `receiving_sorting` 的相应转出量。

- 选定流：分选后所列金属废料中间体
- 流属性/单位：质量 / kg
- 数量规则：计算进入所纳入制备路线的阶段间转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_mechanical_preparation`
- 来源：us-epa-metal-shredders-2024

###### 机械制备用外购电力（`preparation_electricity_input`）

电力用于实际采用的切割、剪切、破碎、筛分、输送或物理分离设备并跨越边界。仅当该条件过程未纳入时记录为零，并说明路线判定。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：所纳入制备作业的实测或分表电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical_preparation`
- 来源：us-epa-metal-shredders-2024

###### 湿法分离或抑尘用工艺用水（`preparation_water_input`）

仅当声明的制备路线使用水进行湿式物理分离或抑尘时，工艺用水才跨越边界。循环水在补充水跨越设施边界前视为内部流动。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 / kg
- 数量规则：所纳入湿法分离或抑尘路线的实测补充水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical_preparation`
- 来源：us-epa-metal-shredders-2024

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制备后废料中间体（`prepared_scrap_output`）

该内部中间体是完成所纳入非热物理制备后的路线特定废料。依据称量的转移量和制备阶段质量平衡计算。

- 选定流：制备后所列金属废料中间体
- 流属性/单位：质量 / kg
- 数量规则：根据实测残余物和库存变化计算制备后输出质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_mechanical_preparation`
- 来源：us-epa-metal-shredders-2024

##### 废物流

###### 分离出的非金属残余物（`nonmetallic_separation_residue_output`）

记录在所纳入制备作业中从声明废料分离出的一个实物非金属残余物流。不得将其与含金属细料或场外处理服务合并。

- 选定流：所列金属废料制备产生的非金属分离残余物
- 流属性/单位：质量 / kg
- 数量规则：作业期间外运或计入场内库存的残余物称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical_preparation`
- 来源：us-epa-metal-shredders-2024

###### 制备产生的含金属细料（`metal_bearing_fines_output`）

单独记录物理收集的细料，该细料仍含一种或多种已声明所列金属并离开设施进行回收或处理。质量记录应附带金属或合金成分及去向。

- 选定流：机械废料制备产生的所列金属含金属细料
- 流属性/单位：质量 / kg
- 数量规则：作业期间外运或计入场内库存的细料称量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical_preparation`
- 来源：us-epa-metal-shredders-2024

##### 基本流

### 过程：最终定级、集批和发运（`grading_dispatch`）

#### 输入

##### 产品流

###### 转入最终定级的制备后废料（`prepared_scrap_input`）

该阶段间转移是提供给最终定级的制备后废料。机械制备不适用时，使用 `receiving_sorting` 经核对的分选输出并声明旁路。

- 选定流：制备后所列金属废料中间体
- 流属性/单位：质量 / kg
- 数量规则：计算进入发运批次的阶段间转移量，适用时包括有文件记录的过程旁路
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_grading_dispatch`
- 来源：us-epa-metal-shredders-2024

###### 定级和发运用外购电力（`dispatch_electricity_input`）

电力用于最终分析、称量、集批、输送和装载设备并跨越边界。共享电表数据按可审计的运行时间、处理量或分表基准分配。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：净热值 / MJ
- 数量规则：可归属于发运批次的实测或分配电量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_grading_dispatch`
- 来源：us-epa-metal-shredders-2024

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 制备后可销售所列金属废料和碎料（`reference_scrap_output`）

这是唯一的定量参考输出。最终品级核验后，将完整前景清单归一化至 1 kg 净质量，并保留发运批次的实际质量作为未归一化源记录。

- 选定流：制备后所列金属废料和碎料
- 流属性/单位：质量 / kg
- 数量规则：按 `cr_reference_normalization` 归一化后恰为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_grading_dispatch`
- 来源：unsd-cpc-3-0-structure-2025; us-epa-metal-shredders-2024

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_first` | 可独立测量的制备线和品级 | 当电表、批次记录或运行日志可以区分声明的金属或合金品级和路线时，应通过细分接收、制备和发运作业避免分配。 |  |
| `al_shared_operations` | 电力和共享搬运 | 仅对真正共享的作业实施分配，并依次优先采用因果分表、运行时间、设备处理量或处理净质量基准；报告分配因子和受影响交换。 |  |
| `al_multiple_saleable_grades` | 多个可销售废料品级 | 单独称量的可销售品级应作为不同产品输出保留。无法细分时，按可销售干质量分配共享负荷；若价格差异可能改变结论，报告按经济价值分配的敏感性情景。 |  |
| `al_incoming_scrap_burden` | 进厂废料和碎料 | 说明研究如何处理设施接收前的负荷。不得默认赋予零上游负荷、原生金属替代收益或寿命终结回收收益；此类约定只能在下游研究中采用，并与本前景清单分开披露。 |  |
| `al_residue_no_credit` | 非金属残余物和含金属细料 | 明确建模每个外运流及其接收处理或回收数据集。在确定接收过程和分配约定前不得计入回收收益。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_sorting` | `receiving_sorting` | 接收投入、电力和分选转移 | 过磅单、接收记录、成分或品级试验、库存日志、电表 | 批次编号；供应商和来源；毛重；皮重；水分基准；主要金属或合金；成分结果；物理形态；外来物；危险组分状态；接收决定；期初和期末库存；电表起止读数 | 经校准称量，以及有文件记录的取样、分析、检查、批次追踪和分表或有充分依据的电表分配 | kg；质量分数；kWh 或 MJ | 每个接收批次和电表区间 | 至少一个有代表性的连续 12 个月；较短作业采用完整期间 | 为声明产品供料的全部接收和分选作业 | 按同质的声明品级和路线汇总接收与转移净质量，核对库存变化；汇总可归属电量，并在最终输出确定后归一化 | 衡器和电表校准；取样方案；分析方法；接收检查表；批次台账；库存核对 |
| `cp_mechanical_preparation` | `mechanical_preparation` | 阶段间投入、电力、水、制备后输出、残余物和细料 | 批次转移单、设备电表、水表、残余物过磅单、库存日志 | 批次编号；路线和设备；投入质量；输出质量；残余物质量；细料质量；期初和期末库存；电表读数；水表读数；循环状态；去向 | 称量每次材料转移，并对所纳入作业的电力和跨边界补充水计量 | kg；kWh 或 MJ | 每个制备批次和电表区间 | 与所代表发运批次相同的期间 | 全部纳入的非热机械制备设备 | 按路线核对投入、输出、残余物和库存变化；汇总能源和补充水；确认代表性前不得合并不同技术 | 衡器和仪表校准；路线日志；维护和停机日志；残余物去向记录；签署的质量平衡复核 |
| `cp_grading_dispatch` | `grading_dispatch` | 制备后投入、发运电力和参考输出 | 转移单、最终品级证书、发运过磅单、电表、装载日志 | 发运批次编号；关联投入批次；主要金属或合金；成分和品级；毛重；皮重；净重；水分和外来物基准；物理和交付形式；电表读数；客户规格；发运日期 | 经校准的最终称量、有文件记录的取样或检查、批次关联和分表或有充分依据的电表分配 | kg；质量分数；kWh 或 MJ | 每个发运批次和电表区间 | 至少一个有代表性的连续 12 个月；较短作业采用完整期间 | 声明产品的全部最终定级、集批和装载作业 | 仅汇总符合相同声明产品边界的同质批次；按可销售输出净质量归一化全部关联交换 | 衡器和电表校准；品级证书；监管链；客户或设施规格；批次至发运核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_net_mass` | 每个称量批次或流 | 净质量 = 毛重 - 皮重；仅在声明的商业基准要求时校正水分或外来物，并同时保留原始值和校正值 | 毛重；皮重；声明基准；水分和外来物结果 | 声明基准下的净质量 kg |  |
| `cr_stage_mass_balance` | `receiving_sorting` 和 `mechanical_preparation` | 投入 + 期初库存 = 产品转移 + 非金属残余物 + 含金属细料 + 其他明确识别的输出 + 期末库存；调查无法解释的差额，不得用分配消除 | 实测投入、输出和库存变化 | 经核对的批次质量平衡及无法解释的差额 |  |
| `cr_electricity_conversion` | 所有电力投入 | 电量_MJ = 电量_kWh × 3.6 | 可归属的实测 kWh | 电力 MJ |  |
| `cr_water_conversion` | `preparation_water_input` | 水质量 = 实测水体积 × 有文件记录的密度；仅当回收水作为独立交换向外跨越边界时扣除其实测量 | 跨边界补充水体积；密度；任何单独测量的外送回收水 | 工艺用水投入 kg |  |
| `cr_reference_normalization` | 完整前景数据包 | 归一化交换 = 经核对的交换量 / 合格 `reference_scrap_output` 的净质量 | 全部经核对交换；发运批次可销售净质量 | 每 1 kg 参考产品的各项交换 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 每个代表批次 | 识别主要所列金属或合金、成分基准、来源、物理形态、品级、制备路线和危险组分状态；不得使用笼统的混合金属身份。 | 供应商记录、接收记录、取样方案、试验或检查结果和品级证书 |
| `dq_measurement` | 质量、电力、水和成分 | 使用在有效量程内的经校准设备，并保留原始读数、单位换算、不确定度或精度信息及校准状态。 | 校准证书、仪表日志、实验室质量记录和换算工作表 |
| `dq_temporal` | 年度或作业数据集 | 尽可能覆盖有代表性的连续 12 个月；否则覆盖完整作业期，并说明季节性、停机、库存变化和期间较短的原因。 | 注明日期的批次台账、生产日历、库存核对和代表性评估 |
| `dq_completeness` | 设施前景清单 | 将每个接收批次与可销售输出、分别识别的残余物、细料、其他实物输出和库存变化核对；调查缺失流。 | 已签署的过程阶段和设施质量平衡 |
| `dq_route_specificity` | 条件机械制备 | 对旁路、剪切、破碎、筛分、湿法分离及其他有实质差异的路线分别记录，除非有文件证明加权汇总仍具代表性。 | 路线日志、设备记录、仪表分配和汇总理由 |
| `dq_destination` | 外运残余物和细料 | 记录物理状态、相关时的声明成分、废物或产品状态、接收方、运输交接及处理或回收路线。 | 过磅单、转移文件、接收方记录和关联处理数据集 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `vr_identity_complete` | 参考流和前景数据包 | 缺失主要所列金属或合金、来源、物理形态、品级或规格、水分和外来物基准、危险组分状态、制备路线、地域或报告期间时，校验失败。 | unsd-cpc-3-0-structure-2025 |
| `vr_reference_output` | `reference_scrap_output` | 确认唯一的定量参考输出归一化后恰为 1 kg，且未归一化发运批次的净质量为正并可追溯。 |  |
| `vr_mass_balance` | 各过程阶段和设施总计 | 核对质量平衡方程，报告无法解释差额的带符号值和绝对值；应按研究规定的容差调查，不得插入平衡流。 |  |
| `vr_conditional_route` | `mechanical_preparation` 及其交换 | 仅在具体路线实际发生时纳入制备电力、水、残余物和细料；省略条件过程时须明确声明旁路。 | us-epa-metal-shredders-2024 |
| `vr_energy_units` | 电力投入 | 使用 3.6 MJ/kWh 复算每项 kWh 至 MJ 换算，并拒绝不同单位未经换算直接求和。 |  |
| `vr_no_double_count` | 阶段间和上游连接 | 确认每项内部转移作为一次输出及其对应的一次输入出现，且设施净清单不重复相加；确认上游供应和场外处理采用连接而非在前景过程中重复建模。 |  |
| `vr_uuid_status` | 参考流和清单流 | 将 UUID 为空的行视为身份未解决。不得以笼统金属废料、混合废料、贵金属废料、黑色金属废料或非金属废物替代语义完全对应的流。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；仅在代表性和审查有文件记录后方可用作 `background_dataset` |
| downstream_use | 需要废料制备设施大门处制备后所列金属废料的前景过程数据集和生命周期模型 |
| allowed_use | 主要金属或合金、品级、来源、物理形态、制备路线、地域、期间、水分基准、外来物基准及负荷约定与数据集相符的研究 |
| excluded_use | 笼统混合金属废料；贵金属或黑色金属废料；完整电池或电子设备；冶金回收；无独立下游约定的替代或原生金属避免收益；无代表性评估的地域或技术 |
| required_metadata | 规范 PCR id；主要金属或合金及成分；新废料或消费后来源；来源行业；品级或规格；物理和交付形式；水分及外来物基准；危险组分状态；制备路线和设备；设施地域；报告期间；参考质量；分配；source_ids；未解决 UUID 披露 |
| required_quality_disclosure | 取样和分析方法；衡器和仪表校准；时间与技术覆盖；批次至发运关联；过程和设施质量平衡；无法解释的差额；路线汇总；残余物去向；数据缺口；不确定度；审查状态 |
| update_trigger | 主要金属或合金、接收来源组合、品级规格、物理形态、污染或水分基准、制备技术、设施、电力或水供应、残余物去向、分配规则、报告期间或参考流 UUID 解决状态发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，《CPC 第 3.0 版结构》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-06-23；SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`） | CPC 41609 的正式分类身份和层级；不作为定量证据 |
| `jrc-waste-treatment-bref-2018` | `official_guidance` | 欧盟委员会联合研究中心，《废物处理最佳可行技术参考文件》网页，2018 年 10 月发布，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/waste-treatment-0（检索日期 2026-09-04） | 废物接收、取样、检查、分析、转移、搬运和储存过程覆盖 |
| `ec-jrc-non-ferrous-metals-bref-2016` | `official_guidance` | 欧盟委员会联合研究中心，《有色金属工业最佳可行技术参考文件》网页，2016 年 6 月通过，https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/non-ferrous-metals-industries-0（检索日期 2026-09-04） | 区分二次有色金属生产与废料制备 |
| `us-epa-metal-shredders-2024` | `official_guidance` | 美国环境保护署，《清洁空气法许可中金属破碎设施的最佳实践》，2024 年 8 月，https://19january2025snapshot.epa.gov/system/files/documents/2024-09/metal-shredders-best-practices_08-2024.pdf（检索日期 2026-09-04） | 接收和检查、接收控制、分选、尺寸制备、分离、材料搬运、水抑尘、残余物管理、定级、装载及场址特定排放数据要求；不作为数量范围 |
