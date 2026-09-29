---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.bodies-for-motor-vehicles
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 机动车车身

## 1. 范围与适用性

本规则适用于出厂交付的新制机动车车身（车身总成）：车身已装配完成，但尚未安装发动机、动力总成、独立底盘、座椅、电子设备及其他整车装备。应声明交付车身为未涂装还是已涂装；仅当交付产品已涂装时纳入涂装过程。前景边界包括车身板材成形、连接、返工，以及交付前实际进行的表面预处理、涂装和固化。采购投入品的生产由上游数据集表示。本规则针对车身产品，不涵盖整车使用或报废。边界依据 CPC 对车身、底盘和车身零件的区分以及 EDAG 报告的装配车身定义。[来源：`un-cpc3-notes-2025`、`edag-silverado-body-lca-2018`、`epa-auto-ria-2004`]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.bodies-for-motor-vehicles |
| classification_refs | CPC 3.0 49210，机动车车身；仅作分类参照 |
| covered_products | 新制并已装配的机动车车身壳体或车身总成，须声明涂装状态 |
| excluded_products | 整车；装有发动机的底盘；单独的车身零件或附件；挂车；维修或重新喷漆服务 |
| representative_product | 在工厂放行的乘用或货运机动车车身壳体 |
| production_route | 板材成形和连接；交付车身已涂装时包括表面预处理和涂装 |
| market_state | 工厂门口一件验收合格的成品车身，须声明配置和涂装状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供所声明结构与围护功能的已装配机动车车身 |
| How much | 所声明配置的一件验收合格成品车身 |
| How well | 符合生产方记录的车身验收和尺寸要求；声明涂装状态 |
| How long or cycle | 一次工厂放行；本生产规则不主张整车寿命 |
| reference_flow_link | `body_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | M |
| 参考产品流 | 机动车辆的车体 `68dcb7da-bb57-4730-94f3-ace5817da287` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 车身类型；型号与配置；所含开启件；材料路线；已涂装或未涂装状态；如有涂装则说明涂层体系；工厂地点及报告期；验收净质量 M |

前景数据包必须包含这些限定信息。白车身与已涂装车身的产品状态不同，不得直接视作清单等价。本规则不指定名义车身质量。[来源：`edag-silverado-body-lca-2018`]

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一个完整单元的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `inventory_basis` | 所有清单行 | 各行所列交换属性 | 各行单位 | 按每个验收成品单元记录可归属的交换量；参考数量为该车身实测的 M kg。不得采用通用车身质量。 |
| `energy_conversion` | `plant_electricity` | 能量 | kWh | 保留电表记录的 kWh；如后续能源流采用 MJ，则将 kWh 乘以 3.6，并披露换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 采购的车身级板材及其他生产投入品进入工厂时；声明验收车身配置和涂装状态 |
| starting_condition_role | 前景制造从采购投入品开始；其上游生产通过产品数据集链接 |
| product_classification_scope | CPC 49210 的机动车车身产品；底盘、车身零件及整车属于其他产品 |
| recursive_input_rule | 若采购投入品本身是已完成车身，仅对新增前景加工建模，并将上游车身数据集计入一次，避免重复计入其制造 |
| upstream_dataset_requirement | 按所声明地理区域和技术链接采购板材、电力、涂料、燃气及水的供应方数据集 |
| disclosure | 声明外购或厂内成形的板件、涂装状态、返工、废料处理、场址、期间及缺失的上游数据 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_body_only` | 产品边界 | 以放行车身为终点；整车装配、使用、维修及报废不计入车身参考流。 | `un-cpc3-notes-2025`; `edag-silverado-body-lca-2018` |
| `boundary_coating` | 已涂装车身路线 | 仅当涂装属于交付车身时，纳入表面预处理、涂装、固化、直接废物及可归属能源。 | `epa-auto-ria-2004` |
| `boundary_purchased_inputs` | 上游投入品 | 在前景门口记录采购投入品并链接适当上游数据集；避免重复计入厂内与外购成形。 | `edag-silverado-body-lca-2018` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `body_form_join` | 板材成形与车身连接 | required | 每件覆盖范围内的车身 | 前景制造 | 每个验收成品单元 |
| `body_coating` | 车身预处理与涂装 | conditional | 交付车身已涂装 | 前景表面处理 | 每个验收成品单元 |
| `body_release` | 验收与工厂放行 | required | 每件覆盖范围内的车身 | 参考输出与质量计量 | 每个验收成品单元的 M kg |

