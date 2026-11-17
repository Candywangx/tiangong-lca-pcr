---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.other-postal-services
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 实体邮政信箱租赁可用服务（机械钥匙路线）

## 1. 范围与适用性

本候选方法在既有PCR身份下覆盖实际可测量的实体邮政信箱租赁可用服务。CPC68019还涵盖存局候领等不同服务，因此本边界比该分类leaf更窄，不能把保管取件或可用时长当成完成邮件运送。代表产品为邮局内一个具有声明尺寸及取用时间安排、以机械钥匙开启的钢制格口；其租赁时长而非邮件件数是方法上的独立功能。一个计数产品单元固定为一个指定格口×3600合格秒；此累计服务量不承诺连续一小时、完整租约或不同尺寸/取用类别间的等价；原始秒/小时记录仍必须保留。具体路线约束和扩展条件见boundary_route及boundary_deviation。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.other-postal-services |
| classification_refs | CPC 3.0 68019; narrower |
| covered_products | 实体机械钥匙邮政信箱的专属租赁可用服务 |
| excluded_products | 存局候领；邮件运送/柜台服务；数字/自动包裹柜；金融/电信服务；不同尺寸或取用安排的无差别合并 |
| representative_product | 一个已识别格口的标准租赁服务单元，固定为3600合格秒 |
| production_route | 机械钥匙；纸质管理；电照明/采暖；无机械制冷；棉布仅用水清洁 |
| market_state | 已验收开租且满足安全保管及合同取用安排 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供指定格口专属租赁可用服务 |
| How much | 1个标准租赁服务单元=一个指定格口×3600合格秒；同一类别内允许分数单元 |
| How well | 安全保管，满足声明尺寸及合同取用日历，实测停用时长扣除 |
| How long or cycle | 一个连续报告年内的合格区间；使用小时、秒及明确时区 |
| reference_flow_link | rental_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 邮政信箱租赁标准服务单元（指定机械钥匙格口×3600合格秒） |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 场址; 格口尺寸及数量; 钢柜规格; 取用日历及时区; 开租/终止验收; 机械钥匙纸质管理路线; 容量/空置/故障时长; 报告年; 资产寿命依据; 供应与接收边界 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `measure_reference` | rental_service | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 1 Item(s)=一个指定格口×3600合格秒的标准服务单元；保留每箱秒及小时，3600 s=1 h。不得把收费月份、任意小时、完整租约或不同规格当等价单元；累计区间不等于连续可用保证。 |
| `measure_denominator` | 全部清单 | 物品数量 | Item(s) | 全部卡均按每参考流即1个上述标准服务单元归一化；N=sum(accepted_box_seconds)/b，b=3600合格格口秒/Item(s)。原始总量先分配再仅除N一次；物理时长H=sum(accepted_box_seconds)/3600，单位h，单独保留。 |
| `measure_mass` | water; 废物流; paper; cloth | 质量 | kg | 体积转质量须有同状态密度；固体干湿基准及附着水分开记录；不作无证据体积/能量/计数转换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已有邮局内的明确格口，签署开租并交付钥匙后服务开始；制造及建设负荷仍通过资产卡纳入 |
| starting_condition_role | 服务gate起点；不是资本品免计依据 |
| product_classification_scope | CPC 3.0 68019 narrower |
| recursive_input_rule | 不得将完整同类租赁服务作为输入再输出同一服务；外包整段仅可替代明确不再另计的对应区间及负荷，否则不适用本路线 |
| upstream_dataset_requirement | 按实际供应、工艺和交付边界连接制造/供给数据；未核身份或边界不完整则阻断数据集完成 |
| disclosure | 披露尺寸/取用/路线、缺口、空置及故障、寿命依据、排除项和上/下游计入边界 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_service` | 所有过程 | 纳入经核实开租至区间到期、解约或交回期间的格口专属可用服务；使用实际提供日期而非付款日期。普通上游邮件移动以投箱交接面为界而不在此重复计入；保管安全和客户取用接口仍纳入。 | `usps-pobox` |
| `boundary_route` | 所有过程 | 本路线为机械钥匙钢制信箱租赁、场内纸质管理、电照明及电采暖、不设机械制冷、用棉布仅以水清洁。这是实体服务的实际变体，不能代理存局候领、自动包裹柜、柜台办理、运输、邮政转账储蓄或电信服务。 | `un-cpc3-68019` |
| `boundary_deviation` | 路线资格 | 在核算开始及每次变更时现场核对实际材料、设备、能源、排放、清洁及辅助合同。燃烧、购热、机械制冷或其冷媒泄漏、用洗涤剂清洗、电动柜或数字/电信管理均偏离本配置；停止使用本PCR，先另行审核实际产品及路线适用性。若接受新边界，须通过规范方法与ADR、分类映射复核。仅对仍在既定边界内的遗漏实物流，才补经审查的双语原子卡、协议和投影。以现场证据证明未发生；未知不计零。 |  |
| `boundary_upstream` | 全部清单 | 将消耗物及资产的制造与交付、电水供应、废物运输处理各自与边界匹配的数据集仅链接一次。核实供应方、技术、地域、电压及损失，不得从通用交流电UUID推断。客户出行、信函内容物及投递网络运输属于另行声明的功能；排除项仍须披露。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_mailbox` | 信箱可用服务 | required | 声明实体路线 | foreground | 1 Item(s) |

