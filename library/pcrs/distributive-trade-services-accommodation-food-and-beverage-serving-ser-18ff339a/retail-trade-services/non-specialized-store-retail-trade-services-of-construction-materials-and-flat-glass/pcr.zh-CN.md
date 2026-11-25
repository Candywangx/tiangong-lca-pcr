---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-construction-materials-and-flat-glass
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 非专门店原尺寸透明退火浮法平板玻璃到店自提零售服务

## 1. 范围与适用性

适用于实际混合商品门店前瞻定义的手工货架及到店自提路线。本部分增量核心提供完整玻璃保管、破损责任、归属电、新增牛皮纸隔纸及货架生命周期方法；以下规定强制支持补全。供应商规格仅证明产品可行性，不提供LCI量值或安全使用批准。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-construction-materials-and-flat-glass |
| classification_refs | CPC 3.0 62161; narrower |
| covered_products | 同SKU原尺寸透明无镀层退火单片浮法玻璃零售服务 |
| excluded_products | 其他建材；加工玻璃；零售商切裁/配送/安装 |
| representative_product | 实际有单证供应商库存原板；长宽厚/净kg实测，不设名义质量 |
| production_route | 收货；手工干态架存；完好自提；最终验收及去向核对 |
| market_state | 固态玻璃板，常温干态，声明边缘/包装规格 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 增量零售保管及完好到店自提 |
| How much | 1 kg |
| How well | 准确同质SKU，依声明边缘/表面/尺寸规格最终有效验收 |
| How long or cycle | 声明收货至最终验收队列含迟发更正 |
| reference_flow_link | glass_service |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 到店自提原尺寸透明退火浮法玻璃零售服务 |
| Reference flow property | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | SKU; 制造商/批次; 成分; 实际长宽厚/净kg; 表面/边缘验收; 包装; 门店混合商品组合; 手工路线; 队列及修订; 供应地域/年份; 部分模块及补全 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| net_glass | glass_service; failed_original_glass; glass_cullet; supplier_glass_transfer; external_damaged_glass | 质量 | kg | 玻璃实际净重排除隔纸、架及箱。名义厚度/面积不等于实测质量。每参考流即每1kg服务输出。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 实物接收供应商玻璃，保留原背景来源 |
| starting_condition_role | retail_service |
| product_classification_scope | CPC 3.0 62161 narrower |
| recursive_input_rule | 不得递归投入同一参考零售服务，不得把玻璃商品误认成该参考服务。failed_original_glass的B_F/Q产品投入仍为必需，承载原生产及入库运输。 |
| upstream_dataset_requirement | 原生产/入库向量分S/F/T/O；F显式投入 |
| disclosure | 部分核心与强制支持补全；全部未解决身份 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | glass_service | 每池只纳入一个实际同质SKU：透明无镀层单片退火浮法玻璃，供应商预裁矩形原尺寸库存板，自收货至销售不改变尺寸。记录制造商/批次、成分声明、实测净kg及长宽厚、边缘、包装和验收规格。不同厚度、尺寸或处理方式分池。非专门店须以实际混合商品组合证明，与品牌许可无关。其他建材、镜子、玻纤、镀层/钢化/夹层/中空玻璃、切裁、磨边、安装及零售商配送不属本路线。 | un-cpc30-62161; guardian-clear-2021; guardian-types-2019 |
| service_gate | glass_service | 始于零售商实际收货门，止于顾客自提并最终有效验收完好指定板材。本规则为每1kg最终验收玻璃的增量零售服务，并非玻璃生产。顾客负责使用/安装及交付后运输。记录缺陷、自提失败及无实物退回的验收撤销；单纯折扣/退款不撤销验收。同一原板重复交付不得产生重复最终有效服务。 | jrc-retail-2013 |
| goods_responsibility | failed_original_glass | 逐原始来源批次将收货门等价玻璃kg划分B = B_S+B_F+B_T+B_O，保留唯一来源ID。S为最终验收，商品生产及入库运输由下游按B_S/Q补入；F为不可恢复失败/遗失且无具名继续责任方，按failed_original_glass的B_F/Q纳入原始生产及入库运输向量；T把同一原向量转给已签认的供应商/外部责任方或内部用途；O为未结库存。退款本身不转移责任。迟退修订原池并替换旧向量，转售不重新计生产。仅supplier_glass_transfer、external_damaged_glass及customer_kraft是不表征保管卫星流。glass_cullet及waste_kraft为仅处理废物输出，保留实际收集/运输/处理责任，不得按卫星流删除其处理。各输出不产生新的制造负荷或避免生产信用。 | jrc-retail-2013 |
| route_presence | all inventory rows | 须以现场观察及票据证明本手工货架/自提核心不存在零售商切裁、湿加工、现场燃烧、制冷或机动搬运。未知不为零；储存破损纳入，不能当切裁得率。实际新增材料/作业须先补双语状态特定原子卡和协议并同步，再称完整；机动搬运或切裁须独立审查路线。 | jrc-retail-2013 |
| package_boundary | glass_rack_package | 完整实际可重复玻璃A形架包包括架体、垫块、紧固件、初始涂层、制造/安装、有证据维护及终端处理，须有一个签认生命周期模型。排除运行电及商品/原运输包装。完整货架不能用钢kg替代。不能证明包覆盖时，须以互斥组件/事件模块替代，否则完整性阻断。采用本包不得另计货架购置或报废废物流。 | jrc-retail-2013 |
| support_completion | glass_service | 强制支持模块覆盖建筑/固定灯及标牌、收银/IT/网络及支付处理、安防、门店管理、清洁卫生、空调、原运输包装/木箱/周转架、零售商新增纸供应及所有实际资产/维修/废物/空架返回运输。以带日期现场核查、合同、表计、票据、设备台账和运单证明发生/不发生；缺证不为零。核心照明与货架包明确隔离；其余实际支持按support_drivers、support_transport、cp_modules及complete_modules纳入。商品入库货运已在原S/F/T/O向量，不是第二次支持运输。原供应包装生产及终端去向排除在原玻璃净物料向量外，纳入零售支持；若供应向量已含包装，须暴露并移除准确子向量一次，再单独建模块。逐原包装互斥采用完整供应包装包或分组件BOM模式；箱体/隔纸/垫块/捆带/木箱全部组成及处置/回退覆盖须匹配实际来源。门店架与运输周转架是不同资产。全部发生支持交换须先有模块特定原子卡/协议及双语投影，方可称完整零售服务；上述固定方法不把未采模块变完整。 | jrc-retail-2013 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | 玻璃零售保管及验收 | required | 仅许可手工干态路线 | foreground | glass_service |

