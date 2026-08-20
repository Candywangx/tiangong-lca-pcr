---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-yarn-other-than-sewing-thread-containing-85-or-more-by-weight-of-cotton
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 含棉 85% 及以上的棉纱（缝纫线除外）

## 1. 范围与适用性

本 PCR 适用于纺纱厂门到门前景生产的本色棉纱（缝纫线除外），且成品纺织纤维组成中棉的质量分数不低于 85%。当实际路线及其专属工序得到申报时，本 PCR 可用于普梳纱或精梳纱，以及环锭纺、紧密纺、转杯/气流纺、喷气纺或其他已声明的短纤维纺纱路线。

前景边界始于纺纱厂门接收的成包棉纤维和允许使用的非棉短纤维，止于纺纱厂门已通过质量放行、完成卷绕与包装的棉纱。上游棉花种植、轧棉、纤维生产和进厂运输通过关联的上游数据集表示，不在本前景过程内重复创建。

范围不包括棉缝纫线、含棉量低于 85% 的纱、连续长丝纱，以及将染色、漂白、丝光、涂层或其他湿法整理纳入所声明产品的纱；如需包含这些湿法工序，应另建并明确关联数据集。下游织造、针织、服装制造、配送、使用和生命终期不在本门到门数据集范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-yarn-other-than-sewing-thread-containing-85-or-more-by-weight-of-cotton |
| classification_refs | CPC 3.0：26360，范围精确对应 |
| covered_products | 本色棉纱（缝纫线除外），棉质量分数至少为 85%；普梳或精梳；声明捻线时可为单纱或股线 |
| excluded_products | 缝纫线；含棉低于 85% 的纱；连续长丝纱；未另行建模并关联的染色、漂白、丝光、涂层或其他湿法整理纱 |
| representative_product | 纺纱厂门已通过质量放行、按所声明交付包装完成卷绕的本色棉纱 |
| production_route | 开棉、清棉与混棉；梳棉和并条；可选精梳；按路线需要的粗纱；纺纱；可选并捻；络筒、调湿、检验和包装 |
| market_state | 纺纱厂门中间纺织产品；按所声明商业含湿基准干燥/调湿，供下游织物生产 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供适用于下游针织或织造的本色棉纱 |
| How much | 1 kg 棉纱净重，不含交付包装 |
| How well | 非缝纫线；棉质量分数至少 85%；声明纱支、纺纱路线、普梳/精梳状态、股数、捻度、整理状态、质量等级和含湿基准 |
| How long or cycle | 纺纱厂门一个已通过质量放行的生产批次；本中间产品不规定使用期限 |
| reference_flow_link | 前景纺纱厂门所声明参考产品流恰好 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 含棉重量达85%或85%以上的棉纱（缝纫线除外） `526fe0a1-be6d-4384-b609-4ca604628ec4` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 棉质量分数；每种非棉纤维的组成与质量分数；纱支或线密度；纺纱系统；普梳或精梳状态；单纱或股线结构；适用时的捻向与捻度；本色整理状态；商业含湿基准或回潮率约定；如有再生棉则声明其含量；生产地域与期间；交付包装 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考棉纱 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按所声明商业含湿基准报告恰好 1 kg 合格棉纱净重，不含交付包装。 |
| `cotton_fraction` | 纺织纤维组成 | Mass | kg 和质量分数 | 参考棉纱中的棉质量除以纺织纤维总质量必须不低于 0.85；按批次或产品规格保留组成证据。 |
| `common_moisture_basis` | 纤维投入、中间纤维与纱、废料和参考产出 | Mass | kg | 在同一个已声明含湿基准上核算质量，或保留实测含湿率/回潮率及转换方法；未经转换不得混用调湿质量与绝干质量。 |
| `fibre_mass_reconciliation` | 前景纤维转换 | Mass | kg | 在已声明测量不确定度内，将接收纺织纤维与合格棉纱、回收纤维、废物、实测粉尘、样品和库存变化进行核对。 |
| `packaging_separation` | 参考产品与包装 | Mass | kg | 1 kg 参考数量不含交付包装；包装应作为单独的清单投入和废物流记录。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 成包棉纤维和允许使用的非棉短纤维在纺纱厂门完成接收、称量、组成与批次识别并验收合格 |
| starting_condition_role | 前景门槛投入；上游种植、轧棉、纤维生产和进厂物流通过上游数据集关联 |
| product_classification_scope | 非缝纫线且棉质量分数至少 85% 的本色棉纱 |
| recursive_input_rule | 采购或外协返工的同类棉纱只作为具有上游数据集的技术圈产品投入记录一次，不在本前景数据包内递归展开其生产 |
| upstream_dataset_requirement | 为每项棉纤维、非棉纤维、采购棉纱、能源载体、水、助剂和包装投入关联地域与时间适宜的上游数据集，否则披露未解决缺口 |
| disclosure | 声明组成、已知时的纤维来源、纺纱路线、精梳和粗纱适用性、含湿基准、内部回用、外部返工、湿法处理排除项、分配方法、生产期间和场址 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate` | foreground_system | 纳入从验收成包纤维到开棉、清棉、混棉、梳棉、并条、按路线需要的精梳和粗纱、纺纱、可选并捻、络筒、调湿、检验和包装的全部场内工序。 | `eu-jrc-txt-bref-2023`; `eu-pef-2021-2279` |
| `sb_inputs_outputs` | foreground_inventory | 记录所纳入过程的全部已知物料和能源投入，以及全部产品、共产品、废物和直接排放；制造活动数据应保留场址特定性。 | `eu-pef-2021-2279` |
| `sb_upstream_linkage` | upstream_inputs | 种植、轧棉、非棉纤维生产、能源供应、助剂、包装和进厂运输采用关联上游数据集表示；其身份不得因前景数据包不含上游过程而遗漏。 | `eu-pef-2021-2279` |
| `sb_wet_processing_exclusion` | product_finish | 本色纱前景数据集不包括染色、漂白、丝光、涂层和其他湿法整理，除非该工序得到单独计量、建模和披露。 | `eu-jrc-txt-bref-2023` |
| `sb_cutoff_disclosure` | exclusions | 不得采用未记录的截断。任何排除活动或流均须具名、说明理由并筛查潜在重要性；不得仅因缺少优选数据集而省略已知纤维、电力、助剂、水、包装、废物和直接排放流。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fibre_preparation` | 开棉、清棉、混棉、梳棉和并条 | required | 始终纳入；仅当所声明棉纱为精梳纱时纳入精梳 | 前景纤维准备 | 每 kg 转入纺纱的预制条子 |
| `yarn_formation` | 按需粗纱与纺纱 | required | 始终纳入；粗纱取决于路线并须声明 | 前景成纱 | 每 kg 转入络筒的纺成纱 |
| `winding_packaging` | 可选并捻、络筒、调湿、检验和包装 | required | 始终纳入；实施并捻和主动调湿时纳入相应工序 | 前景产品整理与放行 | 每 1 kg 合格参考棉纱净重 |

