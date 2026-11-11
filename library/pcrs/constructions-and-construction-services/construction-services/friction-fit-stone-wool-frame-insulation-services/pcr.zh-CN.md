---
pcr_id: pcr.constructions-and-construction-services.construction-services.friction-fit-stone-wool-frame-insulation-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 框架内摩擦嵌装岩棉保温施工服务

## 1. 范围与适用性

本PCR适用于在已验收、干燥、稳定且尚未封闭的墙体框架空腔内，现场安装无饰面半硬质矿物岩棉板。施工方测量实际净空孔洞、裁切板材、摩擦嵌装、检查安装状态并清洁作业区。交接点为衬板或其他封闭构件遮蔽前已经验收的保温层；其范围窄于一般隔热施工服务。

不包括框架建造或修复、保温材料制造、膜材、衬板、抹灰、外保温与饰面系统、吹填或喷涂保温、玻璃棉、泡沫、既有保温层拆除及任何石棉作业。stone wool对应岩棉；asbestos对应石棉，后者不在本类别内。特定产品安装指南为施工顺序提供依据，但其中裁切余量、龙骨间距、尺寸和指定产品性能不构成本PCR的通用默认值。实际施工遵循所选系统的具体说明（`rockwool-thermal-frame-slab-installation-2025`）。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.friction-fit-stone-wool-frame-insulation-services |
| classification_refs | cpc:3.0:54652 — 隔热施工服务；拟议关系为narrower |
| covered_products | 在已验收开放墙框空腔内摩擦嵌装已声明的无饰面半硬质岩棉板，包括量孔、裁切、检查和局部清洁 |
| excluded_products | 框架建造、衬板与膜材；保温材料制造；外保温与饰面；泡沫、玻璃棉和吹填路线；拆除；石棉与危险材料移除 |
| representative_product | 封闭前已验收的框架空腔岩棉保温层 |
| production_route | 按作业批次进行净空测量→岩棉板裁切→摩擦嵌装→检查、必要返工与清洁→开放空腔保温层验收交接 |
| market_state | 封闭前验收点交付的安装施工服务，而非出厂岩棉板或完整墙体 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 开放墙框空腔内已验收的摩擦嵌装岩棉保温施工服务 |
| How much | 1 m2净验收保温空腔面积 |
| How well | 声明岩棉等级、无饰面半硬质形态、名义/设计厚度、密度或有文件依据的产品密度基准、声明导热系数及适用热阻基准；嵌装合适、无可见缝隙和非预期压缩；在封闭前验收 |
| How long or cycle | 一个明确的施工批次及其验收事件；不据此声明建筑使用寿命或整墙热工性能 |
| reference_flow_link | `accepted_insulation_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已验收的框架内摩擦嵌装岩棉保温施工服务 |
| 参考流属性 | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` |
| 参考单位组 | 面积单位组 `93a60a57-a3c8-18da-a746-0800200c9a66` |
| 参考单位 | m2 |
| 必需限定信息 | 场址与作业批次；墙体/框架及空腔几何；净孔洞面积方法；岩棉厂家与等级；岩棉材质；无饰面半硬质形态；厚度；密度基准；导热系数及试验/声明基准；若声明热阻则提供其基准；安装说明版本；验收点与日期；不合格与返工状态；保管责任与废物去向 |

在前景数据包中声明全部限定信息。岩棉板导热系数是材料性质，不能单独证明整墙传热系数、热桥、气密性、防火性能或建筑长期性能。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| accepted_area | 参考产品 | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | A为采用cp_fit_area按实际净孔洞测得的正值净验收保温空腔面积；扣除框架构件、开口、空洞、不合格与未验收作业。不得采用墙体立面毛面积或采购岩棉板面积。 |
| material_mass | delivered_stone_wool; cut_slabs_transfer; cut_wool_feed; cut_reusable_exit; fit_reusable_exit; cut_wool_waste; fit_wool_waste | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用可追溯的实际质量记录。若按件数或板材体积换算，保留同等级尺寸、密度依据与不确定性；不得缺失这些输入而将面积直接视为质量。 |
| transfer_pairing | prepared_frame_interface; ready_frame_feed; cut_slabs_transfer; cut_wool_feed | 各卡对应的面积或质量 | 各卡对应的m2或kg | 配对交接保留相同transfer_id、批次、状态、单位与数量。记录实际供料与交接量；中间面积和岩棉质量均不得固定为最终1 m2参考值。 |
| thermal_qualifiers | 参考产品 | 面积 `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | 厚度、密度和声明导热系数限定服务品质；保留原单位与声明条件。材料热阻计算必须使用相容的厚度和导热系数，不能替代整墙计算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 空腔可访问、已验收稳定干燥的开放墙框，以及已供应、等级明确的无饰面半硬质岩棉板；框架缺陷与危险材料已在本服务外解决 |
| starting_condition_role | 既有框架构件接口与单独供应的保温物料输入；前景不制造框架 |
| product_classification_scope | 仅cpc:3.0:54652内上述较窄施工服务 |
| recursive_input_rule | 采购同类保温施工服务时，声明供应方范围与数量，以外部供应服务和上游数据集记录；不得在本前景包再次生成其量孔、裁切或嵌装活动 |
| upstream_dataset_requirement | 将实际岩棉板、电力和实际附件关联至相容的上游数据集；框架建造由输入框架的原责任方持有。保留运输与场外废物处理链接并声明建模责任；不默认为无负荷输入或给予避免产品抵扣。 |
| disclosure | 场址、批次边界、已验收起始状态、排除的修正作业、材料规格、工具与共享计量归属、运输/处理责任、实际固定附件条件、内部交接及验收点 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | 本PCR适用于在已验收、干燥、稳定且尚未封闭的墙体框架空腔内，现场安装无饰面半硬质矿物岩棉板。施工方测量实际净空孔洞、裁切板材、摩擦嵌装、检查安装状态并清洁作业区。交接点为衬板或其他封闭构件遮蔽前已经验收的保温层；其范围窄于一般隔热施工服务。 不包括框架建造或修复、保温材料制造、膜材、衬板、抹灰、外保温与饰面系统、吹填或喷涂保温、玻璃棉、泡沫、既有保温层拆除及任何石棉作业。stone wool对应岩棉；asbestos对应石棉，后者不在本类别内。特定产品安装指南为施工顺序提供依据，但其中裁切余量、龙骨间距、尺寸和指定产品性能不构成本PCR的通用默认值。实际施工遵循所选系统的具体说明（`rockwool-thermal-frame-slab-installation-2025`）。 | `rockwool-thermal-frame-slab-installation-2025` |
| starting_frame | aperture_survey | 验收既有框架状态并测量实际净孔洞；重大修复或建造作为单独供应活动。在本服务开始前记录其责任方。 | `rockwool-thermal-frame-slab-installation-2025` |
| cut_and_fit | slab_cutting; fit_acceptance | 纳入量孔、裁切、摩擦嵌装、缝隙检查和局部清洁。遵循实际所选系统说明；不规定通用裁切余量、龙骨间距或固定件数量。 | `rockwool-thermal-frame-slab-installation-2025` |
| component_integration | fit_acceptance | 将裁切岩棉与已测量的既有框架构件接口整合。框架交接仅传递几何与验收状态；框架制造保留在上游。连接方式为摩擦嵌装；固定附件仅按实际系统要求启用。不得虚构混合、化学反应或单组分装配。 | `rockwool-thermal-frame-slab-installation-2025` |
| waste_and_release | slab_cutting; fit_acceptance | 已收集边角料和吸尘粉尘按保管范围内废物记录，保留具名接收方和处理链接。只有独立成分/粒径/介质证据才可报告直接空气释放；不得将已收集废物改作基本排放流。 | `rockwool-thermal-frame-slab-installation-2025` |
| shared_services | 所有过程 | 对量孔照明、裁切、嵌装或吸尘的实际共享电力，按同期间计量/事件和消费者记录分配。每个电表或共享服务只有一个记账责任方。实际共享升降平台、脚手架或租赁设备可用性服务必须声明资产、所有消费节点及合同期间，使用真实小时记录和有依据的受益份额。声明设备/通行设施资本处理及供应商服务包含项。 | |

## 6. 过程清单结构

生产方式为场址作业批次，必要时按房间/墙体、岩棉等级与验收日期划分。每次交货、交接、裁切、不合格、返工、清洁与共享表计期间均关联批次和节点。裁切改变供应岩棉板的几何形状；嵌装将裁切件与既有框架接口整合。不合格嵌装在修正或移除前为在制状态，不得计作已验收面积。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `aperture_survey` | 起始框架检查与净孔洞测量 | required | 每个纳入批次 | 声明供应框架接口并把已测量就绪空腔交予嵌装 | 通过frame_transfer关联的实际就绪空腔面积 |
| `slab_cutting` | 岩棉取料、裁切及裁切节点清洁 | required | 每个纳入批次 | 把供应板材加工为对应孔洞裁切件；持有裁切废物和可用物料外出记录 | 通过wool_transfer交接的实际裁切件质量 |
| `fit_acceptance` | 摩擦嵌装、返工、验收与最终清洁 | required | 每个纳入批次 | 整合框架与裁切件；检查并交付已验收保温层 | A m2净验收保温空腔面积 |

### 过程：起始框架检查与量孔（`aperture_survey`）

#### 输入

##### 产品流

###### 已验收干燥开放框架空腔接口（`supplied_frame_interface`）

既有构件接口；框架上游负荷由原供应方持有。状态为保温前已验收、结构稳定且干燥的开放框架；进入量孔节点。

- 选定流：已验收干燥开放框架空腔接口
- 流属性/单位：Area / m2
- 数量规则：survey_area / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_survey_area`
- 数量范围：暂定推理筛选区间。面积比值用于筛查异常大量未验收/不合格作业或交接记录错误；超出本宽泛暂定筛选区间时应解释，不据此排除数据。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m2
  - 基准：每 1 m2 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 量孔照明所用电力（`survey_electricity`）

