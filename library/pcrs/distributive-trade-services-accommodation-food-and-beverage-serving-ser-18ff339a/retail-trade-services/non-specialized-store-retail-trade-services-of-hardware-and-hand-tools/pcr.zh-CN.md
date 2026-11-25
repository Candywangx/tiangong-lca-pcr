---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-hardware-and-hand-tools
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 混合商品门店柜台交付单件原厂包装 BAHCO 2101G-180 手动侧切钳的零售服务

## 1. 范围与适用性

本方法规定单件有证据的完整原包装商品的较窄增量零售服务。官方类别明确包含钳类手工具零售，因此保留原PCR身份，但不表示覆盖全部五金或机床。真实完整钳包含多种材料和功能部件；应保留真实对象，不机械重复为组分流。以下强制选择是参考所引来源和实际采集要求设计的PCR方法，不声称来源规定这些确切方程。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-hardware-and-hand-tools |
| classification_refs | CPC 3.0:62165；4292手工具中的较窄子集；不覆盖442机床 |
| covered_products | 完整全新 BAHCO 2101G-180 手动侧切钳的零售服务，EAN 7314150106493、180mm、黑色防腐表面、ERGO手柄，原厂未拆封且同构的零售包装；核验实际批次和完整包装配置。 |
| excluded_products | 排除其他型号及IP/IPD变体、单售钳口/手柄/弹簧、混合套件、动力工具、机床、安装、刃磨、维修、演示、客户使用、无店铺订单及送货。已拆封、已用、受污染、拆解或不完整包装必须先编写状态特定扩展才能完整建模；不得删除其既有源池记录。 |
| representative_product | 一件完整2101G-180工具及其实际原厂包装，而不是230g通用钢。目录质量和剪切能力是名义规格，不是现场量、材料比例、合规限值或供应商LCI。 |
| production_route | 非专门混合商品门店的实体柜台购买及客户自提；保留商品组合证据。仅销售多个品牌不能证明非专门零售。核心路线不含零售商拆封或重包、额外购物袋、纸质小票或实际操作工具。 |
| market_state | 原厂未拆封包装内的完整全新干燥固态手动工具。钢制本体、铰接、回位弹簧功能和复合手柄保持为一个真实完整工具；目录系列描述须经批次/型号确认，不得臆造质量比例。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 以客户最终有效验收指定完整原包装商品为终点的柜台零售服务。 |
| How much | 一件最终有效原包装商品的服务；Q为预先固定的同构源池中不同原包装ID的数量。 |
| How well | 证实SKU/EAN、完整工具和包装配置、干燥未改动状态及客户验收；目录剪切能力不构成安全使用或验收测试阈值。 |
| How long or cycle | 从收货门到最终柜台验收及关联退货/去向闭合；迟到事件按实际日期替换原源池版本。 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 单件原厂包装 BAHCO 2101G-180 手动侧切钳柜台零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际批次及原厂包装BOM/配置; 型号及EAN; 非专门商品组合及柜台渠道; 场址及地理范围; 源池ID及预定日期; 最终验收ID及修订版本; 收货门S/F/T/O源责任; Q及零产出状态; 配套模块覆盖及供应边界; 实际包装及终端接收方承认; 流身份绑定状态 |

