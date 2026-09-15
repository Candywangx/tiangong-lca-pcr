---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-non-musical-audio-discs-and-tapes
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他非音乐类音频光盘和磁带

## 1. 范围与适用性

本 PCR 适用于以非音乐音频为主要内容、在录制或复制设施出厂门口交付的成品已记录实体光盘和磁带。涵盖的内容包括有声读物以外的口述节目、教学或培训音频、讲座、引导式音频、通知播报以及以实体光盘或磁带交付的音效或环境声集合。

本 PCR 不包括音乐录音、有声读物、文本类载体、视频载体、封装软件、作为最终产品销售的空白或未记录载体、内容创作和原始母版制作服务、播放或录音设备，以及下载、流媒体或其他非实体音频。零售和配送包装不属于参考产品；研究若将其纳入，应把每个实际包装组件作为单独的前景流加入。

光盘路线和磁带路线互为替代路线。数据包应声明一种格式，并且只纳入该路线适用的空白载体和不合格品行；不得构造“格式×包装”或其他笛卡尔积式清单。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-non-musical-audio-discs-and-tapes |
| classification_refs | CPC 3.0：47699，其他非音乐类音频光盘和磁带（`un-cpc-3-0-structure-2025`） |
| covered_products | 以有声读物以外的非音乐音频为主要内容的成品已记录光盘或磁带 |
| excluded_products | 音乐音频载体；有声读物；文本、视频或软件载体；未记录载体；纯数字音频；录音或播放设备；零售和配送包装 |
| representative_product | 经质量检验合格、可从录制或复制设施出厂的已记录实体音频光盘或磁带 |
| production_route | 接收经验证的数字或实体音频母版和兼容的未记录载体；按路线录制或复制；验证；后整理；在设施门口放行 |
| market_state | 经质量检验合格的已记录成品载体，位于可选零售或配送包装之前 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以声明的实体光盘或磁带格式提供非音乐录音音频 |
| How much | 1 kg 已记录成品载体净质量 |
| How well | 与声明的播放格式兼容，并通过生产者记录的内容完整性和播放检查 |
| How long or cycle | 一次工厂门口生产输出；录音播放时长和存储容量是必需限定信息，不是归一化分母 |
| reference_flow_link | `finished_non_musical_audio_media` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 其他非音乐类音频光盘和磁带 `c034b78e-2758-4e41-a0dd-6932715d2beb` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实体格式及格式规范；光盘或磁带路线；录音内容类别；播放时长；适用时的存储容量；录制或复制技术；场址和地理区域；生产期间；产品净质量；质量检验接收准则；包装排除说明或包装单独建模说明 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考成品以及以质量计量的材料或不合格品行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在录制、验证和后整理完成后，用经校准的秤确定净质量。参考产品质量不包括零售和配送包装。 |
| `count_to_mass` | 以件数记录的生产数据 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅可使用同一生产批次实测的格式特定平均净质量把件数换算为质量；保留件数、抽样质量、样本量和计算过程。 |
| `electricity_energy` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 记录纳入批次的交付电力。保留电表 kWh 原始值；投影清单以 MJ 表示时按 1 kWh = 3.6 MJ 换算。 |

## 5. 系统边界

前景边界从接收经验证的音频母版和兼容的未记录光学介质或磁性介质开始。边界包括录制或复制、内容与播放验证、设施内开展的路线特定后整理，以及不合格已记录载体的处理，直至废物跨越前景边界。未记录载体和电力的上游生产及交付由关联的背景数据集表示。

内容创作和原始母版制作、资本设备、员工出行、零售或配送包装、出厂后配送、播放、使用期间存储以及销售后的生命末期均不在本边界内；研究明确扩展范围时，应单独报告这些过程。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 经验证的音频母版以及与格式兼容的未记录光学介质或未记录磁性介质已送达录制或复制设施 |
| starting_condition_role | 前景生产从录制或复制开始；录音节目的创作和空白载体生产属于上游条件 |
| product_classification_scope | 符合 CPC 3.0 代码 47699 语义边界的实体成品载体；排除同级有声读物、文本、音乐、视频、软件和未记录载体类别 |
| recursive_input_rule | 先前已记录的 CPC 47699 载体若作为生产投入重复使用，应以该具体投入及其供应商数据集和用途记录；不得将其改标为空白载体或静默递归为参考输出 |
| upstream_dataset_requirement | 未记录载体和交付电力应使用与地理区域、技术、格式及交付边界兼容的数据集；披露任何代理及其重要性 |
| disclosure | 声明格式、路线、母版交接点、录制或复制技术、纳入的后整理步骤、不合格品处理交接点、包装处理、地理区域、场址和生产期间 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | 前景设施门口 | 纳入把声明的未记录载体转化为合格成品所需的全部录制或复制、验证及现场后整理作业。 |  |
| `boundary_rule_2` | 上游供应 | 将每项未记录载体和电力投入关联到兼容的上游数据集；不得再次把上游排放导入为直接前景交换。 |  |
| `boundary_rule_3` | 替代格式 | 光学路线和磁性路线作为替代路线建模；仅纳入声明实体格式适用的空白载体和不合格品行。 |  |
| `boundary_rule_4` | 包装 | 参考产品质量不包括零售和配送包装；研究纳入包装时，应把每个实际包装组件作为原子前景流，并声明扩展后的边界。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `recording_finishing` | 实体音频载体的录制、验证与后整理 | required | 始终纳入；路线特定行仅适用于声明的光盘或磁带格式 | 前景生产 | 1 kg 经接收的已记录成品载体 |

