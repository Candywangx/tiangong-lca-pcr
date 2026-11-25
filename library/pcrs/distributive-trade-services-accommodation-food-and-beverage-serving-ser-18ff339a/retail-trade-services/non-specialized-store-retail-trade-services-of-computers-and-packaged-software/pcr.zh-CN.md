---
schema_version: 1
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-computers-and-packaged-software
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 混合品类门店内密封 M4 Mac mini 16GB/256GB 原厂整包零售服务——部分核心边界

## 1. 范围与适用性

本规则为较窄的配置特定部分增量零售服务方法。完整定义条件与补齐义务见 b_scope 至 b_completion；采集及分配方法为强制要求，不是行业默认实测值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-computers-and-packaged-software |
| classification_refs | CPC 3.0 62184；narrower；452硬件子集 |
| covered_products | b_scope 规定的完整密封 M4 Mac mini 零售服务 |
| excluded_products | 其他配置；M4 Pro；定制机；硬件部件；独立软件/授权/下载；开箱/激活/演示服务；顾客使用/寿命终结；未补齐的完整经营声明 |
| representative_product | Apple Mac mini（2024）银色 M4 10CPU/10GPU 16GB/256GB 千兆以太网美国原包；须核实实际料号/批次 |
| production_route | 收货 -> 密封保管 -> 结账 -> 有证据的现场交付/验收，另含剩余去向；b_channel |
| market_state | 全新未用原厂密封完整主机+电源线+零售包装；内含电池状态按批次/BOM，不推定无电池 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | b_scope 整包的零售保管、结账和已验收交付 |
| How much | 一个最终有效不同原始整包的验收；Q/Q |
| How well | 配置正确、未用原厂封条、包内容完整、接收方具名且验收有效 |
| How long or cycle | 声明池收货至验收周期，含失败尝试、闭店/空闲与后续更正 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收合格密封 M4 Mac mini 16GB/256GB 原厂整包零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际场址; 服务池期间; 服务池版本; 实际料号; 硬件修订; 原序列号集合; 地区; 配置; 原始BOM; 内含电池状态; 原厂封条状态; 未运行; Q; S_F_T_O; 供应商向量边界; 部分核心; 缺失模块 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| m_count | retail_service; failed_pack; supplier_sealed; external_sealed; external_opened | 物品数量 | Item(s) | 服务个数、原始整包当量个数及实物事件个数独立；不得以标称主机质量/容量换算这些个数。最终量均为每参考流。 |
| m_energy | store_ac | 净热值, 低位热值 | MJ | 1kWh=3.6MJ；c_energy。实测来源先归属再除一次 Q。 |
| m_carrier | kit_waste; carton_waste; wrap_waste | 质量 | kg | 实际完整外运载体净 kg；c_waste。载体 kg 不得代表供应商整包生产向量份额。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际同质原始整包进入门店保管；按 b_goods 保留原厂发运向量与入场责任 |
| starting_condition_role | 含明确失败商品背景输入的部分增量零售服务 |
| product_classification_scope | narrower；b_channel；外部接受映射权威 |
| recursive_input_rule | 不递归输入零售服务；原始整商品 failed_pack 按 b_core/b_goods 保持表征 |
| upstream_dataset_requirement | 原供应商发运门制造向量及独立举证的入场运输；不得从规格生成 LCI |
| disclosure | 部分核心、缺失来源/阶段、实际范围、身份缺口、不确定性和固定补齐义务 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| b_scope | receive; custody; checkout; residual | 仅适用于美国市场银色 Mac mini（2024）：M4 10核 CPU/10核 GPU、16GB 统一内存、256GB SSD、千兆以太网，原厂完整零售包内含 Mac mini 与1.8m电源线。记录实际原厂料号、硬件修订、序列号、地区和批次。内部电源、主板、内存、SSD、外壳、任何内含电池、电源线、衬件、标签、油墨、胶黏剂与封口均保留于原供应商 BOM。顾客验收时必须为全新未用原厂密封状态；不得推定另含适配器、显示器、键盘、鼠标或额外软件授权。原厂 macOS/应用预置不形成第二项零售产出。 | apple-mini-spec |
| b_channel | receive; checkout | 起点为门店接收保管门，终点为有证据的顾客实物交付与有效验收，并保留后续更正。实际场址须经营非专门混合品类，以带日期的平面图、品类表及本配置仓储交易记录证明。保留的 Costco 菜单只证明混合商品类目，不能证明本 Mac 配置或本地可售情况。本配置的具名分店库存与现场交付必须有现场证据。本规则是 CPC3.0 62184 中452商品的较窄硬件路线，不涵盖整个452/478叶类。分类接受状态由外部映射与 ADR 记录管理。 | un-cpc62184; costco-mixed-mini |
| b_core | all inventory rows | 部分增量核心包含失败原始整包生产责任 failed_pack、独立门店运行电力 store_ac、零售产出 retail_service、明确列出的实物保管附属输出 supplier_sealed/external_sealed/external_opened，以及实际终端载体 kit_waste/carton_waste/wrap_waste。只有这三项明确列名的产品保管附属输出不作表征，仅用于实物核算。废物载体必须有完整处理背景。原始收货与顾客总实物流转是原始核对记录，不形成额外表征输入。failed_pack 是需表征的产品输入，绝不被保管排除条款排除。完整服务须执行 b_completion 和 a_completion；部分结果须保留部分边界标签。 |  |
| b_goods | failed_pack; retail_service | 对原厂发运门处每个同质原始整包供应商向量 V_s，建立互斥数量当量责任 S_s+F_s+T_s+O_s=N_source_s。S 为最终有效验收商品，F 为已确认丢失、报废或未完成服务但由本服务池承担原背景的外部留存商品，T 为原责任转交至具名持续责任方（含退供责任方或演示资产），O 为未决/期末存货。整包模式要求每个原始单位的全部组分具有同一责任归属。failed_pack=N_F/Q 将含原包装、电源线和原厂预置的完整原制造向量恰好连接一次。S 生产不进入本零售服务；独立的下游 GOODS 系统可将 sum(S_s*V_s)/Q 加入一次。T 与 O 不得被改写为零负荷。缺供应商向量/BOM 时，量化完整性被阻断。 | apple-mini-spec |
| b_components | failed_pack; kit_waste; external_opened | 开箱、诊断使用、充电、软件下载/激活、更换、重新包装、按二手转售或拆件均不得计为密封产出。记录实际改变状态与实际内含电池状态；最大155W及 CPU/内存/存储规格均不能确定实测耗电或完整 LCI。原始受损整套仅在接收方签字接受含内含电池和包装的实际全部组分/状态并有匹配处理边界时，才可保留为一项真实废物载体。若各组分具有不同 S/F/T/O 责任，须先按经核实的原供应商组分向量和实际组分数量/单位增设具体组分产品输入，并从 failed_pack 排除相同向量。不得用任意质量/个数比例拆分环境向量，也不得重复计入已包含的适配器/电源线/电池。 | apple-mini-spec |
| b_route_absence | receive; custody; checkout; residual | 本核心仅接纳以电力运行的收货/保管/结账路线，核心中不存在前景燃烧设备、燃料处理、含制冷剂暖通/冷却或现场化学清洁。责任人员须核查设备台账、全部占用/共享服务空间、服务合同及全期事件记录，逐设备/物种/阶段签署存在或不存在的证据。未知不等于不存在。实际共享暖通、燃料、清洁、泄漏或新增载体须在完整结果前执行 b_completion 原子扩展并审查路线；规格不能推出默认零排放、零泄漏或安全操作批准。 |  |
| b_completion | receive; custody; checkout; residual | 任何完整零售服务声明前，须完成并签署来源/阶段矩阵，覆盖建筑主体/装修/照明/风机、货架/搬运/结账资产、ICT/网络、支付后台、安防摄像/留存、行政、清洁、资本制造/安装/维护/退役及全部必要运输，另含外层运输包装制造/首次使用/入场责任。每个实际同质对象/服务/材料/载体均须有具名双语原子卡、真实过程/方向/类型、流属性/单位、数量、协议、原向量及所含阶段排除项，并在声明完整前同步。经签署且完整的真实整包可按实测分母和实际范围保留整体；去重依据是组分事件/时间/对象重叠，而非供应商编号不同。执行 a_shared/a_assets/a_digital/a_transport/a_cleaning/a_carriers/a_completion。缺实际来源或条件未知均阻断完整性，不允许下游自行选择方法。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| receive | 接收原始整包 | required | 全部原来源含零销售 | 来源责任 | 每参考流 |
| custody | 密封保管与门店支路 | required | 完整保管/空闲期间 | 运行核心与补齐矩阵 | 每参考流 |
| checkout | 交付与最终验收 | required | 全部尝试和更正 | 参考零售产出 | 每参考流 |
| residual | 退回/留存及实际终端载体 | conditional | 任何实际退回/留存/外运；否则须签署不存在；未知阻断完整性 | 实物附属输出与处理 | 每参考流 |