### 过程：玻璃零售（`retail`）

#### 输入

##### 产品流

###### 零售商收货门透明无镀层退火浮法玻璃，失败原件责任（`failed_original_glass`）

本卡为具体物理交换，按所连协议计量；支持规则固定其分配与供应边界。

B_F/Q；仅原来源生产及入库运输，不是全部收货

- 选定流：零售商收货门透明无镀层退火浮法玻璃，失败原件责任
- 流属性/单位：质量 / kg
- 数量规则：B_F/Q；仅原来源生产及入库运输
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_glass
- 来源：jrc-retail-2013

###### 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`（`rack_electricity`）

本卡为具体物理交换，按所连协议计量；支持规则固定其分配与供应边界。

E_MJ/Q，采用energy_total

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：E_MJ/Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_energy
- 来源：jrc-retail-2013

###### 零售商新增无涂层牛皮纸隔纸（`kraft_interleaf`）

本卡为具体物理交换，按所连协议计量；支持规则固定其分配与供应边界。

P_used/Q，采用paper_balance；本行排除供应商原纸

- 选定流：零售商新增无涂层牛皮纸隔纸
- 流属性/单位：质量 / kg
- 数量规则：P_used/Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_paper
- 来源：jrc-retail-2013

###### 实际型号完整可重复玻璃A形架生命周期包（`glass_rack_package`）

本卡为具体物理交换，按所连协议计量；支持规则固定其分配与供应边界。

R/Q，采用asset_fraction；制造安装维护报废各纳入一次

- 选定流：实际型号完整可重复玻璃A形架生命周期包
- 流属性/单位：物品数量 / Item(s)
- 数量规则：R/Q
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_assets
- 来源：jrc-retail-2013

#### 输出

##### 产品流

###### 到店自提原尺寸透明退火浮法玻璃零售服务（`glass_service`）

本卡为具体物理交换，按所连协议计量；支持规则固定其分配与供应边界。

1 千克；服务止于最终有效验收，商品S向量由下游补入

- 选定流：到店自提原尺寸透明退火浮法玻璃零售服务
- 流属性/单位：质量 / kg
- 数量规则：1 千克
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_glass
- 来源：jrc-retail-2013

###### 实物退回供应商完好透明退火浮法玻璃原板（`supplier_glass_transfer`）

本卡为具体物理交换，按所连协议计量；支持规则固定其分配与供应边界。

supplier_handoffs/Q；不特征化保管卫星流，须T责任方签认