### 过程：实体音频载体的录制、验证与后整理（`recording_finishing`）

#### 输入

##### 产品流

###### 光盘路线使用的未记录光学介质（`unrecorded_optical_media`）

记录进入纳入批次且兼容的未记录光学介质净质量。本行仅在声明的成品格式为光盘时适用。

- 选定流：未记录的光学介质 `714535e8-24d4-44bf-8496-4837f638fdd4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测的批次未记录光学介质投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：光盘路线每 1 kg 经接收的已记录成品载体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_campaign_mass_balance`

###### 磁带路线使用的未记录磁性介质（`unrecorded_magnetic_media`）

记录进入纳入批次且兼容的未记录磁性介质净质量。本行仅在声明的成品格式为磁带时适用。

- 选定流：未记录的磁性介质，带磁条的卡除外 `40bcd8b1-541d-4314-9e57-fc1250fd692e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测的批次未记录磁性介质投入质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：磁带路线每 1 kg 经接收的已记录成品载体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_campaign_mass_balance`

###### 录制和验证的交付电力（`recording_electricity`）

记录纳入批次中录制或复制、验证、后整理以及可归属辅助设备消耗的交付电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- 数量规则：批次计量电力扣除有记录的非生产负荷；共用电表无法细分时按第 7 节分配
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 经接收的已记录成品载体
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_campaign_electricity`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 经接收的非音乐类音频成品载体（`finished_non_musical_audio_media`）

仅记录通过声明的内容完整性和播放接收检查，并且符合第 1 节产品边界的载体。

- 选定流：其他非音乐类音频光盘和磁带 `c034b78e-2758-4e41-a0dd-6932715d2beb`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次归一化后恰为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：PCR 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_campaign_mass_balance`

##### 废物流

###### 不合格已记录光学介质（`optical_media_reject`）

光盘路线使用时，记录因内容完整性、播放或后整理检查而拒收的已记录光学介质质量。下游废物处理作为单独的关联过程或数据集。