### 过程：开棉、清棉、混棉、梳棉和并条（`fibre_preparation`）

#### 输入

##### 产品流

###### 接收棉纤维（`received_cotton_fibre`）

记录进入前景纺纱厂的验收棉纤维；使用回收棉或再生棉时须一并记录和声明。

- 选定流：成包棉纤维
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：将实测验收棉纤维质量换算至所声明含湿基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考棉纱净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_and_composition`
- 来源：`un-cpc-ver-3-2025`; `eu-jrc-txt-bref-2023`
- 数量范围：暂定棉投入筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.85
  - 上限：1.50
  - 单位：kg/kg 参考棉纱
  - 基准：未知场址收率时，每 kg 合格棉纱的宽泛首轮棉投入
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 允许使用的非棉短纤维（`non_cotton_fibre`）

存在非棉纤维时按纤维种类分别记录；成品棉纱仍须满足含棉阈值。

- 选定流：已声明非棉短纤维
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按纤维种类实测验收质量并换算至共同含湿基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考棉纱净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass_and_composition`
- 来源：`un-cpc-ver-3-2025`
- 数量范围：暂定混纤投入筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.30
  - 单位：kg/kg 参考棉纱
  - 基准：包含过程损失的刻意宽泛待复核估算；成品非棉纤维分数仍不得超过 0.15
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 纤维准备电力（`fibre_preparation_electricity`）

