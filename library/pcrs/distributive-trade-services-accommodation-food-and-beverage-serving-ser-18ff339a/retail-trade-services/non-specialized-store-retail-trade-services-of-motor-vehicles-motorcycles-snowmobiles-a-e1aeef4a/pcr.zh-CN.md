---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-motor-vehicles-motorcycles-snowmobiles-a-e1aeef4a
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 混合商品实体商店全新完整 CURT 45036 预装牵引球座单元零售服务

## 1. 范围与适用性

本候选方法适用于有人值守实体商店销售及门店自提的一种同质、全新未使用、完整 CURT 45036 原始供货配置。原装球座带原厂紧固的2英寸牵引球、2英寸方形接收杆、2英寸下沉量及原配销和夹。实际供应批次包装、封合方式、随附说明和所有附带组件共同界定不可分割原始单元。它是货物组491中按4912/49129解释的机动车牵引配件，不是摩托车、雪地车、通用金属接头或整车。UNSD 62181原文明确指定491和492组，不能仅凭宽泛标题纳入其他货物。Runnings以相同厂家SKU和UPC列出门店自提，并说明服装、工具、宠物和汽车等部门：这是混合商品经营，而不只是多品牌。适用性须有实际实体门店记录，不能从整个网站推定。

路线闸点：从已识别供应商发运实际接收单元开始（下述保留上游责任），零售商保管自收货检验开始。记录身份、完整性、未使用状态、实际包装质量和配置，不符即隔离。依实际货架储存、拣选、扫码、支付授权并交付完整原始单元。结束于预先声明的退货观察窗后客户最终有效验收，保留后续更正。拒收、支付失败、退回或撤销交付、确认丢失、退供和内部转移分别追踪。排除组装、安装、重新紧固、试拖、演示、二手转售、拆包重装组件销售、送货上门和客户行驶。厂家额定能力仅用于型号识别；本PCR不授予适配、安全、法规或符合性批准。厂家7-1/2英寸长度与零售商8-1/4英寸描述不一致，须以批次图纸、实际标识及实测几何解决身份后使用。发货重量不是实测产品或废物质量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-motor-vehicles-motorcycles-snowmobiles-a-e1aeef4a |
| classification_refs | CPC 3.0 62181; narrower |
| covered_products | 全新完整原装CURT 45036预装球座单元，仅实际原始供货配置 |
| excluded_products | 其他SKU、二手或开包单元、安装/维修/演示/试拖、送货上门、整车、球/销散售 |
| representative_product | CURT 45036; UPC612314005345; Runnings10350258 |
| production_route | 供应商发运→混合实体店收货/储存→有人值守收银/门店自提→最终验收 |
| market_state | 全新未用完整原始单元，无安装/使用，须核实实际批次包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一件全新完整CURT 45036原始单元的零售服务 |
| How much | 1 Item(s) |
| How well | 实际供应商配置精确匹配，客户验收完整、未用、身份一致 |
| How long or cycle | 一个原单元首次零售归属周期，含观察窗及后续更正 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一件全新完整CURT 45036原始单元的零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际门店和混合商品; 原批次及SKU/UPC; 完整原组件/包装配置; 未用状态; 实物路线闸点; 预设池及退货观察窗; 最终有效原ID数Q; S/F/T/O来源责任; 部分模块披露; 实际供应商/运输/处理边界; 未决逐行身份 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | retail_service; failed_original; customer_handover; supplier_handover; internal_handover | 物品数量 | Item(s) | 一个验收服务为一个同质原单元归属周期。商品数量与kg独立，禁止用拖行km或厂家额定载荷作分母。 |
| ac_energy | alternating_current | 净热值, 低位热值 | MJ | 实测kWh以精确系数3.6转MJ，不能推定供应因子或电压。 |
| carrier_mass | damaged_unit_waste | 质量 | kg | 实际完整载体毛重减实际皮重，匹配包装和材料状态，不用目录发货重量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已识别原供应商发运；零售商保管始于收货闸点 |
| starting_condition_role | 增量零售服务; 部分核心 |
| product_classification_scope | CPC62181 narrower；机动车接收式牵引配件推断属货物4912/49129，不等同拖车制造492 |
| recursive_input_rule | 不递归纳入同类零售服务；按original_source纳入F原Product输入；仅三项具名实物保管输出卫星不表征 |
| upstream_dataset_requirement | 供应商实际原向量及入场来源须S/F/T/O守恒；适用公用工程、完整废物处理及强制支撑闭合 |
| disclosure | 实施固定补全方法并验证原子模块前为部分增量核心，不能仅凭这些卡声明完整商店 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | retail | 仅纳入上述范围和闸点。核心为收货、完整单元储存及柜台交付。预先固定相同配置、场址、期间池，保留闭店、失败和零销售期间。Q为最终有效原始单元ID去重数，每个原始单元最多一个服务；实物退货和转售不生成新原始ID。即使无实物移动，撤销验收也取消有效性；纯财务调整不取消。Q=0不能归一化，不得删除或替换为成功期间。 | un-cpc-62181; un-goods-49129; runnings-channel |
| original_source | failed_original; retail_service; customer_handover; supplier_handover; internal_handover; damaged_unit_waste | 在原供应商发运闸点保留每个实际完整单元的制造向量V_s，并单独保留入场运输来源。V_s严格为截至供应商发运的制造及原供货包装，排除入场运输。核心failed_original输入仅承载该发运闸点向量，F入场运输为partial_completion及transport_ownership强制遗漏补齐模块。已含运输向量若无供应商清单证据分出完全相同来源阶段则不可采用，绝不能与同一独立入场模块并加。原始组件、涂层、紧固件、说明及批次包装属于该向量；产品网页不是LCI或完整BOM。每个原来源仅分一次：S为最终有效客户归属，F为失败服务责任（销毁、确认丢失或失败但留在外部），T为具名转移责任，O为原库存或未决责任，且S+F+T+O=1。服务排除S制造及其入场运输，单独GOODS系统可加S一次。failed_original为真实Product输入N_F/Q，承载匹配的完整原单元F向量，不是保管卫星；即使无废物，也纳入确认丢失单元。退供分别保留具名延续T/O责任和实际移交。不得从退款推断F。实际组件责任分叉须取得供应商组件向量并建独立原子输入卡，从完整单元向量中剔除完全相同来源部分，不得按质量拆环境向量；未解决前禁止完整性声明。 | curt-model |
| physical_fates | customer_handover; supplier_handover; internal_handover; damaged_unit_waste | customer_handover、supplier_handover、internal_handover仅为明确具名的不表征实物Product保管卫星，不附加新的制造背景。所有客户毛交付H含已验收和从未验收交付且各计一次；后续无移动撤销只更改原事件状态。商品数量平衡为G_close=G_open+R_receive+R_customer-H-R_supplier-J_internal-C_condemned-L_missing+epsilon_goods。报废判定是商品转为待运废物，以事件ID和实测kg连接，不是废物发运。待运废物平衡为W_close=W_open+W_generated-W_dispatch-W_transfer-W_missing_confirmed+epsilon_waste，单位kg。W_dispatch为直接实测托运载体净kg，不再次扣期末库存。W_missing_confirmed为独立确认失踪的待运废物kg，epsilon_waste为不同的有符号未解释残差。两者均须事故ID及去向调查，接收方/处理未知保持不完整，不得虚构发运/处理；数量不可填进kg式。失败但外部留存须保留接收方、状态及F责任，不虚构零售商废物。迟到退货按真实事件日期替换原池分子、Q、来源归属和去向，不再次计入新池。 |  |
| partial_completion | all inventory rows | 这些核心卡为明确的部分增量清单，不是完整商店经营。任何完整服务声明前，cp_completion必须为每个实际遗漏交换建立具名原子卡，列实际过程、方向、Product/Waste/elementary身份、状态、介质、属性/单位、实测分子、协议、背景边界并双语sync。强制闭合登记：建筑/固定设施/货架/照明/风机/暖通资本和运行；收货设备；收银/支付硬件；ICT/网络；摄像/安防；行政；清洁及入口供水/废水；外箱/收据/袋材料及废物；商品/资产/材料/废物运输。缺席证明须全期间现场巡查、电路/资产图、合同、采购/发运记录和责任人签字。纳入设施路线为电力收货/收银及普通无温控货架储存；本PCR仅可补全电阻加热/风机通风设施支撑。须以全期间设备/合同/维护记录及现场检查证明服务本受益方的燃烧和制冷剂设备缺席，包括叉车、备用发电机和暖通。若存在则超出本设施路线而不是零，未知缺席阻止闭合。实际泄漏、涂层破损或打开包装不能默认零，须在完整性前增加实际状态材料/废物/物种路径卡及实测载体平衡。 |  |
| waste_boundary | damaged_unit_waste | 仅实际完整、未使用且已判废的45036单元，连同相同实际供货包装和所有原配件，可使用damaged_unit_waste。称量完整载体，不用名义钢质量或厂家发货重量。接收方签收须明确接受实际钢、镀层、涂层、塑料/纸包装及状态，并匹配完整收集/处理边界。不得在其他卡重复发运其组件。开包、部分缺失、泄漏或单独发运包装须建立不同原子扩展及实测互斥载体。真实Waste输出须表征处理，不是实物Product卫星，也无自动替代产品抵扣。 | curt-model |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | 原单元收货、储存及柜台交付 | required | 实际混合实体店同质未用完整单元，核心保持部分 | foreground_service | 1 Item(s); retail_service |