所有必需限定信息须出现在数据集元数据、过程说明、参考备注或等效字段。服务流UUID尚未绑定；数量属性UUID不是其流身份。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| service_count | retail_service | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 一件为final_service下一个不同原包装的最终有效服务；实物库存及工具名义质量不得替代Q。 |
| count_sources | failed_original; rejected_external; supplier_handoff | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 仅完整原包装数量；核验状态和完整源向量；无默认件到kg换算。 |
| power_unit | store_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 1 kWh = 3.6 MJ；electricity_allocate；保留电表kWh及供应边界。能量单位组93a60a57-a3c8-11da-a746-0800200c9a66；不隐含电压/组合。 |
| carrier_mass | failed_pack_waste | 质量 | kg | 外运时实际完整混合载体净kg，不是工具目录质量；terminal_carriers。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 收货门处实际完整原厂包装商品，含供应商/源ID、原始工具连同包装向量及入场运输边界。 |
| starting_condition_role | 服务前景起点，不表示失败原商品的上游责任为零。 |
| product_classification_scope | 仅CPC 3.0:62165中较窄的手动侧切钳柜台服务。 |
| recursive_input_rule | 不得把全部入场商品递归计入零售服务。failed_original是仅承接F的实际表征产品输入。原始收货和成功交付保管记录用于QA，不是额外背景输入。只有supplier_handoff和rejected_external明确为不表征的实物附属输出。 |
| upstream_dataset_requirement | 每个原始同构包装源V包含实际完整工具和包装制造及收货门入场运输一次。若供应背景缺运输，先用实测的源特定运输补齐V再分配责任。目录页不是定量LCI。 |
| disclosure | 核心增量服务清单加必须补齐的配套模块。成功S商品背景排除；单独声明的GOODS商品系统可加入S一次。不得把核心单独称作完整零售业务或声称完全符合某标准的LCA。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| route_gate | all inventory rows | 仅纳入有证据的混合商品门店、密封同构原包装及声明的柜台路线。记录发票、照片、商品组合、包装质量/BOM及配置版本。实际额外包装、打印、清洁、动力演示、送货、燃烧或制冷设备不得假定不存在：cp_modules确定覆盖并按complete_modules加入强制具体卡片/协议。存在性未知阻止数据集完整。若库存商品变为永久演示品，将同一原V_s转入具名内部资产T，不得同时计完整F和新资产制造；须在完整前编写实际拆封工具/包装状态及模块。 | un-cpc3-62165; bahco-pliers-catalogue; jrc-retail-2013 |
| source_ownership | failed_original; retail_service | 对每个原包装源s固定N_s及同一收货门匹配的完整供应向量V_s。按原商品等价完整ID分为最终有效S_s、服务负责的失败F_s、具名继续转移T_s和未解决/未闭合O_s，满足N_s=S_s+F_s+T_s+O_s。不得用任意材料质量份额拆分环境向量。本路线保持完整包装，每个原ID仅有一个完整最终责任。N_F=sum_s F_s。经证实责任的客户未退回失败商品及确认遗失商品仍为F；去向未知的有符号差额留为O并阻止闭合。供应商退回只有具名继续责任时才归T，不自动给信用。 | ghg-product-2011 |
| acceptance_custody | retail_service; failed_pack_waste; rejected_external; supplier_handoff | 商品库存和暂存废物分别记账。G_close=G_open+receipts+physical_customer_returns-ALL_gross_customer_handovers-physical_supplier_handoffs-internal_asset_transfers-condemnations-confirmed_goods_missing+signed_unresolved_goods_residual。ALL交付已包含成功和从未验收的离场，不得再减一次未验收集合。报废把商品转入暂存废物；W_close=W_open+condemnations-waste_dispatch-confirmed_waste_missing+signed_unresolved_waste_residual。废物外运不再扣商品库存。Q为最终有效验收的不同原ID数；无实物退回的撤销重分类旧验收，不构成新移动或对Q再扣一次。单纯退款/折扣不自行撤销验收。 | ghg-product-2011 |
| failure_carriers | failed_pack_waste; rejected_external; supplier_handoff | 责任与实物去向分开：F不产生虚构废物运输。实测完整未拆封失败包装废物外运kg，含工具、手柄、弹簧/铰接及实际包装；保留接收方对真实组分/状态的签字接收及匹配完整处理边界。保持真实载体完整，不再并列钢、塑料或包装组分废物行。外部留存的不合格包装及供应商转移使用独立事件ID，不自动视为零售商废物；记录接收方、状态、数量和继续处理/背景责任。已拆封或污染载体须状态特定扩展，不能沿用本未拆封载体身份。 | ghg-product-2011 |
| whole_source | failed_original | 完整原包装输入使用物品数量，不使用工具净kg或目录230g。绑定实际工具连同包装配置的供应向量，涵盖实际手柄/钢/涂层/铰接/弹簧及包装全部组分。完整源模式排除同源组分输入。若组分承担不同责任，必须先增加各实际组分产品卡并用核验的供应商组分向量守恒原向量，本路线才完整；质量份额不能拆分环境向量。原厂包装的终端废物不得再引入一份完整制造负担。 | bahco-pliers-catalogue; ghg-product-2011 |
| physical_overlap | all inventory rows | 加入供应背景前比较实物组分、事件ID、资产ID、日期、场址及生命周期阶段。供应方ID不同不证明活动互斥。完整背景已含电力、运输、维修或处理时排除相同外部活动。不推定废物处理信用、再用信用或负排放。附属输出rejected_external和supplier_handoff不带避免生产信用，其原V仍按source_ownership处理。 | ghg-product-2011 |
| support_coverage | all inventory rows | 核心仅涵盖failed_original、store_electricity、retail_service和三个实际终端/转移载体。cp_modules必须覆盖收货搬运、储存展示、共用建筑、照明/风机/固定设施、结账支付、ICT/网络、安防、管理、清洁、公用设施、逆向/废物/材料/资产运输、维护及寿命终结。这些是强制补齐模块，不是可选遗漏清单。每个实际模块建立签字的源/运行/资本覆盖矩阵，命名实际原子交换卡及同过程协议，采集必需字段，应用complete_modules和asset_versions；每个模块必须完整或证实不存在。不得从未补齐核心交付完整业务数据集。 | jrc-retail-2013; ghg-product-2011 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| counter | 柜台零售及源责任 | required | 全部纳入源池 | 增量服务及实际源输入 | 每参考流 |
| fates | 实际去向及保管转移 | required | 检查每个源池；各载体要求实际存在/缺席证据 | 终端实物载体及责任 | 每参考流 |