纳入可归属于开棉、清棉、输送、混棉、梳棉、并条、可选精梳、吸风和车间调湿的电力。

- 选定流：纺纱厂购入电力
- 流属性/单位：Energy / kWh
- 数量规则：纤维准备设备及配套服务的分表用电，或由总表按因果关系分配的用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入纺纱的预制条子
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utility_records`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：暂定纤维准备电力筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.05
  - 上限：5
  - 单位：kWh/kg 预制条子
  - 基准：场址和纱支证据形成前的宽泛首轮范围
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 纤维调湿用水（`fibre_preparation_water`）

可单独计量和归属时，纳入加到纤维上的水或车间调湿补水；不得将范围外湿法预处理计入本行。

- 选定流：工艺用水
- 流属性/单位：Mass / kg
- 数量规则：实测补水量减去单独实测的回流水或回收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转入纺纱的预制条子
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utility_records`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：暂定调湿补水筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：2
  - 单位：kg/kg 预制条子
  - 基准：场址计量和气候条件形成前的宽泛首轮补水估算
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入纺纱的预制条子（`prepared_sliver`）

记录完成适用纤维准备序列后的实测内部中间产出。

- 选定流：预制纺织纤维条子，内部中间品
- 流属性/单位：Mass / kg
- 数量规则：按共同含湿基准实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移的预制条子
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_and_output_mass`
- 来源：`eu-jrc-txt-bref-2023`

##### 废物流

###### 纤维准备落棉与捕集杂质（`fibre_preparation_rejects`）

按实际去向记录杂质、短纤维、梳棉废料和捕集物；分别识别内部回用、外部回收和处置部分。

- 选定流：纺织纤维准备废料
- 流属性/单位：Mass / kg
- 数量规则：按等级和去向实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移的预制条子
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_recovery_records`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：暂定纤维落料筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.50
  - 单位：kg/kg 预制条子
  - 基准：纤维等级和回收场址数据形成前的宽泛质量平衡筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 未捕集纤维粉尘排放到空气（`fibre_preparation_dust_air`）

记录已安装收集或治理设施之后的颗粒物排放；捕集粉尘应计入废物流。

- 选定流：排放到空气的颗粒物
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或用浓度乘以排风量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移的预制条子
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：暂定粉尘排放筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.05
  - 单位：kg/kg 预制条子
  - 基准：未捕集颗粒物的宽泛待复核筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：按需粗纱与纺纱（`yarn_formation`）

#### 输入

##### 产品流

###### 预制纤维条子（`sliver_to_spinning`）

记录进入所声明纺纱路线的预制条子，包括按路线需要的粗纱转移。

- 选定流：预制纺织纤维条子，内部中间品
- 流属性/单位：Mass / kg
- 数量规则：按共同含湿基准实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入络筒的纺成纱
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_and_output_mass`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：暂定预制纤维投入筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：1
  - 上限：1.50
  - 单位：kg/kg 纺成纱
  - 基准：路线特定损失记录形成前的宽泛首轮质量平衡筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 成纱电力（`yarn_formation_electricity`）

纳入按路线需要的粗纱、纺锭或转杯、吸风、驱动、控制、未单独供应时的压缩空气制备，以及可归属的车间调湿用电。

- 选定流：纺纱厂购入电力
- 流属性/单位：Energy / kWh
- 数量规则：成纱设备和配套服务的分表用电，或由总表按因果关系分配的用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 转入络筒的纺成纱
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utility_records`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：暂定成纱电力筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.2
  - 上限：10
  - 单位：kWh/kg 纺成纱
  - 基准：对路线和纱支敏感的宽泛首轮估算
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 纺纱润滑剂与调理剂（`spinning_auxiliaries`）

按产品、功能和质量记录每种助剂，包括留在纱上或成为废物/排放的锭子油或纤维/纱准备剂。