仅在量孔照明确实用电时记录。声明使用点实际电压与供应组合，数量来自本节点照明的实际记录。

- 选定流：量孔照明所用电力
- 流属性/单位：Energy / kWh
- 数量规则：survey_energy / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_survey_energy`
- 数量范围：暂定推理筛选区间。手工具可不耗电，而照明与吸尘量受访问条件和工时影响；宽泛暂定区间仅筛查记录/归属错误，不提供默认用电量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：10
  - 单位：kWh
  - 基准：每 1 m2 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 完整量孔升降平台可用性服务 (`survey_shared_access_service_platform`)

仅记录本项独立识别的“完整量孔升降平台可用性服务”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。 数量关联：`shared_service_calc`；保留下列原方法明确公式。

- 选定流：完整量孔升降平台可用性服务
- 流属性/单位：Duration / h
- 数量规则：本项准确合同采用可用性小时，按有证据的计费量及h换算或合同起止秒数/3600独立记录，不能假定每天8h或工具实际运行小时。按同一期间实际活动计算所有受益者权重及本节点份额，覆盖外部使用者并明确闲置可用负担归属；分母为零或受益者未知时采用经复核的其他基准或保留缺口。逐本项合同汇总可用小时乘本节点份额，再按A仅归一化一次，不复制其他子流小时；服务已含能源、搭拆、维护和资本不另计。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_survey_shared_service`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 完整量孔脚手架可用性服务 (`survey_shared_access_service_scaffold`)

仅记录本项独立识别的“完整量孔脚手架可用性服务”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。 数量关联：`shared_service_calc`；保留下列原方法明确公式。

- 选定流：完整量孔脚手架可用性服务
- 流属性/单位：Duration / h
- 数量规则：本项准确合同采用可用性小时，按有证据的计费量及h换算或合同起止秒数/3600独立记录，不能假定每天8h或工具实际运行小时。按同一期间实际活动计算所有受益者权重及本节点份额，覆盖外部使用者并明确闲置可用负担归属；分母为零或受益者未知时采用经复核的其他基准或保留缺口。逐本项合同汇总可用小时乘本节点份额，再按A仅归一化一次，不复制其他子流小时；服务已含能源、搭拆、维护和资本不另计。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_survey_shared_service`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

#### 输出

##### 产品流

###### 已测量就绪开放框架空腔接口（`prepared_frame_interface`）

传递已测量净孔洞但尚未保温的既有框架状态，不是新制造框架输出。以frame_transfer交接给fit_acceptance。

- 选定流：已测量就绪开放框架空腔接口
- 流属性/单位：Area / m2
- 数量规则：ready_area / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_survey_area`
- 数量范围：暂定推理筛选区间。面积比值用于筛查异常大量未验收/不合格作业或交接记录错误；超出本宽泛暂定筛选区间时应解释，不据此排除数据。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m2
  - 基准：每 1 m2 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

### 过程：岩棉板裁切（`slab_cutting`）

#### 输入

##### 产品流

###### 已运抵用于框架保温的无饰面半硬质岩棉板（`delivered_stone_wool`）

进入裁切节点的岩棉板实际物理毛取用量。声明等级、厚度、密度和导热系数以及完整供应板状态。

- 选定流：已运抵用于框架保温的无饰面半硬质岩棉板
- 流属性/单位：Mass / kg
- 数量规则：gross_slab_draw / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cut_material`
- 数量范围：暂定推理筛选区间。宽泛质量区间容纳已声明厚度、密度和裁切几何的显著差异；仅为暂定记录错误筛选，不是岩棉规格、推荐剂量或经验限值。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 m2 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 岩棉裁切与局部清洁所用电力（`cutting_electricity`）

仅记录实际电动工具、照明或裁切节点吸尘用电。声明使用点实际电压与供应组合。

- 选定流：岩棉裁切与局部清洁所用电力
- 流属性/单位：Energy / kWh
- 数量规则：cut_energy / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cut_energy`
- 数量范围：暂定推理筛选区间。手工具可不耗电，而照明与吸尘量受访问条件和工时影响；宽泛暂定区间仅筛查记录/归属错误，不提供默认用电量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kWh
  - 基准：每 1 m2 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 完整裁切升降平台可用性服务 (`cut_shared_access_service_platform`)

仅记录本项独立识别的“完整裁切升降平台可用性服务”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。 数量关联：`shared_service_calc`；保留下列原方法明确公式。

- 选定流：完整裁切升降平台可用性服务
- 流属性/单位：Duration / h
- 数量规则：本项准确合同采用可用性小时，按有证据的计费量及h换算或合同起止秒数/3600独立记录，不能假定每天8h或工具实际运行小时。按同一期间实际活动计算所有受益者权重及本节点份额，覆盖外部使用者并明确闲置可用负担归属；分母为零或受益者未知时采用经复核的其他基准或保留缺口。逐本项合同汇总可用小时乘本节点份额，再按A仅归一化一次，不复制其他子流小时；服务已含能源、搭拆、维护和资本不另计。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cut_shared_service`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 完整裁切脚手架可用性服务 (`cut_shared_access_service_scaffold`)

仅记录本项独立识别的“完整裁切脚手架可用性服务”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。 数量关联：`shared_service_calc`；保留下列原方法明确公式。

- 选定流：完整裁切脚手架可用性服务
- 流属性/单位：Duration / h
- 数量规则：本项准确合同采用可用性小时，按有证据的计费量及h换算或合同起止秒数/3600独立记录，不能假定每天8h或工具实际运行小时。按同一期间实际活动计算所有受益者权重及本节点份额，覆盖外部使用者并明确闲置可用负担归属；分母为零或受益者未知时采用经复核的其他基准或保留缺口。逐本项合同汇总可用小时乘本节点份额，再按A仅归一化一次，不复制其他子流小时；服务已含能源、搭拆、维护和资本不另计。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cut_shared_service`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

#### 输出

##### 产品流

###### 可供摩擦嵌装的岩棉裁切件（`cut_slabs_transfer`）

尚未嵌装的对应孔洞无饰面岩棉裁切件，以wool_transfer交接给fit_acceptance；记录实际交接质量。

- 选定流：可供摩擦嵌装的岩棉裁切件
- 流属性/单位：Mass / kg
- 数量规则：cut_transfer_mass / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cut_material`
- 数量范围：暂定推理筛选区间。宽泛质量区间容纳已声明厚度、密度和裁切几何的显著差异；仅为暂定记录错误筛选，不是岩棉规格、推荐剂量或经验限值。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 m2 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 离开裁切保管边界的可用岩棉（`cut_reusable_exit`）

未安装可用岩棉实际退出裁切保管范围。按供应商退料或第三方可用物料交接互斥分类，保留等级和去向。期末库存不作为外出量。

- 选定流：离开裁切保管边界的可用岩棉
- 流属性/单位：Mass / kg
- 数量规则：cut_reusable_exit_mass / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cut_material`
- 数量范围：暂定推理筛选区间。几何、可用边角料和污染随批次变化，故区间刻意较宽；调查异常值并以独立审核证据替换暂定筛选。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 m2 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