### 过程：收货（`receive`）

#### 输入

##### 产品流

###### M4 Mac mini 16GB/256GB 美国原厂完整零售包（`failed_pack`）

承担 F 生产负荷的原来源完整供应商整包当量输入，含电源线与原零售包装；不是第二次实物收货。只允许一种同质原始配置/向量。各原来源行保留实际匹配向量；若型号/BOM/制造范围不同，量化使用前须增设独立具名输入卡，不得将汇总个数乘一个异质向量。

- 选定流：M4 Mac mini 16GB/256GB 美国原厂完整零售包
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_F/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_receiving`
- 来源：`apple-mini-spec`

### 过程：密封保管（`custody`）

#### 输入

##### 产品流

###### 交流电（`store_ac`）

实际门店收货、保管和结账支路的实测供电；本行不意味着开箱或通电使用密封商品。使用点电压/供应方未特指的流身份须另行匹配供电背景。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：E_MJ/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_electricity`
- 来源：

### 过程：结账与交付（`checkout`）

#### 输出

##### 产品流

###### 验收合格密封 M4 Mac mini 16GB/256GB 原厂整包零售服务（`retail_service`）

服务产出为一个不同原序列号密封完整配置的最终有效验收；实际序列号责任及后续撤销决定 Q。不将计算性能或软件授权作为独立参考流。