### 过程：信箱可用服务（`p_mailbox`）

#### 输入

##### 产品流

###### 使用点交流电（`electricity`）

计量照明、电采暖和租赁管理用电；电压、发电组合及供应方须另行声明。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：3.6 * E_kWh / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：

###### 信箱柜投入（`cabinet`）

一件为有序列号的完整信箱柜，声明格口数、尺寸、钢质量及初始锁具；供应数据已含的初始锁、钥匙或钢材不得再次输入。

- 选定流：钢制邮政信箱柜（含初始机械锁的完整设备）
- 流属性/单位：物品数量 / Item(s)
- 数量规则：C_equiv / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：

###### 替换锁芯投入（`lock`）

一件为一个声明型号、质量及是否附钥匙的黄铜锁芯；记录替换安装和复用退回为资产代际事件，再按allocation_assets核算生命周期投入消耗；其附带钥匙不再计入钥匙卡。 按第8节 `inv_asset_provision` 执行。

- 选定流：黄铜机械信箱替换锁芯
- 流属性/单位：物品数量 / Item(s)
- 数量规则：L_equiv / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：


###### 替换钥匙投入（`key`）

一件为一把切制黄铜替换钥匙，且未包含于信箱柜或替换锁芯；交回可复用的钥匙是库存而非已消耗废物。 按第8节 `inv_asset_provision` 执行。

- 选定流：黄铜信箱替换钥匙
- 流属性/单位：物品数量 / Item(s)
- 数量规则：K_equiv / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：


###### 纸质台账投入（`paper`）

称量申请、租赁台账及收据实际消耗的空白纸；不计邮件内容物或客户信封。

- 选定流：租赁台账用未涂布无磨木浆纸
- 流属性/单位：质量 / kg
- 数量规则：Q_paper / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：

###### 人工记录书写投入（`pencil`）

一件为一支规格已声明的完整铅笔；依据期初期末可用长度和领用量核算消耗份额，排除未用库存。

- 选定流：木杆石墨铅笔
- 流属性/单位：物品数量 / Item(s)
- 数量规则：Q_pencil / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：

###### 仅用水清洁投入（`water`）

用于已声明的仅用水清洁路线及分配后的卫生用水；由水表体积和供应水密度计算，不得直接假设kg等于L。

- 选定流：自来饮用水
- 流属性/单位：质量 / kg
- 数量规则：Q_water / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：

###### 可复用清洁布投入（`cloth`）

按实测干质量基准记录已声明纯棉清洁布的生命周期等效投入；排除复用库存和附着水；场内清洗用水及用电仍在各自卡片记录。 按第8节 `inv_asset_provision` 执行。

- 选定流：机织棉清洁布
- 流属性/单位：质量 / kg
- 数量规则：T_equiv / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：


###### 建筑投入（`building`）

面积为按有证据的使用寿命分摊的等效新建楼面面积；匹配生命周期背景包含壳体及固定照明制造、施工、交付、有文件的固定照明更新和拆除/报废处理，排除运行公用工程、信箱柜及单独建模的替换附件。

- 选定流：邮政营业场所建筑投入（结构壳体及固定照明设施）
- 流属性/单位：面积 / m2
- 数量规则：A_equiv / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：

#### 输出

##### 产品流

###### 合格租赁可用服务产出（`rental_service`）

一个标准服务产品单元是一个指定格口×3600合格秒，满足安全保管及已声明的取件时间安排。允许累加不连续合格区间，但须披露区间；邮件件数或完整租约均不是此产出计量。

- 选定流：邮政信箱租赁标准服务单元（指定机械钥匙格口×3600合格秒）
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rental`
- 来源：

##### 废物流

###### 废台账纸输出（`waste_paper`）

称量干基废台账纸，记录去向、保密碎纸及接收方处理；客户邮件仍为客户财产。

- 选定流：送场外处理的废租赁台账纸
- 流属性/单位：质量 / kg
- 数量规则：按第8节废物来源方法，以本卡声明材料及干湿基准的原队列/分层归属产生质量/N；包含留存废物及有依据的最终处理。保管外运核验原事件，不再作为新产生或后来队列负担。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_wastes`
- 来源：

