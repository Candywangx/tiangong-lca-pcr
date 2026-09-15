---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.bars-rods-and-profiles-of-copper
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 铜条、杆及型材

## 1. 范围与适用性

本 PCR 适用于具有均匀实心横截面的铜或铜合金条、杆及型材的工厂门生产。报告场址内发生的熔化与铸造、挤压、轧制、拉拔、热处理、表面清洗、矫直和锯切均在适用时纳入，包括一体化生产和外购坯料路线。

成卷铜线、板材、片材、带材、箔材、空心管材、未经充分加工即出售的阴极铜或坯料，以及已具有更具体用途的制成品不在范围内。工厂门后的运输、客户机加工、使用和寿命终结阶段亦不纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.bars-rods-and-profiles-of-copper |
| classification_refs | CPC 3.0：41512，铜条、杆及型材 |
| covered_products | 直条交付的实心铜及铜合金条、杆；不符合线材、扁平材、箔材或管材定义的实心等截面铜及铜合金型材，型材可成卷或直条交付 |
| excluded_products | 成卷铜线；仍属未锻轧进料的线锭和坯料；板、片、带及箔；管、管道及管件；粉末和鳞片；具有更具体产品功能的铸件或制成品 |
| representative_product | 铜棒；铜条和铜型材变体采用相同质量基准并强制披露产品形态 |
| production_route | 一体化或外购坯料路线，包括适用时的铸造、热挤压或轧制、可选冷拉拔、可选热处理和表面处理，以及最终矫直/切割 |
| market_state | 工厂门可销售的直条、杆或型材；仅当不属于线材时可为成卷型材；声明合金牌号、状态、尺寸和表面状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足所声明牌号、形态、尺寸、状态和表面规范的可销售铜或铜合金条、杆或型材 |
| How much | 工厂门 1 kg 净合格产品 |
| How well | 符合所声明产品规范；不合格边角料和废品不计入净产品质量 |
| How long or cycle | 一个生产报告期，通常为连续 12 个月，并覆盖所声明产品组合的代表性生产批次 |
| reference_flow_link | 归一化输出行 `copper_rod_output` 提供代表性参考产品；铜条或型材数据集必须保持相同质量基准并声明实际形态。 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 铜棒 `d5e5708d-dac7-4278-b2a0-068ed90df983` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品形态：条、杆或型材；精炼铜或合金牌号与成分；状态；横截面和公称尺寸；直条长度或允许的型材成卷状态；表面处理；再生含量核算方法；制造路线；场址地理位置；报告期 |

构建前景数据包时必须声明全部必需限定信息。Tiangong 的“铜棒”身份是代表性参考对象，不能替代铜条或型材数据集的产品形态披露。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及全部含铜输入和输出 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将净合格输出归一化为恰好 1 kg。分别计量总产出、边角料、废品和内部回炉料；内部循环铜不得重复计为新的外部输入。 |
| `gas_reference_conditions` | 气态天然气和工业氧气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量体积对应的温度、压力及标准、正常或实际状态；仅在参考条件有据可查时换算。 |
| `electricity_energy` | 跨越前景边界的电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留计量能源记录并记录 kWh 到 MJ 的换算；上游电网排放不得计作场址直接排放。 |
| `solution_mass` | 氢氧化钠溶液 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 分别记录交付溶液质量和有效成分浓度，避免将溶液质量与干基 NaOH 质量混淆。 |

## 5. 系统边界

前景边界始于外购含铜进料及其他产品进入场址，止于净合格铜条、杆或型材在工厂门放行。一体化场址应纳入适用的熔化、保温、铸造、挤压或轧制、拉拔、退火、表面处理、矫直、锯切、内部循环和场内处理。外购坯料由其上游产品数据集表示；采矿、选矿、冶炼、精炼和场外回收不得在本前景清单中重建。