- 选定流：验收合格密封 M4 Mac mini 16GB/256GB 原厂整包零售服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_checkout`
- 来源：`ghg-product2011`

### 过程：剩余去向（`residual`）

#### 输出

##### 产品流

###### 实物交付供应商的密封 M4 Mac mini 16GB/256GB 完整包（`supplier_sealed`）

完整退供包实际跨门店门交付，与持续 T 背景责任分别举证。本实物附属输出不再次表征制造。

- 选定流：实物交付供应商的密封 M4 Mac mini 16GB/256GB 完整包
- 流属性/单位：物品数量 / Item(s)
- 数量规则：physical_handover_count/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fates`
- 来源：

###### 无有效验收但外部留存的密封 M4 Mac mini 16GB/256GB 完整包（`external_sealed`）

实际接收方在服务失败/撤销后仍留存完整密封包；计量接收方/状态，不自动作废物。背景按 c_source 保留 F 或签署的 T。

- 选定流：无有效验收但外部留存的密封 M4 Mac mini 16GB/256GB 完整包
- 流属性/单位：物品数量 / Item(s)
- 数量规则：sealed_retained_count/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fates`
- 来源：

###### 无有效验收但外部留存的已开封 M4 Mac mini 16GB/256GB 完整套件（`external_opened`）

已开封实际完整套件仍含原主机、电源线和包装，接收方具名并记录状态/使用史；不得计为密封产出。缺件/拆件须按 b_components 扩展。

- 选定流：无有效验收但外部留存的已开封 M4 Mac mini 16GB/256GB 完整套件
- 流属性/单位：物品数量 / Item(s)
- 数量规则：opened_complete_retained_count/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fates`
- 来源：

##### 废物流

###### 含电源线与零售包装的废弃 M4 Mac mini 原始完整套件（`kit_waste`）

直接称量实际完整终端载体，含实际内含电池及受损/开封状态。仅在有签署接收与匹配完整载体处理时接纳；相同套件不得再计组分废物/制造流。

- 选定流：含电源线与零售包装的废弃 M4 Mac mini 原始完整套件
- 流属性/单位：质量 / kg
- 数量规则：D_kit/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fates`
- 来源：

###### 原零售包之外的废弃瓦楞运输纸箱（`carton_waste`）

实际外运外层瓦楞运输纸箱载体净质量；若该载体接收真实标签/胶带则保留其中；排除 failed_pack/kit_waste 内的原零售盒及单独外运 PE 膜。

- 选定流：原零售包之外的废弃瓦楞运输纸箱
- 流属性/单位：质量 / kg
- 数量规则：D_carton/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fates`
- 来源：

###### 废弃聚乙烯运输缠绕膜（`wrap_waste`）

入场搬运后实际单独外运的聚乙烯缠绕膜载体；核实真实聚合物/状态与接收方。留在另一已计量载体中的膜须从本行排除。