- 选定流：纺纱润滑剂或调理剂
- 流属性/单位：Mass / kg
- 数量规则：期初库存加采购减期末库存和退货后，分配至产品批次
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转入络筒的纺成纱
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_auxiliary_and_packaging_records`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：暂定纺纱助剂筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.10
  - 单位：kg/kg 纺成纱
  - 基准：宽泛首轮估算；BREF 证明其相关性，但未提供棉纱专属数量范围
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 转入络筒的纺成纱（`spun_yarn_intermediate`）

记录完成纺纱及按路线需要的粗纱工序后的内部纱线产出。

- 选定流：纺成棉纱，内部中间品
- 流属性/单位：Mass / kg
- 数量规则：按共同含湿基准实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 转移的纺成纱
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_and_output_mass`
- 来源：`eu-jrc-txt-bref-2023`

##### 废物流

###### 纺纱废料、吸棉和断头（`spinning_waste`）

按等级和去向记录纤维与纱线废料；内部回用须单独报告，不得重复计为新纤维投入。

- 选定流：纺织纺纱废料
- 流属性/单位：Mass / kg
- 数量规则：按等级和去向实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移的纺成纱
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_recovery_records`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：暂定纺纱废料筛选估算
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.30
  - 单位：kg/kg 纺成纱
  - 基准：前景废料记录形成前的宽泛路线特定质量平衡筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

###### 成纱颗粒物排放到空气（`yarn_formation_dust_air`）

记录纺纱及吸风排气在收集或治理后的颗粒物排放。

- 选定流：排放到空气的颗粒物
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或用浓度乘以排风量计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 转移的纺成纱
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_direct_emissions`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：暂定成纱粉尘筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.03
  - 单位：kg/kg 纺成纱
  - 基准：未捕集颗粒物的宽泛待复核筛查
  - 基准类型：过程产出（`process_output`）
  - 证据类型：推理估算（`reasoned_estimate`）

### 过程：可选并捻、络筒、调湿、检验和包装（`winding_packaging`）

#### 输入

##### 产品流

###### 纺成纱中间品（`spun_yarn_to_winding`）

记录进入适用并捻和络筒工序的纺成纱。

- 选定流：纺成棉纱，内部中间品
- 流属性/单位：Mass / kg
- 数量规则：按共同含湿基准实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考棉纱净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_intermediate_and_output_mass`
- 来源：`eu-jrc-txt-bref-2023`

###### 络筒与包装电力（`winding_packaging_electricity`）

纳入实施时的并捻、络筒、吸风、调湿、检验和包装设备用电。

- 选定流：纺纱厂购入电力
- 流属性/单位：Energy / kWh
- 数量规则：所纳入工序的分表用电，或由总表分配的用电
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考棉纱净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utility_records`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：暂定络筒电力筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0.01
  - 上限：2
  - 单位：kWh/kg 参考棉纱
  - 基准：纺纱厂络筒与调湿记录形成前的宽泛首轮范围
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 调湿用水或蒸汽（`yarn_conditioning_utility`）

实施纱线主动调湿时纳入有意使用的水或蒸汽；保留含湿基准，避免把增加的商业水分误作纤维产率。