### 过程：柜台零售（`counter`）

#### 输入

##### 产品流

###### 收货门处完整全新原厂包装 BAHCO 2101G-180 手动侧切钳 (`failed_original`)

按source_ownership承接失败商品的实际完整原源产品输入；保留完整工具及其实际原厂包装。

n_failed=N_F/Q；failed_background；cp_goods。匹配各实际完整源向量；本产品输入承接F制造及收货门运输一次。

- 选定流: 收货门处完整全新原厂包装 BAHCO 2101G-180 手动侧切钳
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_F / Q
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_goods`
- 来源: `bahco-pliers-catalogue`; `ghg-product-2011`

###### 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca` (`store_electricity`)

实测可归属交流电跨越柜台服务边界，采用互斥源池及实际供应绑定。

3.6*K_h/Q MJ；electricity_allocate；cp_energy。使用点产品输入，身份未特指电压/供应方；独立绑定实际供电地域/技术/电压及线损边界。

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 3.6 * K_h / Q MJ
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy`
- 来源: `ghg-product-2011`; `jrc-retail-2013`

#### 输出

##### 产品流

###### 单件原厂包装 BAHCO 2101G-180 手动侧切钳柜台零售服务 (`retail_service`)

唯一参考产品输出为最终验收服务；实物保管另记账。

1 件；final_service；cp_goods。参考是最终验收零售服务，不是商品生产、实物交付总量或工具名义kg。

- 选定流: 单件原厂包装 BAHCO 2101G-180 手动侧切钳柜台零售服务
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_goods`
- 来源: `un-cpc3-62165`; `ghg-product-2011`

### 过程：实际去向及转移（`fates`）

#### 输出

##### 产品流

###### 外部接收方留存的未拆封完整不合格原厂包装 BAHCO 2101G-180 (`rejected_external`)

记录外部接收方实际转移/留存的未拆封不合格包装，不隐含零售商废物。

N_external_rejected/Q 件；terminal_carriers；cp_terminal。仅作不表征实物附属输出；原F/T/O责任仍按source_ownership，不推定废物或避免产品信用。

- 选定流: 外部接收方留存的未拆封完整不合格原厂包装 BAHCO 2101G-180
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_external_rejected / Q
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_terminal`
- 来源: `ghg-product-2011`

###### 实际交回供应商的未拆封完整原厂包装 BAHCO 2101G-180 (`supplier_handoff`)

实际完整包装交回供应商的记录独立于源责任及验收状态。

N_supplier_handoff/Q 件；terminal_carriers；cp_terminal。附属保管转移，不自动归T或避免制造；记录实际接收方及继续源责任。

- 选定流: 实际交回供应商的未拆封完整原厂包装 BAHCO 2101G-180
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_supplier_handoff / Q
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_terminal`
- 来源: `ghg-product-2011`

##### 废物流

###### 供合同处理的完整未拆封失败原厂包装 BAHCO 2101G-180 手动侧切钳 (`failed_pack_waste`)

记录实测实际完整失败包装，由合同明确接收其全部组分和状态的接收方接收。