| rule_id | 适用对象 | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_product_form` | 产品类别边界 | 仅纳入横截面均匀且为实心，并符合所声明条、杆或型材形态的加工产品；排除成卷线材及空心管材。 | `un-cpc-3-0-2025`; `cjeu-hydro-energo-2020` |
| `boundary_integrated_operations` | 前景作业 | 纳入报告场址控制并对参考产品有实质作用的全部制造和场内处理作业，披露实际存在的熔化、铸造、成形、热处理和清洗步骤。 | `eu-jrc-nfm-bref-2017` |
| `boundary_upstream_products` | 外购进料、能源和化学品 | 对外购阴极铜、坯料、作为产品或废物接收的废铜、能源、气体、水和化学品链接独立上游数据集；不得将其上游负荷计入场址直接交换。 | `eu-jrc-nfm-bref-2017` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购阴极铜、坯料或经分选的含铜进料进入受控制造场址；必须声明所选起始状态和铜牌号 |
| starting_condition_role | 上游产品或废物输入，其此前生产或回收由独立数据集表示 |
| product_classification_scope | 与 CPC 3.0 代码 41512 对应、且满足上述物理形态边界的实心加工铜及铜合金条、杆和型材 |
| recursive_input_rule | 接收同类别条、杆或型材作进一步拉拔、退火或精整时，仅作为一个带上游数据集的产品输入记录；不得在接收过程中递归重建其隐含生产。 |
| upstream_dataset_requirement | 对外购含铜进料、合金成分、电力、燃料、气体、水和处理药剂采用产品与地理位置适宜的上游数据集，并披露缺失或代理数据集。 |
| disclosure | 声明起始铜状态、精炼铜或合金牌号、再生含量核算、所纳入工序、内部铜循环、表面处理路线、能源供应、水循环和工厂门产品状态。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_manufacture` | 铜条、杆或型材的一体化制造与精整 | required | 始终纳入；披露实际存在的熔化/铸造、挤压/轧制/拉拔、退火、清洗、矫直和切割步骤，并尽可能保留分表计量记录。 | 从所声明铜进料到工厂门合格产品的前景生产 | 工厂门放行的净合格铜条、杆或型材质量（kg） |

### 过程：铜条、杆或型材的一体化制造与精整（`integrated_manufacture`）

#### 输入

##### 产品流

###### 铜进料（`cathode_copper_input`）

记录外购阴极铜。若场址接收坯料或同类别加工材，须在前景记录中保留该具体身份并披露不同起始条件；不同含铜进料不得合并为一条计量记录。

- 选定流：阴极铜
- 流属性/单位：Mass / kg
- 数量规则：计量投入生产的外购阴极铜质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_copper_feed`
- 来源：

###### 电力（`electricity_input`）

记录全部纳入生产与处理作业的电力；排除上游产品数据集中已经包含的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于参考产品生产系统的计量电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：

###### 天然气（`natural_gas_input`）

记录熔化、坯料加热、保温、退火或干燥中燃烧的气态天然气。仅当无天然气跨越前景边界时才标记为不适用。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：归属于参考产品生产系统的计量天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_natural_gas`
- 来源：

###### 工业氧气（`industrial_oxygen_input`）

仅在火法精炼或其他所声明场内冶金路线使用外供工业氧气时记录。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：适用场内作业消耗的计量工业氧气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：采用外供氧气路线时每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_industrial_oxygen`
- 来源：

###### 工艺用水（`process_water_input`）

记录铸造冷却、设备冷却、清洗、漂洗和场内处理的工艺用水输入。循环量单独报告，同一闭路水不得重复计作外部输入。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：跨越前景边界的计量工艺用水总输入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：

###### 氢氧化钠（`sodium_hydroxide_input`）

当废酸洗液或漂洗水在前景边界内中和时，记录所用氢氧化钠溶液并保留其浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：用于相关废水处理的氢氧化钠交付溶液计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：采用场内中和路线时每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sodium_hydroxide`
- 来源：

##### 废物流

本 PCR 不预设进入过程的废物流。若接收含铜废物作进料，完整数据集必须按每个具体废物身份分别新增前景行，并与阴极铜及外购产品进料分开。

##### 基本流

本 PCR 不预设基本流输入。若存在直接环境取水，必须使用具体基本流身份。

#### 输出

##### 产品流

###### 净合格铜棒（`copper_rod_output`）

记录扣除边角料、废品和在制品后的工厂门净合格产品。铜棒是代表性 Tiangong 流；铜条和型材数据集保持质量基准并声明实际形态。