内部板件和白车身属于本前景系统的在制品；内部移转不得再计一个对外产品收益。成形边角料单列废物流。EDAG 报告描述车身板材成形和装配车身边界；EPA 报告描述其后的涂装工序。[来源：`edag-silverado-body-lca-2018`、`epa-auto-ria-2004`]

### 过程：板材成形与车身连接（`body_form_join`）

#### 输入

##### 产品流

###### 冷轧车身钢板（`steel_sheet`）

所声明车身配置采购钢板时纳入。记录实际钢种和领用质量；UUID 尚待身份审查。

- 选定流：冷轧车身钢板
- 流属性/单位：Mass / kg
- 数量规则：每个验收成品单元实测的钢板投入量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个验收成品单元
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet`
- 来源：`edag-silverado-body-lca-2018`

###### 铝车身板材（`aluminium_sheet`）

仅当所声明车身配置采购铝板材时纳入；不得由此通用板材身份推断原铝或再生铝供应路线。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：每个验收成品单元实测的铝板材投入量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个验收成品单元
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sheet`
- 来源：`edag-silverado-body-lca-2018`

###### 车身生产用电（`plant_electricity`）

计量可归属于成形、连接以及适用时涂装的电力。多个通用交流电候选流无法区分，UUID 须待身份审查。

- 选定流：电网交流电
- 流属性/单位：Energy / kWh
- 数量规则：每个验收成品单元可归属的电表电量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收成品单元
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`edag-silverado-body-lca-2018`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 钢板边角料（`steel_offcuts`）

对离开成形及连接工序的已分类钢板边角料过磅；与返用钢板区分。

- 选定流：钢废料，边角料 `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- 流属性/单位：Mass / kg
- 数量规则：每个验收成品单元对应的过磅钢边角料。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收成品单元
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap`
- 来源：`edag-silverado-body-lca-2018`

##### 基本流

### 过程：车身预处理与涂装（`body_coating`）

#### 输入

##### 产品流

###### 工业生产用水（`process_water`）

仅当交付车身已涂装时纳入表面预处理与冲洗的用水；计量供水质量。

- 选定流：工业生产用水 `72dcdee6-846a-455a-95d1-942aa7ad3730`
- 流属性/单位：Mass / kg
- 数量规则：每个验收成品单元计量或称量的用水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收成品单元
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_materials`
- 来源：`epa-auto-ria-2004`

###### 车身水性底色漆（`waterborne_basecoat`）

仅当涂装配方使用水性着色底漆时纳入。记录实际供货配方和湿料质量；通用或油性漆候选不是准确身份。

- 选定流：车身水性底色漆
- 流属性/单位：Mass / kg
- 数量规则：每个验收成品单元领用的湿态底色漆质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个验收成品单元
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coating_materials`
- 来源：`epa-auto-ria-2004`

###### 固化用气态天然气（`gaseous_natural_gas`）

仅当天然气为涂装烘炉燃料时纳入；采用燃气表读数并披露供气条件。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：每个验收成品单元可归属的燃气表体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收成品单元
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy`
- 来源：`epa-auto-ria-2004`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 预处理废液（`pretreatment_effluent`）

涂装路线产生并单独收集磷化预处理废液时纳入。记录实际处理去向；通用废水流身份不足以代表此交换。

- 选定流：磷化预处理含水废液
- 流属性/单位：Mass / kg
- 数量规则：每个验收成品单元实测的外排废液。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每个验收成品单元
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_effluent`
- 来源：`epa-auto-ria-2004`