###### 已收集的不可用岩棉裁切残余（`cut_wool_waste`）

裁切节点持有的不可用边角料、不合格物和吸尘收集岩棉，按实际质量交予具名合法废物接收方并声明路线。

- 选定流：已收集的不可用岩棉裁切残余
- 流属性/单位：Mass / kg
- 数量规则：cut_waste_mass / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cut_material`
- 数量范围：暂定推理筛选区间。几何、可用边角料和污染随批次变化，故区间刻意较宽；调查异常值并以独立审核证据替换暂定筛选。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 m2 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 分开收集的废岩棉包装膜 (`cut_packaging_waste_film`)

仅记录本项独立识别的“分开收集的废岩棉包装膜”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：分开收集的废岩棉包装膜
- 流属性/单位：Mass / kg
- 数量规则：按本项“分开收集的废岩棉包装膜”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cut_material`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 分开收集的废岩棉包装板材 (`cut_packaging_waste_board`)

仅记录本项独立识别的“分开收集的废岩棉包装板材”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。

- 选定流：分开收集的废岩棉包装板材
- 流属性/单位：Mass / kg
- 数量规则：按本项“分开收集的废岩棉包装板材”的实际身份、配方或完整交付状态独立测定去皮后净质量kg；保留实际事件、期间、库存、真实可用退回和去向及不确定性，按原已验收产出正分母仅归一化一次。不得由父集合量分摊，也不得把同一SKU的质量与件数作为并列采购交换。 仅计实际独立交付的完整废物；污染载体已含内含物，单独残余子卡只在实物确已分离并独立计量交付时启用，不重复同一物料。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cut_material`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

##### 基本流

### 过程：嵌装与验收（`fit_acceptance`）

#### 输入

##### 产品流

###### 已测量就绪开放框架空腔接口（`ready_frame_feed`）

与frame_transfer配对的同一已测量、已验收开放空腔既有框架构件输入，不重复制造或承担框架上游负荷。

- 选定流：已测量就绪开放框架空腔接口
- 流属性/单位：Area / m2
- 数量规则：frame_feed_area / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fit_material`
- 数量范围：暂定推理筛选区间。面积比值用于筛查异常大量未验收/不合格作业或交接记录错误；超出本宽泛暂定筛选区间时应解释，不据此排除数据。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：5
  - 单位：m2
  - 基准：每 1 m2 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 可供摩擦嵌装的岩棉裁切件（`cut_wool_feed`）

与wool_transfer配对的对应孔洞岩棉裁切件实际内部供料；进入嵌装节点，不固定为参考数量。

- 选定流：可供摩擦嵌装的岩棉裁切件
- 流属性/单位：Mass / kg
- 数量规则：fit_feed_mass / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fit_material`
- 数量范围：暂定推理筛选区间。宽泛质量区间容纳已声明厚度、密度和裁切几何的显著差异；仅为暂定记录错误筛选，不是岩棉规格、推荐剂量或经验限值。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 m2 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 嵌装检查与最终清洁所用电力（`fitting_electricity`）

仅记录嵌装节点的实际电动设备、照明或吸尘用电，排除裁切节点持有的清洁；声明实际电压与供应组合。

- 选定流：嵌装检查与最终清洁所用电力
- 流属性/单位：Energy / kWh
- 数量规则：fit_energy / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fit_energy`
- 数量范围：暂定推理筛选区间。手工具可不耗电，而照明与吸尘量受访问条件和工时影响；宽泛暂定区间仅筛查记录/归属错误，不提供默认用电量。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：20
  - 单位：kWh
  - 基准：每 1 m2 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

###### 完整嵌装升降平台可用性服务 (`fit_shared_access_service_platform`)

仅记录本项独立识别的“完整嵌装升降平台可用性服务”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。 数量关联：`shared_service_calc`；保留下列原方法明确公式。

- 选定流：完整嵌装升降平台可用性服务
- 流属性/单位：Duration / h
- 数量规则：本项准确合同采用可用性小时，按有证据的计费量及h换算或合同起止秒数/3600独立记录，不能假定每天8h或工具实际运行小时。按同一期间实际活动计算所有受益者权重及本节点份额，覆盖外部使用者并明确闲置可用负担归属；分母为零或受益者未知时采用经复核的其他基准或保留缺口。逐本项合同汇总可用小时乘本节点份额，再按A仅归一化一次，不复制其他子流小时；服务已含能源、搭拆、维护和资本不另计。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fit_shared_service`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

###### 完整嵌装脚手架可用性服务 (`fit_shared_access_service_scaffold`)

仅记录本项独立识别的“完整嵌装脚手架可用性服务”，保留实际状态和供应或接收交付点。只有实际记录证明本项独立对象发生时才启用；须识别准确SKU、配方或完整交付混合物、所有权、接收方或服务方以及每次原始及返工事件。未发生须有证据；身份、数量或条件缺失均为阻断完成的数据缺口。不得由其他子流推定本项发生或数量。完整供货及污染载体内含的部件和物料仅计一次。 数量关联：`shared_service_calc`；保留下列原方法明确公式。

- 选定流：完整嵌装脚手架可用性服务
- 流属性/单位：Duration / h
- 数量规则：本项准确合同采用可用性小时，按有证据的计费量及h换算或合同起止秒数/3600独立记录，不能假定每天8h或工具实际运行小时。按同一期间实际活动计算所有受益者权重及本节点份额，覆盖外部使用者并明确闲置可用负担归属；分母为零或受益者未知时采用经复核的其他基准或保留缺口。逐本项合同汇总可用小时乘本节点份额，再按A仅归一化一次，不复制其他子流小时；服务已含能源、搭拆、维护和资本不另计。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fit_shared_service`

数量范围证据需求：须有本项实际交换身份匹配的独立数量证据及不确定性。集合总量或旧集合区间不是子流数量、分配份额或自动有效的子流QA区间。

#### 输出

##### 产品流

###### 已验收的框架内摩擦嵌装岩棉保温施工服务（`accepted_insulation_service`）

实际最终参考服务输出。在封闭前向客户或下一封闭工种交接净验收保温空腔面积；声明岩棉系统，检查无可见缝隙和非预期压缩。

- 选定流：已验收的框架内摩擦嵌装岩棉保温施工服务
- 流属性/单位：Area / m2
- 数量规则：1 m2
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fit_area`
- 数量范围：参考单位归一化恒等关系。归一化恒等关系：一个参考服务单位恰为1 m2；不是暂定筛选或物理产率估计。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：1
  - 上限：1
  - 单位：m2
  - 基准：每 1 m2 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：由采集数据计算（`calculated_from_collection`）

###### 离开嵌装保管边界的可用岩棉（`fit_reusable_exit`）

仅记录实际离开嵌装保管范围、交予供应方或外部复用方的未安装或移除后清洁可用岩棉，保留等级与接收记录。同批重新嵌装是内部循环，不是外出量。

- 选定流：离开嵌装保管边界的可用岩棉
- 流属性/单位：Mass / kg
- 数量规则：fit_reusable_mass / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fit_material`
- 数量范围：暂定推理筛选区间。几何、可用边角料和污染随批次变化，故区间刻意较宽；调查异常值并以独立审核证据替换暂定筛选。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 m2 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 废物流

###### 已收集的岩棉嵌装不合格物与清洁残余（`fit_wool_waste`）

嵌装节点持有的破损、不适用或污染岩棉以及吸尘收集清洁残余，包括移除后的不可用板材；交予实际废物接收方并声明材质和路线。