### 过程：原单元零售 (`retail`)

#### 输入

##### 产品流

###### 失败原单元背景输入 (`failed_original`)

N_F/Q；应用source_f及original_source。仅实际F完整单元发运闸点制造/原包向量，排除入场运输和全部S/T/O部分，F入场须强制补全。

- 选定流：全新完整CURT 45036原始供货单元
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_F/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_sources`
- 来源：curt-model

###### 收货及收银用电 (`alternating_current`)

N_AC/Q；应用energy_pool及subdivide_sources。使用点交流电，背景选择仍须实际供应方/地点/电压。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：N_AC/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

#### 输出

##### 产品流

###### 最终有效零售服务 (`retail_service`)

1 Item(s)；Q/Q=1，每参考流使用service_count。

- 选定流：一件全新完整CURT 45036原始单元的零售服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_events`
- 来源：un-cpc-62181; runnings-channel

###### 客户毛实物交付卫星 (`customer_handover`)

N_H/Q；所有客户毛交付各一次；physical_fates及custody_count；仅不表征保管。

- 选定流：全新完整CURT 45036原始供货单元
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_H/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_events`
- 来源：curt-model

###### 实际退供实物卫星 (`supplier_handover`)

N_R/Q；实际完整未用退供单元；physical_fates及custody_count；T/O背景延续，仅不表征保管。

- 选定流：全新完整CURT 45036原始供货单元
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_R/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_events`
- 来源：curt-model