- 选定流：实物退回供应商完好透明退火浮法玻璃原板
- 流属性/单位：质量 / kg
- 数量规则：supplier_handoffs/Q；不特征化保管卫星流
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_glass
- 来源：jrc-retail-2013

###### 外部接收人实物留存破损透明退火浮法玻璃板（`external_damaged_glass`）

本卡为具体物理交换，按所连协议计量；支持规则固定其分配与供应边界。

damaged_external_handoff/Q；不特征化保管卫星流；须实际状态及继续责任方或F

- 选定流：外部接收人实物留存破损透明退火浮法玻璃板
- 流属性/单位：质量 / kg
- 数量规则：damaged_external_handoff/Q；不特征化保管卫星流；须实际状态及继续责任方或F
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_glass
- 来源：jrc-retail-2013

###### 随玻璃交付顾客无涂层牛皮纸隔纸（`customer_kraft`）

本卡为具体物理交换，按所连协议计量；支持规则固定其分配与供应边界。

P_customer/Q；保管卫星流，顾客负责终端处理，纸制造已在投入纳入

- 选定流：随玻璃交付顾客无涂层牛皮纸隔纸
- 流属性/单位：质量 / kg
- 数量规则：P_customer/Q；保管卫星流
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_paper
- 来源：jrc-retail-2013

##### 废物流

###### 零售商外运透明无镀层退火浮法玻璃碎料（`glass_cullet`）

本卡为具体物理交换，按所连协议计量；支持规则固定其分配与供应边界。

dispatched_cullet/Q；实际外运净kg，不是判废kg；仅处理

- 选定流：零售商外运透明无镀层退火浮法玻璃碎料
- 流属性/单位：质量 / kg
- 数量规则：dispatched_cullet/Q；实际外运净kg
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_glass
- 来源：jrc-retail-2013

###### 单独外运无涂层牛皮纸隔纸废物（`waste_kraft`）

本卡为具体物理交换，按所连协议计量；支持规则固定其分配与供应边界。

P_waste/Q；运单实测净重，仅处理

