---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-mining-construction-and-civil-engineerin-f6674dc9
status: candidate
content_maturity: authored_methodology
language: zh-CN
sync_with: pcr.en-US.md
---

# 原厂包装Kushlan 350DD混凝土搅拌机的非专门店自提零售服务

## 1. 范围与适用性

本候选覆盖混合实体店交付一台全新原厂包装完整未组装Kushlan 350DD混凝土/砂浆搅拌机的零售服务，是CPC444组相关机械零售中明确更窄的子集。以下方法选择为PCR设计及声明前景协议，不是厂商强制要求，也不声称完全符合GHG标准。所规定补齐模块及未绑定身份解决前，核心明确为部分。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-mining-construction-and-civil-engineerin-f6674dc9 |
| classification_refs | CPC3.0:62187；444/44440商品零售的更窄子集 |
| covered_products | 不含可选三脚架的全新原厂包装完整未组装350DD自提零售服务 |
| excluded_products | 其他搅拌机；另售附件；替换件；出租；专门店；仅线上/直发；组装/测试/安装/搅拌/配送 |
| representative_product | Kushlan350DD有线手推车式（实际双轮）混凝土搅拌机；以实际批次/铭牌/BOM控制，不以标称马力控制 |
| production_route | 混合实体店收货、未开封存放、无纸收银和顾客自提；完整供应商退回 |
| market_state | 全新完整未组装原包装；无可选支架或另供耗材；交接未开封 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供正确原包装350DD自提零售服务 |
| How much | 一次最终有效原完整包交易，仅计一次 |
| How well | 正确配置、有签字完整原装箱控制、无损未开封包装及有记录顾客验收；不作性能测试 |
| How long or cycle | 一个预先声明场址/配置观察池，含失败尝试及迟到验收修正 |
| reference_flow_link | service_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一台原厂包装Kushlan 350DD混凝土搅拌机的自提零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 场址及混合门店证据; 原配置及供应商装箱/BOM; b_facility_gate全期间设施不存在证据; 原original_ID及批次; 电机/齿轮箱版本; 未开封交接门及排除项; 预先声明池及截止; 最终验收历史; 原商品/库存/S/F/T/O台账; 部分模块范围及供应方覆盖; 分配及不确定度版本 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| m_reference | service_output | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 参考量与完成输出为1 Item(s)；不同最终有效原ID定义Q，不与kg或标称容量混用。 |
| m_packages | failed_original; supplier_handover; failed_retention | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 仅计完整同配置原包装；原实物交接和责任份额独立保留后再除Q。 |
| m_energy | electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 计量分配kWh仅一次乘3.6转MJ；能量单位组93a60a57-a3c8-11da-a746-0800200c9a66。数量单位规则不适用于电力或补齐模块质量/时间/活动。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 独立上游运单结束后的实际门店收货门；原厂完整未开封未组装350DD包 |
| starting_condition_role | 增量零售服务前景；失败商品发运制造及F入场明确耦合 |
| product_classification_scope | 仅62187内此44440搅拌机械零售子集；不等同整叶 |
| recursive_input_rule | 不得对同一交易递归加入另一零售服务；failed_original仍是明确供应商制造输入，不得被本规则排除 |
| upstream_dataset_requirement | F的原完整制造/包装发运向量；另有实际F入场；强制运输/资产/数字/清洁补齐及匹配供应方 |
| disclosure | 部分核心及未绑定身份；实际交接门、阶段排除、原池、来源ID、责任份额及原分母 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `b_scope` | retail; failure; custody | 仅适用于向最终使用者销售多个产品族的非专门实体店，以及不含可选三脚架的原厂完整未组装350DD。必须将原批次/序列号、供应商订单、电机/齿轮箱版本、实际钢架、聚乙烯滚筒、电机/齿轮箱、搅拌叶片、轮/轴/手柄/紧固件组合、手册、内含工厂润滑剂、收缩膜及实际外层/保护包装保持为一个同质配置。厂商手册第12–13和18–19页说明这是需要组装的完整机械，不是单独滚筒、电机或门店组装服务。Home Depot具体商品页证明该型号存在于混合零售渠道；它不证明本地可供货或本场址密封库存。使用前场址负责人必须验证实际混合门店路线和供应商签字装箱清单。 | un62187; un444; kushlan350; kushlanmanual; hd350 |
| `b_gate` | retail; failure; custody | 始于独立上游运载结束后的门店收货门。终于正确、无损、未开封完整包装的顾客实物自提和有记录验收。验收完整性须由供应商原装箱控制及外包装/标签/批次检查支持；这不是运行或安全测试。每一场址/配置和声明观察期间应预先建立一个核算池，保留仅有失败的日期及停业/闲置预留。后续退回或撤销验收必须替换原记录及原核算池的分子/分母；完整原件再售沿用同一原始ID，不能再次取得最终有效服务。单纯退款或折扣不撤销验收。 | kushlanmanual |
| `b_exclusions` | retail; failure; custody | 本路线不得对商品开封、拆包、组装、安装、通电、演示、搅拌、润滑、维修、充气、重新包装、出租或配送。不得增加零售袋、绑带、标签或纸质小票：使用已核实原包装和电子收据。必须为实际电机/齿轮箱批次取得工厂润滑剂身份及量值证据；手册含永久润滑脂表述及另一组装漏油表述，均不能证明本批状态。工厂润滑、部件状态和工厂测试归实际原商品向量；现场无该活动不等于工厂不存在。厂商网页参数与手册润滑段落有冲突，必须核实实际350DD电机/齿轮箱版本；不得采用目录功率、质量、电压或包装默认值。任何开封、内件损坏、部分缺失的退货、泄漏或现场废物，在完整性成立前均须有具体状态卡、原始协议及双语修订。 | kushlan350; kushlanmanual |
| `b_partial` | retail; failure; custody | 本核心是部分增量服务清单：计量零售用电、失败原商品制造责任、服务输出及两个实物保管审计卫星。它不是完整零售足迹。数据生产者必须按b_transport、b_assets、b_digital和b_clean补齐全部实际原子交换及匹配供应方，然后执行c_merge。未知模块活动或身份阻止完整状态。不得默默将已知设施、搬运、信息设备、网络、支付、行政、安防、清洁或资产生命周期视为零。 | ghg2011 |
| `b_goods` | failed_original; supplier_handover; failed_retention | 每一原始完整包装应有一个在供应商发运门的签字制造/原始包装向量V，不含入场运输。通过failed_original仅一次应用累计最终责任F。S是最终有效顾客商品的责任方，不纳入零售服务向量；T是已识别且签字承接背景责任的持续接收方；O保留原始向量处于未结状态。每一原始ID满足S+F+T+O=1，不得将未知份额重新归一化。仅有供应商财务退款不是T。最终再售商品不重复制造。已确认遗失的原始包虽无实物废物输出，也以调查记录承担F。供应方向量如捆绑入场运输必须有经核实的阶段拆分；拆分未知即不完整。下游GOODS研究可另行披露并一次添加S制造和S入场运输。 | ghg2011 |
| `b_custody` | supplier_handover; failed_retention | 这两个输出是计量的实物包装交接，独立于S/F/T/O。必须保留接收方、地点、日期、完整未开封状态及实际原始来源ID。supplier_handover是发给供应商的实物毛交接量，不论其持续背景为T还是仍为O/F；failed_retention是最终验收无效但接收方保留完整未开封包装的实物毛交接。两者均不得产生第二次制造需求、废物处理、回收信用或环境信用。必须将它们保留为独立标识的审计卫星，排除于c_merge环境聚合。实物包装后续退回改变保管状态，但本身不等于服务或责任决策改变。 | ghg2011 |
| `b_transport` | retail; failed_original | 生产者必须分别清查实际上游入场、供应商退回和内部搬运来源。入场先将各行程来源分到实际运单，再一次分到原始F责任；S归GOODS，T/O随各自责任方。门店调拨和零售引起的退回仍归零售运行，不受T商品制造责任影响。采用三个互斥实测供应方服务模式：loaded_vehiclekm来自载货段里程表/GPS，empty_vehiclekm来自实际空驶段里程表/GPS，stationary_idle_vehicleh来自静止动力开启状态起止时间。各供应方必须覆盖实际模式、该载荷/闲置状态的能量和尾气；覆盖未知阻止完整性。载货来源仅在重量运能确实约束时用实测运单kg*loaded_km，容积运能约束时用occupied_m3*loaded_km。空驶来源使用同一行程预留映射d_empty_h=reserved_capacity_h*empty_km；静止闲置使用d_idle_h=reserved_capacity_h*idle_h。容量按有据约束一致用kg或m3，包含全部预留受益方，不得混单位。正空驶距离或闲置时长必须有独立正原来源和正且已知的全受益方驱动总量；零tkm不能删除它。现场电动/手动搬运用实测作业秒，含实际闲置预留；现场燃料搬运由b_facility_gate排除。资产/维修/报废运载先归资产，再沿a_assets历史份额。 | ghg2011 |
| `b_facility_gate` | retail | 本窄路线要求在每一观察区间，全部纳入门店区域及其租赁/共用/房东服务设施均有据不存在现场燃料燃烧/使用、燃料搬运或备用动力装置、含制冷剂设备，以及暖通空调/外购供热或供冷。设施负责人须签署覆盖营业/停业/闲置、临时设备、维修事件、房东/共用供应及来源边界的全期间设备和服务清单，不是单次检查。记录实际equipment_ID、责任方、服务区域、区间、燃料/制冷剂/暖通空调存在状态、供应方服务范围和不存在证据。未知或实际存在均阻止本路线及完整数据集状态，直至具体扩展定义每种真实燃料/制冷剂物种、量值/状态、库存和实际外部去向/介质、互斥供应方覆盖以及匹配原子卡/协议。不得因商品未插电就假设现场排放为零。外部燃料车辆必须保持在纳入设施门界外；实际进入现场违反本窄gate。外部运输仍由b_transport独立管理。 |  |
| `b_assets` | retail | 生产者必须把实际建筑结构、货架/库位、手动/电动搬运设备、收银终端、灯、无制冷通风风扇、路由器和安防相机分别登记为同质型号/BOM/范围向量。无燃料/无制冷剂/无暖通空调路线须在全期间满足b_facility_gate，包含共用及房东服务；不得从搅拌机未运行推断不存在。制造/安装、运行、事件维修和报废互斥；完整生命周期包仅在签字明确实际对象/阶段/排除项和原分母时可整体保留。否则仅用有据部件制造，补实际事件更换量及完整末端处理载体，不得重复包内零件/运载。按a_assets：结构/货架用实测预留服务面积*时间；收银、灯/风扇、搬运和信息设备用全受益方实测预留设备时间，含闲置。复用清洁抹布/拖把按c_clean用实测清洁面积暴露，不得首次使用计全部采购。实际资产或寿命未知仍明确不完整。 | ghg2011 |
| `b_digital` | retail | 生产者必须分别覆盖实际网络接入、支付处理、电子收据/行政后台和安防存储，或核实范围精确的完整合同包。唯一网络区间以c_digital定义的精确all_endpoint_seconds分母分配供应方来源小时；仅有区间本身不能分到本SKU。购物篮支付和行政批次按事件内实测来源行处理秒数份额分配每一唯一尝试，份额合计1，并保留失败尝试。相机采集生产来源按c_digital以各实际原capture来源乘其冻结f_i_h；未来留存绝不重新分配生产。仅实际存储供应方总量使用互斥direct/aggregate存储包模式，包含每一原空闲/失败受益方。即使售出或删除后仍保留冻结原映射/版本；采集生产总量不可分时，在各原capture来源可核验前保持不完整。明确1 GB=10^9字节及1 GiB=2^30字节。后台供应方须排除已在electricity记录的现场信息设备用电。供应方运行、资产及网络组成部分必须按事件/时间/对象/阶段查重，仅供应方ID不同不能证明无重叠。 | ghg2011 |
| `b_clean` | retail | 商品清洁被禁止，但生产者仍必须补齐实际设施清洁。按c_clean，制剂净来源质量不含独立容器；来源于原制剂的当前溶液、表面薄膜、工具附着及留置废物库存，与未用制剂及最终外部输出分开。入口供水和直接外排液独立计量；直接废液kg=实际外排m3*同状态实测密度，不再次扣回用。每种制剂、完整一次性容器、一次性耗材、复用抹布/拖把和末端载体均须在完整状态前有实际独立原子卡/供应方。执行明确原来源G/m0制造/入场及历史替换规则；复用工具用cleaned_m2寿命暴露。实际完整混合载体须有实际成分/状态的签字接收及完整处理范围。直接运单废物kg为毛重减皮重，不得再扣留存库存或再乘来源组成。任何真实来源损失/化学物种或去向如无真实载体/供应方证据覆盖，须具体扩展；未知不是零。 | ghg2011 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| retail | 原包自提零售 | required | 全部适用池 | 部分服务核心及强制补齐责任 | 1 Item(s) service_output |
| failure | 失败原商品责任 | conditional | 有原包F责任；无此活动时须有签字零F证据；未知不为零 | 原发运制造需求 | F_count/Q Item(s) |
| custody | 实物交接审计卫星 | conditional | 实际供应商退发或完整外部留存失败；不发生时须逐去向签字证据 | 仅实物追踪；排除环境聚合 | 实际毛交接数量/Q Item(s) |