- 选定流：废弃聚乙烯运输缠绕膜
- 流属性/单位：质量 / kg
- 数量规则：D_wrap/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_fates`
- 来源：

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| a_pool | all inventory rows | 预先固定同一配置、场址、接收门范围及观察期间服务池，保留全部失败、闭店、空闲和零销售子批。Q 为截止时最终有效合格验收的不同原序列号数；同序列号再次验收只计一次，实际验收撤销即使无实物退回也须取消有效状态，验收仍有效的财务调整不取消。Q=0 明确不可归一化，保留原始负荷，不得删除或为方便而事后合并。迟到退货以真实事件日期替换原池版本的 Q、F/S/T/O 与全部分子，不重复计入新批次。 | ghg-product2011 |
| a_shared | store_ac | 优先计量互斥支路电量。父表包含子表时仅扣除一次；独立表之间不得相减。将剩余实测 kWh 来源池分为设备活动、设备预约空闲/固定及场所固定组分，完整合计须与父表相符；不得相加不同量纲的驱动量。活动设备用日志中实际占用设备秒数；其空闲/固定池用覆盖全部受益方（含失败/空置预约）的实测预约设备秒数。照明/风机/场所池按互斥供给面积 m2×实际时长 h 分配给全部受益方并含空置预约。每个来源 c、服务池 h 使用 w_c_h=d_c_h/sum_all_h(d_c_h)，E_h=sum_c(E_c*w_c_h)。有正来源但总驱动量为零或未知时阻断完整性。保留闭店时段，并排除供应商已包含的数字模块电量。 | ghg-product2011 |
| a_assets | custody; checkout; residual | 对每个实际同质资产型号/BOM/阶段向量 V_a，在其原始受益服务池采集 e_recorded_a_h：结账/ICT/搬运设备及动力照明/风机装置分别按各同质型号/来源池的实测预约设备小时；建筑主体/无动力固定结构/货架在独立同单位来源池中按受供面积 m2*h；可复用擦拭资产为实际清洁面积 m2。按相同单位定义有证据的预计寿命暴露 L_a，f_a_h=e_recorded_a_h/L_a，累计份额不得超过1；标称寿命或预计暴露不得替代实测分子。退役时 E_actual_a=sum_all_h(e_actual_a_h) 覆盖全部历史受益方，f_final_a_h=e_actual_a_h/E_actual_a。每次寿命/向量修订均以 delta_a_h=f_new_a_h*V_new_a-f_old_a_h*V_old_a 替换全部历史记录。剩余份额只作核对，不得代替暴露变化后的重算。区分发运门制造、安装、维护事件和退役；整包已含阶段须排除重复模块。由原商品转为演示资产时，将同一原始 V_s 转至 T 与资产台账，不得全额 F 加新增制造；拆除原包装与全部资产运输遵循相同的版本化历史份额。 |  |
| a_digital | custody; checkout | 互联网供应商区间 i 保留唯一实际起止、sourceh_i 及全部预约端点连接秒数 r_i_h；n_i_h=sourceh_i*r_i_h/sum_all_h(r_i_h)，包括失败/空置预约。区间不得重叠或再次作为另一活动/空闲/固定来源小时。一笔支付授权或行政批处理事件 j 只保留一次；按其互斥行的实测处理秒数 p_j_h=t_j_h/sum_all_h(t_j_h)，sum_h(p_j_h)=1，将该事件向量分配一次。互联网接入不能涵盖无关后台处理。摄像原捕获映射按带时间戳的实际视场内受益方占地面积×覆盖时长建立，区时互斥、覆盖全部受益方/空置预约，冻结原始映射/版本；对每个原捕获区域/区间 i，camera_fraction_i_h=(capture_area_m2_i_h*capture_duration_h_i_h)/sum_all_h(capture_area_m2_i_h*capture_duration_h_i_h)。将其捕获来源向量按该份额分配一次；retention_source_i_h=(captured_bytes_i*retention_h_i)*camera_fraction_i_h，使用原映射，不随后续销售/留存重新分配。采集真实字节和时长；1GB=10^9字节，1GiB=2^30字节。范围未知或有正来源但驱动量为零时阻断补齐。只有证据已归至精确最终责任方/原池/版本时才免责任分配；仅有供应商区间/货件分配不足以免除。 |  |
| a_transport | receive; custody; checkout; residual | 保留行程/路段 c -> 实际货件/材料/资产 s -> 最终责任方/原池/版本 h。载货来源 q_c 仅用一种有证据的约束容量：确认质量约束时用实际 m_s/sum(m_s)，确认体积约束时用 v_s/sum(v_s)，并保留实测毛重/占用体积与车辆装载证据；约束未知或为其他类型时须审查，并阻断完整使用。空驶返程来源与静止怠速来源分别保留正量，按实测预约容量*h、真实空驶/怠速时长及全部受益方分配；距离为零不能抹去怠速燃料。q_h=sum_c_s(q_c*w_c_s*owner_s_h)。供应商已归至货件的 q_c_s 只免 w；已归至精确最终责任方/原池/版本的来源才免 owner。商品接收门入场运输按原 S/F/T/O 分责：服务只含 F 入场一次，S 随独立 GOODS，T/O 保留来源责任。首次使用耗材（含尚未纳入供应商范围的外层运输包装）与资产/维护/退役运输分别遵循原责任份额；资产运输修订须覆盖全部历史受益方。排除原供应商/制造/处理整包已含运输。 | ghg-product2011 |
| a_cleaning | custody; residual | 补齐实际清洁时，首先对每项实际完整制剂输入、入场供水、可复用布/型号和实际湿废物载体建立独立卡。按供应商批次、原始实测净制剂 m_b kg 与发运门制造向量 V_b 固定每个同质原制剂来源 b。V_b/m_b 为其 kg 基准背景；签署来源范围须明确是否已含原瓶/盖/标签制造，未含包装须有自身实际来源卡且不得重叠。从首次使用至最终处置，保留原来源及全部历史受益服务池。每个截止/版本 v 的原来源守恒为 m_b=sum_j(M_b_j_v)+confirmed_missing_b_v+signed_source_residual_b_v。M_b_j_v 是按实际最终状态和原责任方分类的互斥原制剂来源 kg：累计已用外排、泄漏外排、冲洗液原来源外排、外运容器残留、实测其他最终外排，以及当前使用中留存、当前已开封或受损残留、从未使用且完好原厂密封库存、未用退供和未用继续转移。留存未用来源即使已开封也可保持未分配；运行状态与未分配/首次使用责任方是独立记录字段。外排总量自原收货起累计，暂存状态使用当前实测库存；不得每期丢弃早期外排，也不得将已用->冲洗/留存等中间状态重复计入。每次新事件或更正替换受影响原状态/版本，保留来源 ID 与此前全部事件 ID；修订全部受影响历史责任记录，不重新向当前期间收费。制造/入场责任执行 c_clean_source。不得把新增冲洗水/污物算为制剂 kg。入口供水已排除内部复用，不得再次扣除。直接完整液体外运质量为实测温度/组成下 V_discharge*rho 或净称重，不能从直接外运量再扣库存/蒸发。完整湿布/容器/液体载体须有接收方接受实际组分及匹配处理边界；分别外运载体互斥。实际去向未知或来源残差未决均阻断完整性。仅在实测物种/路径/外部介质明确时增设真实排放卡；内部空气和产品标签均不能建立环境排放。 |  |
| a_carriers | kit_waste; carton_waste; wrap_waste | 保留三个独立层级：实际同状态载体/货件总量 -> 载体内原始来源 s -> 最终责任方/原池/版本 h。使用互斥 direct_exact 或 source_share 模式。direct_exact 中，allocated_i_h=exact_owner_net_kg_i_h，即已举证归至该精确原来源及最终责任方/原池/版本的实测净 kg，不得再乘来源或责任份额。source_share 中，a_i_s=measured_source_origin_same_state_kg_i_s/sum_all_s(measured_source_origin_same_state_kg_i_s)，sum_s(a_i_s)=1，全部原来源 kg 之和须与实际 gross_kg_i-tare_kg_i 对账。随后 allocated_i_h=(gross_kg_i-tare_kg_i)*a_i_s*owner_s_h。供应商仅分至载体/货件总量，不能免去 a_i_s：载体可能含多个原来源/SKU。只有证据已归至该特定原来源时，才可用 provider_source_net_kg_i_s*owner_s_h 而不再乘 a_i_s；只有证据已归至精确最终责任方/原池/版本时，才免去已证实的责任份额。记录 provider_attribution_level 及其原来源/责任方/池/版本证据。有正量但来源/责任部分未分配或未知时，须明确保留并阻断完整性，不得默认零或将已知份额重归一化而掩盖未知。不得再乘组成比例/扣库存。实际处理须覆盖该完整载体，单独建模的来源组分不得重复其处理。已由供应商使用的外箱/膜保留原供应商来源阶段责任；拆包不创造新的首次使用或再次制造。零售商新增耗材按首次实际使用归责，未用库存/转移保留未分配来源。 |  |
| a_completion | all inventory rows | 逐项相容交换/流属性/单位补齐：保留核心原始分子 C_x_h（含 failed_pack 的 N_F 和 store_ac 的 MJ，绝非其已除分母的显示量）、直接保留外部原始模块 R_x_k_h，或将已归一化外部量 z_x_k_h 乘其有证据的原始 D_k_h 恢复。N_complete_x_h=C_x_h+sum_k(R_x_k_h)+sum_k(z_x_k_h*D_k_h)；q_complete_x_h=N_complete_x_h/Q_h，仅一次。每个原来源 ID 的原始与已归一化模式互斥。相加前按 a_assets/a_digital/a_transport 补齐尚缺最终责任分配。核实来源组分/时间/对象/阶段互斥及原版本；不得将 kg 加至 MJ、合并异质资产 Item、丢失已含 F/AC、重复 F 或把模块再除 Q 一次。报告全部缺失原子行与完整性阻断项。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_receiving | receive | failed_pack | 序列号与来源台账 | source_id; original_serial; actual_part_number; hardware_revision; lot; region; seal_photo; original_BOM; contained_cell_state; N_source_s; S_s; F_s; T_s; O_s; V_s; final_owner; original_pool; pool_version; G_open; receipts; customer_returns; internal_in; gross_customer_handover; initially_accepted; never_accepted; supplier_handover; internal_out; condemnation_count; confirmed_missing_count; observed_G_close; event_id; cutoff | 收货责任人逐个扫描实际序列号/批次，记录完整原厂整包和变化状态，必要时独立称量来源/运输包装；供应商签署的制造发运向量及入场阶段图须与实际配置相符。两端截止时盘点个数，追踪每个原来源的退货/再售。 | 个数及独立 kg 证据 | 逐事件及两个截止点 | 完整原池及迟到更正 | 收货区及原供应商门 | 每参考流 | 签署序列号个数/BOM/向量边界；称重时保留秤校准；责任人与复核人签名 |
| cp_checkout | checkout | retail_service | 验收台账 | original_serial; acceptance_event; final_valid_serials; revocation_event; physical_return_event; financial_only_event; gross_customer_handover; initially_accepted; never_accepted; cutoff; pool_version; actual_site; mixed_assortment; seal_state; power_on_history | 结账责任人核对序列号/配置、原厂封条及供应商收货证据中的完整所列包内容；实际交付与合格验收独立于付款记录。不得将开箱/通电检查当作密封验收。分别审计迟到验收撤销与实际退回。 | 个数 | 逐次尝试及截止复核 | 整个声明服务池含失败尝试 | 具名实际混合品类门店交付点 | 每参考流 | 带时间戳验收/退回台账、实际门店品类与未运行证据；收银责任人/复核人 |
| cp_electricity | custody | store_ac | 实测电量与驱动区间 | circuit_id; source_id; start; end; E_kWh_c; meter_unit; parent_contains_child; occupied_equipment_seconds; reserved_equipment_seconds; served_area_m2; duration_h; d_c_h; w_c_h; provider_included_scope; original_pool; pool_version | 计量互斥的收货/保管/结账供电支路，含空闲/闭店时段；操作人绘制父/子边界并记录每个实际受益预约/供给区域。另记供电地区/电压/供应方；核对表计校准、时钟同步与完整来源对账。 | kWh；设备秒；m2*h | 连续区间数据及期间对账 | 全池含零销售/空闲 | 实际场址具名支路 | 每参考流 | 表计校准/单位记录、支路图、全受益方驱动日程、设施责任人 |
| cp_fates | residual | supplier_sealed; external_sealed; external_opened; kit_waste; carton_waste; wrap_waste | 接收方状态与终端货件台账 | event_id; original_serial; actual_recipient; actual_state; physical_handover_count; sealed_retained_count; opened_complete_retained_count; gross_kg; tare_kg; carrier_type; carrier_mode; attribution_level; measured_source_origin_same_state_kg_i_s; a_i_s; owner_s_h; source_id; final_owner; original_pool; pool_version; carrier_state; receiver; consignment_id; W_open; generated_kg; received_waste_kg; dispatched_kg; internal_waste_transfer_kg; confirmed_waste_missing_kg; observed_W_close; condemnation_count; generated_kit_kg; provider_attribution_level; provider_original_source_id; provider_final_owner; provider_original_pool; provider_pool_version; provider_source_net_kg_i_s; exact_owner_net_kg_i_h; unknown_source_origin_kg; unknown_owner_kg | 退货责任人逐件记录实际接收方与密封/开封完整套件状态。废物责任人用经校准秤及实测皮重直接称量每项实际外运同状态完整载体，将外层瓦楞纸箱及 PE 薄膜与原零售包区分。接收方签署实际组分/内含电池状态及处理/运输边界。不得默认废物分类，单有许可证不构成接收。 | 个数；独立 kg | 逐状态/事件/货件及截止 | 原池及后续接收方更正 | 门店退货/暂存废物区及具名接收方门 | 每参考流 | 秤/皮重校准、签署交接单、接收方处理模型、个数-kg事件图；废物责任人 |
| cp_support | custody | store_ac | 强制补齐来源台账 | source_id; stage; object_model; actual_BOM; original_unit; original_denominator; mode; source_boundary; included_stages; provider_included_scope; final_owner; original_pool; pool_version; e_recorded_a_h; L_a; e_actual_a_h; E_actual_a; V_old_a; V_new_a; f_old_a_h; f_new_a_h; sourceh_i; interval_start; interval_end; endpoint_id; r_i_h; t_j_h; event_line_id; capture_area_m2; capture_duration_h; capture_area_m2_i_h; capture_duration_h_i_h; captured_bytes_i; retention_h_i; capture_map_version; captured_bytes; retention_h; trip_c; segment_c; q_c; w_c_s; owner_s_h; attribution_level; m_s; v_s; capacity_constraint_evidence; reserved_capacity; empty_duration_h; idle_duration_h; formulation_source_kg; final_source_state; gross_kg; tare_kg; V_discharge; rho; measured_temperature; C_x_h; R_x_k_h; z_x_k_h; D_k_h; Q; absence_register; formulation_source_id; original_supplier_lot; m_b; V_b; I_b; source_scope_version; packaging_included_scope; original_receipt_date; cutoff_version_v; source_event_id; source_portion_id; state_before; state_after; original_owner; owner_assignment_status; M_b_j_v; cumulative_export_origin_kg; current_retained_origin_kg; unused_supplier_return_origin_kg; unused_transfer_origin_kg; confirmed_missing_b_v; signed_source_residual_b_v; virgin_first_use_withdrawal_kg; irreversible_pre_use_loss_kg; unused_condemnation_kg; g_first_b_h; G_first_b_h; f_b_h; f_old_b_h; f_new_b_h; V_old_b; V_new_b; actual_event_date; prior_source_version | 设施/IT/财务/物流责任人共同采集 a_assets/a_digital/a_transport/a_cleaning/c_clean_source 的原始记录，使用经校准表计/秤、同步事件时钟、实测空间/时间与供应商组分边界。本 custody 视图保留来源矩阵；每个新增原子卡须有匹配单过程视图，不得用多过程协议单元格。原始量保留原单位；作者须在完整性前增设双语卡并重算。  使用经校准质量记录采集原净制剂 kg、逐原来源份额/状态/责任转换及全部历史首次使用事件；以原收货对账累计外排、当前库存、确认损失与未决残差。| 每个同质来源实际单位；秒；m2*h；字节*h；kg；m3 | 逐事件/区间；每次寿命版本及最终退役 | 全部原始历史受益方与观察期间 | 实际门店及供应商/后台/运输/接收边界 | 每参考流 | 签署矩阵、校准、原模型、全受益份额、历史替换差额与复核证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_accept | retail_service | Q=count_distinct(final_valid_serials)；仅当 Q>0 时产出=Q/Q。有效集合已完成更正，不得再次减去撤销 ID。 | final_valid_serials; original_serial; acceptance_event; revocation_event; physical_return_event; financial_only_event; cutoff; pool_version; cp_checkout | 一项验收合格零售服务 |  |
| c_goods_balance | failed_pack | 仅商品个数平衡：G_close=G_open+receipts+customer_returns+internal_in-gross_customer_handover-supplier_handover-internal_out-condemnation_count-confirmed_missing_count；signed_goods_residual=observed_G_close-G_close。gross_customer_handover 由互斥的 initially_accepted 和 never_accepted 出库组成。无实物移动的撤销不是第二次出库。报废将商品转为暂存废物，外运不得再次扣商品。 | G_open; receipts; customer_returns; internal_in; gross_customer_handover; initially_accepted; never_accepted; supplier_handover; internal_out; condemnation_count; confirmed_missing_count; observed_G_close; original_serial; event_id; cp_receiving | 独立商品个数对账 |  |
| c_source | failed_pack | 对原供应商来源 s，N_source_s=S_s+F_s+T_s+O_s；N_F=sum_s(F_s)；failed_pack=N_F/Q。F 原来源整包个数当量与实物退回/接收方个数及废物 kg 独立。外部留存且无有效服务时保持 F，除非有签署的持续 T 责任。完整原向量 V_s 与原入场来源执行 b_goods/a_transport。 | N_source_s; S_s; F_s; T_s; O_s; V_s; source_id; original_serial; final_owner; original_pool; pool_version; Q; cp_receiving | 每参考流的原始整包生产输入 |  |
| c_energy | store_ac | E_MJ=3.6*sum_c(E_kWh_c*w_c_h)；store_ac=E_MJ/Q。按 a_shared 分配完整实测来源池，不得从155W、CPU性能或内存/SSD容量推算用电。 | E_kWh_c; circuit_id; parent_contains_child; occupied_equipment_seconds; reserved_equipment_seconds; served_area_m2; duration_h; d_c_h; w_c_h; Q; cp_electricity | 每参考流分配实测 MJ |  |
| c_custody | supplier_sealed; external_sealed; external_opened | 每项附属输出量=sum(其所述接收方/状态的实际独立实物事件个数)/Q。退供交付、外部密封留存和外部已开封完整套件留存的事件/状态记录互斥。背景 T/F 标签不创造实物流转；具有已验收服务的顾客实物交付只在原始结账台账记录。 | event_id; original_serial; actual_recipient; actual_state; physical_handover_count; sealed_retained_count; opened_complete_retained_count; Q; cp_fates | 每参考流实物附属输出个数 |  |
| c_waste | kit_waste; carton_waste; wrap_waste | D_carrier=sum(allocated_i_h)，按 a_carriers；D_kit/D_carton/D_wrap 分别是其 kit/carton/wrap 的 carrier_type 值；数量=D_carrier/Q。直接外运 kg 不再扣留存/复用库存。独立核对 W_close=W_open+generated_kg+received_waste_kg-dispatched_kg-internal_waste_transfer_kg-confirmed_waste_missing_kg；signed_waste_residual=observed_W_close-W_close。实际套件 condemnation_count 通过事件连接实测 generated_kit_kg，绝不将 Item(s) 等同 kg。废物失踪不能虚构为外运/处理。 | gross_kg; tare_kg; carrier_type; carrier_mode; attribution_level; measured_source_origin_same_state_kg_i_s; a_i_s; owner_s_h; source_id; final_owner; original_pool; pool_version; carrier_state; receiver; consignment_id; W_open; generated_kg; received_waste_kg; dispatched_kg; internal_waste_transfer_kg; confirmed_waste_missing_kg; observed_W_close; condemnation_count; generated_kit_kg; event_id; Q; cp_fates; provider_attribution_level; provider_original_source_id; provider_final_owner; provider_original_pool; provider_pool_version; provider_source_net_kg_i_s; exact_owner_net_kg_i_h; unknown_source_origin_kg; unknown_owner_kg | 直接外运 kg 与独立类型化废物库存核对 |  |
| c_clean_source | custody; residual | 对每个原制剂来源 b，g_first_b_h 为新分配原来源 kg = 原始未用部分首次使用取用量 + 使用前不可逆泄漏/损失量 + 未用来源报废量，以互斥事件/份额 ID 记录；取出后再泄漏或冲洗的部分不得再次进入 g_first。G_first_b_h=sum_original_history(g_first_b_h)；f_b_h=G_first_b_h/m_b，sum_all_h(G_first_b_h)<=m_b。其余未分配未用库存/退回/转移保持原制造/入场责任并具名持续责任方。实际制剂产品输入为 G_first_b_h/Q kg，背景为 V_b/m_b；等价原始制造负荷 f_b_h*V_b 仅作计算核对，绝非另一输入或第二次乘数。原入场来源 I_b 遵循同一 f_b_h，除非证据已归至精确最终责任方/原池/版本；运输仅分至货件时不能免除此责任份额。复用/留存/冲洗衍生物保留首次使用责任方，不重复制造/入场。来源质量/向量/责任更正时，以 delta_b_h=f_new_b_h*V_new_b-f_old_b_h*V_old_b 替换全部受影响历史分配，并类似替换入场来源，记录实际事件日期和原版本。最终来源状态守恒执行 a_cleaning，不得只做当前期间平衡。全部原始制造/入场分子进入 a_completion 后只除一次 Q。 | formulation_source_id; original_supplier_lot; m_b; V_b; I_b; source_scope_version; packaging_included_scope; original_receipt_date; cutoff_version_v; source_event_id; source_portion_id; state_before; state_after; original_owner; owner_assignment_status; M_b_j_v; cumulative_export_origin_kg; current_retained_origin_kg; unused_supplier_return_origin_kg; unused_transfer_origin_kg; confirmed_missing_b_v; signed_source_residual_b_v; virgin_first_use_withdrawal_kg; irreversible_pre_use_loss_kg; unused_condemnation_kg; g_first_b_h; G_first_b_h; f_b_h; f_old_b_h; f_new_b_h; V_old_b; V_new_b; actual_event_date; prior_source_version; source_id; final_owner; original_pool; pool_version; Q; cp_support | 原制剂制造/入场分子及持续来源守恒 |  |
| c_extension | all inventory rows | 各新增实际原子交换按 cp_support 执行 a_assets/a_digital/a_transport/a_cleaning/c_clean_source。最终汇总执行 a_completion，记录原来源为原始或已归一化模式；同一来源不得同时进入两种模式。 | e_recorded_a_h; L_a; e_actual_a_h; E_actual_a; V_old_a; V_new_a; f_old_a_h; f_new_a_h; sourceh_i; r_i_h; t_j_h; capture_area_m2; capture_duration_h; capture_area_m2_i_h; capture_duration_h_i_h; captured_bytes_i; retention_h_i; captured_bytes; retention_h; trip_c; segment_c; q_c; w_c_s; owner_s_h; attribution_level; m_s; v_s; reserved_capacity; empty_duration_h; idle_duration_h; formulation_source_kg; final_source_state; C_x_h; R_x_k_h; z_x_k_h; D_k_h; source_id; final_owner; original_pool; pool_version; Q; cp_support | 相容的补齐原始分子及一次共同归一化 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 未绑定流身份逐行保持未核实。量化完整使用前须取得官方直读原响应及匹配哈希回执、观察状态、双语名/限定信息、类型、流属性/单位链与介质，再匹配实际供应/处理背景。个数/单位支持不能建立服务或整包身份。AC 历史身份不能建立当前供电技术或地区。 | 原始记录、签署完整性矩阵与双语解析/实读审计 |
| dq_quantities | all inventory rows | 必须有实际现场证据、全池覆盖、采集责任人、带日期的场址/期间、校准与签署对账。原厂规格仅为配置证据：不得据此推定实际批次 BOM、实测质量/能量、量化 LCI、环境信用、安全/合规批准或各仓普遍库存。未知必须明确保留，不得编造范围/默认值/因子。 | 原始记录、签署完整性矩阵与双语解析/实读审计 |
| dq_completion | receive; custody; checkout; residual | 在 b_completion 矩阵、全部实际新增原子卡/协议、签署的无燃烧/制冷剂适用性、接收处理及 a_completion 来源对账完成前，报告部分核心及缺失模块。没有完整设备/期间证据的存在/不存在勾选不足以证明。双语审计须涵盖实际解析字段、来源用途、规则范围、Inputs、单位、否定与例外。 | 原始记录、签署完整性矩阵与双语解析/实读审计 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| v_accept | retail_service; failed_pack | 配置/地区/料号/封条/未用状态或实际混合门店交付未知时，拒绝同质密封服务适用性；改变状态的退回保留为明确实物去向，绝不计为密封产出。校验最终有效不同序列号集合、实物交付互斥分区、类型化商品/废物平衡、S/F/T/O 守恒及 Q=0 失败。 |  |
| v_sources | all inventory rows | 逐卡核查原始总量 -> 固定归属 -> 一次 Q；协议过程/flow_role 须包含该行。不得从通用 AC 身份取得背景因子；不得漏 F 或重复 S；直接外运与有符号残差保持独立。非零未解释残差、废物失踪、组分责任变化或未知接收方/供应商范围均阻断完整结果。 |  |
| v_completion | all inventory rows | 完整服务结果须通过 b_completion 与 a_completion，包含全部历史资产替换、全受益数字/空间驱动量、空驶/怠速运输来源、完整实际处理与精确来源阶段去重。候选元数据/中文对齐及机械投影通过，均不建立科学、翻译审查或发布批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 部分增量零售服务前景数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 相同精确配置/路线核心；执行 b_completion/a_completion 后方可作完整服务；独立 GOODS 可加 S 一次 |
| excluded_use | 整个 CPC 叶类；独立软件/下载/授权；计算服务；产品碳中和或安全声明；以部分核心作完整经营比较 |
| required_metadata | b_scope；b_channel；Q；原池/版本；S/F/T/O；来源/阶段边界；实际 BOM 与来源身份 |
| required_quality_disclosure | 部分范围/缺失模块；未绑定行；未知项；类型化平衡残差；全受益/寿命更正覆盖 |
| update_trigger | 配置/BOM/场址/路线/供应商改变；迟到退货/撤销；资产寿命修订/退役；原证据或身份改变 |

## 11. 数据源

| Source id | Type | Reference | Use |
| --- | --- | --- | --- |
| un-cpc62184 | official_guidance | United Nations CPC Version3.0 subclass62184 explanatory note — https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62184 | 包含452与478商品；仅采用较窄硬件范围 |
| apple-mini-spec | standard | Apple, Mac mini(2024) Tech Specs — https://support.apple.com/en-us/121555 | 真实配置和包内容；只用于所述规格及局限，不提供量化 LCI/实际 BOM/批准 |
| costco-mixed-mini | official_guidance | Costco, retained Compare Products page menu — https://www.costco.com/CompareProductsDisplay?partNumbers=4000225148 | 仅用于混合商品类目菜单；不证明 Mac SKU/配置或本地可售性；实际具名场址路线须现场门槛证据 |
| ghg-product2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard(2011), chapters6,7,9 — https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅用于服务单位与细分/物理分配概念；PCR 公式为声明采集方法；不声明整套标准符合性 |