- 选定流：不合格已记录光学介质
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：跨越前景边界的光盘路线不合格品实测质量或质量平衡核算质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：光盘路线每 1 kg 经接收的已记录成品载体
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_campaign_mass_balance`

###### 不合格已记录磁性介质（`magnetic_media_reject`）

磁带路线使用时，记录因内容完整性、播放或后整理检查而拒收的已记录磁性介质质量。下游废物处理作为单独的关联过程或数据集。

- 选定流：不合格已记录磁性介质
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：跨越前景边界的磁带路线不合格品实测质量或质量平衡核算质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：磁带路线每 1 kg 经接收的已记录成品载体
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_campaign_mass_balance`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | 共用设备和电表 | 通过记录路线、生产线、批次或时间分辨的活动避免分配。归一化之前，扣除有记录的空闲和非生产负荷。 |  |
| `allocation_rule_2` | 同一批次的多种已记录载体产品 | 无法细分且产品使用相同作业时，按经接收的成品质量分配共用负荷；分别计量的路线特定投入和不合格品仍直接归属。 |  |
| `allocation_rule_3` | 回收不合格品或可销售次级输出 | 前景清单内不采用避免负荷抵扣。单独报告实测输出质量、去向及任何外部回收或替代情景。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_campaign_mass_balance` | `recording_finishing` | 未记录载体投入、经接收成品和路线特定不合格品 | 地磅、校准秤、生产件数和不合格品日志 | campaign_id; format; route; input_mass_kg; accepted_count; accepted_sample_mass_kg; accepted_output_mass_kg; optical_reject_mass_kg; magnetic_reject_mass_kg; waste_destination | 称量批次投入和不合格品；直接称量合格输出，或使用批次特定实测平均质量把件数换算为质量 | kg | 每个批次，并记录每批不合格品 | 覆盖正常格式和运行条件的代表性生产期 | 每个录制或复制场址和生产线 | 按批次汇总路线特定质量；核对投入、合格输出、在制品留存和不合格品；归一化到 1 kg 合格输出 | 有效校准记录；签字的生产和不合格品日志；件数转质量抽样记录；有记录的核对结果 |
| `cp_campaign_electricity` | `recording_finishing` | 交付电力 | 结算电表、分表、设备记录仪和生产计划 | meter_id; reading_start_kWh; reading_end_kWh; logger_kWh; campaign_start; campaign_end; downtime_kWh; non_production_kWh; accepted_output_mass_kg | 优先使用批次分表；否则把电表读数与运行日志核对，并采用分配规则 | 保留 kWh，投影为 MJ | 每个批次或连续记录后按批次汇总 | 与质量平衡相同的生产期 | 每个场址和纳入生产线 | 批次净 kWh = 终止读数减起始读数，再减有记录的停机和非生产用电；除以合格输出 kg；乘 3.6 得 MJ/kg | 电表规范或校准证据；带时间戳读数；生产计划；分配记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | 每个以质量计量的投入或不合格品行 | 归一化 kg/kg = 批次行质量（kg）/ 经接收成品质量（kg） | 路线特定投入或不合格品质量；合格输出质量 | 每 1 kg 参考产品的 kg 数 |  |
| `calc_count_to_mass` | 以件数记录的合格输出 | 合格输出质量 = 合格件数 × 批次特定实测平均单件净质量 | 合格件数；单件净质量样本；样本量 | 合格成品质量（kg） |  |
| `calc_electricity` | `recording_electricity` | 归一化 MJ/kg = 批次可归属净电力（kWh）× 3.6 / 合格成品质量（kg） | 电表读数；有记录的扣除项；分配记录；合格输出质量 | 每 1 kg 参考产品的 MJ 数 |  |
| `calc_mass_reconciliation` | 批次质量平衡 | 比较适用的空白载体投入质量与合格输出、路线特定不合格品输出和有记录的在制品变化；调查并披露无法解释的差异 | 投入质量；合格输出；适用的不合格品质量；在制品变化 | 经核对的批次质量说明 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品 | 证明内容为非音乐音频且不是有声读物或其他排除的同级产品，并以声明的实体格式交付。 | 产品规格；内容分类；格式标识；质量放行记录 |
| `dq_route` | 路线特定清单 | 只纳入一个适用的空白载体行及其匹配的不合格品行；不合格品为零时须以完整日志说明。 | 物料清单；路线声明；生产和不合格品日志 |
| `dq_measurement` | 质量和电力 | 使用经校准或受规范控制的仪器，并保留原始读数和换算。 | 校准或电表规范；原始读数；计算表 |
| `dq_temporal` | 所有前景行 | 使用一致的生产期间，并披露停产、返工、异常批次和数据缺口。 | 生产日历；批次日志；缺口登记 |
| `dq_completeness` | 前景设施门口 | 把合格输出、适用的空白载体投入、路线特定不合格品和电力核对到声明的批次和设施边界。 | 签字的完整性检查表；质量核对；电表核对 |
| `dq_background` | 上游数据集 | 记录每个关联空白载体和电力数据集的地理区域、技术、产品状态、交付边界、数据年龄和代理局限。 | 数据集元数据和代理评估 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | 产品身份 | 输出为音乐、有声读物、文本载体、视频、软件、未记录载体或纯数字音频时，拒绝该数据包。 | `un-cpc-3-0-structure-2025` |
| `validation_rule_2` | 参考流 | 归一化后必须恰有 1 kg 经接收的成品载体输出，并且具备所有参考流限定信息。 |  |
| `validation_rule_3` | 路线一致性 | 要求采用“光学投入和光学不合格品”或“磁性投入和磁性不合格品”中的一组；混合路线只有在数据集分别报告路线份额和归一化清单时才可接受。 |  |
| `validation_rule_4` | UUID 和单位 | 每个含 UUID 的行都必须是 state-100 身份；质量行采用 kg；交付电力在有记录的 kWh 换算后采用 MJ。 |  |
| `validation_rule_5` | 清单完整性 | 要求具有批次一致的合格输出、适用空白载体投入、电力、不合格品核算、计算记录和处理去向披露。 |  |
| `validation_rule_6` | 包装 | 确认参考产品质量排除了零售和配送包装，或者在明确扩展的边界内以单独原子流表示包装。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 已记录非音乐类音频载体在录制或复制设施门口的前景生产数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 在具备必需限定信息、上游数据集、分配和数据质量披露时，用于格式和路线兼容的摇篮到设施门口建模 |
| excluded_use | 音乐、有声读物、文本、视频、软件、空白载体、下载或流媒体音频、播放服务、配送、使用或生命末期；除非补充相应过程 |
| required_metadata | PCR id 和版本；格式；路线；内容类别；播放时长；适用时的容量；技术；场址；地理区域；生产期间；产品净质量；母版交接点；后整理范围；包装处理；分配方法；不合格品去向；背景数据集身份 |
| required_quality_disclosure | 仪器状态；时间覆盖；批次代表性；件数转质量抽样；电表分配；质量和电力核对；数据缺口；路线适用性；代理局限；未解决的废物流 UUID |
| update_trigger | 实体格式、录制或复制技术、场址、电力供应、母版交接、后整理范围、包装边界、分配方法、不合格品处理发生变化，或实测投入、电力或不合格品强度发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC Version 3.0 Structure》，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | CPC 47699 正式产品分类身份，以及与 CPC 47691 和 47692 同级类别的区分 |