- 选定流：单独外运无涂层牛皮纸隔纸废物
- 流属性/单位：质量 / kg
- 数量规则：P_waste/Q；运单实测净重
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：cp_paper
- 来源：jrc-retail-2013

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| direct_first | all inventory rows | 核心用电仅为玻璃区照明电路；收银/IT及其他支持电另属支持模块。每次灯开关或受益方预留变化均读取区间表计。将实测kWh分成互斥顾客活动、亮灯空闲、关闭/待机区间池k，各池之和等于电路总量。每池固定驱动量均为预留照明地面面积*时间d_g_k = sum_i(A_reserved_g_i*duration_i)，单位m2*h，依据标记货区/通道平面图及带日期预留记录采集全部商品受益方。采集前将共用通道面积划为不重叠预留区域；包括空置但已预留面积。空闲/关闭未用容量归给仍持有预留的受益方，含零销售/失败队列。未分配共用面积或无责任空闲不得为零：须有前瞻全受益方预留计划，否则阻断分配。E_g = sum_k(E_k*d_g_k/sum_b d_b_k)。仅有排他预留证据时玻璃专属电路份额才为一。各受益方之和须与实测总量核对；不得混驱动量纲或对供应方已归属量二次分配。 | jrc-retail-2013 |
| prospective_pool | glass_service | 前瞻声明同SKU/场址/路线的队列窗口，保留全部失败及零销售子期。Q为修订后不同原板最终有效验收净kg，不是销售收入或重复交付。全池Q为零不可归一化，按预定后续计划显式保留，不混配置隐藏。迟发事件重开原版本，按实际事件日替换全部受影响分子/分母。 | jrc-retail-2013 |
| support_drivers | glass_service | 逐实际支持来源优先用实测专属记录，再按互斥事件及表计边界分活动/空闲/固定分子池。逐池用以下固定同单位驱动量计算x_g_pool = x_pool*d_g_pool/sum_b d_b_pool，核对sum_g x_g_pool=x_pool并保留全部空闲/失败受益方。收银/支付活动源按各受益方实测处理秒分配，包括全部失败/撤销尝试；终端/网络/安防设备预留空闲电按全部受益方预留设备容量*h，含闭店。供应方已归属交易处理量按原量及交易/事件覆盖保留，不再按秒分配。网络活动源仅在供应源随字节变动时用实际传输字节；其空闲/固定源用预留带宽*h，不把字节加小时。门店安防及管理共用固定源按全部商品受益方实测预留门店地面m2*h；可直接计时管理任务另在独立实测来源池按任务秒。清洁耗材/水/废液来源逐事件按实测清洁地面m2，配方来源kg与新增水/污物分开；实际湿废液外排采用实测净载体kg或排口实测V_discharge*rho，不从供水平衡扣减。空调运行源依同热区/设定的计量处理区容量*m2*h预留分配；存在制冷剂/燃烧时须先补具体物种/燃料/泄漏/含液转移卡，不按通用零处理。建筑/灯、收银/网络/安防/空调资本采用asset_fraction历史替换及最终残余公式，分别保留实际型号与暴露单位：建筑/照明/区设备用m2*h，IT/安防用预留设备容量*h，不混量纲池。原可周转运输架逐资产用实际预留载重容量kg*h，含空架返回/闲置预留及同寿命公式。一次原包装按实际完整包或互斥完整BOM向量计一次，先归实际收货来源，再以S/F/T/O去向和签认责任分配；含留存/退回/顾客/废物，不收货即默认处置。零售商新增纸制造/供应仍属核心首次发用P_used；支持运输仅加已证明漏含的运输阶段。 | jrc-retail-2013 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_glass | retail | glass_service; failed_original_glass; glass_cullet; supplier_glass_transfer; external_damaged_glass | foreground_record | pool_id; original_id; supplier_lot; composition; dimensions; thickness; net_kg; packaging_tare; scale_id; acceptance; final_acceptance; event_date; receipts; customer_returns; gross_customer_handovers; supplier_handoffs; external_handoffs; damaged_external_handoff; condemned; dispatched_cullet; Goods_open; W_open; B_S; B_F; B_T; B_O; recipient; state; original_vector; inbound_transport; Goods_close; W_close; confirmed_missing_goods; confirmed_missing_waste; unresolved_goods_delta; unresolved_waste_delta; stocktake; investigation_signoff | 收货即标记每原板/碎片血缘；用校准秤称玻璃净重，扣实测包装/架皮重；不能安全逐板称重时保留成对批次称重证据。分别记录各保管移动与验收。实际废物外运用运单净重，库存平衡只作核对。外部破损交付与门店废物分开。不得名义面积*密度换算；kg未知阻断服务分母。将供应商原生产/入库向量对应至S/F/T/O收货门等价量。 期初/末分别盘点可用及待废玻璃；仅经签认血缘调查确认缺失量，按glass_stock保留未知带符号残差并阻断完整性。 | kg | 逐事件；表计于区间边界 | 完整前瞻池含关闭时段及迟发更正 | 具名门店玻璃区及全部实际受益方 | 每参考流 | 带日期原始记录；校准仪器；校准不确定度及采集人签认核对 |
| cp_energy | retail | rack_electricity | foreground_record | meter_id; interval_start; interval_end; interval_state; E_k; A_reserved_g_i; duration_i; d_g_k; d_b_k; reservation_owner; floor_plan; all_beneficiaries; parent_boundary; voltage; supplier_year; geography; delivery_loss_boundary | 在每次状态/预留转换时读取经校准的实际玻璃区照明电路表。拍摄标记地面/通道并测量m2；记录受益方预留及起止小时，即使空置或闭店。每个区间E_k只归活动/亮灯空闲/关闭待机其中一个状态。按direct_first在各实测池采用相同m2*h预留驱动量。总量与电路及账单边界核对，全部闲置预留明确责任，含零销售队列。本行排除收银/支付/网络/安防/管理及共用建筑电，按cp_modules另采；不使用铭牌或假定关闭耗电。范围未知或预留未分配即阻断。 | kWh | 逐事件；表计于区间边界 | 完整前瞻池含关闭时段及迟发更正 | 具名门店玻璃区及全部实际受益方 | 每参考流 | 带日期原始记录；校准仪器；校准不确定度及采集人签认核对 |
| cp_paper | retail | kraft_interleaf; waste_kraft; customer_kraft | foreground_record | source_id; paper_grade; coating; net_kg; moisture_state; P_open; P_received; P_close; P_customer; P_waste; held_used_stock; dispatch_id; P_unused_transfer; P_first; U_open; U_received; U_close; U_transfer; confirmed_missing_paper; unresolved_paper_delta; first_issue_owner; first_charge_receipt; supply_transport_scope | 仅零售商新增实际无涂层牛皮纸隔纸，不含供应商原隔纸。按实际含水状态称净重，排除纸芯/外包。分别跟踪未用、复用、顾客带走及废弃；污染/混合废物须具体替代卡和供应方方可称完整。 每次盘点严格分从未发用P库存与已用U库存。首次发用关联原制造/供应运输计负荷凭据及继续责任方；跨期复用不重计。按paper_balance记录未用/已用转移及实际最终去向，未知残差阻断。 | kg | 逐事件；表计于区间边界 | 完整前瞻池含关闭时段及迟发更正 | 具名门店玻璃区及全部实际受益方 | 每参考流 | 带日期原始记录；校准仪器；校准不确定度及采集人签认核对 |
| cp_assets | retail | glass_rack_package | foreground_record | asset_id; model; BOM; provider_vector_version; lifecycle_scope; original_vector; occupied_kg_a_g_i; reserved_unused_kg_a_g_i; duration_h_i; e_a_g; L_a_v; H_a; f_a_g_old; f_a_g_final; V_a_old; V_a_new; repair_event; replacement_event; retirement_dispatch; all_beneficiaries; previous_allocations; usable_rated_capacity_kg; reservation_owner | 核验实际架型号/BOM、额定可用容量及签认完整包向量，含制造/安装、实际维护及终端处理和各自运输边界。每次占用/预留变化记录全部受益方时间、占用kg及互斥未用预留kg；全部可用容量包括闲置/关闭预留均有归属。以带日期使用历史及有单证退休计划支持预计终生暴露，不假定日历寿命。维修/报废保留旧版、实际事件票据/载体记录及替代向量范围图；删除已被替代模型事件，更新V，再对全部历史受益方执行asset_fraction。购置、维修、运输或报废不得包内包外重复。每卡一型号/相同向量组；否则先加独立双语卡并同步再称完整。 | Item(s); kg*h | 逐事件；表计于区间边界 | 完整前瞻池含关闭时段及迟发更正 | 具名门店玻璃区及全部实际受益方 | 每参考流 | 带日期原始记录；校准仪器；校准不确定度及采集人签认核对 |
| cp_modules | retail | glass_service | foreground_record | module_id; module_version; normalized_j_m; original_denominator_m; source_id; core_numerator_j; B_F; B_S; original_goods_vector_S_j; Q; actual_source_event_asset; lifecycle_scope; coverage_overlap_map; active_source; idle_source; fixed_source; processing_seconds; task_seconds; transferred_bytes; reserved_bandwidth; reserved_device_capacity; floor_area_m2; conditioned_zone_capacity; reservation_duration_h; all_beneficiaries; cleaned_area_m2; cleaner_origin_kg; externally_supplied_water; V_discharge; discharge_density; actual_wet_effluent_kg; utility_meter; fuel_species; refrigerant_species; leak_record; contained_transfer; waste_consignment; packaging_mode; complete_pack_BOM; original_pack_id; S_F_T_O_owner; first_charge_receipt; stillage_asset; stillage_reserved_capacity_kg; stillage_empty_return; trip_id; segment_id; provider_mode; provider_scope; measured_load_tonnes; actual_km; reserved_payload_capacity; duration_h; empty_vehicle_km; stationary_idle_h; measured_fuel; measured_energy; source_stage_overlap; x_pool; d_g_pool; d_b_pool; asset_id; model; exposure_unit; e_a_g; L_a_v; H_a; f_a_g_old; f_a_g_final; V_a_old; V_a_new; repair_event; retirement_dispatch; previous_allocations; absence_evidence; x_transport_a_v; f_a_g_v; e_a_g_actual; x_transport_a_old; x_transport_a_new; f_a_g_new; original_pool_id; original_pool_version; Q_g; prior_transport_attribution; first_issue_owner; P_first loaded_attribution_mode；target_gross_kg；whole_vehicle_gross_kg；target_payload_kg；all_other_payload_kg；provider_reference_basis；source_attribution_level | 期初及每次配置变化签认现场核查，将合同/票据与实际建筑/照明/收银/IT/网络/支付/安防/管理/清洁/空调资产和服务核对；逐不存在项记录具体缺席证据，不仅凭无票据推断零。读取专属表计及带时间活动/空闲/固定事件。分别测地面/区预留m2与h、任务/交易秒、字节/带宽及设备容量预留，记录所有受益方及失败/零销售/关闭区间。采用固定support_drivers，不任意选驱动。逐原包装来源互斥核验实际完整BOM/型号或签认整包边界、数量、收货/来源/去向/首次计负荷记录及实际空架返回，不重计新增纸。按support_transport采包装/资产/维修/废物移动逐段里程/载荷/预留/怠速燃料证据并亲核供应覆盖。采废物实际净运单及处理边界和运输覆盖，仅扣已证重叠。即使供应ID不同也对比实际组成/阶段/时间/事件图。存在的未知燃料/制冷剂/废液或缺失具体支持交换，须先补双语原子卡/协议并正常同步，才能补全完整服务。 逐资产/维修漏含运输行程记录asset_id、原运输向量范围及此前归属，恢复历史资产暴露台账。先按support_transport形成资产原分子，再按asset_fraction归属一次；替换/差额回记原池/版本及修订Q_g。新增前核对V内运输和历史已归属量。纸供应关联首次发用责任方/P_first，包装运输关联original_pack_id/原来源责任；将收货库存与首次计负荷凭据核对，不重复供应负荷。 | source-specific | 逐事件；表计于区间边界 | 完整前瞻池含关闭时段及迟发更正 | 具名门店玻璃区及全部实际受益方 | 每参考流 | 带日期原始记录；校准仪器；校准不确定度及采集人签认核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_mass | glass_service | Q = 池中不同最终有效原板的实测净kg之和；验收撤销重分类原ID，不二次扣减。实物总交付/退回另列事件。 | original_id; net_kg; final_acceptance; event_date; pool_id | Q | jrc-retail-2013 |
| glass_stock | glass_cullet | Goods_close = Goods_open+receipts+customer_returns-gross_customer_handovers-supplier_handoffs-external_handoffs-condemned-confirmed_missing_goods+unresolved_goods_delta；W_close = W_open+condemned-dispatched_cullet-confirmed_missing_waste+unresolved_waste_delta。各项kg，移动ID互斥。确认缺失kg须有带日期盘点、原血缘及调查签认；无签认继续T责任方时归原来源F，但不得虚构为已外运废物。待废玻璃缺失保留已分配原F责任，不产生第二个原制造投入。未知带符号残差须披露调查并阻断完整性，不默认零，不自动归F。gross_customer_handovers包含全部顾客出口，含破损/未验收；external_handoffs仅非顾客非供应商出口。damaged_external_handoff仅标子集，不再次扣减。判废为商品转待废内部移动，外运只从待废扣一次。 | Goods_open; receipts; customer_returns; gross_customer_handovers; supplier_handoffs; external_handoffs; damaged_external_handoff; condemned; W_open; dispatched_cullet; confirmed_missing_goods; confirmed_missing_waste; unresolved_goods_delta; unresolved_waste_delta; stocktake; investigation_signoff; original_id | Goods_close; W_close; unresolved_goods_delta; unresolved_waste_delta | jrc-retail-2013 |
| energy_total | rack_electricity | 对direct_first固定的区间来源池，以实测kWh的E_k及实测预留照明m2*h的d_g_k计算E_g_k = E_k*d_g_k/sum_b d_b_k。E_MJ = 3.6*sum_k E_g_k。全部状态池及受益方须与表计kWh总量核对。只有实际父表包含时才扣嵌套子表，互斥表不扣减。最后只除Q一次。 | meter_id; interval_state; E_k; A_reserved_g_i; duration_i; d_g_k; d_b_k; parent_boundary; all_beneficiaries; Q | E_MJ/Q | jrc-retail-2013 |
| asset_fraction | glass_rack_package | 每卡保留一个实际货架a，或仅汇总型号/BOM、完整生命周期范围及供应向量版本均相同的货架；不等价型号或向量须分开原子卡。逐资产区间e_a_g = sum_i((occupied_kg_a_g_i+reserved_unused_kg_a_g_i)*duration_h_i)，已占用与未用预留互斥，全部额定可用容量分给实际受益方，即使空闲/关闭。L_a_v为同kg*h基准、有证据预计终生总暴露，须不小于已累计全受益方暴露；未知/零L阻断。f_a_g_v = e_a_g/L_a_v；R = sum_a f_a_g_v只限该相同组。退休时H_a = sum_g e_a_g_actual，f_a_g_final = e_a_g_actual/H_a；残余r_a = 1-sum_g f_a_g_old；delta_a_g = f_a_g_final-f_a_g_old，满足sum_g delta_a_g=r_a及sum_g f_a_g_final=1。逐历史受益方用新分子f_a_g_new*V_a_new替换旧记录，记录向量差f_new*V_new-f_old*V_old，不新增第二个完整资产。实际带日期维修/更换及终端外运更新完整包向量V_a_new，并替代同范围模型事件；重算全部历史，含已退役/零输出受益方。产生不同供应向量时仍须分卡。已含在V中的终端运输/载体及维护不得另列前景交换。 | asset_id; model; BOM; provider_vector_version; occupied_kg_a_g_i; reserved_unused_kg_a_g_i; duration_h_i; e_a_g; L_a_v; H_a; f_a_g_old; f_a_g_final; V_a_old; V_a_new; repair_event; retirement_dispatch; all_beneficiaries; previous_allocations | R; delta_a_g; revised_asset_numerators | jrc-retail-2013 |
| complete_modules | glass_service | 逐相同交换身份/属性/单位j，将支持模块恢复原分子u_j_m = normalized_j_m*original_denominator_m，再按support_drivers分配一次。完整零售服务分子T_j = core_numerator_j+sum_m u_j_m，含核心F/交流电/纸/架及互斥支持；complete_retail_j = T_j/Q。B_S在部分及完整零售服务中均排除。仅另行声明的下游商品系统采用goods_system_j = (T_j+original_goods_vector_S_j)/Q，其中original_goods_vector_S_j为按B_S加权的原收货门商品向量；商品入库货运已在该向量。不得把S加入零售或在下游再加两次。即使ID不同，也逐模块对比实际物理来源/事件/资产、过程区间、组成及生命周期阶段覆盖。已证明重叠子向量依据签认覆盖/数量图仅移除一次；不同ID不能证明互斥。未知不可分重叠阻断组装。保留原来源ID、原分母/池/版本；不加不同单位，不重复F。 support_transport下漏含资产/维修运输仅进入同一资产寿命台账已归属的历史池g，并使用该池修订Q_g；修订差额替换该原池版本，不转记当前池。已按寿命归属或已含V的运输不得再乘寿命份额或重复新增模块。 | normalized_j_m; original_denominator_m; source_id; core_numerator_j; B_F; B_S; original_goods_vector_S_j; allocation_driver; module_version; coverage_overlap_map; Q; original_pool_id; original_pool_version; Q_g; prior_transport_attribution | complete_retail_j; goods_system_j | jrc-retail-2013 |
| paper_balance | kraft_interleaf | P_open及P_close仅含从未发用的零售商新增纸原料库存。P_first = P_open+P_received-P_close-P_unused_transfer，P_unused_transfer为独立实测未用退回/转移量；制造及供应运输仅首次发用计一次：P_used = P_first。已用期初U_open不是P_open。U_close = U_open+P_first+U_received-P_customer-P_waste-U_transfer-confirmed_missing_paper+unresolved_paper_delta；各去向互斥，保管内复用为内部移动抵消。已用纸来源跨池保留签认首次发用制造责任方；后续复用只加实际新增搬运，不重计制造或避免生产信用。保管转移附来源/首次计负荷凭据；实际终端处理由外运池或签认顾客责任方负责。未用转移的原背景随继续责任方，不进入首次用纸投入。未知残差阻断完整。各对应最终行分子只除Q一次。 | P_open; P_received; P_close; P_unused_transfer; P_first; U_open; U_received; U_close; P_customer; P_waste; U_transfer; confirmed_missing_paper; unresolved_paper_delta; first_issue_owner; first_charge_receipt; source_id; Q | P_used/Q; P_customer/Q; P_waste/Q; U_close | jrc-retail-2013 |
| support_transport | glass_service | 逐实际行程/分段互斥选一种供应模式：(A)保留供应方已归属完整货件运输量，须证明覆盖实际载货、空返及静止怠速，不再乘另一分配份额；(B)按下述target_consignment或unassigned_vehicle互斥模式计载货活动；预留载重容量时间仅用于匹配且未归属的完整车辆来源向量。空车段用实际vehicle*km，静止发动机/设备怠速用实际h及实测燃料/电，各有匹配供应方并按该段同单位预留载重容量*时间分配，不以零tonne*km代空返证据。纳入空运输架返回预留。不同驱动单位或活动单位不相加。核对载货/空返/怠速供应边界互斥，否则准确移除重叠燃料/电/来源阶段一次；供应覆盖未知阻断完整。商品入库运输只随原商品向量；包装/资产/维修及废物运输在实际包/处理或显式漏含阶段模块中各计一次。实际来源归属后执行complete_modules。 对漏含资产/维修运输阶段，行程分配先将原运输来源分子归实际asset_id得到x_transport_a，再采用同一资产台账既有e_a_g/L_a_v或最终e_a_g_actual/H_a计算x_transport_a_g_v = x_transport_a_v*f_a_g_v。各已归属原分子回到其原受益池g，仅在complete_modules中除该池修订Q_g，不得把资产退休/维修行程全计当前Q。运输向量修订时逐原池以x_transport_a_new*f_a_g_new替换旧分子，将差额x_transport_a_new*f_a_g_new-x_transport_a_old*f_a_g_old回记该原池及版本，并修正历史分母。运输已含V_a时随V_a替换，不再作为漏含阶段新增。供应量已归历史受益方时保留该归属，不再次乘f。零售商新增纸漏含供应运输按paper_balance随首次发用制造责任方及P_first量；收货仅为库存证据，不产生第二次计负荷。原包装漏含运输随同一原包装/来源及其签认S/F/T/O或周转资产寿命责任，保留此前已归属阶段。不得收货池计一次、耗用池又计一次。 载货t*km互斥模式：target_consignment=实测target_gross_kg*segment_km/1000，不再乘任何共享份额；unassigned_vehicle=whole_vehicle_gross_kg*segment_km/1000*(target_payload_kg/whole_vehicle_gross_kg)，仅限质量基准兼容供应方、同段全部实际载重闭合且分母正已知。供应方已给精确目标数量则保持不变。预留载重容量时间仅分配尚未归属的完整车辆来源向量或独立空返/闲置来源，绝不分配已属目标的t*km。不同供应方活动/属性单位须实际独立原子卡，不能把vehicle-km向量改名目标t*km。记录loaded_attribution_mode和provider_reference_basis；载货归属模式必须与原始来源和供应方基准相符。 | trip_id; segment_id; provider_mode; provider_scope; measured_load_tonnes; actual_km; reserved_payload_capacity; duration_h; all_beneficiaries; empty_vehicle_km; stationary_idle_h; measured_fuel; measured_energy; source_stage_overlap; original_vector_scope; Q; asset_id; x_transport_a_v; f_a_g_v; e_a_g_actual; x_transport_a_old; x_transport_a_new; f_a_g_old; f_a_g_new; e_a_g; L_a_v; H_a; original_pool_id; original_pool_version; Q_g; prior_transport_attribution; first_issue_owner; P_first; original_pack_id; S_F_T_O_owner | attributed_transport_raw_sources | jrc-retail-2013 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_mass | glass_service | 不得以面积/名义厚度代质量；须校准净称重及同SKU连续性。 | 可追溯原始台账及签认边界核对 |
| quality_fates | glass_cullet | 废物处理供应方须接收实际透明玻璃碎料污染/状态；称外运净重并另跟踪容器，不推定回收信用。 | 可追溯原始台账及签认边界核对 |
| quality_module | glass_service | 在support_completion及complete_modules有证据之前核心须标部分，含原包装及固定灯资本。 | 可追溯原始台账及签认边界核对 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| complete_identity | all inventory rows | 每行须核验准确物理身份、属性/单位链、供应边界及原始数量证据后方可称完整。无UUID即身份缺口。电UUID只指定交流电：仍须采集电压、供应商/年份/地域及交付/线损边界。不默认环境因子、密度、寿命或损耗率。 | jrc-retail-2013 |
| reconcile | glass_service | 分别闭合玻璃商品及待处置废物平衡；核对责任划分、包装去向、全部供应边界、计量池及最终有效ID。外部留存破损须记录实际状态/接收人，不推定废物。确认来源不重复、面积不充当质量、无混入切裁路线，并在完整服务声明前完成complete_modules。未知阻断完整性。 | jrc-retail-2013 |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | partial_incremental_retail_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅匹配SKU及路线；补全后用于完整服务 |
| excluded_use | 切裁、制造、全叶等价、安全玻璃批准或未补全整店声明 |
| required_metadata | 全部参考限定、来源责任、支持边界及原分母/版本 |
| required_quality_disclosure | 校准/不确定度、缺失身份/供应方、零Q池及部分状态 |
| update_trigger | SKU/包装/路线/供应/寿命/验收变化或迟退 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc30-62161 | official_guidance | UNSD CPC Version 3.0 explanatory note https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62161 | 仅分类语境；较窄玻璃子集 |
| guardian-clear-2021 | handbook | Guardian Clear Float Glass, ©2021, https://www.guardianglass.com/content/dam/guardianindustriesholdings/collateral/apac/Clear%20Float_English%20version.pdf | 库存板与后续加工区别，不提供LCI数量或通用密度 |
| guardian-types-2019 | handbook | Guardian Residential Glass Technical Reference Guide, PDF page7 / printed5, https://www.guardianglass.com/content/dam/guardianindustriesholdings/collateral/usca/technical_climaguard_us_technical-reference-guide_0619.pdf | 退火浮法玻璃与热增强/钢化状态区分；不采用强度系数 |
| jrc-retail-2013 | official_guidance | JRC Best Environmental Management Practice in the Retail Trade Sector, 2013 EUR25998EN, https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 零售供应链、电、包装/废物及物流相关性；公式与部分边界为本PCR基于前景记录的明确设计，不援引基准或符合性声明 |