- 选定流：已收集的岩棉嵌装不合格物与清洁残余
- 流属性/单位：Mass / kg
- 数量规则：fit_waste_mass / A
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 m2 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_fit_material`
- 数量范围：暂定推理筛选区间。几何、可用边角料和污染随批次变化，故区间刻意较宽；调查异常值并以独立审核证据替换暂定筛选。
  - 范围角色：QA校验（`qa_guardrail`）
  - 下限：0
  - 上限：100
  - 单位：kg
  - 基准：每 1 m2 参考流
  - 基准类型：参考流（`reference_flow`）
  - 证据类型：推理估计（`reasoned_estimate`）

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| lot_subdivision | 作业批次负荷 | 优先使用直接节点和批次记录。每个可归属节点分子除以同一个正值验收面积A。不合格作业、嵌装失败和相应清洁仍由产生它们的批次承担；不得以不合格面积作分母，也不得计作另一最终产品。 | |
| reusable_exits | cut_reusable_exit; fit_reusable_exit | 按状态和接收方记录可用实物产品输出，既非保温施工服务也非废物。物理毛岩棉输入包含这些外出物；净使用诊断只扣减一次。已作为输出时，不得再次从物理毛输入扣除同一退料。仅实际未用材料原有上游负荷可随实物退出；量孔、裁切、嵌装与返工施工负荷保留在本服务批次。声明材料负荷转移方法和敏感性，不自动给予避免生产抵扣。 | |
| rework_ownership | slab_cutting; fit_acceptance | 裁切内部复用边角料或同批移除后重新嵌装均以事件id记录内部循环。继承负荷只带入一次，在责任节点增加真实新增裁切/嵌装/清洁负荷。离开节点的物料只能分为可用产品或保管废物之一。 | `rockwool-thermal-frame-slab-installation-2025` |
| shared_meter | 所有电力与共享通行/设备服务卡 | 每个表计期间的E_total为校正单位与倍率后的终值减初值。列出所有消费者，包括范围外用户。优先采用分表量；否则采用有记录的实际运行时间和功率/活动权重。全部消费者份额之和为一；归一化前将每个份额只归入一个节点和批次，不得向每个节点添加场址总账单。实际租赁服务采用shared_service_calc及各节点独立协议；在同合同期间列全受益方并明确可用时间与运行时间基准。 | |
| changeover_cleanup | 作业批次 | 能识别时，把等级切换和局部清洁归入产生事件的批次；否则声明共同事件和实际受益份额。清洁事件只由裁切或嵌装之一持有，每个实物废物与能量只计算一次。 | |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | 流角色（`flow_role`） | 记录类型（`record_type`） | 原始字段（`raw_fields`） | 采集方法（`collection_method`） | 单位（`unit`） | 频率（`frequency`） | 时间覆盖（`temporal_coverage`） | 场址范围（`site_scope`） | 汇总规则（`aggregation_rule`） | 质量证据（`quality_evidence`） |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_survey_area` | aperture_survey | 供应与已测量框架接口 | 孔洞测量和供应方验收记录 | site; lot; room/wall; aperture_id; clear_width; clear_height; irregular_geometry_dimensions; noninsulatable_area; starting_acceptance; ready_state; frame_transfer_id; timestamp | 用检查合格的卷尺或激光测距仪测量实际净孔洞，依据原始尺寸计算几何面积，保留图纸与起始验收；分别求和全部测量面积与就绪面积，除以cp_fit_area的A；未就绪/暂缓空腔不得计入就绪面积。 | m; m2 | 每个孔洞及每次更正测量 | 同批裁切与嵌装前 | 具名墙框空腔 | 每 1 m2 参考流 | 仪器检查、签字测量表、照片和交接核对 |
| `cp_survey_energy` | aperture_survey | 条件性量孔照明 | 节点表计或共享事件记录 | site; lot; node; asset_id; period_start; period_end; meter_start; meter_end; meter_unit; multiplier; meter_to_kWh_factor; conversion_evidence; actual_runtime; observed_power; all_consumers; consumer_weights; allocation_share; billed_service_inclusions | 读取节点表计或把共享期间关联至实际量孔照明，计算分配前保留完整消费者账本；校正终值减初值，只应用量孔份额一次，求和本节点用电分子后除以A。 | kWh | 每个计量期间或共享事件 | 同批量孔期间 | 量孔用户及该共享表计全部其他用户 | 每 1 m2 参考流 | 表计校准或账单、活动日志、份额合计一、期间不重复 |
| `cp_cut_material` | slab_cutting | 岩棉取料、裁切交接、可用外出及岩棉/包装废物 | 库存、称重、交接和废物事件记录 | site; lot; grade; slab_dimensions; piece_dimensions; piece_count; pack_mass; thickness; density_evidence; documented_density_kg_per_m3; opening_stock; receipts; closing_stock; opening_cut_wip; closing_cut_wip; supplier_returns; external_handover; event_id; exit_class; wool_transfer_id; cut_piece_mass; usable_internal_recut; wool_waste_mass; packaging_material; packaging_mass; vacuum_event; destination; timestamp; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 按材质使用经检查秤称重，或采用可追溯同等级包装/件质量换算；记录期初期末库存与互斥外出，包装与岩棉分开；计算毛取料和净用诊断，分别求和交接/可用/废物/包装并除以A；期末库存排除已记录外出。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | kg | 每次收料、交接、退料与废物事件；批次边界盘点 | 包含再裁切和本节点清洁的完整裁切批次 | 裁切保管范围和具名下游接收方 | 每 1 m2 参考流 | 秤检查、供应质量/密度文件、库存账、签字交接和废物凭据、唯一事件 |
| `cp_cut_energy` | slab_cutting | 条件性电动裁切、照明与局部吸尘 | 节点表计或共享事件记录 | site; lot; node; asset_id; period_start; period_end; meter_start; meter_end; meter_unit; multiplier; meter_to_kWh_factor; conversion_evidence; actual_runtime; observed_power; all_consumers; consumer_weights; allocation_share; cleanup_event_id; billed_service_inclusions | 计量实际电动设备或把共享期间关联至裁切用电；使用手刀时不得估计为电锯用电；校正期间电量，应用裁切份额一次，分子求和后除以A。 | kWh | 每个计量期间或共享事件 | 包含实际再裁切与清洁的完整裁切期间 | 裁切用户和全部其他共享表计用户 | 每 1 m2 参考流 | 表计/账单、活动及吸尘归属、全部份额核对 |
| `cp_cut_air` | slab_cutting | 条件性直接空气释放 | 实测释放或有依据的场址特定排放计算 | site; lot; cutting_event; substance_or_composition; particle_size_basis; receiving_air_medium; measured_concentration; sampled_air_volume; capture_efficiency_evidence; release_algorithm; factor_records; method; uncertainty; release_duration; collected_waste_exclusion; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; release_event_id; release_measurement_plane; concentration_interval_ids; interval_duration_s; total_event_airflow_m3_per_s; event_air_volume_m3; event_air_volume_method; net_concentration_mg_per_m3; concentration_representativeness_evidence; background_method_and_applicability; temperature_pressure_wet_dry_basis; process_capture_position; actual_uncaptured_fraction; capture_correction_evidence; event_coverage_evidence; instrument_calibration; detection_limit_method; extrapolation_model_validation; release_uncertainty | 在本协议所属责任节点，逐实际切割或嵌装/清理释放事件记录独立物质/粒径/空气介质身份、原始采样测量及真实排放测量面。独立确定整事件总风量/体积、区间时间、浓度代表性、温压/干湿基准、背景方法及捕集位置/校正。对完整互斥事件区间执行release_calc，或其已验证的特定来源整事件替代方法，保留校准、采样覆盖、模型适用性、不确定性及实测未发生证据。sampled_air_volume仅支持分析浓度/QA，不默认作为整事件体积。各真实子流按实物事件、身份、状态、交付点、期间及唯一属性单位独立记录；收集废物与所含物质不相加，且与实际未受控释放分开。覆盖、身份、数量、方法或必需具体交换缺失均阻断前景完成，不记零。整事件原始kg保留作闭合，各最终卡仅除A一次。 | kg；mg/m3；m3；m3/s；s；无量纲比例；明确记录的温度/压力单位，全部辅助基准分开保留 | 每个评估的裁切释放事件 | 同裁切批次和实际释放期间 | 仅裁切环境边界 | 每 1 m2 参考流 | 采样报告、方法/因子来源、不确定性、保管物与释放分开 |
| `cp_fit_material` | fit_acceptance | 配对框架/岩棉供料、附件、可用和废物外出；条件性实际附件及包装废物 | 交接、称重、附件和返工记录 | site; lot; frame_transfer_id; frame_feed_area; wool_transfer_id; feed_mass; opening_wool_wip; closing_wool_wip; installed_wool_mass; installed_piece_geometry; installed_density_evidence; documented_density_kg_per_m3; accessory_identity; accessory_instruction; accessory_opening; accessory_receipts; accessory_closing; accessory_returns; accessory_external_handover; removal_event; removed_mass; reuse_or_discard; fit_reusable_mass; fit_waste_mass; vacuum_event; recipient; timestamp; aperture_id; final_acceptance_record; installed_acceptance_status; accessory_waste_mass; accessory_packaging_waste_mass; accessory_waste_event; accessory_waste_material; accessory_waste_custodian; accessory_waste_destination; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 核对实际框架与裁切件输入，称量实物外出并收集附件记录；将移除事件分为同批返工、外部可用交接或废物，实际附件说明决定是否启用；求和实际配对供料、计算附件净使用，外出只求和一次并保留在制与重新嵌装循环，各分子除以A。 按最终验收归属记录已安装岩棉；未验收的已装岩棉归互斥期末WIP。按材质/事件/接管方分别称量实际附件废物及包装，可用退回和期末库存不是废物。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | m2; kg | 每次交接、附件领用、移除和清洁；批次边界盘在制品 | 直到验收与最终清洁的完整嵌装批次 | 嵌装保管范围和具名接收方 | 每 1 m2 参考流 | 交接签字、检查合格秤、附件产品证据、移除路线日志、接收凭据 |
| `cp_fit_energy` | fit_acceptance | 条件性嵌装、检查照明与最终吸尘 | 节点表计或共享事件记录 | site; lot; node; asset_id; period_start; period_end; meter_start; meter_end; meter_unit; multiplier; meter_to_kWh_factor; conversion_evidence; actual_runtime; observed_power; all_consumers; consumer_weights; allocation_share; cleanup_event_id; billed_service_inclusions | 计量嵌装实际用户或按完整消费者数据和唯一责任记录分配共同期间；校正期间用电，应用嵌装份额一次，分子求和后除以A。 | kWh | 每个计量期间或共享事件 | 嵌装、检查、返工与最终清洁期间 | 嵌装用户及全部其他共享表计用户 | 每 1 m2 参考流 | 表计/账单、最终清洁归属、全部份额核对 |
| `cp_fit_area` | fit_acceptance | 实际验收参考服务 | 签字验收和孔洞测量记录 | site; lot; aperture_id; accepted_clear_dimensions; noninsulated_deductions; slab_grade; thickness; density_basis; conductivity_basis; visible_gap_check; compression_check; rejection_area; rework_status; enclosure_status; acceptance_date; approver | 把已安装孔洞几何与量孔记录核对，并在封闭前检查；验收签字明确实际合格孔洞，保留不合格作业直到修正和重新验收；A为最终净验收孔洞面积之和，按最终处置每孔仅计一次，A/A为1 m2参考服务。 | m; m2 | 每个验收孔洞及后续拒收/再验收 | 以验收结束的一个完整批次 | 实际检查空腔面，排除框架构件 | 每 1 m2 参考流 | 签字封闭前检查表、尺寸、照片、等级收料和拒收日志 |
| `cp_fit_air` | fit_acceptance | 条件性嵌装直接空气释放 | 实测释放或有依据的场址特定排放计算 | site; lot; fitting_or_cleanup_event; substance_or_composition; particle_size_basis; receiving_air_medium; measured_concentration; sampled_air_volume; capture_efficiency_evidence; release_algorithm; factor_records; method; uncertainty; release_duration; collected_waste_exclusion; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; release_event_id; release_measurement_plane; concentration_interval_ids; interval_duration_s; total_event_airflow_m3_per_s; event_air_volume_m3; event_air_volume_method; net_concentration_mg_per_m3; concentration_representativeness_evidence; background_method_and_applicability; temperature_pressure_wet_dry_basis; process_capture_position; actual_uncaptured_fraction; capture_correction_evidence; event_coverage_evidence; instrument_calibration; detection_limit_method; extrapolation_model_validation; release_uncertainty | 在本协议所属责任节点，逐实际切割或嵌装/清理释放事件记录独立物质/粒径/空气介质身份、原始采样测量及真实排放测量面。独立确定整事件总风量/体积、区间时间、浓度代表性、温压/干湿基准、背景方法及捕集位置/校正。对完整互斥事件区间执行release_calc，或其已验证的特定来源整事件替代方法，保留校准、采样覆盖、模型适用性、不确定性及实测未发生证据。sampled_air_volume仅支持分析浓度/QA，不默认作为整事件体积。各真实子流按实物事件、身份、状态、交付点、期间及唯一属性单位独立记录；收集废物与所含物质不相加，且与实际未受控释放分开。覆盖、身份、数量、方法或必需具体交换缺失均阻断前景完成，不记零。整事件原始kg保留作闭合，各最终卡仅除A一次。 | kg；mg/m3；m3；m3/s；s；无量纲比例；明确记录的温度/压力单位，全部辅助基准分开保留 | 每个评估的嵌装释放事件 | 同嵌装批次和实际释放期间 | 仅嵌装环境边界 | 每 1 m2 参考流 | 采样报告、原始数据和因子来源、不确定性、不与嵌装废物重叠 |
| `cp_survey_shared_service` | aperture_survey | 条件性共享通行/设备可用性服务 | 租赁合同、资产事件和完整消费者账本 | site; lot; node; asset_id; actual_equipment_identity; supplier_contract; service_gate; time_basis; availability_start; availability_end; billed_quantity; billed_unit; documented_time_conversion; all_consumers; consumer_activity_records; weights; allocation_share; energy_inclusions; capital_and_maintenance_inclusions; setup_removal_owner; timestamp; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 记录真实供应可用期间与合同单位，核对同资产期间全部受益方的实际消费者活动，保留区分可用时间与运行时间的证据；各节点先收集自己的原始记录再分配。按有文件依据换算为h，乘本节点受益份额一次，求和后除以A；不得重复加入整张发票或供应方已包含负荷。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | h | 每个资产/服务期间及消费者变更 | 合同可用期间内本节点全部参与时间 | 本节点及全部其他资产消费者，包括范围外用户 | 每 1 m2 参考流 | 供应合同/发票、资产日志、精确单位换算、消费者份额合计一、包含项核对 |
| `cp_cut_shared_service` | slab_cutting | 条件性共享通行/设备可用性服务 | 租赁合同、资产事件和完整消费者账本 | site; lot; node; asset_id; actual_equipment_identity; supplier_contract; service_gate; time_basis; availability_start; availability_end; billed_quantity; billed_unit; documented_time_conversion; all_consumers; consumer_activity_records; weights; allocation_share; energy_inclusions; capital_and_maintenance_inclusions; setup_removal_owner; timestamp; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 记录真实供应可用期间与合同单位，核对同资产期间全部受益方的实际消费者活动，保留区分可用时间与运行时间的证据；各节点先收集自己的原始记录再分配。按有文件依据换算为h，乘本节点受益份额一次，求和后除以A；不得重复加入整张发票或供应方已包含负荷。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | h | 每个资产/服务期间及消费者变更 | 合同可用期间内本节点全部参与时间 | 本节点及全部其他资产消费者，包括范围外用户 | 每 1 m2 参考流 | 供应合同/发票、资产日志、精确单位换算、消费者份额合计一、包含项核对 |
| `cp_fit_shared_service` | fit_acceptance | 条件性共享通行/设备可用性服务 | 租赁合同、资产事件和完整消费者账本 | site; lot; node; asset_id; actual_equipment_identity; supplier_contract; service_gate; time_basis; availability_start; availability_end; billed_quantity; billed_unit; documented_time_conversion; all_consumers; consumer_activity_records; weights; allocation_share; energy_inclusions; capital_and_maintenance_inclusions; setup_removal_owner; timestamp; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | 记录真实供应可用期间与合同单位，核对同资产期间全部受益方的实际消费者活动，保留区分可用时间与运行时间的证据；各节点先收集自己的原始记录再分配。按有文件依据换算为h，乘本节点受益份额一次，求和后除以A；不得重复加入整张发票或供应方已包含负荷。 按身份、实物事件、状态、交付点和期间独立记录每项实际子流或后续细化交换。即使尚未确定具体交换身份，原全部采集和闭合义务仍保留。不得分摊集合总量或把数值区间复制给子流，不得重复计算载体及其内含物，也不得将发生情况、数量或原生参考缺失填成零。每项具体交换只能有一种属性和一个单位；CP其他读数仅作辅助且须有证据换算。必要细化缺失会阻断数据集完成。 | h | 每个资产/服务期间及消费者变更 | 合同可用期间内本节点全部参与时间 | 本节点及全部其他资产消费者，包括范围外用户 | 每 1 m2 参考流 | 供应合同/发票、资产日志、精确单位换算、消费者份额合计一、包含项核对 |