- 选定流：工艺用水或蒸汽
- 流属性/单位：Mass / kg
- 数量规则：实测供给质量减去实测回流水或凝结水回收量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考棉纱净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_energy_and_utility_records`
- 来源：`eu-jrc-txt-bref-2023`
- 数量范围：暂定纱线调湿公用工程估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.50
  - 单位：kg/kg 参考棉纱
  - 基准：宽泛首轮供水或供汽估算；应由路线特定计量替换
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

###### 交付包装材料（`delivery_packaging`）

按材料和去向记录筒管、纸管、纸箱、薄膜、捆扎带、托盘和其他交付包装。

- 选定流：已声明交付包装材料
- 流属性/单位：Mass / kg
- 数量规则：生产批次领用包装质量减去返还的可重复使用包装
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考棉纱净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_auxiliary_and_packaging_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定包装投入筛选估算
  - 范围角色：默认估计（`default_estimate`）
  - 下限：0
  - 上限：0.20
  - 单位：kg/kg 参考棉纱
  - 基准：包装配置和复用记录形成前的宽泛首轮估算
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格棉纱参考产品（`reference_cotton_yarn`）

本行为满足功能单位和全部必需限定信息、已通过质量放行的棉纱净产出。

- 选定流：含棉重量达85%或85%以上的棉纱（缝纫线除外） `526fe0a1-be6d-4384-b609-4ca604628ec4`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按所声明含湿基准恰好 1 kg 合格棉纱净重，不含包装
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：
- 数量范围：参考产出身份检查
  - 范围角色：允许范围（`allowed_range`）
  - 下限：1
  - 上限：1
  - 单位：kg
  - 基准：精确参考产出
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 纱头、等外纱与包装废物（`winding_packaging_waste`）

按材料和去向分别记录生产纱线废料与包装废物；返工纱作为内部回流跟踪。

- 选定流：纺织纱线与包装废物
- 流属性/单位：Mass / kg
- 数量规则：按材料、质量等级和去向实测废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考棉纱净重
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_recovery_records`
- 来源：`eu-pef-2021-2279`
- 数量范围：暂定络筒与包装废物筛查
  - 范围角色：QA 校验（`qa_guardrail`）
  - 下限：0
  - 上限：0.15
  - 单位：kg/kg 参考棉纱
  - 基准：产品和包装记录形成前的宽泛首轮废物筛查
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估算（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | multifunctional_foreground_processes | 首先通过过程拆分、产品特定物料清单、分表、生产计数器和分别计量的废物或回收纤维流避免分配。 | `eu-pef-2021-2279` |
| `allocation_physical` | shared_operations | 无法拆分时，以机器运行时间、锭时、风量或质量吞吐量等有记录的因果物理驱动量分配共享电力、公用工程和助剂。 | `eu-pef-2021-2279` |
| `allocation_residual` | saleable_recovered_material | 回收纤维或纱线作为共产品离开时，记录废物/共产品判定并优先检验相关物理关系；没有可辩护物理关系时，采用同期经济价值并报告价格与敏感性。 | `eu-pef-2021-2279` |
| `allocation_internal_recycling` | internal_returns | 内部回用纤维、吸棉、纱头和返工作为内部循环跟踪，不得同时计作新的外部投入和外部共产品；收集和再处理负荷归于实施该操作的过程。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_and_composition` | `fibre_preparation` | 接收棉纤维和非棉纤维 | 地磅/秤单、收货单、供应商规格、批次检验 | lot_id; fibre_type; supplier; gross_mass; tare_mass; net_mass; moisture_or_regain; cotton_fraction; recycled_fraction | 校准质量计量，并附组成证书或实验室检验 | kg; mass fraction | 每次接收和每批次 | 完整代表性生产期间，通常至少连续 12 个月，或说明采用较短生产期的理由 | 全部纳入纺纱厂和纤维批次 | 按纤维种类汇总验收净质量；换算至共同含湿基准；按可追溯领料记录分配至产品批次 | 秤校准；证书；实验室方法；退货批次记录 |
| `cp_intermediate_and_output_mass` | `fibre_preparation`; `yarn_formation`; `winding_packaging` | 内部中间品和合格棉纱 | 生产计数器、校准秤、批次放行记录 | lot_id; process_id; input_mass; output_mass; moisture_basis; yarn_count; quality_status; timestamp | 在过程转移和最终放行点进行校准质量计量 | kg | 每批次或每班次 | 与投入和公用工程记录相同期间 | 全部纳入生产线 | 汇总合格转移量；返工品放行前不计入；按最终参考棉纱净重归一化 | 校准；批次谱系；放行检验；库存核对 |
| `cp_energy_and_utility_records` | `fibre_preparation`; `yarn_formation`; `winding_packaging` | 电力、水、蒸汽和调湿公用工程 | 分表、总表、账单、设备运行记录 | meter_id; opening_reading; closing_reading; unit; process_area; runtime; production_mass; allocation_driver | 优先分表；否则核对总表并用有记录的因果驱动量分配 | kWh; MJ; kg; m3 | 表计间隔不超过每月；生产计数按班次或批次 | 与产出相同代表性生产期间 | 全部纳入过程区域和共享公用工程 | 消耗量为终读数减初读数并加调整量；扣除实测输出/回收；共享用量只分配一次 | 表计校准；账单；核对；分配工作表 |
| `cp_auxiliary_and_packaging_records` | `yarn_formation`; `winding_packaging` | 润滑剂、调理剂和包装 | 采购、库存、领用和退货记录；配方与安全资料 | product_id; function; opening_stock; purchases; closing_stock; returns; lot_issue; material; reusable_count | 库存与批次领用质量平衡，并保留配方身份 | kg | 每月及每产品生产期 | 与产出相同代表性生产期间 | 全部纳入纺纱厂和包装配置 | 期初库存加采购减期末库存和退货；按已记录领用或因果生产驱动量分配 | 库存核对；供应商规格；包装物料清单 |
| `cp_waste_and_recovery_records` | `fibre_preparation`; `yarn_formation`; `winding_packaging` | 纤维、纱线、粉尘和包装废物或回收物 | 校准废物秤、转移联单、回收商收据、处置联单 | waste_id; material; source_process; gross_mass; tare_mass; destination; internal_return; sale_status; moisture_basis | 称量每个容器或有记录批次，并核对内部回用 | kg | 每次转移，按月汇总 | 与产出相同代表性生产期间 | 全部纳入纺纱厂和废物去向 | 按材料和去向汇总；内部回用不计外部输出；按过程产出和参考棉纱归一化 | 秤校准；签字联单；回收/处置证据 |
| `cp_direct_emissions` | `fibre_preparation`; `yarn_formation` | 颗粒物和其他直接排放 | 排气筒或车间排风测试、连续监测、排风量记录 | source_id; pollutant; concentration; exhaust_volume; operating_hours; abatement_status; detection_limit | 代表性运行条件下直接测量，或用浓度乘排风量计算 | kg; mg/m3; m3 | 按许可/测试频次，物料过程变更后复测 | 报告期间内的代表性运行 | 前景边界内每个直接排放源 | 积分测得浓度和流量；除非另有实测，不扣除捕集质量；按过程产出归一化 | 实验室资质；仪器校准；采样方案；检出限处理 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部前景清单行 | 归一化数量 = 同范围、同期的期间或批次数量 / 合格参考棉纱净重。 | 采集的活动量；合格棉纱净重 | 每 1 kg 参考棉纱的数量 | `eu-pef-2021-2279` |
| `calc_cotton_fraction` | 产品组成 | 棉分数 = 放行棉纱中的棉纤维质量 / 纺织纤维总质量；结果必须至少为 0.85。 | 组成检验，或按实测损失修正的可追溯纤维物料清单 | 棉质量分数和通过/不通过 | `un-cpc-ver-3-2025` |
| `calc_fibre_balance` | 前景纤维系统 | 接收纤维 + 期初库存 = 合格棉纱 + 外部回收物 + 处置废物 + 实测直接质量排放 + 样品 + 期末库存；全部换算至共同含湿基准。 | 纤维接收；库存；产出；废物；排放；样品；含湿数据 | 质量平衡残差与不确定度说明 | `eu-pef-2021-2279` |
| `calc_shared_utility` | 共享公用工程 | 直接分表后只分配剩余共享量，并采用所声明因果驱动量；分配总和必须等于核对后的共享表计总量。 | 总表与分表记录；驱动量 | 各过程和产品的公用工程数量 | `eu-pef-2021-2279` |
| `calc_direct_emission` | 实测排气排放 | 排放质量 = 代表性浓度乘以按运行时间修正的排风量；报告未检出处理和治理状态。 | 浓度；流量；时间；检出限 | 每过程产出的污染物 kg | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和投入 | 每个放行产品数据集均须保留带 UUID 的参考身份、产品组成、纱支、纺纱路线、整理状态和含湿限定信息。 | UUID 引用；批次规格；放行记录 |
| `dq_temporal` | 前景活动数据 | 投入、公用工程、生产、废物和排放采用同一个一致的代表性期间；通常至少覆盖连续 12 个月，或说明采用较短生产期的理由。 | 表计日期；生产日历；生产期理由 |
| `dq_technological` | 过程覆盖 | 记录须匹配实际采用的开棉、梳棉、可选精梳、并条、粗纱/纺纱、并捻、络筒和调湿技术。 | 过程流程图；设备清单；路线声明 |
| `dq_geographical` | 场址和上游关联 | 识别每个生产场址并选择代表所披露地域的上游数据集；记录代理数据。 | 场址清单；供应商来源；数据集元数据 |
| `dq_completeness` | 前景清单 | 核对纤维质量和场址公用工程，涵盖全部已知废物去向和直接排放，并列出每项排除活动或未解决数据集。 | 质量/能源核对；废物联单；排放清单；缺口清单 |
| `dq_precision` | 测量和计算 | 保留足以复现归一化数值的校准、采样、分配驱动量、检出限处理和不确定度信息。 | 校准证书；采样方案；计算工作簿 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference_flow | 参考产出必须使用产品流 UUID `526fe0a1-be6d-4384-b609-4ca604628ec4`、Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66`，且棉纱净重恰好为 1 kg。 |  |
| `val_product_scope` | product_identity | 确认产品不是缝纫线，纺织纤维质量中棉至少占 85%，且产品为本色纱；如存在另行关联的湿法处理过程则除外。 | `un-cpc-ver-3-2025` |
| `val_route_coverage` | process_inventory | 确认开棉/清棉/混棉、梳棉/并条、纺纱和络筒均有表示；记录精梳、粗纱、并捻、调湿和包装是否适用并已纳入。 | `eu-jrc-txt-bref-2023` |
| `val_mass_balance` | fibre_inventory | 在同一含湿基准上核对纤维投入、内部回用、合格棉纱、回收物、废物、粉尘、样品和库存变化；调查超出所声明测量不确定度的残差。 | `eu-pef-2021-2279` |
| `val_energy_completeness` | electricity_and_utilities | 将同期分表与分配的电力和公用工程核对到场址总量，且共享服务不得重复分配。 | `eu-pef-2021-2279` |
| `val_allocation` | multifunctionality | 验证优先考虑了过程拆分，每个剩余分配驱动量具有因果性并可复现，且共产品/废物状态及敏感性已披露。 | `eu-pef-2021-2279` |
| `val_provisional_ranges` | amount_ranges | 每个 `reasoned_estimate` 范围仅作为可替换的候选筛选范围，不得视为前景数据具有典型性或符合性的证据。 |  |
| `val_completeness_disclosure` | dataset_release | 在提供指南或发布前，列出已执行检查、跳过检查、未解决 UUID、代理数据集、排除项、数据质量局限和全部必需限定信息。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 纺纱厂门本色棉纱的场址特定、产品特定前景制造数据集 |
| downstream_use | 复核后可作为织物、服装和其他纺织产品系统的 secondary_dataset 或 background_dataset 进行关联 |
| allowed_use | 保留所声明组成、路线、含湿和地域信息的门到门棉纱制造清单与下游模型 |
| excluded_use | 未关联上游纤维和能源数据集的完整摇篮到大门声明；缝纫线；含棉低于 85% 的纱；未另行建模的染色、漂白、丝光、涂层或其他湿法整理纱 |
| required_metadata | PCR id；产品流 UUID；棉与非棉组成；纱支；纺纱系统；普梳/精梳状态；股数和捻度；整理；含湿基准；再生含量；场址；地域；期间；过程覆盖；分配；包装 |
| required_quality_disclosure | 前景数据覆盖；表计和秤核对；质量平衡残差；分配驱动量；废物去向；直接排放方法；代理数据集；推理估算；排除和跳过检查 |
| update_trigger | 纤维组成、纱支系列、纺纱技术、精梳/粗纱路线、场址能源供应、助剂配方、包装设计、分配、生产场址或代表性数据期间发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-ver-3-2025` | official_guidance | 联合国统计司，《Central Product Classification Version 3.0 structure》，代码 26360，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索于 2026-08-11） | 官方产品类别范围和 85% 含棉阈值 |
| `eu-jrc-txt-bref-2023` | official_guidance | 欧盟委员会联合研究中心，《Best Available Techniques (BAT) Reference Document for the Textiles Industry》，JRC131874，2023-01。https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf（检索于 2026-08-11） | 棉纺工序分解；电力、调湿、纤维收集、助剂、废物和空气排放相关性 |
| `eu-pef-2021-2279` | official_guidance | 欧盟委员会建议 (EU) 2021/2279，产品环境足迹方法，2021-12-15。https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021H2279（检索于 2026-08-11） | 系统边界、公司特定制造数据、分配层级、完整性、数据质量和校验 |