###### 排入污水管网的废水输出（`wastewater`）

计量设施gate处排入污水管网的废水，明确接收方并做水量平衡；下游处理仅链接一次，不再重复输入购入处理服务。

- 选定流：信箱设施清洁及卫生废水
- 流属性/单位：质量 / kg
- 数量规则：W_ww_class / N；W_ww_class为按租赁类别归属的整股毛湿污水kg，不是其中水组分。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_wastes`
- 来源：

###### 铅笔残余废物输出（`waste_pencil`）

此单一固体废物流为已声明的木杆石墨铅笔头及收集削屑残余混合物，须有实测组成、水分基准和同一个有记录的接收处理；存在涂层/黏结剂时在此确定复合物内记录其身份。仅在组成或接收处理不同时拆分，不得另计所含木材或石墨。

- 选定流：木杆石墨铅笔残余物（笔头及削屑，同一接收处理）
- 流属性/单位：质量 / kg
- 数量规则：按第8节废物来源方法，以本卡声明材料及干湿基准的原队列/分层归属产生质量/N；包含留存废物及有依据的最终处理。保管外运核验原事件，不再作为新产生或后来队列负担。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_wastes`
- 来源：

##### 基本流

###### 水蒸气排入空气（`water_vapour`）

仅记录本设施清洁、棉布干燥及已识别卫生用水过程向环境空气排放的水蒸气；这是基本流输出，不是水资源输入或污水废物。归属过程、状态及空气介质须声明；未确认身份仍是候选。