### 过程：原包零售 (`retail`)

#### 输入

##### 产品流

###### 零售运行用电 (`electricity`)

按c_energy和a_electricity计3.6*E_h/Q MJ，仅门店回路。不含搅拌机运行能耗。须另匹配实际使用点供应方；缺驱动/供应方保持部分。

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 3.6*E_h/Q MJ
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy`
- 来源:

#### 输出

##### 产品流

###### 最终有效自提服务 (`service_output`)

Q>0时每声明参考流1 Item(s)；c_pool定义最终有效唯一ID。这是零售服务，不是搅拌机商品，也不是搅拌/组装运行。

- 选定流: 一台原厂包装Kushlan 350DD混凝土搅拌机的自提零售服务
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_goods`
- 来源: ghg2011

### 过程：失败原件责任 (`failure`)

#### 输入

##### 产品流

###### 失败原件制造需求 (`failed_original`)

按c_goods计F_count/Q Item(s)，仅匹配完整同质供应商发运制造/原包装向量。计量对象为原完整包装，不是替换零件、实测机械kg或全部收货。实际入场F另行强制补齐。缺完整BOM/向量/身份阻止绑定及完整使用。

- 选定流: 原厂包装内完整未组装Kushlan 350DD搅拌机
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: F_count/Q Item(s)
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_failure`
- 来源: kushlanmanual

### 过程：实物保管卫星 (`custody`)

#### 输出

##### 产品流

###### 实物原包装退发供应商 (`supplier_handover`)

仅有实际完整未开封包交接证据时计gross_supplier_dispatch/Q Item(s)。按b_custody和c_satellites作审计卫星；不是T或F，不给制造/处理信用。接收方及背景连续责任须另签。

- 选定流: 原厂包装内完整未组装Kushlan 350DD搅拌机
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: gross_supplier_dispatch/Q Item(s)
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_custody`
- 来源:

###### 无有效验收而外部留存的实物未开封包 (`failed_retention`)

具有intact_external_retention证据的无效验收毛自提数/Q Item(s)；必须有实际原ID、接收方/状态/日期。按b_custody作审计卫星，不自动视为零售商废物。开封/已用/部分商品须于完整性前具体状态扩展。

- 选定流: 原厂包装内完整未组装Kushlan 350DD搅拌机
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: gross_invalid_retained/Q Item(s)
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_custody`
- 来源:

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `a_electricity` | electricity | 先用互斥直接电表。仅当回路确实在母表边界内时才能作母表扣减，不得扣独立电表。运行设备来源kWh按实测作业秒分，闲置/预留设备kWh按全受益方预留设备秒分，固定物理空间kWh按实测服务面积×时间分。实际来源池必须分开，并保留停业/失败/零销售受益方。每一来源分配后原kWh合计必须等于计量来源；正能量却缺失/为零的全受益方驱动阻止归一化，不得默认零。 | ghg2011 |
| `a_assets` | retail | 对每个同质资产向量V_v，受益方h使用原始实测暴露e_recorded_h和有据预期总寿命L_v：f_old_h=e_recorded_h/L_v。须维持每一历史核算池记录且累计份额<=1，寿命变化不得重启全部制造。每次寿命/向量版本变化，以delta_h=f_new_h*V_new-f_old_h*V_old替换全部历史记录。实际报废时用f_final_h=e_actual_h/sum_all_h(e_actual_h)，替换每一历史分配；residual1-sum_old_f仅作QA。完整末端载体及独立维修/报废运输仅一次沿同份额分配；供应方量只有在有精确责任方/核算池/版本证据且已分到最终方时才跳过再次归属。 | ghg2011 |
| `a_goods` | failed_original; supplier_handover; failed_retention | 仅对完整同配置原始包装使用整来源归属。不得按部件质量拆混合环境向量。如部件责任分离，应以实际独立部件原量、属性/单位和供应方向量替换整来源卡，逐来源守恒S/F/T/O，并将这些量排除整包。实物退回数不是F或T比例；每一责任决定均需独立签字最终状态。本核心不允许回收替代或避免制造信用。 | ghg2011 |
| `a_once` | retail; failure; custody | 原量通过c_pool、c_energy、c_goods及c_merge保持未归一化，最终Q仅应用一次。不得把归一模块强度直接加到原量，也不得相加不同交换/属性/单位。零输出池及原分子保留在预先声明同配置核算历史中；若合并Q=0则无法归一化。迟到退货须修订原池运行、去向及责任版本，不得默默计入另一当前销售批次。 | ghg2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | service_output | 原包装及验收台账 | original_ID; pool_ID; attempt_ID; event_date; acceptance_version; final_valid_acceptance; revocation_date; configuration; cutoff; opening_count; new_receipts; customer_physical_returns; supplier_physical_returns; transfer_in; gross_customer_pickups; gross_supplier_dispatch; transfer_out; confirmed_missing; condemnation_count; closing_count; predicted_closing_count; signed_residual_count; event_ID; opening_kg; actual_condemned_kg; dispatch_kg; closing_kg; predicted_closing_kg; known_missing_kg; signed_residual_kg; original_ID; original_quantity; configuration; packing_BOM; vector_ID; dispatch_gate; vector_version; S_i; F_i; T_i; O_i; recipient; responsibility_signature; prior_FV; new_FV; inbound_source_ID; Q; seal_photos; supplier_signature; packing_list; motor_plate; configuration_revision | 收货员在门店交接门扫描每个原包及最终用户交易；主管签署装箱证据、实物盘点和最新验收替换，不通电测试。 c_pool；c_stock；c_goods；原ID持续且Q不重复 | Item(s)；kg独立；时间戳 | 每次收货/尝试/退回及截止实盘 | 完整声明池，含闲置/失败日及迟到修正 | 实际混合门店收货至自提；一个精确配置 | 每参考流 | 签字装箱控制；秤核查/可追溯砝码；发票扫描；封装/铭牌照片；验收历史；不确定度及未解差异 |
| cp_failure | failure | failed_original | 原整来源责任台账 | original_ID; original_quantity; configuration; packing_BOM; vector_ID; dispatch_gate; vector_version; S_i; F_i; T_i; O_i; recipient; responsibility_signature; prior_FV; new_FV; inbound_source_ID; Q | 数据生产者取得供应商签字发运阶段完整机械/包装向量，并独立追踪各原ID最终责任。遗失调查员签确认遗失；财务记录不能单独决定实物去向。 c_goods及b_goods；制造与入场分开 | Item(s)；份额；原向量单位 | 每次决定/向量修订 | 原始收货至最新截止及历史替换 | 精确相同包装配置及上游发运门 | 每参考流 | 签字持续接收方；供应商完整范围；原包装BOM；调查；版本差量；保留未知 |
| cp_custody | custody | supplier_handover; failed_retention | 未开封包装实物交接日志 | original_ID; gross_supplier_dispatch; gross_customer_pickups; gross_invalid_retained; custody_interval_ID; custody_open_date; custody_close_date; cutoff; event_ID; final_valid_acceptance; intact_external_retention; recipient; physical_date; current_state; Q; opening_count; closing_count; seal_photos; package_ID | 发运员及实际供应商/顾客接收方逐完整包装ID/状态/时间签字；截止与cp_goods对账。无效验收另需决定证据。 c_satellites；不进环境聚合且不代F/T | Item(s)；时间戳 | 每次实物交接及状态修正 | 完整原来源历史及截止 | 实际门店至接收方未开封包装交接门 | 每参考流 | 接收方签字；封装照片；包装扫描；运输记录；库存残差调查 |
| cp_energy | retail | electricity | 互斥电表及物理驱动记录 | meter_ID; parent_boundary; interval; start_kWh; end_kWh; multiplier; disjoint_direct_kWh; source_kWh; source_mode; task_seconds; reserved_equipment_seconds; served_area_m2; coverage_hours; all_beneficiary_drivers; original_pool; version; Q | 能源技术员记录区间电表读数、回路边界和实际驱动；分别记录运行/闲置/固定模式及全部混合门店受益方。 c_energy；先对账完整来源再最终Q一次 | kWh；秒；m2；小时 | 每一电表区间及作业/预留事件 | 完整池，含停业/闲置及零销售区间 | 门店收货/存放/收银回路；不对搅拌机通电 | 每参考流 | 电表校准/精度/倍率；时钟同步；测试日志；面积测绘；回路图；账单及残差 |
| cp_transport | retail | service_output | 强制补齐运输来源台账 | cp_transport; cp_transport_failure; ledger_ID; record_ID; trip_ID; mode_ID; segment_start; segment_end; odometer_start_km; odometer_end_km; GPS_segment; loaded_vehiclekm; empty_vehiclekm; powered_idle_start; powered_idle_end; stationary_idle_vehicleh; source_ID; original_unit; provider_mode_scope; energy_exhaust_coverage; capacity_evidence; consignment_ID; consignment_kg_h; occupied_m3_h; reserved_capacity_h; capacity_unit; reservation_interval; all_beneficiary_reservation_map; d_loaded_h; d_empty_h; d_idle_h; sum_all_mode_driver; F_i; asset_ID; owner; original_pool; attribution_level; version | 逐实际车辆行程/搬运任务记录；取得三个实测供应方模式及其完整能量/尾气覆盖；采集载货/空驶GPS和静止动力闲置时间戳，称运单并测占用容积/运能证据。 c_transport；b_transport；恢复原分母 | 供应方原单位；kg；m3；vehiclekm；vehicleh；秒 | 每次行程/任务/来源修正 | 全部入场/退回/调拨/搬运，含空驶闲置 | 实际运单再原责任方；资产运载独立 | 每参考流 | 校准秤/流量计或供应方凭证；路线GPS；约束运能；接收签字；活动层级查重 |
| cp_assets | retail | service_output | 强制补齐持续资产台账 | asset_ID; model_BOM; scope_stages; vector_ID; vector_version; original_pool; e_recorded_h; exposure_unit; L_v; expected_basis; e_actual_h; all_historical_records; f_old; f_new; V_old; V_new; repair_event_ID; terminal_carrier_ID; freight_source_ID; attribution_level; equipment_ID; equipment_owner; served_zone; observation_interval; fuel_present; refrigerant_present; HVAC_present; purchased_heating_cooling_present; landlord_shared_scope; temporary_backup_inventory; absence_evidence; responsible_signoff | 资产管理员签署全期间b_facility_gate设备/服务不存在覆盖，并登记实际型号/BOM/阶段包、寿命依据及每一受益方原实测面积/时间或设备秒；逐维修及最终报废记录。 a_assets；c_assets；替换历史fV且不再乘末端份额 | m2*小时或设备秒；供应方向量单位 | 每一暴露区间/事件及寿命修订 | 投用至实际报废；全部历史池 | 实际结构/货架/搬运/收银/信息设备/照明/安防；按b_facility_gate无暖通空调/燃料/制冷剂 | 每参考流 | 签字生命周期范围/BOM；时间日志；实测足迹；校准；更换和接收证据；全历史对账 |
| cp_digital | retail | service_output | 强制补齐后台事件台账 | storage_source_packet_ID; storage_packet_mode; raw_or_normalized; storage_provider_total_p; storage_original_denominator_p; original_unit; source_h; interval_ID; reserved_endpoint_seconds_h; all_endpoint_seconds; network_all_beneficiary_IDs; unique_attempt_ID; event_source; line_processing_seconds_h; all_event_line_seconds; event_all_beneficiary_IDs; capture_ID; footprint_m2_i_h; coverage_seconds_i_h; all_capture_beneficiary_IDs; a_i_h; all_capture_area_seconds_i; f_i_h; capture_map_version_i; retention_interval_ID; retention_start; retention_end; retained_bytes_i; retention_seconds_i; retained_byte_seconds_i; storage_byte_seconds_i_h; packet_capture_membership; packet_time_scope; b_p_i; all_packet_byte_seconds_p; N_packet_h; GB_GiB_mode; constituent_scope; attribution_level; final_owner; original_pool; source_version; version; capture_production_source_ID_i; actual_source_i; capture_z_i; capture_raw_or_normalized_i; capture_source_unit_i; capture_source_vector_i; capture_original_denominator_i; capture_source_version_i | 信息/支付/行政/安防负责人导出每一唯一区间/事件/capture及c_digital精确原字段，含all_endpoint_seconds/all_event_line_seconds、各实际footprint_m2_i_h/coverage_seconds_i_h、固定字节留存区间、全部原受益方及包成员。冻结原capture映射；独立于留存取得各原capture生产source_ID/原量/向量/单位/分母/版本。仅为实际存储包记录互斥direct_capture/aggregate_captures模式及已完成归属层级。取得各存储供应方包原来源、分母/单位及组成阶段；不可分采集生产保持不完整。 b_digital；c_digital；唯一来源/事件及全受益方 | m2；m2*秒；无量纲份额；秒；小时；字节；字节*秒；供应方原单位 | 每一事件/区间/采集及留存变化 | 全部成功/拒绝/失败购物篮；原采集历史 | 实际现场端点和外部后台 | 每参考流 | 时钟同步；计数器；签字后台范围；字节单位换算；采集映射及原来源/版本档案 |
| cp_clean | retail | service_output | 强制补齐设施来源及载体 | original_source_ID; source_portion_ID; original_first_use_event_ID; m0_s; container_ID; container_reuse_absence; formulation_net_kg; cumulative_final_external_source_kg; current_factorysealed_unused_source_kg; current_opened_unused_source_kg; current_mixed_solution_source_kg; current_surface_film_source_kg; current_tool_bound_source_kg; current_held_waste_source_kg; source_state_location; source_state_carrier; state_transition_ID; confirmed_missing_source_kg; signed_residual_source_kg; G_use_sh; G_preF_sh; G_sh; unused_transfer_source_kg; current_unassigned_source_kg; signed_unassigned_residual_kg; source_state_version; original_owner; original_pool; V_mfg_s; V_in_s; source_vector_version; G_old_h; G_new_h; m0_old; m0_new; V_old; V_new; container_count; complete_container_BOM; first_open_event; consumable_count; first_consumption_event; container_inbound_share; consumable_inbound_share; tool_ID; tool_model_BOM; cleaning_pass_event_ID; cleaned_area_m2; beneficiary_ID; cleaned_m2_recorded_h; L_cleaned_m2_expected; lifetime_evidence; cleaned_m2_actual_h; all_historical_tool_exposures; f_old; f_new; acquisition_count; retirement_count; repair_event_ID; terminal_carrier_ID; freight_source_ID; gross_kg; tare_kg; discharged_m3; same_state_density_kg_m3; source_origin_kg; added_water_kg; dirt_kg; receiver_acceptance; treatment_scope; attribution_level | 设施主管记录不含容器的原净制剂m0、每一来源当前状态/变更、实际首次使用份量/使用前损失、完整容器/耗材件数及复用工具cleaned_m2暴露/寿命/历史，并记录实际供水/废液/废物外运。称实际完整载体，在外排状态测密度并保留签字处理接收。商品仍未开封。 c_clean；b_clean；直接外运不重复扣库存 | kg制剂及来源份量；m3；kg/m3；Item(s)完整容器/耗材/工具；清洁m2；原向量单位；时间戳 | 每次收货/领用/清洁/外运及截止 | 跨全部核算池的持续原来源台账 | 仅实际设施清洁；制剂不含容器；完整容器/耗材及复用工具独立 | 每参考流 | 校准表/秤/密度测试；来源BOM；首次使用登记；接收方签字处理边界；不确定度/残差调查 |
| cp_merge | retail | service_output | 补齐及重叠登记 | cp_merge; cp_merge_failure; ledger_ID; record_ID; E_h; F_count; N_core_r; module_ID; raw_or_normalized; z_jr; D_j; N_jr; source_ID; event_ID; object_ID; time_interval; lifecycle_stage; exchange_UUID; property_UUID; unit; state; medium; original_owner_fraction; original_pool; version; Q | 数据生产者逐行比较实际来源事件/对象/时间/阶段组成，恢复模块原分子，并于聚合前验证每一缺失原子卡及供应方绑定。 c_merge及a_once；仅归一化一次 | 逐交换原单位；最终共同Q | 每次来源/模块/归属修订 | 同配置原池及全部修订 | 核心及强制模块；排除保管审计卫星 | 每参考流 | 有版本来源清单；重复事件解决；原D和单位证据；生产者签字完整有/无登记 |
| cp_transport_failure | failure | failed_original | failure过程的cp_transport视图 | cp_transport; cp_transport_failure; ledger_ID; record_ID; trip_ID; mode_ID; segment_start; segment_end; odometer_start_km; odometer_end_km; GPS_segment; loaded_vehiclekm; empty_vehiclekm; powered_idle_start; powered_idle_end; stationary_idle_vehicleh; source_ID; original_unit; provider_mode_scope; energy_exhaust_coverage; capacity_evidence; consignment_ID; consignment_kg_h; occupied_m3_h; reserved_capacity_h; capacity_unit; reservation_interval; all_beneficiary_reservation_map; d_loaded_h; d_empty_h; d_idle_h; sum_all_mode_driver; F_i; asset_ID; owner; original_pool; attribution_level; version | 逐实际车辆行程/搬运任务记录；取得三个实测供应方模式及其完整能量/尾气覆盖；采集载货/空驶GPS和静止动力闲置时间戳，称运单并测占用容积/运能证据。 与cp_transport使用相同原ledger_ID/record_ID/source_ID、分母及版本；不得重复测量、观察或归一化。 c_transport；b_transport；恢复原分母 | 供应方原单位；kg；m3；vehiclekm；vehicleh；秒 | 每次行程/任务/来源修正 | 全部入场/退回/调拨/搬运，含空驶闲置 | 仅failure过程failed_original原责任；共用原台账，不是retail过程卡 | 每参考流 | 校准秤/流量计或供应方凭证；路线GPS；约束运能；接收签字；活动层级查重 |
| cp_merge_failure | failure | failed_original | failure过程的cp_merge视图 | cp_merge; cp_merge_failure; ledger_ID; record_ID; E_h; F_count; N_core_r; module_ID; raw_or_normalized; z_jr; D_j; N_jr; source_ID; event_ID; object_ID; time_interval; lifecycle_stage; exchange_UUID; property_UUID; unit; state; medium; original_owner_fraction; original_pool; version; Q | 数据生产者逐行比较实际来源事件/对象/时间/阶段组成，恢复模块原分子，并于聚合前验证每一缺失原子卡及供应方绑定。 与cp_merge使用相同原ledger_ID/record_ID/source_ID、分母及版本；不得重复测量、观察或归一化。 c_merge及a_once；仅归一化一次 | 逐交换原单位；最终共同Q | 每次来源/模块/归属修订 | 同配置原池及全部修订 | 仅failure过程failed_original原责任；共用原台账，不是retail过程卡 | 每参考流 | 有版本来源清单；重复事件解决；原D和单位证据；生产者签字完整有/无登记 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_pool | service_output | Q=预先声明场址/配置池内最新签字final_valid_acceptance=true的不同original_ID数量。Q>0时声明固定服务参考为1 Item(s)。各计一次；最新已撤销ID已不在集合内，不得再扣。保留实际尝试日期、重复/拒绝/未决事件和原始来源历史。 | original_ID; pool_ID; attempt_ID; event_date; acceptance_version; final_valid_acceptance; revocation_date; configuration; cutoff | Q单位Item(s)；仅Q>0时service_output=1 Item(s) |  |
| c_stock | supplier_handover; failed_retention | 仅商品保管：predicted_closing_count=opening_count+new_receipts+customer_physical_returns+supplier_physical_returns+transfer_in-gross_customer_pickups-gross_supplier_dispatch-transfer_out-confirmed_missing-condemnation_count。signed_residual_count=closing_count-predicted_closing_count，其中closing_count为实物观察库存；正值为未解实物多出，负值为未解短缺。确认遗失已一次扣除，不是签字残差。判废在内部把商品转留置废物，不是实际外运。独立kg台账用predicted_closing_kg=opening_kg+actual_condemned_kg-dispatch_kg-known_missing_kg；signed_residual_kg=closing_kg-predicted_closing_kg，采用相同正负定义。判废件数/kg按event_ID关联，不得把Item(s)等同kg。现场判废/处置在具体扩展前阻止本路线。外部留存失败已在毛自提内，不得再次扣库存。 | opening_count; new_receipts; customer_physical_returns; supplier_physical_returns; transfer_in; gross_customer_pickups; gross_supplier_dispatch; transfer_out; confirmed_missing; condemnation_count; closing_count; predicted_closing_count; signed_residual_count; event_ID; opening_kg; actual_condemned_kg; dispatch_kg; closing_kg; predicted_closing_kg; known_missing_kg; signed_residual_kg | 独立实物件数及kg对账，残差符号为观察减预测 |  |
| c_energy | electricity | E_h=互斥direct_kWh_h之和+sum_source(source_kWh*driver_h/sum_all_driver)。须用a_electricity精确运行/闲置/固定驱动；来源入口已排内部回用及供应方用电重叠。electricity=3.6*E_h/Q MJ。 | meter_ID; parent_boundary; interval; start_kWh; end_kWh; multiplier; disjoint_direct_kWh; source_kWh; source_mode; task_seconds; reserved_equipment_seconds; served_area_m2; coverage_hours; all_beneficiary_drivers; original_pool; version; Q | 原E_h kWh；归一用电MJ |  |
| c_goods | failed_original | 每个原始包装i最新S_i+F_i+T_i+O_i=1。此精确同质配置F_count=sum_i(F_i)；failed_original=F_count/Q Item(s)。仅一次要求F_i*V_i制造/原包装；另按b_transport要求original_inbound_i*F_i。每次决定/版本改变替换先前F_i*V_i。S_count/Q仅用于下游GOODS耦合，绝非核心服务输入。 | original_ID; original_quantity; configuration; packing_BOM; vector_ID; dispatch_gate; vector_version; S_i; F_i; T_i; O_i; recipient; responsibility_signature; prior_FV; new_FV; inbound_source_ID; Q | 失败制造责任件数及独立入场运输要求 |  |
| c_satellites | supplier_handover; failed_retention | supplier_handover=实际供应商包装毛发运数/Q；failed_retention=gross_invalid_retained/Q，其中gross_invalid_retained仅计外部保管区间在截止仍开放、最新验收无效且有据完整外部留存的实际交接event_ID；先前已退回的保管区间已关闭并排除。关联实际日期及状态替换；这些卫星量不得用作F_i或T_i，且排除c_merge。 | original_ID; gross_supplier_dispatch; gross_customer_pickups; gross_invalid_retained; custody_interval_ID; custody_open_date; custody_close_date; cutoff; event_ID; final_valid_acceptance; intact_external_retention; recipient; physical_date; current_state; Q | 两个独立有类型的实物保管输出 |  |
| c_transport | service_output; failed_original | cp_transport是零售service_output视图，cp_transport_failure是failure过程failed_original视图，两者使用相同原ledger_ID/record_ID/source_ID、分母及版本。各来源只测一次；选择视图不得产生另一观察或归一化。逐模式和行程保留互斥原供应方活动：A_loaded=loaded_vehiclekm、A_empty=empty_vehiclekm、A_idle=stationary_idle_vehicleh。取得载货/空驶里程表/GPS边界及静止动力开启状态起止时间；观察到正模式必须有正实测活动及匹配完整供应方。载货k在实测重量约束下d_loaded_h=consignment_kg_h*loaded_km，在实测容积约束下d_loaded_h=occupied_m3_h*loaded_km。空驶k用d_empty_h=reserved_capacity_h*empty_km；静止闲置用d_idle_h=reserved_capacity_h*idle_h，即使距离0也用实际正idle_h。冻结实际全受益方预留容量，按该行程同一有据kg或m3基准；包含空闲/失败预留，要求正且已知sum_all_h(d_mode_h)，不得用未来销量替代。N_mode_h=A_mode*d_mode_h/sum_all_h(d_mode_h)。入场再一次从运单分到原始F；零售退回/搬运沿原受影响池；资产运载沿a_assets。记录归属层级raw_trip、consignment或final_owner，仅跳过已应用且精确匹配层级。正活动而驱动总量为零/未知阻止完整性。 | cp_transport; cp_transport_failure; ledger_ID; record_ID; trip_ID; mode_ID; segment_start; segment_end; odometer_start_km; odometer_end_km; GPS_segment; loaded_vehiclekm; empty_vehiclekm; powered_idle_start; powered_idle_end; stationary_idle_vehicleh; source_ID; original_unit; provider_mode_scope; energy_exhaust_coverage; capacity_evidence; consignment_ID; consignment_kg_h; occupied_m3_h; reserved_capacity_h; capacity_unit; reservation_interval; all_beneficiary_reservation_map; d_loaded_h; d_empty_h; d_idle_h; sum_all_mode_driver; F_i; asset_ID; owner; original_pool; attribution_level; version | 原载货/空驶vehiclekm及闲置vehicleh分子，分别归属 | ghg2011 |
| c_assets | service_output | 使用a_assets中的原e_recorded_h、L_v、全部历史暴露记录和精确V_v对象/阶段。最终报废时E_actual=sum_all_h(e_actual_h)，f_final_h=e_actual_h/E_actual。替换全部历史原fV记录并记录delta；仅在V不含时补实际维修/末端载体/运载。完整包已含更换制造时不得再另加。 | asset_ID; model_BOM; scope_stages; vector_ID; vector_version; original_pool; e_recorded_h; exposure_unit; L_v; expected_basis; e_actual_h; all_historical_records; f_old; f_new; V_old; V_new; repair_event_ID; terminal_carrier_ID; freight_source_ID; attribution_level | 有版本的原历史资产分子 | ghg2011 |
| c_digital | service_output | 网络：N_network_h=source_h*reserved_endpoint_seconds_h/all_endpoint_seconds，其中all_endpoint_seconds为该唯一来源区间全部受益方实测预留端点连接秒数之和，包含空闲/失败预留。支付/行政：N_event_h=event_source*line_processing_seconds_h/all_event_line_seconds，其中all_event_line_seconds为该唯一尝试/批次内实际来源行处理秒数之和，含失败尝试及每一受益方。正来源的两个分母均须正且已知；全程使用精确all_*字段名。逐原相机capture_ID i，以实际互斥受益方足迹及记录覆盖计算a_i_h=footprint_m2_i_h*coverage_seconds_i_h，包含全部空闲/失败预留。all_capture_area_seconds_i=sum_all_h(a_i_h)须正且已知；以capture_map_version_i及全部原受益方ID冻结f_i_h=a_i_h/all_capture_area_seconds_i，不得按后续销量重映射。采集生产为独立原来源：以经核实逐原capture的capture_production_source_ID_i、capture_source_vector_i、capture_original_denominator_i及capture_source_version_i，按capture_source_unit_i计算N_capture_i_h=actual_source_i*f_i_h。actual_source_i为原采集生产原量；若供应方提供归一量，先以精确原单位/向量及证据恢复actual_source_i=capture_z_i*capture_original_denominator_i，否则直接保留实测原量。绝不得按未来留存字节或时长分配采集生产。跨capture不可分的生产总量须保持不完整，直至各原capture来源量可核验；不得另选驱动。逐capture i的实际固定字节留存区间，retained_byte_seconds_i=retained_bytes_i*retention_seconds_i；字节库存变化须先拆实际带时间戳区间。storage_byte_seconds_i_h=retained_byte_seconds_i*f_i_h。storage_provider_total_p仅表示实际存储供应方活动，绝非采集生产活动。每一原storage_source_packet_ID p精确选择一个存储供应方归属模式：仅当供应方包精确覆盖该capture/留存区间时用direct_capture；覆盖多个实际capture时用aggregate_captures。direct_capture模式下原存储量为storage_byte_seconds_i_h，以有据原单位表达的原供应方来源storage_provider_total_p一次分为storage_provider_total_p*f_i_h。aggregate_captures模式下，先从相同原留存记录取得各实际成员capture字节秒量b_p_i，将all_packet_byte_seconds_p=sum_all_i(b_p_i)>0与精确包成员及时间范围对账，再将原包来源分为N_packet_h=storage_provider_total_p*sum_all_i((b_p_i/all_packet_byte_seconds_p)*f_i_h)。各原capture映射仅在包到capture份额后应用一次，不得替换为汇总当前销量映射。全部实际包成员和capture受益方均须纳入；成员、字节、时长、冻结映射未知，或正来源分母为零/未知，均阻止完整性，不得把已知份额重新归一化。标记exact final_owner的供应方量，仅在匹配原责任方/核算池/版本证据下，可跳过对应已完成的包/capture/受益方归属层级；仅运单/capture层归属不得跳过缺失受益方映射。保留raw_or_normalized、storage_provider_total_p原分母storage_original_denominator_p、原单位、组成范围及来源版本，进入c_merge前先把归一来源恢复原量。同一来源事件的direct和aggregate模式互斥。字节秒是实物分配驱动，不是归属供应方来源之外另加的第二个交换；最终原子供应方活动及其原单位决定唯一保留的交换表达。排除已计的现场用电、资产及网络组成。 | storage_source_packet_ID; storage_packet_mode; raw_or_normalized; storage_provider_total_p; storage_original_denominator_p; original_unit; source_h; interval_ID; reserved_endpoint_seconds_h; all_endpoint_seconds; network_all_beneficiary_IDs; unique_attempt_ID; event_source; line_processing_seconds_h; all_event_line_seconds; event_all_beneficiary_IDs; capture_ID; footprint_m2_i_h; coverage_seconds_i_h; all_capture_beneficiary_IDs; a_i_h; all_capture_area_seconds_i; f_i_h; capture_map_version_i; retention_interval_ID; retention_start; retention_end; retained_bytes_i; retention_seconds_i; retained_byte_seconds_i; storage_byte_seconds_i_h; packet_capture_membership; packet_time_scope; b_p_i; all_packet_byte_seconds_p; N_packet_h; GB_GiB_mode; constituent_scope; attribution_level; final_owner; original_pool; source_version; version; capture_production_source_ID_i; actual_source_i; capture_z_i; capture_raw_or_normalized_i; capture_source_unit_i; capture_source_vector_i; capture_original_denominator_i; capture_source_version_i | N_capture_i_h; N_network_h; N_event_h; storage_byte_seconds_i_h; N_packet_h：原采集生产/网络/事件来源及相机字节秒量，具有精确原包到capture到受益方归属 | ghg2011 |
| c_clean | service_output | 逐原始制剂来源s在收货实测m0_s净制剂kg，不含独立容器。全历史原来源实物守恒为m0_s=cumulative_final_external_source_kg+current_factorysealed_unused_source_kg+current_opened_unused_source_kg+current_mixed_solution_source_kg+current_surface_film_source_kg+current_tool_bound_source_kg+current_held_waste_source_kg+confirmed_missing_source_kg+signed_residual_source_kg。最终外部输出为互斥的实际外排/外运/其他已审终态路径，逐项带原来源份量；各当前状态均有具体位置/载体及不含新增水/污物的来源kg。已用表面份量随后被冲洗时，从薄膜变溶液或外送载体：替换原状态，绝不两者相加。实际存在的未列当前状态/路径须于完整性前明确命名并量化。分配独立：m0_s=sum_all_h(G_use_sh+G_preF_sh)+unused_transfer_source_kg+current_unassigned_source_kg+signed_unassigned_residual_kg，使用互斥累计首次领用和使用前损失。每一原source_portion_ID仅一次进入G；同份量再施用、回收或冲洗绝不产生另一首次使用需求。G_sh=G_use_sh+G_preF_sh；原N_mfg_sh=(G_sh/m0_s)*V_mfg_s及N_in_sh=(G_sh/m0_s)*V_in_s。V_mfg_s仅为原m0_s制剂发运门制造向量；V_in_s仅为实际入场运单中有据制剂来源份额。完整容器/耗材向量及其入场份额按有据原来源和约束运能分配独立，不得按制剂质量拆环境向量或重复整运单。阶段/来源分离未知阻止完整性。保留每一历史原责任方/核算池/版本；G、m0或向量任一修订均以delta_h=(G_new_h/m0_new)*V_new-(G_old_h/m0_old)*V_old替换全部历史记录，制造及入场分别执行。完整一次性容器制造/入场按实际同质完整容器件数一次归首次开封责任方或互斥开封前损失，包含瓶体/封口/内衬/标签/胶黏剂，绝不使用G/m0。一次性耗材件数同样沿实际首次耗用；未用件保留来源。本清洁路线仅接纳一次性容器；实际补充/复用或容器寿命未知时，完整状态须等具体已审复用容器扩展，不得任意选质量拆分。复用抹布/拖把的cleaned m2为全部受益方每一实际唯一清洁遍次事件的实测面积，含失败/零销售池，不是未来销量或采购件数。其向量改用f_h=cleaned_m2_recorded_h/L_cleaned_m2_expected；报废时f_final_h=cleaned_m2_actual_h/sum_all_h(cleaned_m2_actual_h)，按a_assets替换每一历史fV，维修/报废/运载一次。采购和报废件数仅对账该工具台账，不是另一个当期整件输入。实际工具洗涤水/制剂/处理事件为独立来源并去重。实际废物外运kg=实称毛重-皮重；直接whole_effluent_kg=discharged_m3*same_state_density_kg_m3。载体整kg和其中原来源kg独立；不得对实测外运重复来源份额或库存扣减。 | original_source_ID; source_portion_ID; original_first_use_event_ID; m0_s; container_ID; container_reuse_absence; formulation_net_kg; cumulative_final_external_source_kg; current_factorysealed_unused_source_kg; current_opened_unused_source_kg; current_mixed_solution_source_kg; current_surface_film_source_kg; current_tool_bound_source_kg; current_held_waste_source_kg; source_state_location; source_state_carrier; state_transition_ID; confirmed_missing_source_kg; signed_residual_source_kg; G_use_sh; G_preF_sh; G_sh; unused_transfer_source_kg; current_unassigned_source_kg; signed_unassigned_residual_kg; source_state_version; original_owner; original_pool; V_mfg_s; V_in_s; source_vector_version; G_old_h; G_new_h; m0_old; m0_new; V_old; V_new; container_count; complete_container_BOM; first_open_event; consumable_count; first_consumption_event; container_inbound_share; consumable_inbound_share; tool_ID; tool_model_BOM; cleaning_pass_event_ID; cleaned_area_m2; beneficiary_ID; cleaned_m2_recorded_h; L_cleaned_m2_expected; lifetime_evidence; cleaned_m2_actual_h; all_historical_tool_exposures; f_old; f_new; acquisition_count; retirement_count; repair_event_ID; terminal_carrier_ID; freight_source_ID; gross_kg; tare_kg; discharged_m3; same_state_density_kg_m3; source_origin_kg; added_water_kg; dirt_kg; receiver_acceptance; treatment_scope; attribution_level | 原制剂G/m0分子、独立完整容器/耗材及寿命清洁工具向量，含完整来源状态历史 | ghg2011 |
| c_merge | service_output; failed_original | cp_merge为零售service_output视图，cp_merge_failure为failure过程failed_original视图，使用相同原ledger_ID/record_ID/source_ID及来源分母/版本；合并必须先对这些视图去重再一次归一化。生产者以有据原分母/池/版本将各归一外模块z_jr恢复原分子N_jr=z_jr*D_j；原量模块直接保留N_jr。只应用缺失的来源→运单→原责任份额。核心原分子为3.6*E_h MJ、F_count Item(s)和Q服务Item(s)，绝不是已归一化卡值。对相同交换UUID/属性/单位/状态/介质且生命周期边界相容的r，在按精确来源/事件/对象/时间/阶段去重后N_r=N_core_r+sum_j N_jr。排除保管卫星、S商品制造/入场及已计的供应方包内公用工程/维修/末端载体。然后normalized_r=N_r/Q仅一次。不得相加kg和MJ、活动件数和资产质量，或归一值和原量。缺D、范围、原子扩展或供应方绑定阻止完整性。 | cp_merge; cp_merge_failure; ledger_ID; record_ID; E_h; F_count; N_core_r; module_ID; raw_or_normalized; z_jr; D_j; N_jr; source_ID; event_ID; object_ID; time_interval; lifecycle_stage; exchange_UUID; property_UUID; unit; state; medium; original_owner_fraction; original_pool; version; Q | 补全后相容逐交换服务清单；全部gate满足前保持部分 | ghg2011 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_route | retail; failure; custody | 核实实际混合实体零售、精确350DD版本、无支架、完整原包装、未开封、现场商品无组装/通电/耗材、全期间b_facility_gate不存在证据及实际收货/自提。厂商标称数据仅是身份依据；包装或润滑不确定不是零。 | cp_goods；场址负责人签字路线、原装箱清单、版本/铭牌及封装证据 |
| q_identity | all inventory rows | 各当前未绑定行只能在官方产品流UUID直读、正式中英文名、公开状态、精确包装/服务交接门及参考属性/单位链相符后绑定；目录型号或数量属性不能绑定实际包装/服务。电力UUID仅是历史身份，不提供电网组合/电压/供应方影响数据。 | 官方直读响应及哈希凭证；逐行绑定/数量/供应方条件 |
| q_balance | retail; failure; custody | 独立对账商品件数、留置废物kg、最终有效Q及整来源S/F/T/O。确认遗失与签字未解残差分开；不得删除零输出/失败批次。状态、接收方或驱动总数未知阻止补全。 | cp_goods；cp_failure；cp_custody；c_pool；c_stock；c_goods |
| q_measurement | all inventory rows | 保留原值、物理单位、时间戳/时区、校准仪器ID/精度及记录责任人；量化不确定度与覆盖。缺值和负残差须调查且保留未解，禁止截零或虚构信用。本候选无实证范围支持；未来范围主张须有相容独立证据。 | 全部采集协议；表计/砝码证书；完整区间审计及不确定度登记 |
| q_completion | retail; failed_original | 全部实际运输、资本/维修/报废、数字/安防/行政及设施清洁来源被纳入或签字不存在，且全部所需原子行、过程协议和供应方双语一致前，保持部分状态。不得暗示完整标准符合性或方法批准。 | cp_merge；b_partial至b_clean；来源/事件重叠登记及生产者最终签字 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `v_gate` | retail; failure; custody | 不满足b_scope/b_exclusions、供应商包装证据不全、厂商规格冲突而无实际版本证据，或商品开封/通电/已组装时拒绝适用。不得仅凭产品标题改变分类。 | un62187; un444; kushlan350; kushlanmanual |
| `v_ledgers` | service_output; failed_original; supplier_handover; failed_retention | 独立要求最新不同验收ID、毛实物事件和有类型库存方程，且逐原来源守恒S/F/T/O。即使无实物退回，最终验收撤销也减少Q。有效验收下财务调整不减少Q。退货再售沿用一个原ID；Q=0不得提供归一化值。 |  |
| `v_units` | all inventory rows | 服务及包装件数保持Item(s)，电力保持MJ。精确参考量和service_output=1必须一致。不得用目录机械质量，也不得用铭牌kW×营业小时替代表计。supplier_handover和failed_retention是审计卫星，不加第二次上游供应方/信用。 |  |
| `v_sources` | all inventory rows | 服务/包装身份未绑定、缺原供应方向量、遗漏入场F、实物状态无支持、强制模块未知或缺模块原分母时，必须明确部分/无法判定。绑定前重查所需UUID及原来源证据；标称性能或来源片段不能证明现场量。 |  |
| `v_versions` | retail; failure; custody | 要求资产寿命变化替换全受益方历史、迟到验收修正回原池、供应方组成范围唯一及最终Q一次。审计完整分子/来源重叠，保留未结/遗失/失败批次。有限单位检查通过不取消这些数据和审查义务。 | ghg2011 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 部分增量前景服务核心；仅指定证据/模块gate全部满足后完整 |
| downstream_use | secondary_dataset; background_dataset仅在明确部分/完整覆盖及供应方核实后使用 |
| allowed_use | 精确声明场址/配置原包自提服务；补全服务排除成功S商品制造/入场 |
| excluded_use | 无条件完整零售足迹；搅拌机LCA；混凝土生产；使用阶段或安全批准；组装/出租/配送；保管卫星作环境供应方 |
| required_metadata | 必需限定信息；实际直接来源/供应方；Q历史；实物台账及来源S/F/T/O；原模块分母、责任方和版本；有/无登记 |
| required_quality_disclosure | 部分模块及未绑定行；无实证量值范围；历史身份观察；实际装箱/铭牌冲突；不确定度及全部未解残差 |
| update_trigger | 配置、路线、包装状态、验收、原责任、供应商范围、寿命、供应方或校准任一变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un62187 | official_guidance | UN CPC3.0 subclass62187, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62187; retrieved2026-10-30 | 准确说明仅444商品；范围限制 |
| un444 | official_guidance | UN CPC3.0 groups444 and subclass44440, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/44440; retrieved2026-10-30 | 建筑/矿物/水泥搅拌机械适用性；不是通用手工具 |
| kushlan350 | handbook | Kushlan350DD official product specification, https://kushlanproducts.com/product/350dd/; retrieved2026-10-30 | 真实混凝土/砂浆搅拌机身份及完整对象；标称规格矛盾须核实实际版本，不提供LCI或默认量 |
| kushlanmanual | handbook | Kushlan350DD/600DD Operating Instructions and Parts Manual, PDF pages12–13 and18–19, https://images.thdstatic.com/catalog/pdfImages/1f/1f88f2fb-188e-4b1f-ada2-3bb5f9305824.pdf; retrieved2026-10-30 | 完整组装/零件及与门店未开封交接的区别；排除可选支架；不证明实际装箱和工厂润滑 |
| hd350 | handbook | The Home Depot350DD Internet203195233 StoreSKU1000019926, https://www.homedepot.com/p/203195233; retrieved2026-10-30 | 混合零售商的实际型号商品页；不主张本地库存、包装BOM或场址路线 |
| ghg2011 | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011, chapter6 PDFpages30,33 and chapter9 PDFpage65, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf; original reused and checked2026-10-30 | 一般服务功能参考及细分/物理分配一致性；固定1、具体驱动及部分补齐是声明PCR设计，不代表整标准符合性 |