sum dispatch_net_kg/Q；terminal_carriers；cp_terminal。含完整工具和实际原包装的干燥完整混合载体；接收方必须接收确切组成/状态并有完整处理边界。

- 选定流: 供合同处理的完整未拆封失败原厂包装 BAHCO 2101G-180 手动侧切钳
- 流属性/单位: 质量 / kg
- 数量规则: sum dispatch_net_kg / Q
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_terminal`
- 来源: `ghg-product-2011`; `jrc-retail-2013`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| fixed_pool | all inventory rows | 观测前固定源池ID、同SKU/包装配置、场址、源日期和闭合规则；包括停业、空闲、失败和零销售期间。Q不是库存实物流转总量。迟到退货/撤销/去向改变按实际日期替换所有受影响原池分子/源/分母版本；同一原ID再次出售不新增制造向量。Q=0源池保留原始量并明确不可归一化；仅可纳入事前定义的同构源池，禁止删除或默默转入无关成功期间。 | ghg-product-2011 |
| source_drivers | store_electricity | 先用直接互斥电表。画电路树；仅当母表包含子表时扣除子表。分别计量照明/风机固定源池，按保留的照明/通风展示面积m2*h分配，含闲置/停业保留；结账活动源按终端记录的活动秒；ICT/网络活动源按实测源特定字节处理活动；持续安防源按受保护面积m2*h；管理活动源按记录任务秒。各活动/空闲/固定kWh子池与母表守恒；终端/网络/管理的空闲及固定/停业持续源子池均按受益方保留设备秒分配，绝不按零活动或零销售归零。每个观测区间开始前登记全部实际受益方队列/源池及其设备预留份额，包括失败、零销售和停业期间预留；保留带时间戳的预留版本，不得事后仅选成功销售。reserved_device_seconds_h等于实测可用设备秒乘事前声明的reservation_share_h；每个设备区间全部实际受益方份额之和为1，预留秒数须与完整源持续时长守恒。受益方未知、预留未归属或缺失停业期间覆盖时阻止完整。不得把不相容驱动量或能源与面积/时间/字节相加。受益方驱动量总和未知或为零时阻止分配，直至保留量和受益方测量守恒。 | ghg-product-2011 |
| source_materials | all inventory rows | 任何新增店用包装、小票纸、清洁配方或维修材料均要求实际具名原子卡及cp_modules字段。制造和源入场运输固定归首次实际使用；未使用库存及转移保留未分配源。已使用的可复用库存不重复制造/入场运输。已打印中间库存保留原纸和打印电表源ID及历史替换版本。清洁按原配方来源kg追踪到互斥的最终已用、洒漏、最终冲洗、随载体外运残留、留存及未用状态；已用→冲洗是状态替换，不是第二去向。实际完整湿载体kg独立称量，不是配方kg；新加水/污物/布/容器不是原配方。 | ghg-product-2011 |
| asset_versions | all inventory rows | 对每个同构实际资产/型号/BOM/边界向量V及每个历史受益方期间h，按其固定单位采集暴露量e_h：建筑及安防用受保护面积m2*h；固定照明用被照面积m2*h；固定风机用通风面积m2*h；其他固定设施用有证据的服务面积m2*h；货架用保留货位*h；结账/ICT/网络/管理设备用保留设备*h；每个实际手推车或人工操作搬运设备型号用保留搬运设备*h；可复用清洁布用已清洁m2。每个实际固定灯具/风机/设施型号及其完整向量，仅可归入有证据的完整建筑包或自身同构资产模块，两者互斥。搬运设备的e_h=sum_t(reserved_handling_device_hours_t*handling_reservation_share_h_t)，覆盖活动、空闲和停业区间；观测前定义全部收货/搬运受益源池及带时间戳的预留份额，含失败/零销售队列。每个完整设备区间份额之和为1，空闲/停业暴露因此归预留受益方，不随零搬运次数消失。reserved_handling_device_hours_t为分配给受益方之前的完整设备预留区间时长，故预留份额仅乘一次。记录实际区间、小时、份额、型号/BOM/边界及匹配的同单位终身L；容量未知或未归属时阻止完整。预期终身暴露L使用相同单位；f_old_h=e_h/L_old，暂定份额之和不得超过1。实际退役时E=sum_all_h actual e_h，对每个历史h设f_new_h=e_h/E，总和为1。寿命/BOM/背景改变须以delta_h=f_new_h*V_new-f_old_h*V_old替换全部历史份额/向量，并对各原池分子作有符号修正。不得重新起算或仅补残差。退役载体仅乘f_new_h一次，不再乘制造份额。完整设备净称量与BOM重建互斥，不得重复扣除已拆部件。 | ghg-product-2011 |
| asset_transport | all inventory rows | 独立资产购置/维修/退役运输先归具名资产源，再按相同的完整历史f_h及版本修正分配；不得把全部退役行程记入当前Q。材料首次使用运输遵循source_materials。供应方已分配到资产或期间的运输保留既有份额，不再乘第二次。完整包已含运输/维护/寿命终结时排除重复模块。 | ghg-product-2011 |
| transport_driver | all inventory rows | 每个实际车辆段/行程t保留路线、实测距离d_t、驻车/空闲时长tau_t、载荷和全部受益方保留量。实测移动和空闲源分子分开。经证实质量受限车辆的移动按保留载荷kg*d_t分配；空驶按原始预约的保留载荷容量kg*d_t，不以交付吨数零代替。驻车/空闲源按保留载荷容量kg*tau_t分配。不得混合kg*km与kg*h。要求同单位驱动总量为已知正数并与全行程守恒。供应方已分配的托运量保留原值，分段证据仅作QA，不再乘一次。空驶/空闲覆盖未知阻止完整。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | counter | failed_original; retail_service | 来源/验收/保管账 | pool_id; prospective_start/end; pool_version; original_id; source_id; 实际SKU/EAN; 批次; 原厂包装BOM/配置; 实际原包装数N_s; 实际毛/净kg; supplier_vector V_s; 入场运输边界; S_s; F_s; T_s; O_s; final_valid_acceptance; closure_date; event_id/date; 全部实物交付; 客户退回; 供应商交回; 内部资产转移; 报废; 期初/期末商品数; 期初/期末暂存废物数; 确认遗失; 有符号未解决差额; 接收方/状态/责任 | 出售前扫描每件实际完整包装和批次；建立持久原ID，实物事件与验收分别计数，校准秤并以发票及供应商签字清单核验实际包装/BOM。审计密封状态，不假设工具净质量等于完整包装质量。取得实际完整供应向量及分离的包装/入场边界；目录仅是商品规格。 保留原始S/F/T/O及实物库存；final_service的Q和failed_background的n_failed每参考流仅归一化一次。原始审计平衡不归一化。 | 件；kg；事件日期 | 每次收货/事件；每日库存闭合 | 全部预定源池及关联历史修订 | 收货、柜台及原供应商边界 | 每参考流 | 供应商签字BOM/向量；扫描；验收/撤销证据；校准称量；源责任守恒 |
| cp_energy | counter | store_electricity | 电表及全受益方驱动量账 | meter_id; 母表是否含子表; 源子池k; 活动/空闲/固定模式; 起止kWh; K_k; 受益方h; 保留照明/通风m2; 受保护m2; 小时; 终端活动秒; 网络处理字节; 管理任务秒; reserved_device_seconds_h; 事前受益方登记; 设备预留区间; 可用设备秒; reservation_share_h; 预留版本/生效日期; 受益方失败/零销售/停业状态; d_hk; K_hk; K_h; 供电地域/技术/电压/线损边界; 校准; Q | 读取经校准的分时电表并计量各实质活动/空闲/固定组件；电路树证明重叠。观测前登记实际受益源池、设备预留份额及生效版本；记录活动、空闲和固定/停业区间，含失败/零销售预留，并按source_drivers核对全部设备秒守恒。按source_drivers采集确切固定单位；源池与账单及全受益方守恒。按实物源边界去除供应背景已含电力。 electricity_allocate得每参考流MJ；各源子池仅用同单位驱动量，先守恒再相加。 | kWh；m2*h；秒；字节分别记录 | 分时读数及每个任务/保留 | 同一完整源池，含空闲/停业 | 门店电路及全部连接受益方 | 每参考流 | 校准；电表树；原始记录器/账单；组件源守恒 |
| cp_terminal | fates | rejected_external; supplier_handoff; failed_pack_waste | 实际终端/保管运输批次账 | pool_id; pool_version; event_id; original_id; 外运日期; 接收方; 实际未拆封状态; 实际组分; 毛kg; 皮kg; dispatch_net_kg; 秤校准; N_external_rejected; N_supplier_handoff; 接收方签字组成接收; 完整处理边界; 供应背景是否含运输; 后续背景责任; 暂存废物库存; 确认遗失; 有符号未解决差额; Q | 按唯一事件ID计实物转移并追溯原源ID；用经校准秤称实际完整废物批次，仅扣实际皮重一次。供应商/客户转移与废物互斥；取得实际混合组成/状态的签字接收及处理合同。独立运输记录交cp_modules，保留原资产/材料/源责任。 terminal_carriers每参考流仅归一化一次；库存为独立QA；过程视图保留相同原记录ID，不重复测量。 | kg；件 | 每次实际运输批次及去向修订 | 完整源池及后续原源去向更新 | 柜台/门店离场及具名接收方 | 每参考流 | 签字衡器/净量记录；实际组分接收；接收方/状态；处理/供应边界 |
| cp_modules | counter | all inventory rows | 强制模块及源/资产补齐登记 | module_id; 实际存在/缺席证据; 运行/资本阶段; 实际型号/BOM/边界; source_id; 原供应边界; 实际交换卡ID; protocol_id/process_id; 属性/单位; x_jc; D_j; pool_id/version; 源池活动/空闲/固定; 原始总量; 全受益方; 确切驱动量/单位; 事前搬运受益方登记; 实际搬运资产型号/BOM/边界; 搬运预留区间; reserved_handling_device_hours_t; handling_reservation_share_h_t; 搬运预留版本/生效日期; 搬运活动/空闲/停业状态; 固定灯具/风机/设施型号及服务面积; e_h; e_actual_h; L_old; E; f_old_h; f_new_h; V_old; V_new; delta_h; 安装/维修/退役事件; 资产库存; 实际载体kg; 材料收货/未用/首次使用/再用/去向; 原配方kg; 外运容器残留; 运输行程/段; 实测d_t; 空闲tau_t; 载荷kg; 保留容量kg; 供应方分配; 实际供水表; 实际排水表/密度; 校准; 重叠组分/事件/时间/阶段; Q | 每月及变更时检查全场址和合同，为support_coverage每个模块保留签字覆盖证据。计量全部真实运行源；先直接细分，再按source_drivers固定单位执行，保留空闲/失败期间。取得实际资产型号/BOM向量及全部过去受益方同单位暴露/寿命；观测前登记收货/搬运设备预留，按asset_versions保留实际保留搬运设备小时、份额及活动/空闲/停业期间；核验固定灯具/风机/设施资本恰归一个完整建筑包或自身实际型号模块；按asset_versions恢复全部历史分子版本。材料采收货/未用/已用/最终状态及首次用源。逆向/废物/材料/资产运输保留实测分段距离、驻车时长、保留容量及供应边界，再用transport_driver。入场供水表已排除内部回用，不得再扣回用。直接实际排水按实测状态独立计量V_discharge*rho，不得把水量重建冒作完整液体质量。不得在缺席门下纳入燃烧/制冷源；任何实际源须在完整前另建已审查的状态/物种/路径方法及卡。 complete_modules恢复x_jc*D_j及相容源分子，应用asset_replace，最终/Q恰一次。本总登记不替代每个新增原子卡关联的实际单过程协议。 | 交换原单位；各驱动量/寿命单位分别记录 | 每事件；每月覆盖；每寿命/供应修订 | 完整源池及完整资产和材料源历史 | 全场址及合同公用设施/ICT/支付/安防/管理、资产和运输 | complete_modules恢复x_jc*D_j及相容源分子，应用asset_replace，最终/Q恰一次。本总登记不替代每个新增原子卡关联的实际单过程协议。 | 签字完整覆盖矩阵；原始电表/驱动量；校准称量；原分母/源ID；完整版本/资产历史；重叠审计 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| final_service | retail_service | Q为闭合时final_valid_acceptance成立的不同original_id数；retail_service=1 Item(s)。对最终有效集合版本化；过滤后不得再减撤销数。 | original_id; final_valid_acceptance; closure_date; pool_version; cp_goods | Q; retail_service | ghg-product-2011 |
| failed_background | failed_original | n_failed=N_F/Q；B_F=sum_s(F_s*V_s)；failed_original将各实际同构完整源供应向量承接一次。供应向量不同时按源分开同一同构包装身份的交换实例；不得用标量数量替代未知向量组成。S背景仅属于下游GOODS；T保留具名继续责任；O阻止闭合。 | N_F; Q; F_s; V_s; S_s; T_s; O_s; cp_goods | n_failed; B_F | ghg-product-2011 |
| electricity_allocate | store_electricity | 对各互斥源子池k和受益方h，K_hk=K_k*d_hk/sum_h(d_hk)；K_h=sum_k K_hk；store_electricity=3.6*K_h/Q MJ。K_k为电表kWh；d_hk采用source_drivers对该源规定的唯一驱动量。1 kWh = 3.6 MJ只换算分子单位。核对sum_h K_hk=K_k。 | K_k; d_hk; K_hk; K_h; available_device_seconds; reservation_share_h; reserved_device_seconds_h; Q; cp_energy | store_electricity | ghg-product-2011 |
| terminal_carriers | failed_pack_waste; rejected_external; supplier_handoff | failed_pack_waste=实际外运批次净kg之和/Q；rejected_external=N_external_rejected/Q；supplier_handoff=N_supplier_handoff/Q。三个实物事件集在同一事件处互斥；先后关联事件保留同一原源，不新增向量。直接外运kg不再减库存变动。商品库存与暂存废物独立校验。 | dispatch_net_kg; N_external_rejected; N_supplier_handoff; event_id; original_id; Q; cp_goods; cp_terminal | 每参考流终端量 | ghg-product-2011 |
| complete_modules | all inventory rows | 对每个强制配套模块j，按原始分母D_j、源池、源ID及版本，将各归一化交换x_jc还原为有证据的原始分子X_jc=x_jc*D_j。按physical_overlap排除重叠，不以供应方ID判断。把运行活动/空闲/固定实测源池分开；先直接细分，再使用source_drivers的确切单位驱动量。按每个实际型号/BOM/V分别应用asset_versions及实际事件材料/运输规则。核心原始X_core_c含N_F个实际failed_original输入实例并链接各V_s（由此产生B_F一次，不另加B_F交换）及AC分子；补齐X_total_c=X_core_c+sum_j互斥且相容的X_jc，并含全部历史delta。仅可相加相同交换/属性/单位分子，禁止kg与MJ或原始与已归一化量相加。最终x_total_c=X_total_c/Q仅一次，不再加入F或AC。每个新增交换实际原子卡和同过程协议在两种语言编写并同步，或证实不存在之前，禁止数值化补齐。 | x_jc; D_j; X_jc; X_core_c; X_total_c; Q; source_id; pool_id; pool_version; delta_h; cp_modules | x_total_c | ghg-product-2011 |
| asset_replace | all inventory rows | 每个实际同构资产向量按asset_versions执行：f_old_h=e_h/L_old；退役时E=sum_all_h e_actual_h，f_new_h=e_actual_h/E。每个原始历史池在自身最终/Q之前记录delta_h=f_new_h*V_new-f_old_h*V_old。Sum_final_f=1。制造/安装、运行、维修及终端处理互斥；独立运输按asset_transport，供应方已分配量不重复。购置及退役校验资产库存，不在暴露/寿命输入之外再计消耗件输入。 | e_h; e_actual_h; reserved_handling_device_hours_t; handling_reservation_share_h_t; L_old; E; f_old_h; f_new_h; V_old; V_new; delta_h; cp_modules | 历史原始资产分子替换 | ghg-product-2011 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_binding | all inventory rows | 要求确切类型、完整对象/状态、属性/单位及路线绑定；仅身份不提供LCI或实际数量。未绑定卡在直读证据和匹配供应/处理协议完成前保持待解决。 | 官方直读receipt；供应商/接收方签字规格；协议记录 |
| q_temporal | all inventory rows | 保留原源ID、日期、分母集合和修订历史。未观测期间、负差额、未知模块或零产出源池不得默默删除或钳制为零。 | 完整签字库存/源守恒及修订 |
| q_completeness | all inventory rows | 实际新增配套交换在声称完整零售服务数据前须有双语原子卡、正确过程/方向/类型、原始字段、确切公式Inputs、唯一reference_flow基准及完整历史去重。 | 覆盖矩阵；实际解析guidance/协议/卡审计；complete_modules输出 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope_identity | all inventory rows | 核验实际型号/EAN、批次、完整工具连同包装BOM、未拆封状态及非专门柜台渠道。每个未绑定流须以官方直读绑定匹配的类型/状态/属性/单位及供应/处理边界，不能把属性UUID当作流。AC历史身份观测不是实时供应/背景核验。 | un-cpc3-62165; bahco-pliers-catalogue |
| v_sources_counts | failed_original; retail_service | 分别审计唯一原ID、Q集合及实物保管量；收货门S/F/T/O完整源向量守恒。归一化数据集要求Q>0；零产出及未解决/开放源保持明确。纳入无退回的验收撤销；仅价格退款不改变Q。全部失败原背景B_F必须由failed_original承接；不得遗漏损失或在转售重复制造。 | ghg-product-2011 |
| v_terminal | failed_pack_waste; rejected_external; supplier_handoff | 废物外运要求经校准的实际载体净称量、对确切工具连同包装混合组分/状态的签字接收及匹配完整处理。确认遗失与有符号未解决差额分开。外部留存及供应商转移要求接收方/状态/继续责任，不自动计废物或信用。不得把同一完整废载体再次拆为组分废物。 | ghg-product-2011 |
| v_modules | all inventory rows | 用cp_modules和complete_modules检查support_coverage的全部强制模块，含完整固定照明/风机/设施资本、ICT/网络/支付/安防/管理运行及资本。仅列缺失模块仍是不完整。新增实际卡须在同步前具备正确单过程协议、原始字段、单位、确切计算输入及完整双语语义。含停业和失败期间的全部源池/受益方守恒。 | ghg-product-2011 |
| v_lifetime | all inventory rows | 审计逐型号同构V、源边界、同单位e/L及最终e/E、全部历史分子替换和资产/材料运输历史。暂定f总和<=1，最终=1；最终残差1-sum_old_f仅供QA。完整供应重叠及全部旧版本须守恒。不得重启资产或把全部退役量记入当前期间。 | ghg-product-2011 |
| v_normalization | all inventory rows | 每个最终量使用Basis kind reference_flow；原始协议保留原单位并仅作一次最终/Q。未知绝不为零。不虚构重量、LCI、范围、UUID、组分比例、安全使用限或科学批准。候选方法在晋级前须独立科学及翻译审查。 | ghg-product-2011 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 需审查的增量服务加已补齐且相容的配套模块。GOODS系统可明确单独加入成功S源背景一次。 |
| allowed_use | 相同有证据的同构原厂包装及混合商品柜台路线，具备完整源/资产历史和最终验收分母。 |
| excluded_use | 全部62165覆盖、商品制造、动力工具服务、演示、维修、拆封或不完整包装路线、仅核心即完整业务声称、符合性或安全批准。 |
| required_metadata | 全部参考限定；原源池/ID；供应方/源向量及边界；模块卡/协议；Q；完整历史替换版本。 |
| required_quality_disclosure | 未绑定身份；AC历史观测；供应批次/BOM/LCI缺口；零/开放源池；未完成模块；分配/校准不确定性及实际覆盖。 |
| update_trigger | 任何实际配置、包装、路线、验收/去向、供应边界、寿命/BOM、驱动量或源修订；替换全部受影响旧版本。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-62165 | official_guidance | UNSD CPC 3.0 explanatory note62165; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62165 ; retrieved2026-10-29 | 手工具及机床类别边界；较窄映射推断，不提供清单因子。 |
| bahco-pliers-catalogue | handbook | BAHCO Plier Catalogue, PLIERS-ENG-20; https://media.bahco.com/media/media-download/catalogue/Bahco%20Plier%20Catalogue_UK.pdf ; pp.7-8 and14; retrieved2026-10-29 | 真实2101G-180型号/EAN、180mm、黑色表面、完整手工具及ERGO背景。名义230g不用于现场质量；实际批次/BOM/包装及LCI需供应商证据。 |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard2011; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; ch.6,7,9 | 服务单位、可归因边界、分配层次和物理驱动量用于本PCR显式设计。不声称完全符合标准或来源强制这些确切方程。 |
| jrc-retail-2013 | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector2013, EUR25998EN; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf ; executive summary and lighting/waste sections | 零售能源/照明、水/化学品、废物和运输覆盖；不把标杆复制为场址清单/默认值。 |