- 选定流：排入空气的水蒸气
- 流属性/单位：质量 / kg
- 数量规则：E_water / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_utilities`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_separate` | 共享设施 | 优先分离直接计量负荷；实体分配遵循GHG产品标准的一般顺序，下述面积/时间方程则是本候选PCR声明的采集方法。剩余建筑空间、照明采暖及卫生负荷按租赁区实测楼面面积小时占全部受益服务面积小时分配；管理消耗物和共享人员活动按计时租赁任务占全部计时任务分配。保留完整对账，不把客户/过手邮件计入材料消耗。 | `ghg-product-standard-2011` |
| `allocation_capacity` | 信箱类别 | 每个数据集仅包含一个格口尺寸、结构及取用时间安排。分配至该类的全部维持负荷，包括空置或未出租容量、已租未使用可用服务、故障维修、开租失败及取消申请，均保留在其分子。仅除以由合格格口秒数核算的标准服务单元数量N；披露安装、可出租、已租、空置及不可用时长。N=0时不能生成归一化数据集；不得将空置负荷转给其他类别或忽略未售容量。除N后不得再次乘利用率或出租率。 |  |
| `allocation_assets` | cabinet; building; lock; key; cloth | 每个资产代际使用一致生命周期模型；匹配背景产品同时包含制造、交付与最终处理，不能另加重复终态交换。对每个原报告年/类别c，先按既有calc_shared及allocation_capacity得到该资产同期间的类别/共享责任份额w_c,a（含规则指定的空置/故障责任），令u_c,a=t_c,a*w_c,a，以同一资产完整全用户日历寿命L_a求f_c,a=u_c,a/L_a。类别责任只在u中使用一次，后续等效量不再乘w。每次寿命/来源修订和实际退役均执行calc_capital_restatement，对全部原年/类别及原N更正，不给退役当期集中补余额。零产出原年保持未归一总量；不能转给无关租赁。不使用通用寿命、财务折旧或邮件量分配，缺全用户/类别历史和完整生命周期覆盖时阻断完成。 |  |
| allocation_capital_restatement | cabinet; lock; key; cloth; building | 本PCR采用全历史重算，不冻结历史份额，也不把余额集中补入退役当期。全部直接和支持资本、可重复使用容器、产品gate外安装及配对终态来源均执行calc_capital_restatement。各具体活动规则确定驱动和受益份额，仅应用一次。已含交付/寿终的完整资产背景采用相同重算，不另加重复终态交换。例行部件维修仍按其因果/期间方法处理。 |  |
| `allocation_waste` | 废物输出 | 采用再生含量截断，不索取避免原生材料信用。运行期废台账纸、铅笔残余及废水跨越前景废物gate，仅链接一次运输处理。信箱柜、建筑、锁芯、钥匙及棉布的实物退役仅是代际/接收方监管台账事件，因为其制造与报废已按allocation_assets一同归属。不得再把废钢/黄铜/棉布或拆除废物重复作为交换。生命周期背景必须显式包含全部相关处置、回收运输及处理且不重复给信用；若不能覆盖，在补经审查且代际一致的显式生命周期模型前阻断完成。 |  |
| allocation_waste_origin | waste_paper; waste_pencil | 每笔普通固体废物在产生时固定原服务队列及分层责任，不按后来外运时点归属。优先追溯直接产生任务；共享产生量采用现有场站/处理作业分配驱动，覆盖已记录产生区间内全部客户及非队列工作量。产生事件ID、产生日期、原份额和原参考流分母随暂存及内部转移保留。接入旧废物不是新产生。留存废物仍承担原处理责任，外运期服务不继承该负担。 对共享产生量，固定按当地日历月边界拆记录（68013仍采用已声明柜台核算期间）；在同一产生区间内采用既定场站任务/处理作业驱动，不用后来外运或完整队列窗口的份额。直接事件归属优先。 期间归属前记录场站时区。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_rental` | `p_mailbox` | rental_service | 合同区间 | 格口ID；尺寸；规格；取用安排；时区；开租；关闭；故障起止；可用证据；退款及原因；客户取用验收 | 将签署的租赁验收和钥匙交接与带时间戳的维修/取用记录对账；分别记录安全保管和承诺取用安排的失效；汇总要求：按calc_hours及calc_period计算互不重叠的区间秒数；不计邮件件数产出 | s; h | 每次事件；逐日状态汇总 | 完整报告年及期初期末区间 | 一个声明尺寸/取用类别的每个格口 | 每参考流 | 签署开租/关闭记录；取用日历；故障/维修记录；保护隐私的区间审计 |
| cp_capital_restatement | p_mailbox | cabinet; lock; key; cloth; building | versioned_asset_cohort_ledger | 资产/来源ID；来源阶段及本征单位；原队列/分层与因果父队列；原参考分母及修订；按原期间记录的全用户实际驱动；固定受益份额；完整寿命驱动预测/版本及证据；制造/安装量；终态净残余/路线及版本；此前已记归属原始量B及归一结果；重算f/A/q与有正负号更正；零使用投运责任；重叠排除 | 逐序列/来源对照资产登记、活动表计、供方产品gate与原始结果台账；每次变化执行calc_capital_restatement。用原计量驱动及全用户证据复算，不改实物库存。按来源和原队列核对旧值、新值、差额及原分母；由原记录责任人保存版本与校准证据。 | 来源本征单位；原驱动单位；Item(s) | 每次采购/投运、活动、寿命或来源修订及退役；逐原报告期对账 | 完整资产寿命与全部受影响原队列 | 同资产配置全部用户；原产品gate及独立安装/终态 | 每参考流 | 序列/来源登记、表计校准、寿命证据、接收记录、原队列结果及修订链 |
| `cp_utilities` | `p_mailbox` | electricity; water; water_vapour | 仪表记录 | 仪表ID；起止；kWh；m3；密度kg/m3；直接/剩余共享池；仪表边界；分配面积小时；蒸发水质量；隔离操作的水输入及液态水输出；附着水；库存变化；干湿份额；污染物/外部水输入 | 在设施边界读取有标识的电表/水表；扣除独立计量的其他功能；采用供应水密度或有日期的密度测量；汇总要求：仅换算一次；按calc_shared分配；保留漏损、故障及空置负荷；通过称重法进行隔离操作平衡或独立仪表测定水蒸气损失；将液体输出中的水与固体分开，并识别外部水输入。不得用饮用水减去未分组污水总质量推断蒸发量。未测贡献保留为阻断性不确定性而非零。 | kWh; m3; kg/m3; kg水 | 逐月关账及每次边界变更；每次隔离操作蒸发试验，路线/条件变化时重复 | 同一完整报告年；读数时间对齐或记录区间分配 | 租赁区域及共享池全部受益方 | 每参考流 | 仪表校准/检定证书；账单；平面图；共享池平衡 |
| `cp_assets` | `p_mailbox` | cabinet; building; lock; key; cloth | 资产台账 | 代际/序列号；资产对象/型号；件数；格口尺寸；楼面面积；棉布干质量及干基份额测定；启用/退役；t；L；历史已分配份额；剩余寿命；供应方制造/交付/更新/报废边界；接收路线；类别占地 | 检查柜体、建筑、替换锁/钥匙及棉布全部代际台账；核实寿命、剩余服务份额及匹配的完整生命周期背景，含处置/回收和建筑拆除。依据有记录的干燥/水分测定方法称量棉布干质量。实际退役质量保留为监管记录，不再重复背景报废。按allocation_assets/calc_capital及类别/共享归属仅执行一次。 | Item(s); m2; kg干基; h; fraction | 期初期末；每次安装/拆除；逐年寿命审查 | 全部资产服役历史及报告年重叠区间 | 全部归属资产代际，含空置容量 | 每参考流 | 资产凭证；规格测量；工程寿命/剩余份额证据；干质量协议；完整生命周期边界及接收方记录 |
| `cp_materials` | `p_mailbox` | paper; pencil | 库存领用 | 纸干质量；铅笔型号及可用份额；期初期末可用库存；外部收入；范围外未使用退回；内部退库；转入/转出；受益服务 | 称量台账纸干质量，并按可用长度份额计数声明规格的完整铅笔。外部退回与已包含于期末库存的内部退库分开记录。先calc_stock再按任务时间归属类别；邮件及客户用品仍为保管财产。 | Item(s); kg; fraction | 每次领用/退回；逐月盘点 | 同一报告年及期初期末可用库存 | 仅场内租赁管理 | 每参考流 | 库存盘点；已校准天平；干质量/可用长度方法；内外部转移凭证；签署受益归属 |
| `cp_wastes` | `p_mailbox` | 废物输出 | gate转移 | 运行期纸/铅笔/废水材料；接收方；路线；gate湿/干质量；实测水分/干燥方法；污水表；附着水；另列资产退役/拆除监管凭证; 产生事件generation_event_id；产生时间/场站；来源任务/队列/分层；原分配份额及参考流分母；产生质量及干湿/组成基准；按原来源期初末库存；内部转移ID及两端；外运；有证据物理损失/释放；接收方及去向份额；实际/前瞻路线及模型版本；证据/不确定性；回执替换状态及修订链; 逐排水流毛湿质量或体积和同股温度密度；水质量份额；直接及共用池；租赁类别份额; 污水体积m3、同股同状态密度kg/m3、密度适用温度及实测温度°C、温标换算及原始读数单位 | 在产生点计量分流产生质量，暂存前记录责任任务/区间；若由完整库存平衡反推产生量，须记录全部转移、损失及测量不确定性，并保留原事件来源。执行allocation_waste_origin及calc_waste_origin。每次转移及期末，用校准及接收证据核对带来源库存。留存量必须有受支持的暂存/运输/处理覆盖；后续回执替换原事件模型，不新增外运期第二笔负担。 普通纸/铅笔废物按本来源方法及一致实测干湿基准核算。测水分或按有证据试验方法的恒重准则干燥。排水保留实测水平衡，不套固废kg公式；资产/拆除退役仅保留生命周期控制记录。 按calc_waste分别计算交接的毛湿废水kg与水平衡所用水组分kg；不按自来水密度代替污水密度。 逐字段保留kg、m3、kg/m3及°C；其他原始温标须保留原读数和有依据的温标换算，确认密度与该温度及物料状态匹配。最终废水卡仍用毛湿kg，水组分另按实测质量份额核对。 | kg; fraction; m3; kg/m3; °C | 每次转移；逐月污水平衡；逐次普通废物产生及每月来源库存对账 | 同一报告年；显式结转库存废物；原产生责任保留至最终处理证据 | 分配至租赁的gate及已识别接收方 | 每参考流 | 已校准磅秤/仪表；转移/接收凭证；水分基准；水平衡文件 |
| `cp_route` | `p_mailbox` | 全部卡片 | 现场路线审计 | 场址及类别；材料/能源清单；过程证据；外包边界；排放/制冷剂调查；闲置状态；缺席证据 | 由责任现场人员一起走查租赁、机械钥匙取用、管理及清洁；逐卡对照采购及服务合同； 按boundary_deviation区分不适用的路线变化和边界内遗漏流，并记录审核证据。 | 有文件的发生/缺席状态；h | 期初；每次变更；逐年对账 | 整个报告年 | 租赁及共享受益方、上下游接口 | 每参考流 | 签署走查；照片/资产规格；采购对账；供应方包含项；经审查缺口表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_hours` | rental_service | b=3600合格格口秒/Item(s)；N=sum(accepted_box_seconds)/b；H=sum(accepted_box_seconds)/3600，单位h。按报告边界和类别变更拆区间。仅当专属安全保管和合同承诺的取用安排均满足时，一个格口秒才合格。已验收开租但未使用的时长计入；故障不可用、开租前、退款且未提供及关闭后时长不计。在取用日历以外，仅当合同仍承诺该时段专属安全保管时才计入；承诺可取用时段内闭馆或保管安全失效须扣除实测区间，即使没有客户尝试取件。对已提供区间的商业退款不抹去实体服务，须记录原因。 | accepted_box_seconds;起止时间戳;故障区间;合同取用日历 | N，单位Item(s)；H，单位h |  |
| `calc_inputs` | 除rental_service外全部输入 | 在cp_materials、cp_utilities或cp_assets得到归属该类的总量后，x_j=Q_j/N。kWh*3.6转为MJ仅执行一次；不得对供应方已按单位表达的清单重复除分母。采用相容的m3和kg/m3及实测/供应记录，Q_water=V_water*rho_water。 | Q_j;N;仪表单位;rho_water | 每参考流的投入量 |  |
| `calc_stock` | paper; pencil | Q_j=期初可用库存+外部收入+转入-期末可用库存-范围外未使用退回-转出。同一库内退库已包含于期末库存，不得再扣；外部收入排除转入。铅笔按可用份额核算消耗。锁芯/钥匙/棉布领用是资产事件记录，不采用本材料消耗公式。废弃份额、水分及调整单独调查。 | 期初/期末库存;收入;退回;转移;可用份额 | Q_j，采用各卡单位 |  |
| `calc_capital` | cabinet; building; lock; key; cloth | 按allocation_assets先得到已含一次共享/类别责任的f_c,a；C_equiv_c=sum(n_cabinet_a*f_c,a)，A_equiv_c=sum(A_a*f_c,a)，L_equiv_c=sum(n_lock_a*f_c,a)，K_equiv_c=sum(n_key_a*f_c,a)，T_equiv_c=sum(m_drycloth_a*f_c,a)。原卡C_equiv/A_equiv/L_equiv/K_equiv/T_equiv分别取该原类别c的以上值，各除其原N_c一次，不再通过calc_shared二次分配。寿命、来源和退役变化按calc_capital_restatement替换原年/类别结果。柜体背景含初始锁/钥匙；独立锁/钥匙卡仅含替换件并排除替换锁芯附带钥匙。各背景包括自身报废，不重复建立前景资产废物流。 | cp_assets; cp_capital_restatement; calc_shared; allocation_capacity | C_equiv/L_equiv/K_equiv，单位Item(s)；A_equiv，单位m2；T_equiv，单位kg |  |
| calc_capital_restatement | cabinet; lock; key; cloth; building | 在本入口声明的适用范围内，按顺序完整执行规则组：calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_capital_restatement; calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version | 按各来源本征单位/原队列N_c；实物监管账独立 |  |
| `calc_shared` | electricity; water; building; 行政管理 | 对每个共享池，Q_class=Q_direct + Q_residual*s。设施维持负荷取s=租赁面积小时/全部受益面积小时；管理负荷取s=计时租赁任务时长/全部计时任务时长。共享柜组按各尺寸类别实测占地面积占全部类别占地面积分配，并包含空置格口。全部受益方份额总和须为1；本路线不允许经济分配。 资本等效量由allocation_assets/calc_capital使用本规则的原类别份额一次；已得到的C_equiv/A_equiv/L_equiv/K_equiv/T_equiv不得再次进入此分配。 | 仪表共享池;直接负荷;面积小时;任务时长;类别占地面积 | 归属类别的Q_j |  |
| `calc_waste` | 废物输出 | 普通纸和铅笔废物直接取calc_waste_origin已除原N的结果，不再除N或用外运期质量。污水W_ww_j为同股在管网交接点实测毛湿kg，或实测m3乘同状态实证污水密度。按calc_shared得W_ww_class=直接归属毛湿kg+各共用池毛湿kg乘相应租赁类别份额，q_ww=W_ww_class/N一次。同操作水平衡只用各实物流W_ww_j乘实测/有证水质量份额，不能把毛湿污水或污染物另作水组分。进水不等于排水；未知密度、份额或去向须披露。资产退役仍只作控制记录。 | cp_wastes; calc_shared; calc_water_emission; calc_waste_origin | 整股毛湿污水kg/N；单列水平衡水组分kg |  |
| calc_waste_origin | waste_paper; waste_pencil | 对每种指定普通固废r及产生事件j，A_c,r = sum_j(G_j,r*s_c,j)，随后q_c,r=A_c,r/原参考流件数，仅归一化一次。G为实测产生质量，不是外运质量。逐材料及原事件对账：期末=期初+产生+内部转入-内部转出-外部外运-有证据物理损失。记录实际水分/组成变化及互斥损失/释放；不得虚构差额，也不得完整残余质量与其已释放组分重复计量。内部转移保留来源，不产生另一笔交换。即使尚在实物暂存，也应建模原队列废物输出及必要暂存/运输/最终处理；使用实际相容接收证据，或有明确证据、匹配材料/组成/地域的前瞻处理路线并披露不确定性。去向份额和为一且仅乘一次，不默认回收或将留存质量处理计零。去向无依据则保持不完整。实际保管库存及外运另作控制台账，不再追加清单。后续接收证据须替换同一事件的前瞻模型，并用原分母重算原队列，不得将相同质量/处理新增给后来队列。用范围交叉表将必要生命周期各环节仅计一次，排除已含于场站/服务清单的暂存能源和搬运。资本寿终废物寿命份额及污水平衡继续使用各自独立规则。 原参考流件数为原队列/分层N。 废物交换gate在产生点。其链接的完整废物管理清单以同一产生质量基准的1kg为输入，覆盖暂存及后续全部去向；最终处理输入仅为扣除储存损失并换算水分基准后的相容实测/有证据预测残余量，不得完整原kg处理再加独立损失。显式储存释放须替换链接清单内相同释放；已含于场站/服务池的暂存/搬运作业须按有记录范围交叉表从废物链接剔除，不得重复。 | cp_wastes; allocation_waste_origin | 每原参考流kg；原来源库存/模型台账 |  |
| `calc_period` | 全部清单 | 使用连续完整一个报告年，逐日记录区间、逐月关账；包括期初期末租赁、库存及资产状态。跨期合同仅按重叠秒数结转；同格口重租及改租不得重叠。取消、退款、等候名单、丢钥匙、拒绝申请、故障及维修均须对账且不得制造合格时长。 | 年度边界;区间台账;月度对账 | 不重叠且完整的报告期总量 |  |
| `calc_water_emission` | water_vapour | E_water=sum(操作水输入+已核外部水输入-液态水输出-携带水-水库存增加)，或采用有文件隔离操作的直接水蒸气损失计量。全部项均为同一操作/时间基准的kg水；须量化液态水份额，不得减去污水总质量。覆盖每项已识别蒸发操作，共享归属仅执行一次。负平衡或未知项是未解决测量缺口，不得截断或填零。 | 隔离操作各项水质量;实测水份额;库存及附着水;直接水蒸气计量 | E_water，单位kg；每参考流E_water/N |  |
| calc_capital_restatement_driver_revision | cabinet; lock; key; cloth; building | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐资产a保存有版本的全用户活动与每个原受益队列/分层c，按既有固定责任规则保留失败和空驶工作。u_c,a为截至当时归属该队列的实际驱动；U_a为相同配置和单位的有证完整寿命全用户驱动（已发生实际量加有依据的剩余预测）。U_a必须为正且不小于已发生全用户总量。f_c,a=u_c,a/U_a，不得把剩余活动当作U_a。每次寿命、活动、受益者、来源数量或终态路线变化，都重算全部受影响原队列，包括已报告队列；不得保留旧历史份额而仅对后续队列使用新寿命分母。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_source_correction | cabinet; lock; key; cloth; building | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐独立来源s按自身单位求A_s,c,new=Q_s,new*f_c,a。Q_s,new是当前有证、寿命分配前的完整制造/安装来源实物总量，不是扣除历史份额后的未摊余额，或匹配的净终态残余/完整生命周期来源量，不是已分配量。保留此前已记的归属原始量B_s,c及其原归一结果/版本；delta_A_s,c=A_s,c,new-B_s,c。新取得证据的终态来源B=0；已有来源的更正替换同一来源ID。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_normalization | cabinet; lock; key; cloth; building | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。使用该原队列当前已核实的参考分母N_c重算q_s,c=A_s,c,new/N_c；若N_c本身被更正，应替换旧结果，不得把delta_A/new_N直接加到以old_N形成的旧结果。剔除有记录重叠后才汇总各来源贡献。正负差额仅更正结果，不能形成负实物转移、替代抵扣或新增当期整机采购。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_retirement | cabinet; lock; key; cloth; building | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。最终退役时以完整实测全用户驱动替换U_a，重算全部f和来源量；寿命总活动为正时，所有受益者含非研究业务的份额和为一。实测终态净残余不得再次扣除历史拆出量。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_zero_activity | cabinet; lock; key; cloth; building | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。零产出事件保留其既有因果父队列及原分母，不能寻找无关的正产出期间。若原父队列没有正N_c，保留归属原始总量，归一结果保持未决。全寿命活动为零时，仅可凭证归属唯一投运委托责任，并使用同一原队列规则；否则保留未分配来源并阻断完成。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_shared_driver_controls | cabinet; lock; key; cloth; building | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。资产制造、安装和终态负担采用相同更新f；毛库存、实物转移和退役另作实物监管账。对日历时间资产，u为已发生服务容量时间，按既有共享/类别规则向各原类别/期间仅归属一次，包含规则要求的空置/失败责任；U覆盖相同全用户日历容量。q不得再乘一次类别份额。历史不明、寿命/去向无依据或缺原分母时阻断完成。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_background_version | cabinet; lock; key; cloth; building | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。若供应背景或处理模型版本改变但实物数量未变，也必须替换全部受影响原队列的相应链接清单和结果；不能因为实物delta_A=0而保留旧模型。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |


### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | 全部清单 | 显式保留未解决UUID及支持记录为待办；绑定前官方直读记录须匹配对象、状态、属性、单位及接收方/介质。 | 官方直读响应及哈希绑定receipt |
| `quality_measurement` | 全部协议 | 保留仪表身份、校准范围/日期、单位换算、原始区间记录及归属；估计须有方法、不确定性及责任人文件，不得虚构默认值。 | 仪表/天平证书；记录；估计依据 |
| `quality_completeness` | 全部清单 | 逐月对账N、总安装时长、故障、空置容量、库存及废物平衡；有证据的缺席可为not_applicable，未知是否发生属于不完整。 路线偏离按boundary_deviation判定，既定边界内缺行保持未完成。 | cp_rental；cp_materials；cp_wastes；cp_route |
| quality_waste_origin | waste_paper; waste_pencil | 逐种普通固废核验产生责任、原队列/分层/分母、带来源库存平衡、有证据的实际或前瞻完整处理及后来回执替换。来源/去向/物理损失未知保持明确缺口；后来外运本身不能闭合或改归责任。污水及按寿命摊销资产寿终处理采用各自独立方法。 | 产生/库存/转移台账；有证据路线模型；原队列回执替换 |
| `quality_semantics` | 全部规范性规则 | 全部边界、分配、采集及计算义务须进入机器投影且双语对齐；核对条件和否定，不仅核对ID及哈希。 | 双语语义比较；生成guidance回读 |
| inv_asset_provision | lock; key; cloth | 数量按allocation_assets为已消耗的生命周期等效投入，包含匹配报废，不是本年购入或退役的件数/质量。 | 所列各清单行既有的采集协议和证据。 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 全部卡片 | 每个使用的UUID须有官方直读名称/类型/属性/单位证据；未解决名称是候选而非已核身份。发布前须绑定参考标准服务流身份及全部未解决输入/废物身份和支持项；结构检查不代表生命周期或方法批准。 |  |
| `validate_scope` | 全部数据集 | 拒绝未声明尺寸/取用安排、不支持路线、未解决材料身份、未知分母、分配不闭合或上游服务重复计入。较宽类别名称不能证明本较窄服务适用于CPC68019全类。 | `un-cpc3-68019` |
| `validate_completeness` | 全部数量 | N须为正且有限。合格时长、排除的停用时长、空置及其他状态须互斥，并与全部安装时长完整对账。缺失数量、未知身份、未校准仪表及无依据寿命估计均保留为显式缺口；不得把零或示意费率作为默认值。 检验A期产生留存废物、B期外运：原A责任及分母保留，实际证据替换同一事件模型，不再给B追加负担。 |  |
| `validate_projection` | 双语方法 | 核对中英文行/规则/协议/来源ID有序一致，以及方向、类型、UUID、单位、公式、条件、禁止项和义务一致。全部规范性表格及卡片适用范围均须进入生成的structured guidance；fingerprint不能独自证明语义完整。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_capital_restatement | cabinet; lock; key; cloth; building | 必须核对calc_capital_restatement的原队列/原分母、全用户驱动、来源版本、已记量及重算差额；禁止冻结旧历史再只改后续分母，禁止将退役余额转给无关当期产品，禁止负实物交换。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 同尺寸/取用类别、同路线、同核算年度和边界下的信箱租赁 |
| excluded_use | 整类CPC68019覆盖宣称；运输完成、柜台办理或存局候领的代理；科学或发布批准宣称 |
| required_metadata | 场址；格口尺寸及数量；钢柜规格；取用日历及时区；开租/终止验收；机械钥匙纸质管理路线；容量/空置/故障时长；报告年；资产寿命依据；供应与接收边界；普通废物产生来源、原份额/分母、留存库存及处理修订链 |
| required_quality_disclosure | 身份及寿命未解决项；测量不确定性；空置/故障；路线适用性；分配及全量平衡；中英文审查状态 |
| update_trigger | 路线/尺寸/取用/供应或接收方边界变化；新报告年；身份核实；寿命重估；后来普通废物回执/去向或产生量更正须更新原事件/队列模型 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-68019` | official_guidance | UNSD CPC Version 3.0, 68019: https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/68019 | 分类包括/排除项及较窄边界；不提供LCA数量 |
| `usps-pobox` | official_guidance | USPS Rent a PO Box: https://www.usps.com/manage/po-boxes.htm | 实体带锁信箱、尺寸、取钥匙、租期及取用安排的官方实例；不作为通用尺寸/费率/耗用默认值 |
| `ghg-product-standard-2011` | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, printed p.63: https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分配顺序：优先细分、然后实体关系；不提供本服务的利用率、寿命或面积/时间系数 |