### 计算规则

| rule_id | 适用对象 | 公式或规则（`formula_or_rule`） | 输入（`inputs`） | 输出（`output`） | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_area_calc | accepted_insulation_service | 每个最终验收孔洞的net_area = measured geometric area - recorded noninsulated deductions；A = sum(net_area)；参考量 = A / A = 1 m2；A必须为正。 | accepted_clear_dimensions; noninsulated_deductions; visible_gap_check; compression_check; rejection_area; rework_status; acceptance_date; approver; cp_fit_area | A; accepted_insulation_service |  |
| survey_area_calc | supplied_frame_interface; prepared_frame_interface | survey_area为实测净空腔面积之和；ready_area仅对已验收就绪空腔求和；各自除以A。 | clear_width; clear_height; irregular_geometry_dimensions; noninsulatable_area; ready_state; cp_survey_area; A | survey_area / A; ready_area / A |  |
| cut_stock_calc | delivered_stone_wool; cut_reusable_exit | gross_slab_draw = opening_stock + receipts - closing_stock；cut_reusable_exit_mass = supplier_returns + external_handover；diagnostic_net_use = opening_stock + receipts - closing_stock - supplier_returns - external_handover。退料与外部交接互斥且不在期末库存内。已作可用物输出时，不再减少物理毛输入。gross_slab_draw与cut_reusable_exit_mass分别除以A。 | opening_stock; receipts; closing_stock; supplier_returns; external_handover; cp_cut_material; A | gross_slab_draw / A; cut_reusable_exit_mass / A; diagnostic_net_use |  |
| cut_mass_calc | cut_slabs_transfer; cut_wool_waste; `cut_packaging_waste_film`; `cut_packaging_waste_board` | 按wool_transfer_id求和cut_piece_mass得到cut_transfer_mass；不可用岩棉与裁切持有捕集尘单独求和为cut_waste_mass；按实际材质单独求和废弃包装为cut_packaging_mass。各除以A；可用内部再裁切不作为新外部输入/输出。 | cut_piece_mass; wool_waste_mass; packaging_mass; wool_transfer_id; event_id; cp_cut_material; A | cut_transfer_mass / A; cut_waste_mass / A; cut_packaging_mass / A |  |
| fit_feed_calc | ready_frame_feed; cut_wool_feed | frame_feed_area为实际框架交接之和；fit_feed_mass为实际裁切件交接之和。各自除以A并与配对来源卡核对，不将任何一项固定为1。 | frame_feed_area; feed_mass; frame_transfer_id; wool_transfer_id; cp_fit_material; A | frame_feed_area / A; fit_feed_mass / A |  |
| fit_exit_calc | `refine_retention_accessories`要求细化的实际交换; fit_reusable_exit; fit_wool_waste | 依据实际说明启用附件后，accessory_mass = accessory_opening + accessory_receipts - accessory_closing - accessory_returns - accessory_external_handover；fit_reusable_mass为外部可用物退出之和；fit_waste_mass为不可用移除物与嵌装持有捕集清洁物之和。各除以A；同批重新嵌装为内部循环，每份移除物只有一个去向。 accessory_returns与accessory_external_handover互斥，均排除accessory_closing；accessory_mass包括实际附件废弃损耗，该损耗通过`refine_fit_accessory_packaging_waste`要求细化的实际交换计一次，不再重复扣减。 | accessory_opening; accessory_receipts; accessory_closing; accessory_returns; accessory_external_handover; accessory_identity; accessory_instruction; removal_event; reuse_or_discard; fit_reusable_mass; fit_waste_mass; cp_fit_material; A | accessory_mass / A; fit_reusable_mass / A; fit_waste_mass / A |  |
| electricity_calc | survey_electricity; cutting_electricity; fitting_electricity | meter_to_kWh_factor在原始单位为kWh、Wh、MJ时分别为1、1/1000、1/3.6；其他单位须有文件换算因子和conversion_evidence。各期间corrected_energy = (meter_end - meter_start) * multiplier * meter_to_kWh_factor；依据consumer_weights和actual_runtime/observed_power计算allocation_share = 本消费者权重 / 全部消费者权重之和，或保留直接分表归属记录。采用权重法时，全部消费者权重之和必须为正；总权重为零、未知或缺失使用者时，保留数据缺口或采用另行审查的分配基准，不能计算0/0或自动赋份额为1。直接分表可依据明确的独立节点归属确定份额，不需要未定义的权重除法。consumer_energy = corrected_energy * allocation_share；按各自节点求和为survey_energy、cut_energy或fit_energy，再除以A。包括范围外用户在内的全部份额合计一。优先使用分表；实测运行时间/功率权重为后备分配证据，不另增加用电量。 | meter_start; meter_end; meter_unit; multiplier; meter_to_kWh_factor; conversion_evidence; actual_runtime; observed_power; all_consumers; consumer_weights; allocation_share; cp_survey_energy; cp_cut_energy; cp_fit_energy; A | survey_energy / A; cut_energy / A; fit_energy / A |  |
| release_calc | `refine_cut_airborne_particles`要求细化的实际交换; `refine_fit_airborne_particles`要求细化的实际交换 | 逐独立物质/粒径基准及真实释放测量面/空气介质，对完整互斥事件区间i计算整事件mass_kg = SUM(net_concentration_mg_per_m3_i * event_air_volume_m3_i * actual_uncaptured_fraction_i) / 1000000。event_air_volume_m3_i是该区间穿过排放测量面的全部空气体积，由有依据的总风量及时间或独立验证的整事件体积方法确定，绝不是仅用分析采样的sampled_air_volume。浓度须代表同一完整气流/时段，温压及干湿基准、物质/粒径定义相容，背景校正或有依据的不适用说明均有记录。采样体积仅保留作分析QA。仅当证据证明浓度/体积位于过程捕集后的真实未捕集释放测量面时，actual_uncaptured_fraction_i = 1；捕集前测量只使用同事件有依据的未捕集比例一次，不再次校正捕集后读数，不将吸尘捕集废物当空气释放。环境/个人样本、房间体积、部分时段样本或平衡余差都不证明整事件排放；只有实际释放面/完整气流/完整期间覆盖已证实时，样本体积才可等于事件体积。逸散或非均匀释放可另用完整验证的特定来源通量/扩散或其他整事件算法，保留明确活动覆盖、因子及不确定性；替代方法不相加。净浓度未知或为负、区间缺失、校正未定义或外推无依据时保留方法缺口，不填零或虚构排放。按同身份将真实整事件释放质量加至cut_air_mass或fit_air_mass，作为对应物料平衡的原始kg，仅在最终卡除A一次。 各actual_uncaptured_fraction_i须为有证据的0至1无量纲比例；缺失或越界是方法缺口，不截断或补默认值。 | 所属责任节点的cp_cut_air或cp_fit_air; net_concentration_mg_per_m3_i; event_air_volume_m3_i; actual_uncaptured_fraction_i; concentration_interval_ids; 完整事件覆盖; 相符浓度/体积基准; 有据背景/捕集方法; 校准及不确定性; 或已验证的特定来源整事件算法 | 最终按A归一前的整事件mass_kg、cut_air_mass或fit_air_mass（原始kg） |  |
| mass_conversion_calc | delivered_stone_wool; cut_slabs_transfer; cut_wool_feed | 无法实际称重时，mass_kg = sum(依据piece_dimensions或installed_piece_geometry推导的实际体积m3 * documented_density_kg_per_m3)；保留尺寸、边角料几何、密度来源及不确定性。供应包装质量仅适用于实际等级和件数。 | piece_dimensions; installed_piece_geometry; grade; density_evidence; installed_density_evidence; documented_density_kg_per_m3; pack_mass; piece_count; cp_cut_material; cp_fit_material | material_mass_kg |  |
| cut_balance_calc | delivered_stone_wool; cut_slabs_transfer; cut_reusable_exit; cut_wool_waste; `refine_cut_airborne_particles`要求细化的实际交换 | 核对gross_slab_draw + opening_cut_wip = cut_transfer_mass + cut_reusable_exit_mass + cut_waste_mass + cut_air_mass + closing_cut_wip + unexplained_difference。完整板期初期末库存与裁切件在制品分开。缺直接释放证据时保留未知释放/差额为缺口，不作为零或精确闭合。在测量不确定性下解释差额；内部再裁切不添加外部供料或外出。 | gross_slab_draw; opening_cut_wip; cut_transfer_mass; cut_reusable_exit_mass; cut_waste_mass; cut_air_mass; closing_cut_wip; cp_cut_material; cp_cut_air | cutting_mass_balance; unexplained_difference |  |
| fit_balance_calc | cut_wool_feed; fit_reusable_exit; fit_wool_waste; `refine_fit_airborne_particles`要求细化的实际交换 | 核对fit_feed_mass + opening_wool_wip = installed_wool_mass + fit_reusable_mass + fit_waste_mass + fit_air_mass + closing_wool_wip + unexplained_difference。installed_wool_mass仅包括最终验收孔洞内的岩棉，来自该验收部分可追溯实际称重或安装件几何乘同等级密度，排除附件。closing_wool_wip包括未验收或拒收但尚未移除的已安装岩棉以及其他期末待施工岩棉，均排除installed_wool_mass及已记录出口；各物理部分只归一个互斥池。重新嵌装不增加新供料。缺释放证据时，未知释放/差额保留为缺口，不声称精确闭合或零释放。 | fit_feed_mass; opening_wool_wip; installed_wool_mass; installed_piece_geometry; installed_density_evidence; fit_reusable_mass; fit_waste_mass; fit_air_mass; closing_wool_wip; cp_fit_material; cp_fit_air; aperture_id; final_acceptance_record; installed_acceptance_status | fitting_mass_balance; unexplained_difference |  |
| shared_service_calc | `survey_shared_access_service_platform`; `survey_shared_access_service_scaffold`; `cut_shared_access_service_platform`; `cut_shared_access_service_scaffold`; `fit_shared_access_service_platform`; `fit_shared_access_service_scaffold` | 各实际资产合同期间，availability_hours为有文件依据发票数量乘可追溯h换算，或合同实际经过秒数/3600；不得假设一个工作日等于8 h。按声明基准的真实使用/活动记录确定受益权重；allocation_share = beneficiary weight / sum(all beneficiary weights)。全部权重为零或受益方未知时，声明另一经审查分配基准或保留缺口。包含范围外受益方并明确闲置可用性负荷归属。节点shared_hours = sum(availability_hours * allocation_share)，各分子除以A。供应商已含电力、搭拆、维护或资本负荷不得重复计入。 | actual_equipment_identity; supplier_contract; time_basis; availability_start; availability_end; billed_quantity; billed_unit; documented_time_conversion; all_consumers; consumer_activity_records; weights; allocation_share; energy_inclusions; capital_and_maintenance_inclusions; setup_removal_owner; cp_survey_shared_service; cp_cut_shared_service; cp_fit_shared_service; A | survey_shared_hours / A; cut_shared_hours / A; fit_shared_hours / A |  |