- 选定流：铜棒 `d5e5708d-dac7-4278-b2a0-068ed90df983`
- 流属性/单位：Mass / kg
- 数量规则：作为归一化分母的净合格产品计量质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：归一化后恰好 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_output`
- 来源：

##### 废物流

对外转移的浮渣、滤尘、废耐火材料、污泥、废溶液、边角料或废品，必须在完整前景数据集中分别新增为具体废物流。内部回炉铜只进入质量平衡台账，不是外部废物输出。

##### 基本流

###### 直接化石源二氧化碳（`fossil_carbon_dioxide_output`）

记录前景燃料燃烧或有据可查场内碳平衡产生的直接化石源二氧化碳。不得将上游电力或外购物料排放复制为直接输出。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接烟气计量值，或由前景化石碳记录得出的场址特定计算值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净合格参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_co2`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用作业和处理系统 | 记录允许时，先划分产品线和工序或采用分表计量，再考虑分配。 |  |
| `allocation_internal_copper` | 内部返回的含铜物料 | 将内部循环视作内部闭环：记录质量用于平衡和质量控制，但不得赋予新的上游负荷或外部共产品抵扣。 | `eu-jrc-nfm-bref-2017` |
| `allocation_external_outputs` | 对外转移的共产品和废物 | 无法划分时，如存在因果物理关系则采用声明的物理分配，否则采用有理由的经济分配。除非另行声明后果型研究，不得采用避免负荷抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_copper_feed` | `integrated_manufacture` | 阴极铜进料 | 地磅、发票和投料记录 | 身份；供应商；牌号；再生含量声明；总质量；退货；投料质量 | 将收货记录与投料记录核对 | kg | 每次交付和投料 | 完整报告期 | 全部产品相关产线 | 按具体进料身份汇总外部投料质量 | 校准秤记录、发票、库存核对和供应商规范 |
| `cp_electricity` | `integrated_manufacture` | 电力输入 | 电表和生产日志 | 表号；读数；自发电；外送；分配依据；停机 | 读取分表或将总表与设备核对 | MJ | 至少每月 | 完整报告期 | 全部纳入作业 | 划分后汇总净输入与可归属自发电并扣除外送 | 电表校准、账单和计量点图 |
| `cp_natural_gas` | `integrated_manufacture` | 天然气输入 | 燃气表和发票 | 体积；温度；压力；参考状态；热值；设备；工时 | 将计量与发票、运行日志核对 | m3 | 至少每月 | 完整报告期 | 全部纳入燃气设备 | 在一个有据可查参考状态下汇总可归属气量 | 校准、发票核对和燃气规范 |
| `cp_industrial_oxygen` | `integrated_manufacture` | 工业氧气输入 | 流量计或交付记录 | 来源；纯度；压力；参考状态；体积；使用作业 | 将交付或制氧计量与路线日志核对 | m3 | 每次交付或生产批次 | 全部适用批次 | 用氧作业 | 在一个参考状态下汇总可归属外供体积 | 交付凭证、仪表检查和路线日志 |
| `cp_process_water` | `integrated_manufacture` | 工艺用水输入 | 水表和水平衡 | 来源；输入；补水；循环；排污；排放 | 计量外部输入并建立水平衡 | kg | 至少每月 | 完整报告期 | 全部纳入用水系统 | 外部输入只汇总一次，循环量另报 | 校准水表和水平衡核对 |
| `cp_sodium_hydroxide` | `integrated_manufacture` | 氢氧化钠溶液 | 交付和加药记录 | 溶液质量；浓度；批次；加药点；处理水量 | 将库存与加药日志核对 | kg solution | 每次交付和处理批次 | 全部适用批次 | 场内处理 | 汇总可归属溶液质量并保留浓度 | 分析证书、库存核对和加药校准 |
| `cp_product_output` | `integrated_manufacture` | 合格产品输出 | 校准秤和放行记录 | 形态；合金；状态；尺寸；表面；总产出；边角料；废品；净质量 | 将产线输出与放行记录核对 | kg | 每批 | 完整报告期 | 全部覆盖产品 | 按产品规范汇总放行净质量 | 秤校准、放行证书和质量平衡 |
| `cp_direct_co2` | `integrated_manufacture` | 直接化石源二氧化碳 | 烟气监测或碳台账 | 设备；监测排放；燃料碳；燃料用量；氧化基准；生物源比例 | 直接监测或保留有据可查的场址计算 | kg | 每个监测期或每月 | 完整报告期 | 全部纳入直接化石源 | 仅汇总直接前景化石源 CO2 | 监测 QA 或可追溯碳计算和燃料记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单交换 | 归一化数量 = 报告期可归属交换量 / 报告期净合格产品质量 | 交换记录；`cp_product_output` 净质量 | 每 1 kg 参考产品的交换量 |  |
| `calc_copper_mass_balance` | 含铜进料、产品、内部返回料和外部损失 | 将外部含铜输入与合格产品、在制品变化、内部循环库存变化及各项具体外部含铜输出核对；调查不明损失。 | `cp_copper_feed`; `cp_product_output`; 场址质量平衡台账 | 有据可查的铜质量平衡闭合 | `eu-jrc-nfm-bref-2017` |
| `calc_solution_active_mass` | 氢氧化钠溶液 | 有效 NaOH 质量 = 交付溶液质量 × 实测质量分数；保留两者 | `cp_sodium_hydroxide` 质量和浓度 | kg 有效 NaOH 和 kg 交付溶液 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 对每个汇总产品组报告形态、铜或合金牌号、成分、状态、尺寸、表面状态和路线。 | 规范、分析证书和放行记录 |
| `dq_process_coverage` | 前景系统 | 记录实际工序，证明产品相关熔化、铸造、成形、热处理、清洗、抽排和处理作业均已纳入或有理由排除。 | 流程图、设备清单和计量点图 |
| `dq_atomic_outputs` | 废物和基本流交换 | 将每项实际外部废物及直接基本流排放新增为独立具体流；集合标签不是可接受的数据集交换。 | 联单、处理记录、许可证和监测报告 |
| `dq_temporal_representativeness` | 全部记录 | 覆盖代表性报告期和所声明产品组合的重要批次，并解释停机、试制和异常批次。 | 带日期的生产、计量、维护和质量记录 |
| `dq_reconciliation` | 物料、水和能源 | 核对供应记录、计量、库存和产品输出；共用计量无法拆分时记录分配。 | 签字核对表、校准记录和原始文件 |

## 9. 校验规则

| rule_id | 适用对象 | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 确认净合格铜条、杆或型材恰为 1 kg，且全部必需限定信息齐全。 | `un-cpc-3-0-2025`; `cjeu-hydro-energo-2020` |
| `validate_boundary` | 前景系统 | 确认起始条件和实际一体化工序与纳入计量、记录及上游链接一致。 | `eu-jrc-nfm-bref-2017` |
| `validate_no_double_count` | 铜和公用工程 | 确认内部铜循环未计作新外部输入，上游产品负荷未重复计为前景直接排放。 |  |
| `validate_completeness` | 废物和基本流输出 | 每项实际浮渣、粉尘、耐火材料、污泥、废溶液、边角料、废品、废水排放和直接大气排放均须为具体原子交换或证明不存在。 | `eu-jrc-nfm-bref-2017` |
| `validate_ranges` | 重要流 | 缺少外部基准范围属于证据缺口；保留前景计量要求，并在发布前审查未解决的范围证据需求。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | `secondary_dataset`；经独立审查和发布后可为 `background_dataset` |
| downstream_use | 工厂门铜或铜合金条、杆或型材的归因型建模 |
| allowed_use | 仅用于所声明形态、合金、路线、地理、时间和工厂门边界；仅可汇总代表性且已披露的变体。 |
| excluded_use | 线材、扁平材、箔、管材、未锻轧铜、制成零件、存在实质差异且未披露的合金或路线，以及摇篮到坟墓结果 |
| required_metadata | PCR id 与版本；形态；合金与成分；状态；尺寸；表面处理；起始状态；再生含量核算；工序；地理；技术；报告期；分配；截断；上游数据集身份；数据质量 |
| required_quality_disclosure | 计量覆盖；质量、水和能源核对；共用计量分配；缺失原子输出；未解决的阴极铜流 UUID；缺少外部基准范围；代理；异常运行；审查状态 |
| update_trigger | 产品组合、铜进料、再生含量方法、成形或处理路线、能源或水系统、控制设施、分配、地理位置发生实质变化，或获得新的精确 UUID 或独立来源支持的范围 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | 联合国统计司，《CPC 第 3.0 版结构》，2025 年 6 月 30 日，代码 41512，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-09-04） | 正式分类身份和层级 |
| `cjeu-hydro-energo-2020` | official_guidance | 欧盟法院，2020 年 6 月 18 日判决，C-340/19 案 Hydro Energo，ECLI:EU:C:2020:488，第 37-44 段及判决所载第 74 章定义，https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:62019CJ0340（检索于 2026-09-04） | 条/杆、型材、线材、管材和未锻轧前体的物理区分 |
| `eu-jrc-nfm-bref-2017` | official_guidance | 欧盟委员会联合研究中心，《有色金属工业最佳可行技术参考文件》，2017 年，第 3.1.3、3.1.4 和 3.3.5.2 节，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC107041_NFM_bref2017.pdf（检索于 2026-09-04） | 工序、边界、水循环、表面处理、残余物和排放完整性 |