##### 基本流

### 过程：验收与工厂放行（`body_release`）

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收机动车车身（`body_output`）

放行所声明配置和涂装状态的一件验收合格成品车身。质量 M 由计量取得，不作假定。计量规则中的“单元”指这一件成品车身；称重记录中的“设备”亦指该车身总成。

- 选定流：机动车辆的车体 `68dcb7da-bb57-4730-94f3-ace5817da287`
- 流属性/单位：Mass / kg
- 数量规则：M 千克
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个验收成品单元
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass`
- 来源：`un-cpc3-notes-2025`；`edag-silverado-body-lca-2018`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocate_subdivide` | 车身与整车共用作业 | 如有独立计量记录，应将车身成形、连接和涂装与后续整车装配分开。 | `edag-silverado-body-lca-2018` |
| `allocate_metered` | 共用计量表及批次 | 按记录的计量期间、生产线或批次产量及配置组合，将共用电、燃气、水和物料领用量分配给验收车身；披露分配依据，不接受无法追溯的分配。 | `edag-silverado-body-lca-2018` |
| `allocate_scrap` | 回收的钢边角料 | 将钢边角料按实际处理路线计一次废物流；未经记录，不给予替代生产抵扣。 | `edag-silverado-body-lca-2018` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `body_release` | 验收车身质量 | 校准秤记录 | 型号；配置；序列号或批次号；涂装状态；验收净质量 M | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每件验收车身或可追溯批次 | 报告期 | 放行点 | 每台验收净质量 | 秤校准记录；验收记录 |
| `cp_sheet` | `body_form_join` | 钢或铝板材投入 | 采购及领料记录 | 合金或钢种；收货质量；领用质量；批次；验收车身数量 | 对每种材料分别核对领用板材、库存变动及成形记录。 | kg | 每批次 | 报告期 | 车身生产线 | 每个验收成品单元 | 发票；库存台账；物料清单 |
| `cp_energy` | `body_form_join` | 电或燃气投入 | 电表与燃料记录 | 计量表编号；kWh；燃气 m3；期间；生产线；验收车身数量 | 读取经校准的计量表，仅分配可归属的车身生产线及涂装负荷；电与燃气分别记录。 | kWh 或 m3 | 每计量期间 | 报告期 | 车身生产线及涂装 | 每个验收成品单元 | 计量表校准；账单；分配表 |
| `cp_scrap` | `body_form_join` | 钢边角料 | 废料过磅记录 | 容器编号；钢种；质量；去向；批次 | 对分类收集的钢边角料过磅，并与领料和车身产出核对。 | kg | 每次废料转移 | 报告期 | 成形生产线 | 每个验收成品单元 | 过磅单；转移单 |
| `cp_coating_materials` | `body_coating` | 水及底色漆投入 | 水表与物料领用记录 | 水 kg；涂料配方；领用湿漆 kg；批次；验收车身数量 | 计量供水，并分别核对底色漆领用、库存及退料。 | kg | 每批次 | 报告期 | 涂装车间 | 每个验收成品单元 | 水表；领料单；配方单 |
| `cp_effluent` | `body_coating` | 预处理废液 | 排放计量与采样记录 | 排放质量；预处理生产线；批次；处理去向 | 计量或称量分类收集的磷化预处理废液并明确处理路线。 | kg | 每排放批次 | 报告期 | 预处理生产线 | 每个验收成品单元 | 排放台账；样品；处理凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `per_body_inventory` | 所有清单行 | 汇总报告期内可归属的交换量，除以同一配置的验收车身数量；各交换保留该行单位。 | 原始记录；验收车身数量；配置；适用的采集协议 | 每个验收成品单元的交换量 | `edag-silverado-body-lca-2018` |
| `mass_reconciliation` | `steel_sheet`, `aluminium_sheet`, `steel_offcuts`, `body_output` | 核对所声明配置的材料投入、有记录的内部回用、边角料及实测车身净质量；调查无法解释的差额，不强制凑平。 | cp_sheet; cp_scrap; cp_mass | 质量核对记录 | `edag-silverado-body-lca-2018` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品及所有流 | 声明车身配置、涂装状态以及每项材料、燃料和废物流的物理身份。 | 车身验收记录；材料规格；处理单 |
| `dq_mass` | `body_output` | 使用验收车身经校准计量的净质量 M；不得以整车质量或包装质量代替。 | 秤校准记录；验收记录 |
| `dq_time` | 所有前景记录 | 采用共同报告期，并核对产量、计量表、库存及转移记录。 | 注日期的台账及计量表读数 |
| `dq_coverage` | 涂装路线 | 说明未列的涂层、处理化学品、直接排放或废物流；若重要，应作为独立交换采集。 | 配方；许可文件；废物台账；完整性检查 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | `body_output` | 确认一件验收车身的实测 M kg，并核对参考流与清单的配置及涂装状态一致。 | `edag-silverado-body-lca-2018` |
| `validate_boundary` | 车身与整车 | 拒绝将整车装配、底盘、发动机或下游使用计入车身参考流的数据集。 | `un-cpc3-notes-2025`; `edag-silverado-body-lca-2018` |
| `validate_conditions` | 条件性清单行 | 纳入铝板材、涂装水、底色漆、烘炉燃气及废液时，须有路线证据；不存在的路线须披露。 | `edag-silverado-body-lca-2018`; `epa-auto-ria-2004` |
| `validate_records` | 所有清单行 | 将每项数量与注明日期的采集协议记录对应，核对单位和方向，披露未解决的流 UUID 及缺失上游数据集。 | `edag-silverado-body-lca-2018` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 审查后作为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 作为前景整车装配 `process` 或 `lifecyclemodel` 的车身投入 |
| allowed_use | 匹配车身类型、材料路线、配置、工厂地理区域和涂装状态的情形 |
| excluded_use | 整车参考产品；未限定时互换已涂装与未涂装车身；无依据的通用行业基准 |
| required_metadata | 车身型号；配置；材料及连接路线；涂装状态与配方；工厂；期间；实测 M；来源及处理路线 |
| required_quality_disclosure | 电表与质量证据；分配依据；供应方数据集覆盖度；未解决的流身份；未计入的排放及涂装化学品 |
| update_trigger | 车身设计、材料组合、涂装配方、供应路线、场址技术或报告期发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-notes-2025` | `official_guidance` | 联合国统计司，*CPC Ver. 3.0 Explanatory Notes*（2025 年 6 月 30 日），https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf，第 271–272 页（2026-09-27 查阅） | 车身、底盘与车身零件的分类边界 |
| `edag-silverado-body-lca-2018` | `literature` | Lindita Bushi，*EDAG Silverado Body Lightweighting Final LCA Report*（2018 年 8 月），https://www.aluminum.org/sites/default/files/2021-10/AA-LWT-Body-Design_Final-LCA-Report_August-2018.pdf，第 6.2、8.2 节（2026-09-27 查阅） | 装配车身状态、板材成形、材料及废料核算；仅作案例方法依据，不设经验范围 |
| `epa-auto-ria-2004` | `official_guidance` | 美国 EPA，*Regulatory Impact Analysis for the Automobile and Light Duty Vehicle NESHAP, Final Report*（EPA-452/R-04-007，2004 年 2 月），https://www.epa.gov/sites/default/files/2020-07/documents/transport-mfg_ria_final-neshap_2004-02.pdf，第 2.1 节（2026-09-27 查阅） | 车身装配后的涂装顺序、表面预处理、喷漆房用水与涂料投入；不作为通用车身材料数量或分配系数 |