| accessory_waste_calc | `refine_fit_accessory_packaging_waste`要求细化的实际交换 | accessory_waste_total_mass = sum(accessory_waste_mass) + sum(accessory_packaging_waste_mass)，按互斥实际材质/事件累计，排除全部岩棉废物、可用退出及期末库存；各已解析材质分子除以正的同批A。 | accessory_waste_mass; accessory_packaging_waste_mass; accessory_waste_event; accessory_waste_material; accessory_waste_custodian; accessory_waste_destination; cp_fit_material; A | accessory_waste_total_mass / A |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求（`requirement`） | 证据（`evidence`） |
| --- | --- | --- | --- |
| identity_fit | 所有产品和废物行 | 最终数据集交换前核实实际材料/状态/去向；通用棉材、错误石棉翻译或出厂板材流不能表示施工服务。材料伞形卡须解析实际交换。 | 产品交货单、所选系统说明、实际身份核实 |
| geometry_quality | 验收面积和交接 | 相同批次与孔洞id连接测量就绪几何、真实框架交接和最终验收面积；A不含框架构件、重复面、不合格作业或采购板面积。 | cp_survey_area; cp_fit_material; cp_fit_area |
| material_reconciliation | 裁切和嵌装 | 毛岩棉取料与裁切交接、可用退出、岩棉废物和有依据直接释放核对，保留在制品与测量不确定性；嵌装供料与安装岩棉、在制品、可用退出、废物和释放核对。安装质量为实际称重或已声明尺寸-密度诊断，不添加施工输出。 | 库存与交接账、件几何/密度、接收凭据 |
| complete_period | 所有节点 | 覆盖从起始量孔到最终清洁的整个具名批次，含失败裁切、返工、等级切换和相关收料/库存变化；披露遗漏、估补数量与不确定性。 | 带时间节点记录与验收时间序列 |
| shared_ownership | 共享电力和清洁 | 保留期间初终值、所有消费者、权重、份额、责任归属和账单包含项。多节点可引用同证据，但每个物理事件只计一次。 | 节点表计、共享事件账和全消费者核对 |
| provisional_range_use | 所有筛选区间 | 暂定推理筛选既非默认清单值，也非事实边界、性能阈值或自动通过/拒绝标准；按原始记录调查异常，经验限值须来自独立审核批次。 | 明确范围元数据、未来外部或独立审核参考样本 |
| `refine_survey_shared_access_service` | `survey_shared_access_service_platform`; `survey_shared_access_service_scaffold` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件性外部供应共享设备/通行服务。仅在本节点实际使用租赁或外供服务时记录；声明真实资产、服务合同及其电力/资本责任。计时基准为合同可用期间，不能假设为工具实际运行时间。最终交换前识别各实际服务和供应商数据集，不预设通用平台/脚手架身份。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_survey_shared_service`; 实际独立记录及身份／单位证据 |
| `refine_cut_shared_access_service` | `cut_shared_access_service_platform`; `cut_shared_access_service_scaffold` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件性外部供应共享设备/通行服务。仅在本节点实际使用租赁或外供服务时记录；声明真实资产、服务合同及其电力/资本责任。计时基准为合同可用期间，不能假设为工具实际运行时间。最终交换前识别各实际服务和供应商数据集，不预设通用平台/脚手架身份。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_cut_shared_service`; 实际独立记录及身份／单位证据 |
| `refine_cut_packaging_waste` | `cut_packaging_waste_film`; `cut_packaging_waste_board` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：仅记录实际丢弃包装，按薄膜、纸板或其他真实材质分开，不重复包含岩棉；保留可返还包装仍为库存。按实际材质和处理路线声明接收方。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_cut_material`; 实际独立记录及身份／单位证据 |
| `refine_cut_airborne_particles` | 独立细化的实际交换 | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：只有独立量化的直接释放才启用本条件卡；保留实际物种或矿物成分、粒径基准和所报告的空气接收介质。未知成分/粒径/介质不得假定；吸尘捕集物为废物。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 实际采用粒径分级时，各粒径分段必须互不重叠，不得将存在包含关系的累计粒径数据直接相加。 | `cp_cut_air`; 实际独立记录及身份／单位证据 |
| `refine_retention_accessories` | 独立细化的实际交换 | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：仅当所选岩棉/系统说明及实际施工要求固定附件时启用；普通摩擦嵌装不预设固定件。记录实际附件化学材质、形态和固定角色，保留在保温装配体内。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_fit_material`; 实际独立记录及身份／单位证据 |
| `refine_fit_shared_access_service` | `fit_shared_access_service_platform`; `fit_shared_access_service_scaffold` | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：条件性外部供应共享设备/通行服务。仅在本节点实际使用租赁或外供服务时记录；声明真实资产、服务合同及其电力/资本责任。计时基准为合同可用期间，不能假设为工具实际运行时间。最终交换前识别各实际服务和供应商数据集，不预设通用平台/脚手架身份。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_fit_shared_service`; 实际独立记录及身份／单位证据 |
| `refine_fit_accessory_packaging_waste` | 独立细化的实际交换 | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：仅在实际固定附件或其包装产生废弃物时启用。分别记录各项实际附件成分与包装材质的质量、接管方和去向，排除可用退回及期末库存；本条件性待细分卡排除岩棉废物和直接环境释放。实际附件及包装成分、状态尚未明确；发布前须展开为按材质解析的实际交换。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 | `cp_fit_material`; 实际独立记录及身份／单位证据 |
| `refine_fit_airborne_particles` | 独立细化的实际交换 | 本范围属于强制前景数据采集与闭合要求，不是泛化流交换。须保留原对象、条件、实际发生、物态、供应或接收交付点、库存退回、废物释放及资源负担义务。每项实际交换须独立确定准确身份、真实服务参考、唯一属性和单位、独立数量及适用方法、不确定性和保管去向；CP辅助单位不产生额外交换视图。未知不等于零，不得虚构材料、物种或服务方名册，不得分摊集合总量。筛选证据须匹配具体交换，旧集合区间不得复制或分给子流。 原适用范围及证据要求：仅在独立量化的直接释放证据明确物种或矿物成分、粒径和空气介质时启用；按实际空气接收区室报告。最终清洁吸尘捕集颗粒属于fit_wool_waste。 未由已知条件子卡完整规定的实际身份、真实原生参考和数量须继续强制细化；未完成时阻断数据集完成。此要求本身不创建交换，不以未绑定占位卡替代细化。 实际采用粒径分级时，各粒径分段必须互不重叠，不得将存在包含关系的累计粒径数据直接相加。 | `cp_fit_air`; 实际独立记录及身份／单位证据 |
| `atomic_exchange_identity_unit` | all inventory rows | 每项具体流卡只识别一种实际独立供给的产品SKU或配方、完整组件、完整单一职能或真实完整有界服务方服务、实际废物整体及状态接收方，或物质粒径及接收介质，且只有一种属性和一个单位。实际不同身份须有独立数量和记录，不得合为集合交换。完整产品或载体含其内含物一次。同一未改变SKU状态的供给与可用退回，以及实物匹配的内部发送接收，使用同一选定属性单位；kg和件数、MJ和kWh等辅助读数不加和，不产生重复交换。身份、发生、数量或原生参考缺失是缺口，不是零。 任何合并分母均须保留原验收配置分层、状态交付点及因果归属；不得把不等价线路、路线、产品或工单按等价数量盲目相除。 | 实际身份、单位、保管及独立数量证据 |
| quality_whole_event_release | cp_cut_air; cp_fit_air; release_calc; cut_balance_calc; fit_balance_calc | 整事件空气释放质量须有release_calc在真实释放测量面的覆盖及方法证据：代表浓度、相容整事件体积/时间基准、有依据的背景/捕集处理和独立支持的不确定性。仅填齐样本浓度/体积不足；总流量或已验证外推缺失时，空气释放量及相关物料闭合均不完整，不填零或推定蒸气/粉尘。 | 真实排放测量面及完整事件区间名册；经校准体积/浓度测量或已验证整事件模型；不确定性及校正证据 |
| `asset_final_normalization_once` | all inventory rows | 资产当量公式已除以N、D或A时，其结果就是最终每参考流数量。全寿命份额及验收产出归一化与通用归一化规则是同一次操作，不再除一次该分母。完整生命周期上游负担只应用一次。实际完整服务方事件仍计真实事件量，不套用自有资产份额。 | 实际身份、单位、保管及独立数量证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| service_gate | 参考产品 | 检查正净面积A、实际封闭前验收及已声明岩棉/系统限定信息；只输出验收保温空腔面积。出厂保温物料流与本服务交付点不相容。 | `rockwool-thermal-frame-slab-installation-2025` |
| aperture_and_fit | aperture_survey; fit_acceptance | 检查实际净孔洞测量、缝隙/压缩检查和每个不合格孔洞最终处置。返工增加真实负荷，不得扩大A。 | `rockwool-thermal-frame-slab-installation-2025` |
| transfer_and_stock | slab_cutting; fit_acceptance | 核对配对frame_transfer和wool_transfer的id、单位、数量和状态；检查库存项、互斥退料/外部交接、在制品和质量平衡。物理毛账与净诊断账之间不得重复扣退料。 | |
| condition_validation | `refine_retention_accessories`要求细化的实际交换; 所有条件行 | 必须有真实启用依据；有文件依据的缺席可为零，缺证据是数据缺口。最终交换前解析真实附件/包装材料和直接释放身份。 | `rockwool-thermal-frame-slab-installation-2025` |
| node_ownership | 所有节点 | 检查批次与期间覆盖、裁切/嵌装拒收路线、清洁归属和所有消费者共享份额；份额合计一，防止整场址账单或供应商已含负荷重复。 |  |
| validate_release_event_coverage | cp_cut_air; cp_fit_air; release_calc; cut_balance_calc; fit_balance_calc | 核对release_event_id/区间完整性，各浓度在相容基准上代表同一真实释放测量面的对应整事件空气体积。确认背景/捕集校正一次、有效模型或完整气流/期间证据，先以原始kg闭合再最终按A归一。禁止样本质量冒充事件质量、无验证来源外推的个人/环境样本、无依据零/默认值或将未解释物料亏差当释放。 |  |
| thermal_claims | 参考限定信息 | 检查厚度、密度和导热系数声明条件。岩棉lambda或厚度/lambda之比不能单独支持整墙热工性能或建筑寿命声明。 | |
| range_validation | 所有流卡 | 依据原始记录与声明算法核实数量；解释暂定筛选异常，不得以区间中值替代缺记录，也不得把推理区间称为观测数据。 | |
| `atomization_survey_shared_access_service_complete` | `survey_shared_access_service_platform`; `survey_shared_access_service_scaffold` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_survey_shared_access_service`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_cut_shared_access_service_complete` | `cut_shared_access_service_platform`; `cut_shared_access_service_scaffold` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_cut_shared_access_service`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_cut_packaging_waste_complete` | `cut_packaging_waste_film`; `cut_packaging_waste_board` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_cut_packaging_waste`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_cut_airborne_particles_complete` | 独立细化的实际交换 | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_cut_airborne_particles`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_retention_accessories_complete` | 独立细化的实际交换 | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_retention_accessories`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_fit_shared_access_service_complete` | `fit_shared_access_service_platform`; `fit_shared_access_service_scaffold` | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_fit_shared_access_service`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_fit_accessory_packaging_waste_complete` | 独立细化的实际交换 | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_fit_accessory_packaging_waste`；必要细化尚未解决时阻断数据集。 |  |
| `atomization_fit_airborne_particles_complete` | 独立细化的实际交换 | 逐项要求适用实际交换有独立数量、准确身份状态交付点以及唯一属性和单位，保留原完整协议、归一化、库存退回、废物释放及共享资源归属。必要子流、原生参考或数量未知时不得完成数据集；有证据的未发生与缺失区分。不得分摊集合总量、复制集合数值范围，或重复计算载体内含物及供货包已含部件。 须以实际记录完成`refine_fit_airborne_particles`；必要细化尚未解决时阻断数据集。 |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | 每项具体流卡只识别一种实际独立供给的产品SKU或配方、完整组件、完整单一职能或真实完整有界服务方服务、实际废物整体及状态接收方，或物质粒径及接收介质，且只有一种属性和一个单位。实际不同身份须有独立数量和记录，不得合为集合交换。完整产品或载体含其内含物一次。同一未改变SKU状态的供给与可用退回，以及实物匹配的内部发送接收，使用同一选定属性单位；kg和件数、MJ和kWh等辅助读数不加和，不产生重复交换。身份、发生、数量或原生参考缺失是缺口，不是零。 资产当量公式已除以N、D或A时，其结果就是最终每参考流数量。全寿命份额及验收产出归一化与通用归一化规则是同一次操作，不再除一次该分母。完整生命周期上游负担只应用一次。实际完整服务方事件仍计真实事件量，不套用自有资产份额。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 本安装服务的前景数据包；下游process与lifecyclemodel投影保留相同边界和验收面积参考 |
| downstream_use | secondary_dataset; background_dataset，仅在供应服务范围和质量与接收研究相符时使用 |
| allowed_use | 场址/期间特定的开放墙框空腔内无饰面半硬质岩棉摩擦嵌装，须有等效已验收起始接口并披露上游输入和下游处理责任 |
| excluded_use | 所有保温施工通用平均；出厂岩棉清单；完整墙体/建筑热工性能；石棉、玻璃棉/泡沫/吹填系统；框架建造、封闭或外饰面 |
| required_metadata | PCR id/版本；地理/场址/批次/期间；净面积和验收记录；输入框架状态；岩棉身份等级；厚度/密度/导热系数基准；厂家说明版本；设备/电力组合；条件附件；库存交接账；废物接收方/路线；上游下游数据集责任 |
| required_quality_disclosure | 已核实和未解析身份；实测与计算记录；覆盖和缺口；换算不确定性；暂定筛选状态；返工不合格；共享分配；排除的运输/处理/资本责任；适用性局限 |
| update_trigger | 岩棉系统、框架接口、安装/固定路线、交付点、来源说明、电力或废物路线、证据质量或接受身份变化 |

## 11. 数据源

| 来源标识 source_id | 类型 type | 引用 reference | 用途 used_for |
| --- | --- | --- | --- |
| `rockwool-thermal-frame-slab-installation-2025` | handbook | ROCKWOOL，Thermal Frame Slab 32安装指南，23.10.2025版，版本2.00，第1–3页。https://www.rockwool.com/syssiteassets/rw-uk/downloads/installation-guides/thermal-frame-slab-32-installation-guide.pdf | 当前路线依据：框架检查、实际孔洞测量、裁切与摩擦嵌装、缝隙检查及吸尘清洁；指定产品尺寸和余量为产品特定要求，不是通用数量默认值 |