###### 实际完整单元内部转移卫星 (`internal_handover`)

N_J/Q；实际完整未用转出单元；physical_fates及custody_count；具名T责任方，仅不表征保管。

- 选定流：全新完整CURT 45036原始供货单元
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_J/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_events`
- 来源：curt-model

##### 废物流

###### 完整判废单元废物载体 (`damaged_unit_waste`)

N_W/Q；应用waste_dispatch及waste_boundary。实际固态完整混合载体进入获接受处理，不用名义质量或替代抵扣。

- 选定流：带原始供货包装的完整未用判废CURT 45036单元
- 流属性/单位：质量 / kg
- 数量规则：N_W/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：curt-model

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| subdivide_sources | alternating_current; all inventory rows | 优先互斥直读电表和任务记录。每个同单位来源池a先分出实测active、idle及fixed分子，合计与总表核对（仅包含时扣子表）。收货/扫码设备活动用能按任务实测kWh分配；设备、收银和ICT闲置/固定来源按所有受益方实测预约设备小时分配，含失败/空置预约。实体照明/暖通/场所固定池按互斥分区实测服务面积m2乘时长h。不得把kWh、小时、m2*h、字节或事件数加为一个驱动量。各同单位池q_a按e_a_c/sum_c(e_a_c)分配，保留所有期间，要求总驱动量已知且为正，再求和兼容交换分子。 | ghg-allocation |
| asset_history | all inventory rows | 每个同质实际资产型号/BOM/生命周期向量V各有终身台账。制造加安装、运行公用工程、实际维护/更换、终端处理边界互斥；有证据的完整包所含阶段排除外部重复模块。建筑/固定设施按m2*h暴露，设备/收银/ICT按预约设备h。复用清洁工具按各受益方实际清洁表面m2，e_recorded_h、L_expected及最终e_actual_h/E_actual_all均为同一工具型号清洁m2，绝不能套用h。每个历史受益池h初始f_old_h=e_recorded_h/L_expected，均使用该资产驱动单位。e_recorded_h为经校准计量日志记录的原池实际暴露，绝非预计未来暴露；L_expected为有证据的同单位预计全寿命总暴露；守恒所有受益/未用暴露且累计份额<=1。寿命/向量修订时重算每个历史f_new_h并以delta_h=f_new_h*V_new-f_old_h*V_old替换分子。实际最终退役明确定义E_actual_all=sum_all_h(e_actual_h)，即完整历史中全部受益方实测暴露总量，再用f_final_h=e_actual_h/E_actual_all，对每个历史池实施替换。不得重启制造或把残余全压当前Q。残余1-sum_old_f只是QA，不是替换法。实际整机终端净载体已排除拆件；互斥BOM重构须实测组件，不能再扣一次。资产/维护/退役运输先归属该实际资产，再遵循相同历史份额/版本；已归最终责任者的运输不再乘份额。 | ghg-allocation |
| backend_events | all inventory rows | 支付授权和行政批次均为真实唯一事件j。在各事件实测各来源行处理时间t_j_c，冻结w_j_c=t_j_c/sum_c(t_j_c)，含失败尝试且sum_c(w_j_c)=1，事件供应商分子只归属一次。专属单行事件需实测份额1，来源标记不等于整事件归属。网络供应包采用实际单一合同分母和边界。每个唯一原连接区间j按受益方实测预约端点连接秒net_s_j_c，含闲置/失败预约；w_net_j_c=net_s_j_c/sum_c(net_s_j_c)，总量须已知正值且sum_c(w_net_j_c)=1。将该份额仅一次用于该区间供应来源分子，保留原区间/池/版本。同一连接区间不得再计，亦不得乘入重复的设备活动/闲置/固定用电池。对摄像采集来源j按时间戳冻结实际视场保护/陈列面积A_j_c_zone乘覆盖时长h_j_zone的图，使用互斥区时、所有受益方及空置预约：w_j_c=sum_zone(A_j_c_zone*h_j_zone)/sum_c_zone(A_j_c_zone*h_j_zone)。共享留存字节小时沿用原来源/版本图而非后续销售；GB=10^9字节，GiB=2^30字节。网络接入本身不包含支付、行政和安防后台。 |  |
| transport_ownership | all inventory rows | 使用行程/区段k→托运来源s→最终责任方/池/版本h。证实质量容量约束时，用实测托运质量乘载运距离；证实体积容量约束时，用实际占用体积乘距离。分配前拆开实测有载行驶、空驶、静止怠速来源分子。有载驱动量d_loaded_k_s按有证据容量模式为mass_kg_s*carried_km_s或occupied_volume_m3_s*carried_km_s，各来源分子按d_loaded_k_s/sum_s(d_loaded_k_s)分配。空驶来源驱动量d_empty_k_s=reserved_capacity_k_s*empty_km_k，怠速来源驱动量d_idle_k_s=reserved_capacity_k_s*idle_h_k，使用含失败托运在内每个受益方实际预订kg或m3容量，各独立来源池按自身驱动量总和分配。冻结预约记录并要求已知正总量，不得合加三种驱动维度。即使t*km=0，空驶仍保留实测车辆km及怠速燃料/时间；容量或供应商空驶边界未知阻止完成。供应商已归托运数量仅跳过车辆分配，仍按适用情形乘F、首次使用或历史资产所有者份额。只有attribution_level已标明完全相同原来源、最终责任方、池、版本时才跳过owner_fraction。S入场运输随排除的GOODS；F随failed_original；T/O责任延续。 | ghg-allocation |
| materials_cleaning | all inventory rows | 补全材料采用实际同质原来源数量；未用库存/退回/转移保留未归属制造及入场运输。制造/入场仅在首次使用归属一次，已用/复用库存不得重复。清洁入口供水按真实外部流入，不再扣内部回用。记录实际配方供入kg及互斥原配方去向：已用外运、泄漏外运、保留、未用和已发运容器残留；中间已用转漂洗为状态替换。整份湿擦布/容器/漂洗液kg为不同实测载体，不能假设排除水，也不能再乘来源份额。直测废水为记录温度下实测V_discharge*rho并校准，不从供水反推。每个实际化学品/水/载体各有原子卡；真实混合载体须接收方接受并匹配完整处理。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_events | retail | retail_service; customer_handover; supplier_handover; internal_handover | 原单元保管及验收台账 | original_id; lot_id; manufacturer_sku; UPC; configuration; closure; included_pieces; actual_store_id; assortment_evidence; pool_id; observation_window; timestamp; timezone; event_id; recipient; state; H; R_receive; R_customer; R_supplier; J_internal; C_condemned; L_missing; G_open; G_close; epsilon_goods; final_valid; revocation_no_movement; financial_only; correction_version | 在供应商发运及收货时，逐实际单元/批次将标识、原组件、签字装箱单/图纸及包装相互核验；以图纸和实测几何解决厂家/零售商长度冲突。逐次接收/退回/交付/拒收/转移记录事件及接收人；观察窗结束核验验收和原ID唯一性，保留真实日期迟到更正。扫码计数，不用车辆使用km。独立盘点期初/末商品。 按service_count、custody_count及physical_fates，先保留原始事件，每归属分子按Q除一次，每参考流。 | Item(s) | 每事件；期初/末盘点；观察窗结束及每次后续更正复核 | 完整预设池，含闭店/失败/零销售日及后续更正 | 实际混合商品实体店及已识别供应商发运端 | 每参考流 | 签字盘点、条码审计、批次照片/图纸、验收/退货凭据及冲突解决记录 |
| cp_sources | retail | failed_original | 原供应商来源向量责任台账 | original_id; lot_id; source_id; n_original_s; source_vector_s; original_gate; exact_pack_BOM; component_vector_ids; manufacturing_scope; vector_gate; exact_excluded_inbound_stages; inbound_transport_source_id; S_s; F_s; T_s; O_s; recipient; state; final_owner_id; pool_id; version | 收货时取得供应商原始批次/BOM/制造清单及实际供货包边界，冻结原来源ID和单独有证据入场运输。每去向/更正更新互斥S/F/T/O，实物转移另连cp_events。完整来源F仅用完整原单元。原组件实际分叉时须先取得供应商组件清单并新增原子卡，方可完整。 source_f及original_source得到原始N_F，S/T/O在服务外保留，N_F/Q每参考流仅一次。 | Item(s); 原始向量单位 | 每接收来源及每次去向/版本变更 | 从原发运到最终责任，跨期间 | 实际供应批次及所有原单元保管人 | 每参考流 | 原向量来源、来源守恒、实际收货/BOM及未决缺口签字 |
| cp_energy | retail | alternating_current | 互斥收货与收银电力计量 | source_pool_id; parent_meter_id; meter_contains_submeter; circuit_scope; equipment_id; meter_serial; calibration; resolution; start_kWh; end_kWh; kWh_a; active_idle_fixed; e_a_pool; e_a_c; all_beneficiaries; reserved_device_h; served_area_m2; duration_h; timestamp; uncertainty; provider; voltage; geography; delivery_boundary | 逐实际收货/收银回路使用经校准累计表读数和间隔/任务日志，绘总/子表及互斥范围。记录活动kWh、闲置/固定来源池及所有实际预约设备小时。场所固定负荷按subdivide_sources另用实测服务m2*h，保留闭店小时。核实电压/供应方背景，不能从通用交流电身份推断。 energy_pool原始MJ；核对总表及每同单位来源；N_AC/Q每参考流仅一次。 | kWh; h; m2 | 期初/末累计表加间隔及逐任务/状态变更 | 完整池，含闲置/闭店/失败 | 仅已绘图核心收货/收银回路 | 每参考流 | 校准、间隔导出、电路图、预约、账单及来源池对账 |
| cp_waste | retail | damaged_unit_waste | 完整判废单元废物发运台账 | condemnation_event_id; original_id; original_pieces; packaging_state; constituents; carrier_id; dispatch_id; receiver; acceptance_scope; treatment_scope; gross_kg; tare_kg; scale_id; calibration; timestamp; W_open; W_close; W_generated; W_dispatch; W_transfer; W_missing_confirmed; waste_incident_id; epsilon_waste; missing_residual; background_id | 判废时计原单元数并称量产生待运废物，实际发运时用校准秤逐完整获接受载体去皮称重。记录实际原组件和包装组成/状态、接收方签字及完整处理合同。独立盘点待运期初/末库存，不再从直接发运扣除。非完整/开包载体须先原子扩展。 waste_dispatch得原始N_W，physical_fates独立kg核查，N_W/Q每参考流仅一次。 | kg; Item(s) | 每判废/发运；待运废物期初/末 | 完整池及后续原托运更正 | 零售待运废物位置及实际接收端 | 每参考流 | 秤校准、皮重/磅单、接收方签字、保管链及完整处理匹配 |
| cp_completion | retail | failed_original; alternating_current; retail_service; customer_handover; supplier_handover; internal_handover; damaged_unit_waste | 强制来源阶段闭合及模块登记 | module_id; actual_process_id; actual_row_id; direction; flow_type; state; medium; property; unit; source_id; event_id; stage; boundary; provider_scope; raw_or_normalized; N_core_raw_r; N_external_raw_m_r; z_normalized_m_r; D_original_m; B_external_m_r; A_external_m_r; exact_final_owner_attribution; pool_id; owner_id; version; Q; active_idle_fixed; e_a_c; asset_model; asset_driver_unit; cleaned_surface_m2; cleaned_area_lifetime_m2; exact_BOM; V_old; V_new; e_recorded_h; L_expected; e_actual_h; E_actual_all; f_old_h; f_new_h; f_final_h; delta_h; terminal_carrier_kg; attribution_level; owner_fraction; trip_id; segment_id; consignment_id; capacity_basis; capacity_evidence; mass_kg; occupied_volume_m3; distance_km; empty_km; idle_h; idle_fuel; moving_loaded_numerator; moving_empty_numerator; stationary_idle_numerator; reserved_capacity_k_s; reservation_capacity_unit; carried_km_s; empty_km_k; idle_h_k; d_loaded_k_s; d_empty_k_s; d_idle_k_s; t_j_c; w_j_c; unique_connection_interval_id; net_s_j_c; w_net_j_c; network_contract_denominator; network_provider_numerator; camera_source_id; A_j_c_zone; h_j_zone; byte_h; GB_or_GiB; original_capture_map; first_use_id; formulation_source_kg; formulation_destinations; container_residue_kg; wet_carrier_kg; V_discharge; rho; temperature; calibration; absence_evidence; overlap_constituents | 完整性前及每次来源/配置变更，检查实际设施、资产/电路登记、合同、发票、发运及全期间记录。partial_completion每个强制模块均须先建实际原子卡和单过程协议再sync。以此列实测字段应用固定方法subdivide_sources、asset_history、backend_events、transport_ownership、materials_cleaning，不留新分母或驱动量给下游选择。冻结原摄像图和事件份额、全受益方暴露、运输归属层级及供应商边界，要求匹配来源边界证据及缺席签字。对全部支撑设施设备和合同应用partial_completion的无燃烧/无制冷剂窄适用闸点。条件为真或未知均不能按此路线补全，须明确保留范围外/不完整，绝不假设零排放。损坏固体商品仍须按waste_boundary实际状态/路径扩展。 completion_sum保留raw并还原归一化原模块分子，按实际阶段去重，最终/Q每参考流仅一次。 | 实际逐行单位; 分立的同单位来源池 | 逐模块事件/间隔；每修订/退役追溯资产历史；结果前闭合 | 原池全部强制支撑模块及完整资产/来源历史 | 实际门店及所有供应商/服务商/接收方边界 | 每参考流 | 签字模块清单、实测驱动量、来源/责任/版本凭据、全历史替换审计、范围重复矩阵及缺席/未知登记 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_count | retail_service | Q=count_distinct(final_valid=true的original_id)，不得再次扣撤销ID。冻结池/观察窗，结转零产出期间并版本化迟到退货。 | original_id; final_valid; pool_id; observation_window; correction_version | Q |  |
| source_f | failed_original | N_F=sum_s(n_original_s*F_s)。不可分原单元各完整来源F为0或1，source_vector_s仅沿该来源一次；S_s+F_s+T_s+O_s=1。组件去向不同时必须先建独立组件向量。 | n_original_s; S_s; F_s; T_s; O_s; source_vector_s | N_F |  |
| energy_pool | alternating_current | N_AC=3.6*sum_a(kWh_a*e_a_pool/sum_c(e_a_c))；互斥直读kWh份额为1。实际同单位来源池按subdivide_sources，不能假设固定负荷为零。 | kWh_a; e_a_pool; e_a_c; source_pool_id; active_idle_fixed; parent_meter_id | N_AC MJ |  |
| custody_count | customer_handover; supplier_handover; internal_handover | N_H=H；N_R=R_supplier；N_J=J_internal来自毛实物事件ID，独立于Q及来源责任；physical_fates数量与kg台账各自对账。 | H; R_supplier; J_internal; G_open; G_close; R_receive; R_customer; C_condemned; L_missing; epsilon_goods | N_H; N_R; N_J |  |
| waste_dispatch | damaged_unit_waste | N_W=sum_dispatch(gross_kg-tare_kg)。完整载体直接净质量仅用一次；W_close=W_open+W_generated-W_dispatch-W_transfer-W_missing_confirmed+epsilon_waste为独立QA。C_condemned数量以事件ID连接实测W_generated，不能用名义每件kg。 | gross_kg; tare_kg; dispatch_id; W_open; W_close; W_generated; W_dispatch; W_transfer; W_missing_confirmed; waste_incident_id; epsilon_waste; condemnation_event_id | N_W kg |  |
| completion_sum | all inventory rows | 对兼容交换/属性/单位/状态/介质/边界r：先还原各外部来源分子：raw模式B_external_m_r=N_external_raw_m_r，归一化模式为z_normalized_m_r*D_original_m。若尚未归属完全相同最终原责任方/池/版本，则按适用的固定subdivide_sources、asset_history、backend_events、transport_ownership或materials_cleaning首次使用方法仅归属一次得到A_external_m_r；若已有精确归属证据则A_external_m_r=B_external_m_r，不重复责任份额。再N_total_r=N_core_raw_r+sum_m(A_external_m_r)，仅一次x_r=N_total_r/Q。核心N_F/N_AC/N_W等保留卡片除法前原始值，外部raw保持raw。归一化模块仅用有证据原D及完全相同原来源/池/责任/版本还原。按实际组件/事件/时间/资产/生命周期阶段去重，不能只看供应商ID；排除重复F/AC。不兼容单位/身份保持独立行，不能把kg加MJ或raw加归一化量。 | N_core_raw_r; N_external_raw_m_r; z_normalized_m_r; D_original_m; B_external_m_r; A_external_m_r; exact_final_owner_attribution; attribution_level; owner_fraction; e_recorded_h; L_expected; e_actual_h; E_actual_all; subdivide_sources; asset_history; backend_events; transport_ownership; materials_cleaning; cp_completion; source_id; pool_id; owner_id; version; Q | x_r |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all inventory rows | 无精确绑定的行均未验证。实际使用前直读匹配官方公开流及收据，核对UUID、中英名称、状态、类型、限定、属性/单位及介质，绑定实际时空适用背景和实测数量。通用数量属性不证明零售服务或商品身份。 | 逐行绑定记录、原响应hash、供应商向量、电表/称重记录。 |
| complete_scope | all inventory rows | cp_completion以原子卡、实际协议和双语sync闭合所有强制模块前，部分核心始终为部分。缺失/未知覆盖或验收证据失败阻止完整服务结果。 | 签字来源至阶段登记、重复矩阵及缺席证明。 |
| measurements | all inventory rows | 使用可追溯电表/秤序列号、有效校准、分辨率、零点/皮重、时戳/时区、不确定度和完整期间记录。缺量为未知而非零。负有符号残差保留调查，不自动截零或抵扣。 | 校准证书、对账、签字调查及冻结版本。 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_acceptance | retail_service | SKU/状态/渠道改变或长度/配置冲突未解决即拒绝，须实际门店混合商品及原批次身份证据。Q须正且为最终有效唯一ID，有限计量pass不批准科学适用性。 | un-cpc-62181; curt-model; runnings-channel |
| balances | all inventory rows | 要求physical_fates、original_source、source_f及所有同单位池/资产历史对账。每项实际为真的条件交换须有卡/协议/背景，未知保持不完整。卫星排除仅适用于三项具名Product保管输出，绝不适用于failed_original或Waste。 |  |
| aggregation_gate | all inventory rows | 核验每项应用规则的真实Inputs及原始字段、一次来源归属和一次Q除法。协议process_id及flow_role须匹配真实行ID。完整声明须闭合且模块组件无重复；candidate不代表科学、翻译审定或发布批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 候选部分零售服务清单 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 实际同SKU/配置/门店路线经适用性和绑定审查后使用，完整服务须强制闭合 |
| excluded_use | 完整商店或全部62181覆盖、车辆使用影响、安装、安全认证、方法已批准声明 |
| required_metadata | 参考限定、原来源向量、实际池/Q、更正版本、全部强制模块及身份缺口 |
| required_quality_disclosure | 部分核心及未知模块、实测不确定度、历史UUID观察、原产品网页限制及未决长度/包装证据 |
| update_trigger | SKU/包装/路线改变、迟到退货、供应背景或资产寿命修订、校准/身份更正 |

## 11. 数据源

| Source id | Type | Reference | Use |
| --- | --- | --- | --- |
| un-cpc-62181 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62181 | 官方货物491/492范围及分类适用性，不是商品清单 |
| un-goods-49129 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/49129 | 机动车配件范围解释，不声称厂家指定此代码 |
| curt-model | handbook | https://www.curtmfg.com/part/45036 | 实际厂家型号、预装组件、车辆接收器用途及表面处理；仅规格，不是定量LCI/完整BOM/现场质量或批准 |
| runnings-channel | handbook | https://www.runnings.com/curttm-ready-tow-ball-mount-with-2-ball-45036.html ; https://www.runnings.com/about-us | 同SKU/UPC自提listing及实际混合商品；门店库存/配置仍须实际观察 |
| ghg-allocation | official_guidance | https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; Chapter9 p63 | 仅一般细分/物理分配原则；PCR特定驱动量和补全方法为本方法设计，不声明完整标准符合性 |
