---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.postal-services-related-to-letters
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 国内普通有址信函邮政服务——外包公路运输配置

## 1. 范围与适用性

本 PCR 仅规定国内普通有址纸质信函、外包公路机动运输及无现场燃烧和制冷剂设备场站的服务配置。此配置界限来自所审查的服务与运行方法，不是缺少数据库 UUID 的替代措施。它不覆盖整个 CPC 叶分类。实际配置不符时不得宣称适用，也不得将未知交换置零。所有强制要求均在以下规则表中规定。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.postal-services-related-to-letters |
| classification_refs | CPC 3.0 68011；仅为 narrower 配置。该子类还包括普遍服务义务下的报纸、期刊、宣传册、传单和国际服务。 |
| covered_products | 具有文件化普遍服务义务的普通有址纸质信函收寄、分拣、国内地面运输和投递；全部机动公路运输向承运人采购，邮政场站以电力运行或购买热水供热，无现场燃烧和制冷剂设备。 |
| excluded_products | 快递或特快、包裹、报纸期刊、广告传单或宣传册、挂号或保价或签收产品、国际及航空或铁路或水路运输、自营机动车队、有现场燃烧或制冷剂设备的场站。 |
| representative_product | 在一个明确国内起讫地及重量和服务等级层中正确妥投的一件普通有址信函；不假定标准信函重量、距离或投递时间。 |
| production_route | 收寄和揽收→地址处理与分拣→外包公路干线→目的地分拣→外包厢式车收投线路→正确妥投；队列保留实际重投、改寄和最终退回。 |
| market_state | 在声明投递点完成的邮政服务；所承运信函始终为客户货物，不是邮政运营方制造的产品。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在声明普遍服务义务及本服务配置下正确妥投一件已收寄普通有址信函。 |
| How much | 一件已妥投信函服务。 |
| How well | 符合声明投递点和验收质量条件；披露服务等级、实测运输时间、延误和损坏，不将不同服务水平视为等价。 |
| How long or cycle | 一个已结清的自然月收寄队列，跟踪至每件实际终态；不得用任意跟踪期限把未结信函变成已妥投或遗失。 |
| reference_flow_link | delivered_letter |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 国内普通有址信函投递服务，外包公路运输 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 普遍服务义务证据和运营商; 国内起讫地区层; 普通信函等级; 实际质量与尺寸区间; 地址与投递点类型; 收寄月份及结清日期; 运输路线和承运方; 包裹及其他邮件占比; 分拣技术; 机动运输外包; 场站电力或热水配置及无燃烧和制冷剂设备证据; 服务质量标准; 实测运输时间分布; D, T, L, X及未结件数; 资本与维护覆盖; 地域及电力热力供应; 排除项和不确定性。 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| m_count | delivered_letter | 物品数量 | Item(s) | D 为所选已结清收寄队列中正确妥投且满足验收质量的唯一信函件数；退回、拒收、遗失、销毁及未结件不计入 D。一件指本定义服务，不代表一次车辆行程或一个设备小时。 |
| m_units | 全部清单行 | 声明分子属性 | 声明行单位 | 质量、体积、能量、距离、面积时间和设备时间独立保留。匹配数据集要求 MJ 时才以 3.6 MJ/kWh 换算实测电量；以 1000 kg/t 换算千克为吨。不得假定件数到质量、密度、热值或载荷的默认换算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在声明邮筒、揽收点或邮政柜台接收信函进入运营商保管；纳入已接受揽收委托的揽收运输；客户出行及所载信函和信封的制造位于本邮政服务边界接口 之外。 |
| starting_condition_role | 服务保管边界，不表示纸张制造负担为零；完整信函产品 LCA 应另行加入纸张和印刷。 |
| product_classification_scope | 仅 CPC 3.0 68011 中国内普通有址信函、外包公路运输、场站无现场燃烧和制冷剂设备的配置。 |
| recursive_input_rule | 执行 boundary_atomic_support：外部活动通过明确的单单位服务接口进入，不递归展开供应方内部。前景实物过程保留原卡及规则。保管货物不是制造投入。 |
| upstream_dataset_requirement | 每个服务合同及背景数据集均须保留经签署的范围责任矩阵：确切接口、路线/配置、地点/期间、原生参考单位、质量、供应/运行/空驶/失败/维护/资本/寿终覆盖、全用户分配和前景重叠。背景覆盖须保留原生命周期义务及候选分配政策；可用兼容数据集及供应方范围声明证明，无需取得全部内部交换。外购数量在接口处计量；捆绑的独立服务或不兼容单位须拆成具体行。部分覆盖先按有证据的事件/组成划分。运营方自有资产、独立供应能源/材料、客户自备部件及运营方保留废物仅留在各自实物行，并从供应方清单排除。只停用与服务确切重复的供应方组成；实际未覆盖组成须由其明确接口/实物行承接。不得同时加上已被服务覆盖的明细，不得因供应方明细缺失而抹除负担。服务单位换算、身份、覆盖或必要补充组成缺失时保持未完成，不得填零。原较窄产品适用范围、实物库存平衡、原队列更正及receipt证据仍对实际责任方强制适用。 |
| disclosure | 跟踪已收寄信函至正确妥投或最终退回、遗失或授权处置；纳入相关重投、改寄、暂存、零产出运行及收寄拒收活动的分摊份额。排除收件人使用和客户信函制造；要求准确供应商接口和资本覆盖声明。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_scope | 全部过程 | 仅在全部配置限定均有证据时适用；必须有普遍服务义务。其他路线或现场燃料及制冷剂运行须有另行审查的方法配置；本 PCR 不允许将其替换为零或通用服务。 | `un-cpc3-68011` |
| b_gate | postal_letter_service | 纳入柜台和揽收、全部分拣暂存、所有公路路段及空驶调位、试投、改寄、退回、终态处置及可归属管理支持。保管转移记录于同一行程台账，不形成额外已完成服务。收寄之前发生的柜台拒收作为同服务类别接收支持负担纳入，但不视为已收寄信函。 | `upu-postal-ghg-2010` |
| b_no_double | 全部清单行 | 执行 foreground_interface_coverage：前景之外采用具体服务接口；以下详细实物要求仅适用于前景责任组成。逐采购区段，在互斥清单责任下将实物燃料/电力、直接排放、制造、维护、基础设施及终态范围各计一次。不保留完整运输服务投入。资本制造排除单列运行表计与托盘。逐实物废物载体仅关联一次相容有据处理，不将完整污水及内含污染物质量重复作为处理量。 |  |
| b_materials | 全部清单行 | 卡片覆盖声明配置。通过采购、维护和废物台账确认未列直接化学品、制冷剂损失、燃料及材料废物不存在；发现未列交换则完整性不通过，使用前须加入原子卡并审查范围。不得因缺 UUID 删除实际材料。 |  |
| b_counter_interface | postal_letter_service | 执行 foreground_interface_coverage：前景之外采用具体服务接口；以下详细实物要求仅适用于前景责任组成。普通收寄柜台及支持已经纳入。若其他供应方执行受理，采用相同接口的分别明确实物清单，精确剔除本处柜台能耗、材料及资产重叠份额，受理只计一次。柜台服务包不作投入。邮资是费用，客户信函为托管货物而非运营方制造品。 |  |

### 支持活动原子边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_atomic_support | 支持活动 | 每条启用交换表示一个明确的材料、设备或服务对象，只使用一个主属性和单位。不得仅因服务包含上游过程而禁止服务流。计量前按供应方、合同、场址、事件、接口和范围组成确定责任。运营方运行的过程及由运营方承担清单责任的独立委托现场任务采用前景实物行；责任范围外的独立供应活动采用其明确的服务接口行，供应方制造、公用工程、维护和废物保留在匹配的背景服务中，不另作前景交换。合同本身不使供应方内部过程成为前景。不得改变产品、路线、保管接口或原参考分母。执行 foreground_interface_method 和 foreground_interface_coverage；边界变化须经PCR审查，不得根据数据是否易得任意选择。 此处责任归属指清单责任，不仅指法律所有权：租赁设备的提供可以是外部服务，而运营方运行所用的独立计量电力仍属于前景。 |  |
| foreground_interface_coverage | 所有支持过程及重叠范围 | 每个服务合同及背景数据集均须保留经签署的范围责任矩阵：确切接口、路线/配置、地点/期间、原生参考单位、质量、供应/运行/空驶/失败/维护/资本/寿终覆盖、全用户分配和前景重叠。背景覆盖须保留原生命周期义务及候选分配政策；可用兼容数据集及供应方范围声明证明，无需取得全部内部交换。外购数量在接口处计量；捆绑的独立服务或不兼容单位须拆成具体行。部分覆盖先按有证据的事件/组成划分。运营方自有资产、独立供应能源/材料、客户自备部件及运营方保留废物仅留在各自实物行，并从供应方清单排除。只停用与服务确切重复的供应方组成；实际未覆盖组成须由其明确接口/实物行承接。不得同时加上已被服务覆盖的明细，不得因供应方明细缺失而抹除负担。服务单位换算、身份、覆盖或必要补充组成缺失时保持未完成，不得填零。原较窄产品适用范围、实物库存平衡、原队列更正及receipt证据仍对实际责任方强制适用。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| postal_letter_service | 收寄、分拣、外包公路运输、妥投及失败处理 | required | 所声明配置全部阶段；热量及废物按发生情况 | foreground | delivered_letter: 1 Item(s) |
| support_linehaul | 支持接口／前景活动：常温公路信函干线运输 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：实际外购非冷链信函道路干线运输；展开的是承运背景，不改变为邮政运营方自有运输。 | support | 归属至delivered_letter |
| support_van_round | 支持接口／前景活动：常温信函厢式车揽投轮次 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：实际外购非冷链厢式车辆收寄/投递；展开的是承运背景，不改变为邮政运营方自有运输。 | support | 归属至delivered_letter |
| support_sorting_asset | 支持接口／前景活动：配置明确的信函分拣机可用服务，不含运行公用工程 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：上述完整信函分拣机的制造/建设、分别识别的维护及最终寿终；不含运行公用工程。 | support | 归属至delivered_letter |
| support_premises | 支持接口／前景活动：邮政场所建筑空间占用服务，不含运行公用工程 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：上述建成的邮政分拣/柜台建筑壳体的制造/建设、分别识别的维护及最终寿终；不含运行公用工程。 | support | 归属至delivered_letter |

### 过程：普通信函邮政服务（`postal_letter_service`）

#### 输入

##### 产品流

###### 邮政场站电力（`facility_electricity`）

计量分拣、柜台、照明、信息设备、电热及可归属待机电量；分表与建筑账单对账。承运方车辆购电保留在运输服务内。

- 选定流：低压交流电
- 流属性/单位：能量 / kWh
- 数量规则：第 8 节确定的每参考流最终报告数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_facility`
- 来源：

###### 外购热水供热（`hot_water_heat`）

仅外购热力时适用。在场站接口测量交付热量；不得把循环热水当作耗水。全电且无购热配置的证据可以证明此项不存在。

- 选定流：区域热水供热
- 流属性/单位：能量 / MJ
- 数量规则：第 8 节确定的每参考流最终报告数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_facility`
- 来源：

###### 场站自来水（`tap_water`）

计量可归属服务的清洁和卫生供水；不得推定污水全部等于购水量。按供应商覆盖及实际使用分配。

- 选定流：自来水
- 流属性/单位：体积 / m3
- 数量规则：第 8 节确定的每参考流最终报告数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：

###### 外购纸质路由标签（`paper_label`）

外购完整路由标签含其胶粘剂和印刷；排除客户信封和纸张。按期初库存加收货减期末库存并调整调拨；不得另加该产品已含胶粘剂和油墨。

- 选定流：已印刷纸质路由标签
- 流属性/单位：质量 / kg
- 数量规则：第 8 节确定的每参考流最终报告数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：

###### 可重复使用高密度聚乙烯邮件托盘制造（`mail_tray`）

按核实寿命载货循环分配托盘制造质量，纳入提前损坏；此输入排除报废处理。托盘作为载荷进入货车质量，不再次计制造输入。

- 选定流：高密度聚乙烯邮件托盘
- 流属性/单位：质量 / kg
- 数量规则： 按a_tray_lifecycle计算sum(原始托盘净kg*f)/D；仅制造，不含寿终处理。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_materials`
- 来源：

#### 输出

##### 产品流

###### 已妥投信函服务（`delivered_letter`）

每一正确妥投且满足验收质量的唯一信函只形成一件本配置服务。客户信函不是在此制造的纸产品。

- 选定流：国内普通有址信函投递服务，外包公路运输
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cohort`
- 来源：`un-cpc3-68011`

##### 废物流

###### 废胶粘纸质路由标签（`label_waste`）

计量运营方使用后废胶粘纸质路由标签；记录胶粘剂及印刷状态和接收处理，不与客户信函混淆，不默认回收抵扣。

- 选定流：邮政已印刷胶粘纸质路由标签废物
- 流属性/单位：质量 / kg
- 数量规则：按第8节废物来源方法，以本卡声明材料及干湿基准的原队列/分层归属产生质量/D；包含留存废物及有依据的最终处理。保管外运核验原事件，不再作为新产生或后来队列负担。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：

###### 授权销毁的纸质信函（`letter_waste`）

仅在销毁已获授权且信函实际退出可投递或可退回库存、进入待销毁废物管理时，登记原队列产生质量。已登记但期末留存的废物仍计入；后续交付只验证或更新处理路线。未作处置决定、仍可投递或可退回的信函不得计作废物；已销毁件不增加妥投件数。不默认回收抵扣。

- 选定流：邮政授权销毁的废纸质信函
- 流属性/单位：质量 / kg
- 数量规则：按第8节废物来源方法，以本卡声明材料及干湿基准的原队列/分层归属产生质量/D；包含留存废物及有依据的最终处理。保管外运核验原事件，不再作为新产生或后来队列负担。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：

###### 废高密度聚乙烯邮件托盘（`tray_waste`）

按a_tray_lifecycle用与托盘制造相同的完整寿命份额归属寿终残余处理；另留实际退役库存与接收记录，用于核验和更新生命周期模型。mail_tray制造不含处置。

- 选定流：废高密度聚乙烯邮件托盘
- 流属性/单位：质量 / kg
- 数量规则： 按a_tray_lifecycle计算sum(寿终残余托盘kg*与mail_tray相同的f)/D；实际退役移交仅作监管记录，不再增加分子。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：

###### 排入下水道的卫生及清洁污水（`sanitary_wastewater`）

在下水道接口计量排水，或以文件化场址水量平衡及其不确定性核对；这是交付处理的废物转移，不是向淡水排放的基本流。

- 选定流：排入下水道的未处理卫生及清洁污水
- 流属性/单位：体积 / m3
- 数量规则：第 8 节确定的每参考流最终报告数量。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：

### 过程：支持接口及前景活动（常温公路信函干线运输）(`support_linehaul`)

#### 输入

##### 产品流

###### 常温公路信函干线运输 (`svc_linehaul`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的常温公路信函干线运输。计量：实际毛载荷吨数乘实际载货路段公里数后求和；匹配服务包含其归属的空驶返程和车辆生命周期。按 cp_interface_linehaul 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_linehaul 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_linehaul。

- 选定流: 常温公路信函干线运输
- 流属性/单位: 运输活动量 / t*km
- 数量规则： sum(A_s,e * alpha_s,e) / D；原生服务单位 t*km；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_linehaul`

###### 车用柴油 (`u_linehaul_diesel`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 采集质量，或体积与实测/供应商密度。 按第8节 `inv_trunk_scope`、`inv_fuel_gate` 执行。

- 选定流: 车用柴油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_linehaul`

###### 车用汽油 (`u_linehaul_gasoline`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 采集质量，或体积与实测/供应商密度。 按第8节 `inv_trunk_scope`、`inv_fuel_gate` 执行。

- 选定流: 车用汽油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_linehaul`

###### 交流电 (`u_linehaul_traction_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。仅用于有证据的纯电/插电车辆及计量充电供电；同一充电不得再计入前景 facility_electricity。 按供电侧计量充电电量并记录地点、电压和充电损失；不得把电池输出再次计为电力输入。 仅适用于独立证实的使用点交流电；此通用UUID不确定供应商、电网、电压或发电技术。表计kWh仅乘一次3.6转MJ；安装/维修与运行交流电的表计/阶段责任互斥。 按第8节 `inv_trunk_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_linehaul`

###### 工厂交付的完整道路货车 (`u_linehaul_vehicle_factory_gate`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。仅为独立交付的实际车型，须有序列号/型号、自重、动力类型及部件/BOM边界；不同型号分行。 一辆制造完成并含原装部件的车辆；排除运行、后续维修、道路基础设施及寿终。整车与内含部件不得同时计入。使用有证据的寿命消耗份额，不使用当期采购辆数。 对同一交付车型/资产队列，Q_a 为任何摊销之前的原始完整制造车辆数。f=(供应方期间完整线路车辆公里/有证据的完整寿命车辆公里)×上述固定队列线路份额，空返/调位须在两者范围一致包含。q_prod=Q_a×f/D；每个车辆终态流使用其原始完整生命周期Q_e及完全相同f/D。不得再乘线路份额。缺完整寿命距离或匹配工况即阻断。 按第8节 `inv_trunk_scope`、`inv_asset_basis` 执行。

- 选定流: 工厂交付的完整道路货车
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_linehaul`

###### 车辆维护用交付矿物润滑油 (`u_linehaul_mineral_lubricant`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。仅当有确切矿物油牌号及实测领用/补充证据；合成油和润滑脂须另设已识别行。 工厂交付产品之外实际维护用油；采集领用、退回、设备内留存及废油以避免重复。 按第8节 `inv_trunk_scope`、`inv_maintenance_share` 执行。

- 选定流: 车辆维护用交付矿物润滑油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_linehaul`

#### 输出

##### 废物流

###### 废矿物润滑油 (`u_linehaul_waste_mineral_lubricant`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。仅为有接收方及组成证据、单独收集的废矿物油；不含留在寿终车辆内的油。 移交质量仅连接一次完整匹配的贮存/运输/处理链；不得再把内含烃类列为第二废物流。 按第8节 `inv_trunk_scope`、`inv_maintenance_share` 执行。

- 选定流: 废矿物润滑油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_linehaul`

###### 移交合规拆解方的退役完整道路货车 (`u_linehaul_retired_vehicle`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。仅用于有残留液体/部件及接收接口记录、独立移交的完整资产；否则须列已识别的分选输出。 使用与工厂交付车辆相同的资本寿命消耗份额。这是实物废物载体，不是拆解/回收服务。后续拆解、残余物、排放及最终处理仍属强制范围，在明确盘查前未验证。 配对制造行u_linehaul_vehicle_factory_gate：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_trunk_scope`、`inv_terminal_basis` 执行。

- 选定流: 移交合规拆解方的退役完整道路货车
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_linehaul`

##### 基本流

###### 化石二氧化碳排放至空气 (`u_linehaul_co2_fossil_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 因子范围须排除燃料供给中已计的上游排放。 按第8节 `inv_trunk_scope`、`inv_vehicle_species` 执行。

- 选定流: 化石二氧化碳排放至空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_linehaul`

###### 一氧化碳排放至空气 (`u_linehaul_co_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 因子范围须排除燃料供给中已计的上游排放。 按第8节 `inv_trunk_scope`、`inv_vehicle_species` 执行。

- 选定流: 一氧化碳排放至空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_linehaul`

###### 一氧化氮排放至空气 (`u_linehaul_no_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 因子范围须排除燃料供给中已计的上游排放。 按第8节 `inv_trunk_scope`、`inv_vehicle_species` 执行。

- 选定流: 一氧化氮排放至空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_linehaul`

###### 二氧化氮排放至空气 (`u_linehaul_no2_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 因子范围须排除燃料供给中已计的上游排放。 按第8节 `inv_trunk_scope`、`inv_vehicle_species` 执行。

- 选定流: 二氧化氮排放至空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_linehaul`

###### 一氧化二氮排放至空气 (`u_linehaul_n2o_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 因子范围须排除燃料供给中已计的上游排放。 按第8节 `inv_trunk_scope`、`inv_vehicle_species` 执行。

- 选定流: 一氧化二氮排放至空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_linehaul`

###### 甲烷排放至空气 (`u_linehaul_ch4_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 因子范围须排除燃料供给中已计的上游排放。 按第8节 `inv_trunk_scope`、`inv_vehicle_species` 执行。

- 选定流: 甲烷排放至空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_linehaul`

###### 二氧化硫排放至空气 (`u_linehaul_so2_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 因子范围须排除燃料供给中已计的上游排放。 按第8节 `inv_trunk_scope`、`inv_vehicle_species` 执行。

- 选定流: 二氧化硫排放至空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_linehaul`


### 过程：支持接口及前景活动（常温信函厢式车揽投轮次）(`support_van_round`)

#### 输入

##### 产品流

###### 常温信函厢式车揽投轮次 (`svc_van_round`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的常温信函厢式车揽投轮次。计量：完整轮次实际车辆公里，包含载货、空驶、失败和重复路段；仅应用一次原移动/停靠受益份额。按 cp_interface_van_round 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_van_round 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_van_round。

- 选定流: 常温信函厢式车揽投轮次
- 流属性/单位: 车辆行驶距离 / vehicle*km
- 数量规则： sum(A_s,e * alpha_s,e) / D；原生服务单位 vehicle*km；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_van_round`

###### 车用柴油 (`u_van_round_diesel`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 采集质量，或体积与实测/供应商密度。 按第8节 `inv_fuel_gate`、`inv_van_scope` 执行。

- 选定流: 车用柴油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_round`

###### 车用汽油 (`u_van_round_gasoline`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 采集质量，或体积与实测/供应商密度。 按第8节 `inv_fuel_gate`、`inv_van_scope` 执行。

- 选定流: 车用汽油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_round`

###### 交流电 (`u_van_round_traction_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。仅用于有证据的纯电/插电车辆及计量充电供电；同一充电不得再计入前景 facility_electricity。 按供电侧计量充电电量并记录地点、电压和充电损失；不得把电池输出再次计为电力输入。 仅适用于独立证实的使用点交流电；此通用UUID不确定供应商、电网、电压或发电技术。表计kWh仅乘一次3.6转MJ；安装/维修与运行交流电的表计/阶段责任互斥。 按第8节 `inv_van_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_round`

###### 工厂交付的完整厢式投递车 (`u_van_round_vehicle_factory_gate`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。仅为独立交付的实际车型，须有序列号/型号、自重、动力类型及部件/BOM边界；不同型号分行。 一辆制造完成并含原装部件的车辆；排除运行、后续维修、道路基础设施及寿终。整车与内含部件不得同时计入。使用有证据的寿命消耗份额，不使用当期采购辆数。 对同一交付车型/资产队列，Q_a 为任何摊销之前的原始完整制造车辆数。f=(供应方期间完整线路车辆公里/有证据的完整寿命车辆公里)×上述固定队列线路份额，空返/调位须在两者范围一致包含。q_prod=Q_a×f/D；每个车辆终态流使用其原始完整生命周期Q_e及完全相同f/D。不得再乘线路份额。缺完整寿命距离或匹配工况即阻断。 按第8节 `inv_asset_basis`、`inv_van_scope` 执行。

- 选定流: 工厂交付的完整厢式投递车
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_round`

###### 车辆维护用交付矿物润滑油 (`u_van_round_mineral_lubricant`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。仅当有确切矿物油牌号及实测领用/补充证据；合成油和润滑脂须另设已识别行。 工厂交付产品之外实际维护用油；采集领用、退回、设备内留存及废油以避免重复。 按第8节 `inv_maintenance_share`、`inv_van_scope` 执行。

- 选定流: 车辆维护用交付矿物润滑油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_round`

#### 输出

##### 废物流

###### 废矿物润滑油 (`u_van_round_waste_mineral_lubricant`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。仅为有接收方及组成证据、单独收集的废矿物油；不含留在寿终车辆内的油。 移交质量仅连接一次完整匹配的贮存/运输/处理链；不得再把内含烃类列为第二废物流。 按第8节 `inv_maintenance_share`、`inv_van_scope` 执行。

- 选定流: 废矿物润滑油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_round`

###### 移交合规拆解方的退役完整厢式投递车 (`u_van_round_retired_vehicle`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。仅用于有残留液体/部件及接收接口记录、独立移交的完整资产；否则须列已识别的分选输出。 使用与工厂交付车辆相同的资本寿命消耗份额。这是实物废物载体，不是拆解/回收服务。后续拆解、残余物、排放及最终处理仍属强制范围，在明确盘查前未验证。 配对制造行u_van_round_vehicle_factory_gate：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_basis`、`inv_van_scope` 执行。

- 选定流: 移交合规拆解方的退役完整厢式投递车
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_round`

##### 基本流

###### 化石二氧化碳排放至空气 (`u_van_round_co2_fossil_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 因子范围须排除燃料供给中已计的上游排放。 按第8节 `inv_vehicle_species`、`inv_van_scope` 执行。

- 选定流: 化石二氧化碳排放至空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_round`

###### 一氧化碳排放至空气 (`u_van_round_co_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 因子范围须排除燃料供给中已计的上游排放。 按第8节 `inv_vehicle_species`、`inv_van_scope` 执行。

- 选定流: 一氧化碳排放至空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_round`

###### 一氧化氮排放至空气 (`u_van_round_no_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 因子范围须排除燃料供给中已计的上游排放。 按第8节 `inv_vehicle_species`、`inv_van_scope` 执行。

- 选定流: 一氧化氮排放至空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_round`

###### 二氧化氮排放至空气 (`u_van_round_no2_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 因子范围须排除燃料供给中已计的上游排放。 按第8节 `inv_vehicle_species`、`inv_van_scope` 执行。

- 选定流: 二氧化氮排放至空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_round`

###### 一氧化二氮排放至空气 (`u_van_round_n2o_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 因子范围须排除燃料供给中已计的上游排放。 按第8节 `inv_vehicle_species`、`inv_van_scope` 执行。

- 选定流: 一氧化二氮排放至空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_round`

###### 甲烷排放至空气 (`u_van_round_ch4_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 因子范围须排除燃料供给中已计的上游排放。 按第8节 `inv_vehicle_species`、`inv_van_scope` 执行。

- 选定流: 甲烷排放至空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_round`

###### 二氧化硫排放至空气 (`u_van_round_so2_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 因子范围须排除燃料供给中已计的上游排放。 按第8节 `inv_vehicle_species`、`inv_van_scope` 执行。

- 选定流: 二氧化硫排放至空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_round`


### 过程：支持接口及前景活动（配置明确的信函分拣机可用服务，不含运行公用工程）(`support_sorting_asset`)

#### 输入

##### 产品流

###### 配置明确的信函分拣机可用服务 (`svc_sorting_asset`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的配置明确的信函分拣机可用服务，不含运行公用工程。计量：按原运行/班次账本归属的实际配置设备小时；包含提供、维护和寿终责任，不含独立计量的运行耗用。按 cp_interface_sorting_asset 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_sorting_asset 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_sorting_asset。

- 选定流: 配置明确的信函分拣机可用服务
- 流属性/单位: 时间 / h
- 数量规则： sum(A_s,e * alpha_s,e) / D；原生服务单位 h；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_sorting_asset`

###### 完整信函分拣机交付 (`u_sorting_asset_factory_gate`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。上述完整信函分拣机的制造/建设、分别识别的维护及最终寿终；不含运行公用工程。 实物阶段：制造/建造及独立安装。仅为实际独立交付、具有明确部件边界的资产；不同型号或结构分列。 仅含交付前制造/建设。排除运行公用工程、维护/更换、废物管理及寿终。明确该接口包含的现场组装/施工，避免另计其已含物料。 Q_a 为独立制造交付接口、摊销前的原始完整分拣机数量。f=目标队列已归属服务机时/有证据的完整寿命机时，运行/占用机时定义须完全相同。按 a_hierarchy/cp_assets 保留全用户、待机/闲置、拒收及尾部。q_prod=Q_a×f/D；各终态Q_e使用完全相同f/D。分子已含队列归属，不再乘第二份额。缺寿命/能力证据即阻断。 按第8节 `inv_asset_basis` 执行。

- 选定流: 完整信函分拣机交付
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_sorting_asset`

#### 输出

##### 废物流

###### 退役完整信函分拣机 (`u_sorting_asset_retired_asset`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。上述完整信函分拣机的制造/建设、分别识别的维护及最终寿终；不含运行公用工程。 实物阶段：配对资产寿终。仅为有独立接收接口与确切残留组成/部件范围记录的整机。 与资本输入使用完全相同的寿命份额；完整下游实物处理盘查仅连接一次。这不是成包拆解或拆除服务。 配对制造行u_sorting_asset_factory_gate：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_basis` 执行。

- 选定流: 退役完整信函分拣机
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_sorting_asset`


### 过程：支持接口及前景活动（邮政场所建筑空间占用服务，不含运行公用工程）(`support_premises`)

#### 输入

##### 产品流

###### 邮政场所建筑空间占用服务 (`svc_premises`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的邮政场所建筑空间占用服务，不含运行公用工程。计量：按分区及原全用户份额计算的实际占用面积平方米乘占用小时；排除直接计量的现场公用工程。按 cp_interface_premises 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_premises 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_premises。

- 选定流: 邮政场所建筑空间占用服务
- 流属性/单位: 面积时间 / m2*h
- 数量规则： sum(A_s,e * alpha_s,e) / D；原生服务单位 m2*h；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_premises`

###### 建成的邮政分拣/柜台建筑壳体交付 (`u_premises_construction_gate`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。上述建成的邮政分拣/柜台建筑壳体的制造/建设、分别识别的维护及最终寿终；不含运行公用工程。 实物阶段：制造/建造及独立安装。仅为实际独立交付、具有明确部件边界的资产；不同型号或结构分列。 仅含交付前制造/建设。排除运行公用工程、维护/更换、废物管理及寿终。明确该接口包含的现场组装/施工，避免另计其已含物料。 Q_a 为摊销前原始完整建筑壳体交付面积。f=目标队列/服务层已归属占用/保留面积小时/同资产完整寿命占用/保留面积小时；必须为同资产、同面积及同日历小时定义。premises_service 分子为F_s；premises 为其已归属队列面积小时。q_prod=Q_a×f/D；各完整生命周期拆除流Q_e使用完全相同f/D。队列/服务层份额已含f内，不得再乘。缺寿命/面积边界即阻断。 按第8节 `inv_asset_basis` 执行。

- 选定流: 建成的邮政分拣/柜台建筑壳体交付
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_premises`

#### 输出

##### 废物流

###### 邮政建筑拆除混凝土 (`u_premises_retired_asset`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。上述建成的邮政分拣/柜台建筑壳体的制造/建设、分别识别的维护及最终寿终；不含运行公用工程。 实物阶段：配对资产寿终。仅当实际拆除产生此单独计量混凝土流；排除金属/木材及其他单独收集流。 与资本输入使用完全相同的寿命份额；完整下游实物处理盘查仅连接一次。这不是成包拆解或拆除服务。 配对制造行u_premises_construction_gate：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_basis` 执行。

- 选定流: 邮政建筑拆除混凝土
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_premises`



## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_hierarchy | 全部清单行 | 优先直接计量和分割。共享分拣机按各服务层实测处理时间分配变动电量和资产小时，待机量按同期间占用机器小时分配；共享柜台按观察处理分钟分配。全部服务含包裹及其他邮件份额须与完整实测总量对账；不得按收入分配。 | `upu-postal-ghg-2010` |
| a_facility | facility_electricity, hot_water_heat, activity_premises, tap_water, sanitary_wastewater | 剔除过程分表负荷后，共享照明、空间供热及场站按占用面积小时分配。卫生用水按排班中各服务人员小时分配，清洁用水按清洁面积小时分配；支持管理按受支持作业人员小时分配。闲置或拒收相关负担保留于期间资源池，不得置零。 | `upu-postal-ghg-2010` |
| a_transport | activity_linehaul, activity_van_round | 干线使用实际载荷吨公里及已含空返和利用率的匹配承运模型。厢式车线路按分段载荷质量份额分配行驶资源，按停车服务分钟分配停车和怠速资源，执行 calc_round。每物理路段只用其中一个模型；保留完整空驶调位负担以及全部包裹、信函和其他服务份额。 |  |
| a_failure | delivered_letter | 在声明服务层内，将已结清队列全部负担含最终退回、遗失、授权处置、收寄拒收份额及全部重试一次性除以 D。退回、改寄和重试事件不是共产品，不产生额外 D。其他服务分配在此除法之前进行，不得之后再次分配；不得给予替代产品抵扣。 | `usps-undeliverable-mail` |
| a_rejected_intake | postal_letter_service | 拒收前事务 R 不进入 A、D、T、L、X。按其所申请的服务类别及层和柜台处理分钟，先将实测柜台接收资源池归属到相应服务层。仅纳入与收寄自然月同月发生、拟购买本配置的拒收处理及其支持份额；再与该月已收寄队列其他 J 合并，最终除以 D 一次。不得按拒收件数再乘失败率，也不得跨月转移其负担。无法识别申请类别或处理时长则该分配不完整。 |  |
| a_tray_lifecycle | mail_tray; tray_waste | 每个明确托盘资产批次统一使用f=本队列归属的装载使用循环/有证据的完整寿命装载循环，同时归属制造与最终处理。制造kg=原始托盘净kg*f；寿终废物kg=实测退役残余kg或由当前实测净质量和有记录的遗失、回用及移除计划推算并披露的前瞻残余kg，再乘同一f。完整寿命包括全部使用者及后续回用、提前破损与日历退役。按calc_capital_restatement保存已记量并在每次寿命修订时重算全部原受益队列。实际退役及接收记录更新该模型，并单独保留为保管监管台账，不再叠加当期处理交换。寿命、残余质量或去向未知阻断完整性。 每个装载循环以一个托盘ID从首次装入至最后卸空为界，货物或归属变化时拆区间。同循环的一个使用次数按各队列/服务层净载物kg*驻留h除以该托盘循环全部载物kg*h分配，不含托盘皮重；累计归属循环份额后再算f。专用循环份额为1。须实测质量并逐次记录装卸时间；全部载物覆盖缺失阻断完成。空返及维持时段不额外产生装载循环产出，但须反映于完整寿命、处理运输活动及日历/提前退役证据。最终退役按实测完整寿命受益循环份额重算制造和终态量并更正各原队列及原D，退役时点只触发更正，不建立退休当期余额负担。从未使用托盘仅凭唯一委托服务责任归属，否则分配不完整。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 |  |
| allocation_waste_origin | label_waste; letter_waste | 每笔普通固体废物在产生时固定原服务队列及分层责任，不按后来外运时点归属。优先追溯直接产生任务；共享产生量采用现有场站/处理作业分配驱动，覆盖已记录产生区间内全部客户及非队列工作量。产生事件ID、产生日期、原份额和原参考流分母随暂存及内部转移保留。接入旧废物不是新产生。留存废物仍承担原处理责任，外运期服务不继承该负担。 对共享产生量，固定按当地日历月边界拆记录（68013仍采用已声明柜台核算期间）；在同一产生区间内采用既定场站任务/处理作业驱动，不用后来外运或完整队列窗口的份额。直接事件归属优先。 期间归属前记录场站时区。 |  |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_atomic_physical | 支持过程的实物清单 | 逐供应方、场站、配置、事件及核算区间，先将每项实测实物总量划入互斥清单责任，再选研究队列。使用该支持过程固定的活动驱动，分母包含全部使用者及失败作业。直接因果归属优先于共享分配。数量已归属时不得再次乘队列份额。服务层分配量仅作原始驱动，不作交换量，也不再次除最终参考流件数。表计/库存、安装/替换资产、内部转移、产生废物及去向须在同一物理/时间边界闭合。完整产品gate可保留其制造背景，但不得换名重引入一张汇总服务卡。 |  |
| allocation_atomic_capital | 制造；安装；寿终资产 | 逐实物资产序列号/批次a，以本卡单位确定实际制造/建造gate产品量Q_a。按过程/资产固定驱动及相同配置/容量单位，f_c,a=队列归属实物寿命活动_c,a/有证据完整寿命全使用者活动_a。制造q=sum(Q_a*f_c,a)/N_ref；每次初装及整机替换都建立独立资产批次，只计一次，不再作为当期维修整机投入。产品gate外的安装实物量采用同一被安装资产份额。按相容退役实测或有证据前瞻残余/再用/保留计划确定的寿终残余量，采用其自身单位、完全相同f_c,a及原参考流分母；实际保管转移仅核验/更新模型。较早拆出部件须从终态残余剔除。寿命和原受益队列按calc_capital_restatement全历史重算；寿命须证据和敏感性，不设数值默认。真实部件维修/替换按实际因果事件或固定供应方维修年份额分配，不再乘完整寿命份额。完整部件若作为独立投运资本资产再用，应另建自身序列号/寿命台账，不得两种处理同时采用。 |  |
| allocation_capital_restatement | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | 本PCR采用全历史重算，不冻结历史份额，也不把余额集中补入退役当期。全部直接和支持资本、可重复使用容器、产品gate外安装及配对终态来源均执行calc_capital_restatement。各具体活动规则确定驱动和受益份额，仅应用一次。已含交付/寿终的完整资产背景采用相同重算，不另加重复终态交换。例行部件维修仍按其因果/期间方法处理。 |  |
| allocation_atomic_waste | 运行和维护产生的废物 | 运行及维护产生废物的原产生事件、供应方/活动队列、份额及原参考流分母须随暂存和转移保留。共享废物区间固定为声明时区的当地日历月，采用同区间因果活动及全部使用者；既有更具体维修年或柜台期间方法优先适用。在一致材料/水分基准核对：期末=期初+产生+内部转入-内部转出-外运-有证据物理损失。留存废物仍须有实际证据或明确有证据相容前瞻路线及不确定性的最终暂存/运输/处理，去向未知保持不完整。后来回执替换原事件模型，不新增外运期负担。资产寿终废物改用配对资本份额。废物载体及内含组分、储存损失/释放及残余处理不得重复；同一实测场站/暂存作业只归一个清单责任方。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_provider_maintenance_period | u_linehaul_mineral_lubricant; u_linehaul_waste_mineral_lubricant; u_van_round_mineral_lubricant; u_van_round_waste_mineral_lubricant | 逐共享常规供应方维护池，将区间y固定为站点当地日历年，记录时区及确切资产/场站/配置。跨年队列须拆为各年内活动。实际安装/消耗材料M_x,y及分别实测的产生废物采用同年s_c,y=队列归属受益驱动_y/全受益驱动_y，再q=sum_y(M_x,y*s_c,y)/N_ref，仅一次。驱动采用activity_*已固定的支持过程实物活动；车辆维护用实际车公里，空驶/失败先归属一次；变动道路养护用同年有证据逐车型工程损坏需求；建筑结构用保留楼面面积日历小时。其他共享支持设备用其既定实际全受益任务/周期/并集小时驱动，保留确切配置分层，不重复并发。签署维护工单须在计算前固定因果资产及任务池，不留给后续建模选择。特定事故/故障维修仅归证实因果订单/任务集合，不再进入年度常规池。真实组件消耗排除未用期初末库存、未安装退回及内部转移；拆出件产生保留原事件/年份/份额随以后保管转移。不假定投入与拆出件质量相同。真实组件维修只乘一次年度份额，不乘整寿命f；整机替换另建资本批次。正维护池无证据或全用户分母为零/未知均阻断完整性。此前引用的保留供应维护卡同样执行；各自产生/去向平衡及精确重叠排除仍强制。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cohort | postal_letter_service | delivered_letter | 行程台账 | 唯一保管标识；收寄日期与场站；另列未进入保管的拒收事务标识 R、日期、柜台、拟申请服务类别及层、拒收原因和处理分钟；普遍服务及服务代码；质量尺寸；起讫地；每次交接、试投、改寄和退回；终态日期与结果；质量状态；运输时间；期初期末未结件 | 以收寄扫描或经审计托盘清单对账投递清单及最终退回、遗失和授权处置记录；必须有完整收寄及终态台账；抽样只能审计台账，不得代替队列终态结清。普通无跟踪邮件若无法取得该证据，完整结果不通过。另行以拒收日志核对 R，不加入 A。不得假定发出等于妥投。 | Item(s); kg; day | 逐事件；逐收寄月份结清 | 整个收寄月份及完整终态跟踪尾期 | 队列使用的全部柜台、场站和承运人 | 每参考流 | 经审计完整清单；服务条款；终态证据；拒收台账；计数审计和误差范围 |
| cp_interface_linehaul | support_linehaul | svc_linehaul | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集实际毛载荷吨数乘实际载货路段公里数后求和；匹配服务包含其归属的空驶返程和车辆生命周期。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | t*km | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_van_round | support_van_round | svc_van_round | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集完整轮次实际车辆公里，包含载货、空驶、失败和重复路段；仅应用一次原移动/停靠受益份额。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | vehicle*km | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_sorting_asset | support_sorting_asset | svc_sorting_asset | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集按原运行/班次账本归属的实际配置设备小时；包含提供、维护和寿终责任，不含独立计量的运行耗用。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | h | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_premises | support_premises | svc_premises | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集按分区及原全用户份额计算的实际占用面积平方米乘占用小时；排除直接计量的现场公用工程。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | m2*h | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_capital_restatement | postal_letter_service; support_linehaul; support_van_round; support_sorting_asset; support_premises | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | versioned_asset_cohort_ledger | 资产/来源ID；来源阶段及本征单位；原队列/分层与因果父队列；原参考分母及修订；按原期间记录的全用户实际驱动；固定受益份额；完整寿命驱动预测/版本及证据；制造/安装量；终态净残余/路线及版本；此前已记归属原始量B及归一结果；重算f/A/q与有正负号更正；零使用投运责任；重叠排除 | 逐序列/来源对照资产登记、活动表计、供方产品gate与原始结果台账；每次变化执行calc_capital_restatement。用原计量驱动及全用户证据复算，不改实物库存。按来源和原队列核对旧值、新值、差额及原分母；由原记录责任人保存版本与校准证据。 | 来源本征单位；原驱动单位；Item(s) | 每次采购/投运、活动、寿命或来源修订及退役；逐原报告期对账 | 完整资产寿命与全部受影响原队列 | 同资产配置全部用户；原产品gate及独立安装/终态 | 每参考流 | 序列/来源登记、表计校准、寿命证据、接收记录、原队列结果及修订链 |
| cp_facility | postal_letter_service | facility_electricity; hot_water_heat | 表计台账 | 场址及表计标识；运行及班次标识；设备和柜台标识；该运行或班次处理的队列标识与件数、服务层及各队列设备占用和柜台处理分钟；读数；单位；区间；分拣运行及待机小时；柜台处理分钟；其他服务负荷；面积小时；人员小时；账单；校准；热量接口 | 读取各场站电表与热表；以账单、设备日志和占用空间核对分表；将每一运行或班次的表计区间与队列处理清单连接，记录各队列实测设备时间和柜台处理分钟；依据设备台账识别全电或无购热状态，不得依据缺失账单。 | kWh; MJ; h; m2; min | 逐日记录并按月对账 | 队列活动月份及尾期 | 全部实际处理场站及支持份额 | 每参考流 | 表计校准；账单；排班占用日志；未发生证据 |
| cp_carriage | postal_letter_service | activity_linehaul; activity_van_round | 承运线路记录 | 承运人、车辆及燃料；分包边界；路段标识；载货和空驶距离；逐段信函、包裹及其他货物实测质量；托盘皮重；行驶和停车能耗；各服务停车分钟；线路总能耗；承运资产寿命和维护覆盖 | 先按 foreground_interface_coverage 确定责任。接口活动、供应方接口/质量及兼容证据仍须采集；以下供应方内部实物/资本/物种字段仅对前景责任组成采集。外部组成使用对应 cp_interface_ 协议及兼容背景证据，不重复展开供应方内部。取得承运方遥测、燃料或能耗记录及边界明确的清单。对账实测线路总距离能耗、空驶路段和结算活动；要求承运方提供行驶停车拆分的原始记录，不得选用通用比例。 | kg; km; t*km; vehicle*km; min; MJ | 逐行程、线路及路段；按月对账 | 每次队列行程含退回重试尾期 | 所有外购公路路段及嵌套分包商 | 每参考流 | 承运证据；称重遥测校准；定位记录；账单；分配审计 |
| cp_assets | postal_letter_service | activity_sorting_asset; activity_premises | 资本服务台账 | 资产建筑标识；完整部件边界；面积；实际占用或运行小时；使用寿命；寿命占用或吞吐量；制造建设；维护；退役；共享服务小时；运行及班次到队列的资产占用连接；各队列机器小时和面积小时 | 核实供应商服务模型，或以文件化完整生命周期清单和寿命分母建立自有资产服务模型；核对停机及提前退役。不得虚构寿命，不得把金额当作数量。 | h; m2*h | 年度清查及逐月利用日志 | 与队列年度匹配的代表性寿命记录 | 范围内全部分拣设备与场站 | 每参考流 | 资产台账；模型覆盖；工程寿命记录；维护退役记录 |
| cp_materials | postal_letter_service | tap_water; paper_label; mail_tray | 物料与库存台账 | 水表读数；纸标签收货及期初期末库存调拨；托盘质量标识；载货使用循环；损失损坏；采购；服务及队列归属 托盘资产批次原始净kg；归属及全使用者装载循环；完整寿命循环与剩余份额；日历退役及后续回用；寿终残余kg及推算依据 托盘ID；循环ID；每次装卸时间戳；载物/队列/服务层ID；全部载物净kg及驻留h；空返维持区间及委托责任 | 读取水表并按用途核对用水。以校准秤称量标签托盘并对账库存变化；按实际循环、提前失效及库存跟踪托盘队列，不得任定重复使用次数。 托盘按a_tray_lifecycle使用相同序列号/资产批次及寿命基准；记录前瞻寿终质量、去向和不确定性。 | m3; kg; cycle | 逐次收货退役；按月平衡 | 与队列一致的活动期间及尾期 | 全部处理场址及循环托盘池 | 每参考流 | 水表秤校准；库存平衡；托盘循环台账；供应商组成 |
| cp_waste | postal_letter_service | label_waste; letter_waste; tray_waste; sanitary_wastewater | 废物转移记录 | 来源；废物流及状态；质量体积；日期；授权处置记录；废物期初期末库存；接收方；运输处理覆盖；水量平衡; 产生事件generation_event_id；产生时间/场站；来源任务/队列/分层；原分配份额及参考流分母；产生质量及干湿/组成基准；按原来源期初末库存；内部转移ID及两端；外运；有证据物理损失/释放；接收方及去向份额；实际/前瞻路线及模型版本；证据/不确定性；回执替换状态及修订链; 销毁授权及实际转废时间、待销毁隔离记录 | 逐种普通固废在产生点计量；后续外运称量仅作原事件的库存与接收对账，不作新产生量。计量排入下水道的污水，或建立包含已知耗水用途的场址特定水量平衡。核实授权信函销毁及接收处理；接收方未明属于缺口，不代表回收。 tray_waste的实际移交核验独立监管台账；队列生命周期贡献按a_tray_lifecycle计算，不使用退役年份的移交总量。 在产生点计量分流产生质量，暂存前记录责任任务/区间；若由完整库存平衡反推产生量，须记录全部转移、损失及测量不确定性，并保留原事件来源。执行allocation_waste_origin及calc_waste_origin。每次转移及期末，用校准及接收证据核对带来源库存。留存量必须有受支持的暂存/运输/处理覆盖；后续回执替换原事件模型，不新增外运期第二笔负担。 授权且实物确认退出可投递/退回库存时登记原队列转废；有证据的留存量照计，实际移交回执只更新原事件。未决邮件不得提前转废。 | kg; m3 | 逐次交付；按月核对；逐次普通废物产生及每月来源库存对账；每次销毁授权及实际转废 | 队列活动及最终处置尾期；原产生责任保留至最终处理证据 | 各发出场址及实际接收处理链 | 每参考流 | 交接票据；秤及表计；接收资质及处理证据；保管结清 |

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_support_linehaul | support_linehaul | u_linehaul_diesel; u_linehaul_gasoline; u_linehaul_traction_electricity; u_linehaul_co2_fossil_air; u_linehaul_co_air; u_linehaul_no_air; u_linehaul_no2_air; u_linehaul_n2o_air; u_linehaul_ch4_air; u_linehaul_so2_air; u_linehaul_vehicle_factory_gate; u_linehaul_mineral_lubricant; u_linehaul_waste_mineral_lubricant; u_linehaul_retired_vehicle | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准; 供应方/车辆/电池/会话ID；同步时钟/时区；入口交流表计/校准；实际容量及与提取分开的DC/BMS总入账I_k；期初末校准存能；配置/温度/老化匹配的交流等效曲线；来源向量S_bk及转移ID；逐源提取/损耗/期末及资本结转；正/零/未知证据；直接E_zero；因果任务及当地日历日全用户服务历时分母；表计及范围重叠责任; 维护日历年；时区；资产ID；安装/消耗M_x,y；产生残余kg；同年全用户驱动；同年队列归属驱动；因果事件/任务；未用库存/退回/转移 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。实际外购非冷链信函道路干线运输；展开的是承运背景，不改变为邮政运营方自有运输。 沿用 cp_carriage、a_transport、calc_linehaul、agg_cp_carriage。计算装载路段实际货物吨公里，包含有证据的托盘皮重。每个承运车辆/线路/期间，以本队列实际吨公里/全用户实际吨公里作为固定份额；对应实物总量须含闭合线路空返/调位负担并匹配利用率。不得再乘空返/装载系数或对同一路段套用投递车分配。资本与寿终使用同一有证据的寿命消耗份额，寿命分母匹配承运模型。保留失败、退回及尾部运输。运行/维护量按下述期间份额约定。 数量约定：运行期间 q=Q_period×a/N 仅用于 use 与 maintenance；Q_period 为实测原始期间/事件实物总量，a 为固定且对账的归属份额。production 使用原始制造/建设交付接口资产实物量 Q_a，q_prod=Q_a×f/N。各关联终态流使用同一资产队列完整生命周期的终态实物量 Q_e，q_eol=Q_e×f/N，与制造完全同f；Q_e 不是后来某期间整批外运量。f 已各含一次资产寿命服务份额与目标队列/服务层归属，不得再乘运行份额。Q_a 与 Q_e 均不得是已经摊销的供应方期间当量。如供应方仅给摊销当量，须先恢复并核实原始资产队列实物量及完整寿命分母，再应用本约定；严禁对已消耗寿命当量再次乘f。N 对68011为原D，对68013为原N_s，仅除一次。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 在供应方自身车辆/电池边界执行calc_provider_electric_stock；必须取得校准容量/交流等效实测充放电曲线、按时序带来源标签转移及闭合库存。已有allocation_charge_sources及allocation_charge_zero适用于充电来源/资本小时结转时，采用本供应方原活动责任，不再追加自营车队副本。本车辆规则不用于单独计量车间/场站/安装交流电。 本供应方实际常规/因果维护执行allocation_provider_maintenance_period及calc_provider_maintenance_period，不在每年使用全队列公里。 | 各卡原生单位；原始t*km | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_van_round | support_van_round | u_van_round_diesel; u_van_round_gasoline; u_van_round_traction_electricity; u_van_round_co2_fossil_air; u_van_round_co_air; u_van_round_no_air; u_van_round_no2_air; u_van_round_n2o_air; u_van_round_ch4_air; u_van_round_so2_air; u_van_round_vehicle_factory_gate; u_van_round_mineral_lubricant; u_van_round_waste_mineral_lubricant; u_van_round_retired_vehicle | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准; 供应方/车辆/电池/会话ID；同步时钟/时区；入口交流表计/校准；实际容量及与提取分开的DC/BMS总入账I_k；期初末校准存能；配置/温度/老化匹配的交流等效曲线；来源向量S_bk及转移ID；逐源提取/损耗/期末及资本结转；正/零/未知证据；直接E_zero；因果任务及当地日历日全用户服务历时分母；表计及范围重叠责任; 维护日历年；时区；资产ID；安装/消耗M_x,y；产生残余kg；同年全用户驱动；同年队列归属驱动；因果事件/任务；未用库存/退回/转移 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。实际外购非冷链厢式车辆收寄/投递；展开的是承运背景，不改变为邮政运营方自有运输。 沿用 cp_carriage、a_transport、calc_round、agg_cp_carriage。每条实际闭合线路 B=B_move+B_stop；U 为行驶区间能耗乘货物质量份额与停靠能耗乘服务分钟份额之和。空返/调位能耗按已装载区间归属行驶能耗份额分配；U/B 是该线路各项实测运行/维护实物总量唯一的队列份额；资本与寿终使用下述独立f约定。全部服务须回收到整条线路。全空线路须有唯一委托服务层证据，否则阻断。保留重投、退回及尾部。期间总量须由实测线路对账，不能再次按载荷分配。资本与寿终使用相同、已证实的完整寿命份额；承运方资本分配须匹配实测工况。运行/维护量按下述期间份额约定；不得再输入服务或车辆公里排放因子。 数量约定：运行期间 q=Q_period×a/N 仅用于 use 与 maintenance；Q_period 为实测原始期间/事件实物总量，a 为固定且对账的归属份额。production 使用原始制造/建设交付接口资产实物量 Q_a，q_prod=Q_a×f/N。各关联终态流使用同一资产队列完整生命周期的终态实物量 Q_e，q_eol=Q_e×f/N，与制造完全同f；Q_e 不是后来某期间整批外运量。f 已各含一次资产寿命服务份额与目标队列/服务层归属，不得再乘运行份额。Q_a 与 Q_e 均不得是已经摊销的供应方期间当量。如供应方仅给摊销当量，须先恢复并核实原始资产队列实物量及完整寿命分母，再应用本约定；严禁对已消耗寿命当量再次乘f。N 对68011为原D，对68013为原N_s，仅除一次。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 在供应方自身车辆/电池边界执行calc_provider_electric_stock；必须取得校准容量/交流等效实测充放电曲线、按时序带来源标签转移及闭合库存。已有allocation_charge_sources及allocation_charge_zero适用于充电来源/资本小时结转时，采用本供应方原活动责任，不再追加自营车队副本。本车辆规则不用于单独计量车间/场站/安装交流电。 本供应方实际常规/因果维护执行allocation_provider_maintenance_period及calc_provider_maintenance_period，不在每年使用全队列公里。 | 各卡原生单位；原始vehicle*km | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_sorting_asset | support_sorting_asset | u_sorting_asset_factory_gate; u_sorting_asset_retired_asset | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。上述完整信函分拣机的制造/建设、分别识别的维护及最终寿终；不含运行公用工程。 沿用 a_hierarchy、cp_assets、agg_cp_assets：按运行/班次关联把实测处理机时归属队列/服务层；待机按占用机时分配，包含其他服务、拒收/闲置及跨月队列尾部。每个资产区间全用户份额之和为1。f=已归属且定义匹配的机时/有证据的寿命机时；完整机制造及寿终使用同f。维护各项 q=供应方同期间实物总量×固定实测服务份额/D，仅除一次。不得再加 facility_electricity 已含运行电。 数量约定：运行期间 q=Q_period×a/N 仅用于 use 与 maintenance；Q_period 为实测原始期间/事件实物总量，a 为固定且对账的归属份额。production 使用原始制造/建设交付接口资产实物量 Q_a，q_prod=Q_a×f/N。各关联终态流使用同一资产队列完整生命周期的终态实物量 Q_e，q_eol=Q_e×f/N，与制造完全同f；Q_e 不是后来某期间整批外运量。f 已各含一次资产寿命服务份额与目标队列/服务层归属，不得再乘运行份额。Q_a 与 Q_e 均不得是已经摊销的供应方期间当量。如供应方仅给摊销当量，须先恢复并核实原始资产队列实物量及完整寿命分母，再应用本约定；严禁对已消耗寿命当量再次乘f。N 对68011为原D，对68013为原N_s，仅除一次。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 | 各卡原生单位；原始h | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_premises | support_premises | u_premises_construction_gate; u_premises_retired_asset | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。上述建成的邮政分拣/柜台建筑壳体的制造/建设、分别识别的维护及最终寿终；不含运行公用工程。 沿用 a_facility、cp_assets、agg_cp_assets：实测占用面积小时须关联区间/运行/班次与队列，全部用户/闲置/拒收及尾部对账到每资产区间份额之和为1。资本消耗份额=已归属面积小时/有证据的完整寿命面积小时；建设与寿终同份额。维护量使用同一空间占用分配，q=供应方同期间实物总量×固定份额/D，仅除一次。排除已另列的运行电、热水供热、水、分拣设备及托盘。 数量约定：运行期间 q=Q_period×a/N 仅用于 use 与 maintenance；Q_period 为实测原始期间/事件实物总量，a 为固定且对账的归属份额。production 使用原始制造/建设交付接口资产实物量 Q_a，q_prod=Q_a×f/N。各关联终态流使用同一资产队列完整生命周期的终态实物量 Q_e，q_eol=Q_e×f/N，与制造完全同f；Q_e 不是后来某期间整批外运量。f 已各含一次资产寿命服务份额与目标队列/服务层归属，不得再乘运行份额。Q_a 与 Q_e 均不得是已经摊销的供应方期间当量。如供应方仅给摊销当量，须先恢复并核实原始资产队列实物量及完整寿命分母，再应用本约定；严禁对已消耗寿命当量再次乘f。N 对68011为原D，对68013为原N_s，仅除一次。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 | 各卡原生单位；原始m2*h | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_close | delivered_letter | 选定完整自然收寄月份及服务层。将 A 件唯一收寄信函跟踪至 D 妥投、T 最终退回、L 有证遗失及 X 授权销毁或其他失败终态。要求 A = D + T + L + X 且未结件为零；最终数据要求 D > 0。重投改寄沿用同一标识。未结件负担保留于原队列台账，不得移至另一个月份的 D。 | A; D; T; L; X; cp_cohort | 已结清队列；D |  |
| foreground_interface_method | svc_linehaul; svc_van_round; svc_sorting_asset; svc_premises | 计量前按 boundary_atomic_support 将每个事件/范围组成划为互不重叠的前景实物或外部服务。现有实物卡公式、组成规则及 cp_support 协议仅适用于前者，不得为启用服务接口而要求外部供应方BOM或内部表计账本。对服务行s采集固定原生单位的原始 A_s,e，并按原具名活动分配确定 alpha_s,e：直接属于队列的事件取1；确需共享的事件保留原全用户驱动、失败/空驶/待机处理及事件窗口。已归属服务量 T_s=sum(A_s,e*alpha_s,e)；原生活动账本已含队列归属时，不得再次乘份额。q_s=T_s/N_ref，N_ref为原队列正参考产出。零产出时保留原始总量并将单位结果标为未完成。时间、面积、计数和运输活动量不得无证据换成能量或设备质量。服务清单已包含资本分配时不得再乘实物资产寿命份额。背景连接仅以q_s乘每一相同服务单位的清单一次；排放因子不是服务交换数量。原实物专用指令及服务禁用措辞仅适用于前景实物分支；服务分支执行本规则及其明确接口协议。 未完成或中止的服务事件仍保留有证据的归属负担。不得因接口以完整单位计数就将其丢弃：须以合同及执行记录证明等效原生服务量，或在声明完整前增设身份明确的部分服务行；不得假定一整单位或零。 已按最终参考流表示的供应方数值不是原始A_s,e：重新计算前须恢复原总量和分母，或证明归一结果完全等价且不再除最终分母。供应方已包含的分配仅应用一次。 | cp_interface_linehaul; cp_interface_van_round; cp_interface_sorting_asset; cp_interface_premises | 每原参考流的原生服务单位 |  |
| calc_interface_linehaul | svc_linehaul | 执行 foreground_interface_method。原生活动 A_s,e（t*km）：实际毛载荷吨数乘实际载货路段公里数后求和；匹配服务包含其归属的空驶返程和车辆生命周期。仅将原 activity_linehaul 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/D，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_linehaul; activity_linehaul | t*km/D |  |
| calc_interface_van_round | svc_van_round | 执行 foreground_interface_method。原生活动 A_s,e（vehicle*km）：完整轮次实际车辆公里，包含载货、空驶、失败和重复路段；仅应用一次原移动/停靠受益份额。仅将原 activity_van_round 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/D，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_van_round; activity_van_round | vehicle*km/D |  |
| calc_interface_sorting_asset | svc_sorting_asset | 执行 foreground_interface_method。原生活动 A_s,e（h）：按原运行/班次账本归属的实际配置设备小时；包含提供、维护和寿终责任，不含独立计量的运行耗用。仅将原 activity_sorting_asset 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/D，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_sorting_asset; activity_sorting_asset | h/D |  |
| calc_interface_premises | svc_premises | 执行 foreground_interface_method。原生活动 A_s,e（m2*h）：按分区及原全用户份额计算的实际占用面积平方米乘占用小时；排除直接计量的现场公用工程。仅将原 activity_premises 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/D，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_premises; activity_premises | m2*h/D |  |
| calc_linehaul | activity_linehaul | 将队列实际运输载荷吨数乘实际载货路段公里后求和。承运方每吨公里模型须覆盖相容利用率及空返；不得再乘载荷因子或空返系数。邮件载荷包含文件化托盘皮重，不得虚构信函质量。 这些仅为供应方原始活动诊断，不是清单交换。对应支持过程只使用分别具名实物行，采用原始活动及一次最终参考流归一化。 | cp_carriage | 原始活动诊断：归属的 t*km |  |
| calc_round | activity_van_round | 各厢式车线路以 B 表示实测总运行能耗，B_move、B_stop 为实测行驶及停车能耗，B = B_move + B_stop 且 B > 0。两池互斥且穷尽，不得分别对同一个 B 分配两次。各服务层的 U 等于逐段行驶能耗乘实际载荷质量份额之和，加逐停点能耗乘实测停车服务分钟份额之和。空驶调位段按载货段已归属行驶能耗份额分给该线路全部服务。等效归属车辆公里等于完整线路车辆公里乘 U/B；全部服务之和须等于完整线路车辆公里。完全空载的线路仅可依据调度记录归属到有证据的唯一委托服务层；若责任共享或不明确，则分配不完整并保留该线路负担，不得置零。仅可使用同一实测工况的每车辆公里承运模型；B 非正、拆分或份额缺失时完整结果不通过。 这些仅为供应方原始活动诊断，不是清单交换。对应支持过程只使用分别具名实物行，采用原始活动及一次最终参考流归一化。 | cp_carriage; B; B_move; B_stop; U | 原始活动诊断：归属的 vehicle*km |  |
| calc_final | 全部清单行 | 对每个非参考行，以 J 表示其他服务分配后该已结清队列完整可归属总量，包含终态失败及处理负担。每参考流仅报告一次 J / D，分子保持声明行单位。来源已经提供 J/D 时先核对，不得再除。delivered_letter 恰为 1 Item(s)，其他行均不固定为 1。 | J; D; cp_cohort; 适用行协议 | 每参考流一个数量 |  |
| agg_cp_cohort | delivered_letter | 每一收寄标识只有一个最终结果；最终定稿前核对 A = D + T + L + X 且未结件为零。排除其他收寄月份转入件，但将其负担结转至原队列。 | cp_cohort | 每参考流最终数量 |  |
| agg_cp_facility | facility_electricity, hot_water_heat | 按 a_hierarchy 和 a_facility 将实测总量分配至队列，再按 calc_final 得每参考流。逐表计区间核对全部服务和全部收寄队列（含跨月尾期）的分配份额和为 1；未分配残差不得丢弃，完整结果不通过。 | cp_facility | 每参考流最终数量 |  |
| agg_cp_carriage | activity_linehaul, activity_van_round | 这些仅为供应方原始活动诊断，不是清单交换。对应支持过程只使用分别具名实物行，采用原始活动及一次最终参考流归一化。 每唯一物理路段使用 calc_linehaul 或 calc_round，分配至队列后再执行 calc_final 得每参考流。 这些仅为供应方原始活动诊断，不是清单交换。对应支持过程只使用分别具名实物行，采用原始活动及一次最终参考流归一化。 | cp_carriage | 原始活动诊断：每参考流最终数量 |  |
| agg_cp_assets | activity_sorting_asset, activity_premises | 按运行、班次和队列占用连接归属机器小时及面积小时；各资产区间的全部队列及其他服务份额和须为 1。完整生命周期负担除以文件化寿命服务能力，再乘归属服务需求一次；执行 calc_final 得每参考流。 这些仅为供应方原始活动诊断，不是清单交换。对应支持过程只使用分别具名实物行，采用原始活动及一次最终参考流归一化。 | cp_assets | 原始活动诊断：每参考流最终数量 |  |
| agg_cp_materials | tap_water, paper_label, mail_tray | 计算可归属实际用水、标签消耗及分摊托盘制造；保留库存变化，按 calc_final 得每参考流。 | cp_materials | 每参考流最终数量 |  |
| agg_cp_waste | label_waste, letter_waste, tray_waste, sanitary_wastewater | label_waste及letter_waste采用calc_waste_origin，包含来源产生责任、留存库存及有证据最终处理；其数量已经归一化一次，不再由calc_final相除。tray_waste采用a_tray_lifecycle，与mail_tray保持同一寿命份额，实际退役仅作控制证据。sanitary_wastewater用实测排放/水平衡并仅经calc_final归一化一次，不用固废库存质量。 | cp_waste | 每参考流最终数量 |  |
| calc_waste_origin | label_waste; letter_waste | 对每种指定普通固废r及产生事件j，A_c,r = sum_j(G_j,r*s_c,j)，随后q_c,r=A_c,r/原参考流件数，仅归一化一次。G为实测产生质量，不是外运质量。逐材料及原事件对账：期末=期初+产生+内部转入-内部转出-外部外运-有证据物理损失。记录实际水分/组成变化及互斥损失/释放；不得虚构差额，也不得完整残余质量与其已释放组分重复计量。内部转移保留来源，不产生另一笔交换。即使尚在实物暂存，也应建模原队列废物输出及必要暂存/运输/最终处理；使用实际相容接收证据，或有明确证据、匹配材料/组成/地域的前瞻处理路线并披露不确定性。去向份额和为一且仅乘一次，不默认回收或将留存质量处理计零。去向无依据则保持不完整。实际保管库存及外运另作控制台账，不再追加清单。后续接收证据须替换同一事件的前瞻模型，并用原分母重算原队列，不得将相同质量/处理新增给后来队列。用范围交叉表将必要生命周期各环节仅计一次，排除已含于场站/服务清单的暂存能源和搬运。资本寿终废物寿命份额及污水平衡继续使用各自独立规则。 原参考流件数为原队列/分层D。 废物交换gate在产生点。其链接的完整废物管理清单以同一产生质量基准的1kg为输入，覆盖暂存及后续全部去向；最终处理输入仅为扣除储存损失并换算水分基准后的相容实测/有证据预测残余量，不得完整原kg处理再加独立损失。显式储存释放须替换链接清单内相同释放；已含于场站/服务池的暂存/搬运作业须按有记录范围交叉表从废物链接剔除，不得重复。 | cp_waste; allocation_waste_origin | 每原参考流kg；原来源库存/模型台账 |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| activity_linehaul | u_linehaul_diesel; u_linehaul_gasoline; u_linehaul_traction_electricity; u_linehaul_co2_fossil_air; u_linehaul_co_air; u_linehaul_no_air; u_linehaul_no2_air; u_linehaul_n2o_air; u_linehaul_ch4_air; u_linehaul_so2_air; u_linehaul_vehicle_factory_gate; u_linehaul_mineral_lubricant; u_linehaul_waste_mineral_lubricant; u_linehaul_retired_vehicle | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。沿用 cp_carriage、a_transport、calc_linehaul、agg_cp_carriage。计算装载路段实际货物吨公里，包含有证据的托盘皮重。每个承运车辆/线路/期间，以本队列实际吨公里/全用户实际吨公里作为固定份额；对应实物总量须含闭合线路空返/调位负担并匹配利用率。不得再乘空返/装载系数或对同一路段套用投递车分配。资本与寿终使用同一有证据的寿命消耗份额，寿命分母匹配承运模型。保留失败、退回及尾部运输。运行/维护量按下述期间份额约定。 数量约定：运行期间 q=Q_period×a/N 仅用于 use 与 maintenance；Q_period 为实测原始期间/事件实物总量，a 为固定且对账的归属份额。production 使用原始制造/建设交付接口资产实物量 Q_a，q_prod=Q_a×f/N。各关联终态流使用同一资产队列完整生命周期的终态实物量 Q_e，q_eol=Q_e×f/N，与制造完全同f；Q_e 不是后来某期间整批外运量。f 已各含一次资产寿命服务份额与目标队列/服务层归属，不得再乘运行份额。Q_a 与 Q_e 均不得是已经摊销的供应方期间当量。如供应方仅给摊销当量，须先恢复并核实原始资产队列实物量及完整寿命分母，再应用本约定；严禁对已消耗寿命当量再次乘f。N 对68011为原D，对68013为原N_s，仅除一次。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_linehaul | 原始t*km及唯一归属实物总量，不是服务产品 |  |
| activity_van_round | u_van_round_diesel; u_van_round_gasoline; u_van_round_traction_electricity; u_van_round_co2_fossil_air; u_van_round_co_air; u_van_round_no_air; u_van_round_no2_air; u_van_round_n2o_air; u_van_round_ch4_air; u_van_round_so2_air; u_van_round_vehicle_factory_gate; u_van_round_mineral_lubricant; u_van_round_waste_mineral_lubricant; u_van_round_retired_vehicle | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。沿用 cp_carriage、a_transport、calc_round、agg_cp_carriage。每条实际闭合线路 B=B_move+B_stop；U 为行驶区间能耗乘货物质量份额与停靠能耗乘服务分钟份额之和。空返/调位能耗按已装载区间归属行驶能耗份额分配；U/B 是该线路各项实测运行/维护实物总量唯一的队列份额；资本与寿终使用下述独立f约定。全部服务须回收到整条线路。全空线路须有唯一委托服务层证据，否则阻断。保留重投、退回及尾部。期间总量须由实测线路对账，不能再次按载荷分配。资本与寿终使用相同、已证实的完整寿命份额；承运方资本分配须匹配实测工况。运行/维护量按下述期间份额约定；不得再输入服务或车辆公里排放因子。 数量约定：运行期间 q=Q_period×a/N 仅用于 use 与 maintenance；Q_period 为实测原始期间/事件实物总量，a 为固定且对账的归属份额。production 使用原始制造/建设交付接口资产实物量 Q_a，q_prod=Q_a×f/N。各关联终态流使用同一资产队列完整生命周期的终态实物量 Q_e，q_eol=Q_e×f/N，与制造完全同f；Q_e 不是后来某期间整批外运量。f 已各含一次资产寿命服务份额与目标队列/服务层归属，不得再乘运行份额。Q_a 与 Q_e 均不得是已经摊销的供应方期间当量。如供应方仅给摊销当量，须先恢复并核实原始资产队列实物量及完整寿命分母，再应用本约定；严禁对已消耗寿命当量再次乘f。N 对68011为原D，对68013为原N_s，仅除一次。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_van_round | 原始vehicle*km及唯一归属实物总量，不是服务产品 |  |
| activity_sorting_asset | u_sorting_asset_factory_gate; u_sorting_asset_retired_asset | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。沿用 a_hierarchy、cp_assets、agg_cp_assets：按运行/班次关联把实测处理机时归属队列/服务层；待机按占用机时分配，包含其他服务、拒收/闲置及跨月队列尾部。每个资产区间全用户份额之和为1。f=已归属且定义匹配的机时/有证据的寿命机时；完整机制造及寿终使用同f。维护各项 q=供应方同期间实物总量×固定实测服务份额/D，仅除一次。不得再加 facility_electricity 已含运行电。 数量约定：运行期间 q=Q_period×a/N 仅用于 use 与 maintenance；Q_period 为实测原始期间/事件实物总量，a 为固定且对账的归属份额。production 使用原始制造/建设交付接口资产实物量 Q_a，q_prod=Q_a×f/N。各关联终态流使用同一资产队列完整生命周期的终态实物量 Q_e，q_eol=Q_e×f/N，与制造完全同f；Q_e 不是后来某期间整批外运量。f 已各含一次资产寿命服务份额与目标队列/服务层归属，不得再乘运行份额。Q_a 与 Q_e 均不得是已经摊销的供应方期间当量。如供应方仅给摊销当量，须先恢复并核实原始资产队列实物量及完整寿命分母，再应用本约定；严禁对已消耗寿命当量再次乘f。N 对68011为原D，对68013为原N_s，仅除一次。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_sorting_asset | 原始h及唯一归属实物总量，不是服务产品 |  |
| activity_premises | u_premises_construction_gate; u_premises_retired_asset | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。沿用 a_facility、cp_assets、agg_cp_assets：实测占用面积小时须关联区间/运行/班次与队列，全部用户/闲置/拒收及尾部对账到每资产区间份额之和为1。资本消耗份额=已归属面积小时/有证据的完整寿命面积小时；建设与寿终同份额。维护量使用同一空间占用分配，q=供应方同期间实物总量×固定份额/D，仅除一次。排除已另列的运行电、热水供热、水、分拣设备及托盘。 数量约定：运行期间 q=Q_period×a/N 仅用于 use 与 maintenance；Q_period 为实测原始期间/事件实物总量，a 为固定且对账的归属份额。production 使用原始制造/建设交付接口资产实物量 Q_a，q_prod=Q_a×f/N。各关联终态流使用同一资产队列完整生命周期的终态实物量 Q_e，q_eol=Q_e×f/N，与制造完全同f；Q_e 不是后来某期间整批外运量。f 已各含一次资产寿命服务份额与目标队列/服务层归属，不得再乘运行份额。Q_a 与 Q_e 均不得是已经摊销的供应方期间当量。如供应方仅给摊销当量，须先恢复并核实原始资产队列实物量及完整寿命分母，再应用本约定；严禁对已消耗寿命当量再次乘f。N 对68011为原D，对68013为原N_s，仅除一次。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_premises | 原始m2*h及唯一归属实物总量，不是服务产品 |  |
| calc_atomic_physical | u_linehaul_diesel; u_linehaul_gasoline; u_linehaul_traction_electricity; u_linehaul_co2_fossil_air; u_linehaul_co_air; u_linehaul_no_air; u_linehaul_no2_air; u_linehaul_n2o_air; u_linehaul_ch4_air; u_linehaul_so2_air; u_linehaul_vehicle_factory_gate; u_linehaul_mineral_lubricant; u_linehaul_waste_mineral_lubricant; u_linehaul_retired_vehicle; u_van_round_diesel; u_van_round_gasoline; u_van_round_traction_electricity; u_van_round_co2_fossil_air; u_van_round_co_air; u_van_round_no_air; u_van_round_no2_air; u_van_round_n2o_air; u_van_round_ch4_air; u_van_round_so2_air; u_van_round_vehicle_factory_gate; u_van_round_mineral_lubricant; u_van_round_waste_mineral_lubricant; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。对供应方相容区间j的运行实物流x，由计量、库存平衡、工单或相容的单物种/单材料单位清单取得本卡物理单位Q_x,j。若来源按活动单位提供强度，先算Q_x,j=强度_x,j*实际全使用者活动_j；不得用金额、通用服务排放篮子或未还原原分母的每参考流数值。再按固定过程驱动及全使用者份额，q_x=sum_j(Q_x,j*s_c,x,j)/N_ref，仅归一一次。卡用MJ时，电力kWh仅乘一次3.6；其他计数/质量/体积换算须有适用的实测配置单重、密度、浓度及水分。覆盖相同数量/期间/范围的共享表计或上游产品/服务须按实测重叠交叉表剔除，不能假定比例。 | cp_support_linehaul; cp_support_van_round; cp_support_sorting_asset; cp_support_premises | 每原参考流的卡原生物理单位 |  |
| calc_atomic_capital | u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。逐实物资产序列号/批次a，以本卡单位确定实际制造/建造gate产品量Q_a。按过程/资产固定驱动及相同配置/容量单位，f_c,a=队列归属实物寿命活动_c,a/有证据完整寿命全使用者活动_a。制造q=sum(Q_a*f_c,a)/N_ref；每次初装及整机替换都建立独立资产批次，只计一次，不再作为当期维修整机投入。产品gate外的安装实物量采用同一被安装资产份额。按相容退役实测或有证据前瞻残余/再用/保留计划确定的寿终残余量，采用其自身单位、完全相同f_c,a及原参考流分母；实际保管转移仅核验/更新模型。较早拆出部件须从终态残余剔除。寿命和原受益队列按calc_capital_restatement全历史重算；寿命须证据和敏感性，不设数值默认。真实部件维修/替换按实际因果事件或固定供应方维修年份额分配，不再乘完整寿命份额。完整部件若作为独立投运资本资产再用，应另建自身序列号/寿命台账，不得两种处理同时采用。 | cp_support_linehaul; cp_support_van_round; cp_support_sorting_asset; cp_support_premises | 制造产品及配对终态残余，相同寿命份额 |  |
| calc_capital_restatement | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | 在本入口声明的适用范围内，按顺序完整执行规则组：calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_capital_restatement; calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version | 按各来源本征单位/原队列N_c；实物监管账独立 |  |
| capital_linehaul_vehicle_factory_gate | u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_linehaul_vehicle_factory_gate：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/D。对同一交付车型/资产队列，Q_a 为任何摊销之前的原始完整制造车辆数。f=(供应方期间完整线路车辆公里/有证据的完整寿命车辆公里)×上述固定队列线路份额，空返/调位须在两者范围一致包含。q_prod=Q_a×f/D；每个车辆终态流使用其原始完整生命周期Q_e及完全相同f/D。不得再乘线路份额。缺完整寿命距离或匹配工况即阻断。 实际维护量使用其独立期间/事件份额，不用该制造f。供应方已摊销输入须恢复原Q_a及完整寿命分母；禁止再次套f。 终态行u_linehaul_retired_vehicle：原生Item(s)，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_linehaul | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_van_round_vehicle_factory_gate | u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_van_round_vehicle_factory_gate：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/D。对同一交付车型/资产队列，Q_a 为任何摊销之前的原始完整制造车辆数。f=(供应方期间完整线路车辆公里/有证据的完整寿命车辆公里)×上述固定队列线路份额，空返/调位须在两者范围一致包含。q_prod=Q_a×f/D；每个车辆终态流使用其原始完整生命周期Q_e及完全相同f/D。不得再乘线路份额。缺完整寿命距离或匹配工况即阻断。 实际维护量使用其独立期间/事件份额，不用该制造f。供应方已摊销输入须恢复原Q_a及完整寿命分母；禁止再次套f。 终态行u_van_round_retired_vehicle：原生Item(s)，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_van_round | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_sorting_asset_factory_gate | u_sorting_asset_factory_gate; u_sorting_asset_retired_asset | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_sorting_asset_factory_gate：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/D。Q_a 为独立制造交付接口、摊销前的原始完整分拣机数量。f=目标队列已归属服务机时/有证据的完整寿命机时，运行/占用机时定义须完全相同。按 a_hierarchy/cp_assets 保留全用户、待机/闲置、拒收及尾部。q_prod=Q_a×f/D；各终态Q_e使用完全相同f/D。分子已含队列归属，不再乘第二份额。缺寿命/能力证据即阻断。 实际维护量使用其独立期间/事件份额，不用该制造f。供应方已摊销输入须恢复原Q_a及完整寿命分母；禁止再次套f。 终态行u_sorting_asset_retired_asset：原生Item(s)，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_sorting_asset | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_premises_construction_gate | u_premises_construction_gate; u_premises_retired_asset | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_premises_construction_gate：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/D。Q_a 为摊销前原始完整建筑壳体交付面积。f=目标队列/服务层已归属占用/保留面积小时/同资产完整寿命占用/保留面积小时；必须为同资产、同面积及同日历小时定义。premises_service 分子为F_s；premises 为其已归属队列面积小时。q_prod=Q_a×f/D；各完整生命周期拆除流Q_e使用完全相同f/D。队列/服务层份额已含f内，不得再乘。缺寿命/面积边界即阻断。 实际维护量使用其独立期间/事件份额，不用该制造f。供应方已摊销输入须恢复原Q_a及完整寿命分母；禁止再次套f。 终态行u_premises_retired_asset：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_premises | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| calc_atomic_species | 所有基本实物流清单行 | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。每张基本流卡对应一种物质或物理明确的颗粒载体，以及一个接收介质/子介质。采集实际物种/CAS或已验证化学身份、因子单位及质量/摩尔/碳表达、来源技术/燃料/负载、地点和接收介质。单物种实测排放或相容因子仅用一次。完整产品gate已含的工厂排放不得再列为供应方直接运行排放。颗粒粒径及去向份额互斥；物理颗粒不是虚构纯元素。NOx及NMVOC总量仅作QA观测，不替代基本交换。任何实际额外物种/材料必须在建模完成前拥有具体双语源卡、协议、单位、固定计算及正常投影，不使用选择器或族名占位卡。 | cp_support_linehaul; cp_support_van_round; cp_support_sorting_asset; cp_support_premises | 逐接收介质的单物质或明确实物载体 |  |
| calc_nox_speciation | u_linehaul_no_air; u_linehaul_no2_air; u_van_round_no_air; u_van_round_no2_air | 仅对有明确证据定义为NOx=NO+NO2且按NO2等效表达的总量，记录T、单位/基准及匹配来源实测摩尔份额a=n_NO/(n_NO+n_NO2)。使用独立有据、单位一致的分子质量，m_NO=a*T*M_NO/M_NO2，m_NO2=(1-a)*T。优先采用直接单物种质量实测/因子，不再追加QA总量。T不是普通NO/NO2混合质量，不得直接把质量份额乘T或将全部T灌给NO2。若定义包含其他氮物种、缺组分或换算证据，不得二组分拆算：保留原QA观测，并阻断完成直至实际单物种行及数量确定。PCR不默认任何数值份额或分子质量。 | cp_support_linehaul; cp_support_van_round | NO及NO2各自kg，不以NO2等效作交换 |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_provider_electric_stock | u_linehaul_traction_electricity; u_van_round_traction_electricity | 逐独立计量供应方车辆/电池边界及完整区间j，E_total=入口交流+期初交流等效储能+可追溯转入-期末交流等效储能-可追溯转出（kWh）。校准同配置、温度及老化的可用容量和入口交流/存能实测曲线；SOC百分比或默认效率不足。每项电池转移和充电/提取/损耗/期末平衡须按时序保留来源向量，含未来受益方及资本小时结转；无依据换算或未知库存阻断完成。路线分配前先剔除独立实测且经验证总入账为零的事件交流电E_zero：E_route=E_total-E_zero；未解释负余量阻断完成。E_route按相同路线/任务区间的既定供应活动activity_*驱动及全部使用者分配，包含空驶/失败。E_zero优先归证实因果订单，其次按实际服务历时归有记录因果任务集合；真实共享且无直接因果的故障采用固定站点当地日历日全用户实际服务历时池，含失败/等候并先跨午夜拆分。总入账未知不得当零，不再对E_zero乘路线份额。q_AC=(sum(E_route_j*s_provider_c,j)+sum(E_zero_k*z_c,k))*3.6/D，仅一次。已归属实物总量不再乘供应份额，不另加充电损失，车间/场站/安装电力不进入车辆池。相容供应强度须证明同样库存/责任闭合，否则采集原始记录。实物资本f沿独立固定寿命驱动，不再乘一项年度能源份额。 | cp_support_linehaul; cp_support_van_round | 每原参考流MJ |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_provider_maintenance_period | u_linehaul_mineral_lubricant; u_linehaul_waste_mineral_lubricant; u_van_round_mineral_lubricant; u_van_round_waste_mineral_lubricant | 逐共享常规供应方维护池，将区间y固定为站点当地日历年，记录时区及确切资产/场站/配置。跨年队列须拆为各年内活动。实际安装/消耗材料M_x,y及分别实测的产生废物采用同年s_c,y=队列归属受益驱动_y/全受益驱动_y，再q=sum_y(M_x,y*s_c,y)/N_ref，仅一次。驱动采用activity_*已固定的支持过程实物活动；车辆维护用实际车公里，空驶/失败先归属一次；变动道路养护用同年有证据逐车型工程损坏需求；建筑结构用保留楼面面积日历小时。其他共享支持设备用其既定实际全受益任务/周期/并集小时驱动，保留确切配置分层，不重复并发。签署维护工单须在计算前固定因果资产及任务池，不留给后续建模选择。特定事故/故障维修仅归证实因果订单/任务集合，不再进入年度常规池。真实组件消耗排除未用期初末库存、未安装退回及内部转移；拆出件产生保留原事件/年份/份额随以后保管转移。不假定投入与拆出件质量相同。真实组件维修只乘一次年度份额，不乘整寿命f；整机替换另建资本批次。正维护池无证据或全用户分母为零/未知均阻断完整性。此前引用的保留供应维护卡同样执行；各自产生/去向平衡及精确重叠排除仍强制。 | cp_support_linehaul; cp_support_van_round | 每原参考流原生物理单位 |  |
| calc_capital_restatement_driver_revision | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐资产a保存有版本的全用户活动与每个原受益队列/分层c，按既有固定责任规则保留失败和空驶工作。u_c,a为截至当时归属该队列的实际驱动；U_a为相同配置和单位的有证完整寿命全用户驱动（已发生实际量加有依据的剩余预测）。U_a必须为正且不小于已发生全用户总量。f_c,a=u_c,a/U_a，不得把剩余活动当作U_a。每次寿命、活动、受益者、来源数量或终态路线变化，都重算全部受影响原队列，包括已报告队列；不得保留旧历史份额而仅对后续队列使用新寿命分母。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_source_correction | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐独立来源s按自身单位求A_s,c,new=Q_s,new*f_c,a。Q_s,new是当前有证、寿命分配前的完整制造/安装来源实物总量，不是扣除历史份额后的未摊余额，或匹配的净终态残余/完整生命周期来源量，不是已分配量。保留此前已记的归属原始量B_s,c及其原归一结果/版本；delta_A_s,c=A_s,c,new-B_s,c。新取得证据的终态来源B=0；已有来源的更正替换同一来源ID。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_normalization | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。使用该原队列当前已核实的参考分母N_c重算q_s,c=A_s,c,new/N_c；若N_c本身被更正，应替换旧结果，不得把delta_A/new_N直接加到以old_N形成的旧结果。剔除有记录重叠后才汇总各来源贡献。正负差额仅更正结果，不能形成负实物转移、替代抵扣或新增当期整机采购。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_retirement | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。最终退役时以完整实测全用户驱动替换U_a，重算全部f和来源量；寿命总活动为正时，所有受益者含非研究业务的份额和为一。实测终态净残余不得再次扣除历史拆出量。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_zero_activity | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。零产出事件保留其既有因果父队列及原分母，不能寻找无关的正产出期间。若原父队列没有正N_c，保留归属原始总量，归一结果保持未决。全寿命活动为零时，仅可凭证归属唯一投运委托责任，并使用同一原队列规则；否则保留未分配来源并阻断完成。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_shared_driver_controls | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。资产制造、安装和终态负担采用相同更新f；毛库存、实物转移和退役另作实物监管账。对日历时间资产，u为已发生服务容量时间，按既有共享/类别规则向各原类别/期间仅归属一次，包含规则要求的空置/失败责任；U覆盖相同全用户日历容量。q不得再乘一次类别份额。历史不明、寿命/去向无依据或缺原分母时阻断完成。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_background_version | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。若供应背景或处理模型版本改变但实物数量未变，也必须替换全部受影响原队列的相应链接清单和结果；不能因为实物delta_A=0而保留旧模型。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |


### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_evidence | 全部清单行 | 要求带时间戳原始记录、校准仪器、声明时空覆盖及对账残差；使用实测不确定性及抽样区间，不得把示例范围视为合规限值。 | cp_cohort; cp_facility; cp_carriage; cp_materials; cp_waste |
| quality_waste_origin | label_waste; letter_waste | 逐种普通固废核验产生责任、原队列/分层/分母、带来源库存平衡、有证据的实际或前瞻完整处理及后来回执替换。来源/去向/物理损失未知保持明确缺口；后来外运本身不能闭合或改归责任。污水及按寿命摊销资产寿终处理采用各自独立方法。 | 产生/库存/转移台账；有证据路线模型；原队列回执替换 |
| q_identity | 全部清单行 | 无 UUID 的语义候选须明确，不是已核实天工身份。宣称数据包已核实前，应以直读证据及凭据哈希绑定准确流类型、状态、属性、单位和环境介质，并保留正式名称；不得按名称相近替代。 | 直接身份证据及凭据 |
| q_missing | 全部过程 | 未知数量、接收方、活动是否发生、承运覆盖及分配份额均保留为缺失。以台账和检查证明未发生；缺失不等于零。披露缺口并在解决前阻止完整或符合声明；不得隐蔽使用通用回退。 | 采购、资产及废物台账与覆盖审计 |

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_atomic_completeness | 所有已拆分的支持过程和物种 | 完整性按 foreground_interface_method 和 foreground_interface_coverage 分支判定。前景实物交换保留确切身份、原始计量、物种和库存对账要求。外部接口须具备一个明确服务/属性/单位、实测活动、确切供应方接口及兼容背景覆盖，不要求穷尽供应方内部BOM或资本账本。未知发生不等于未发生；真实未覆盖范围须列为缺口。未绑定的接口UUID/属性/单位组身份保留为具体行候选，直至官方直接证据及receipt解决。不得以接口名义使用未定义的多服务包，也不得用Item(s)代替小时、质量或运输活动量。 | 范围到实物行对账；供应/BOM/物种原件；签署缺口表 |
| quality_service_interfaces | svc_linehaul; svc_van_round; svc_sorting_asset; svc_premises | 完整性按 foreground_interface_method 和 foreground_interface_coverage 分支判定。前景实物交换保留确切身份、原始计量、物种和库存对账要求。外部接口须具备一个明确服务/属性/单位、实测活动、确切供应方接口及兼容背景覆盖，不要求穷尽供应方内部BOM或资本账本。未知发生不等于未发生；真实未覆盖范围须列为缺口。未绑定的接口UUID/属性/单位组身份保留为具体行候选，直至官方直接证据及receipt解决。不得以接口名义使用未定义的多服务包，也不得用Item(s)代替小时、质量或运输活动量。 | cp_interface协议；签署的覆盖责任矩阵；原生单位对账；身份receipt |
| scope_interface_linehaul | u_linehaul_diesel; u_linehaul_gasoline; u_linehaul_traction_electricity; u_linehaul_vehicle_factory_gate; u_linehaul_mineral_lubricant; u_linehaul_waste_mineral_lubricant; u_linehaul_retired_vehicle; u_linehaul_co2_fossil_air; u_linehaul_co_air; u_linehaul_no_air; u_linehaul_no2_air; u_linehaul_n2o_air; u_linehaul_ch4_air; u_linehaul_so2_air; svc_linehaul | 对 support_linehaul，svc_linehaul 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_van_round | u_van_round_diesel; u_van_round_gasoline; u_van_round_traction_electricity; u_van_round_vehicle_factory_gate; u_van_round_mineral_lubricant; u_van_round_waste_mineral_lubricant; u_van_round_retired_vehicle; u_van_round_co2_fossil_air; u_van_round_co_air; u_van_round_no_air; u_van_round_no2_air; u_van_round_n2o_air; u_van_round_ch4_air; u_van_round_so2_air; svc_van_round | 对 support_van_round，svc_van_round 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_sorting_asset | u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; svc_sorting_asset | 对 support_sorting_asset，svc_sorting_asset 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_premises | u_premises_construction_gate; u_premises_retired_asset; svc_premises | 对 support_premises，svc_premises 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| inv_trunk_scope | u_linehaul_diesel; u_linehaul_gasoline; u_linehaul_traction_electricity; u_linehaul_vehicle_factory_gate; u_linehaul_mineral_lubricant; u_linehaul_waste_mineral_lubricant; u_linehaul_retired_vehicle; u_linehaul_co2_fossil_air; u_linehaul_co_air; u_linehaul_no_air; u_linehaul_no2_air; u_linehaul_n2o_air; u_linehaul_ch4_air; u_linehaul_so2_air | 实际外购非冷链信函道路干线运输；展开的是承运背景，不改变为邮政运营方自有运输。 | 所列各清单行既有的采集协议和证据。 |
| inv_fuel_gate | u_linehaul_diesel; u_linehaul_gasoline; u_van_round_diesel; u_van_round_gasoline | 仅当证实范围内承运车辆使用该确切燃料；不同牌号分列。进入车辆油箱的燃料，连接匹配的上游生产及交付；不得另加燃烧服务包。 | 所列各清单行既有的采集协议和证据。 |
| inv_asset_basis | u_linehaul_vehicle_factory_gate; u_van_round_vehicle_factory_gate; u_sorting_asset_factory_gate; u_premises_construction_gate | 输入Q_a为摊销前原始制造/建设交付接口实物量；按lifetime_driver仅应用一次f。实际维护量使用其独立期间/事件份额，不用该制造f。供应方已摊销输入须恢复原Q_a及完整寿命分母；禁止再次套f。 | 所列各清单行既有的采集协议和证据。 |
| inv_maintenance_share | u_linehaul_mineral_lubricant; u_linehaul_waste_mineral_lubricant; u_van_round_mineral_lubricant; u_van_round_waste_mineral_lubricant | 按该实际维护期间/事件的服务份额归属实测数量；不得再乘资本制造f。 | 所列各清单行既有的采集协议和证据。 |
| inv_terminal_basis | u_linehaul_retired_vehicle; u_van_round_retired_vehicle; u_sorting_asset_retired_asset; u_premises_retired_asset | 其原始Q_e为asset_suffix所指资产摊销前完整生命周期终态实物量，不是已摊销供应方期间量或后来期间外运总量。完全使用关联生产f一次，仅除原分母一次，不再乘运行归属份额。 | 所列各清单行既有的采集协议和证据。 |
| inv_vehicle_species | u_linehaul_co2_fossil_air; u_linehaul_co_air; u_linehaul_no_air; u_linehaul_no2_air; u_linehaul_n2o_air; u_linehaul_ch4_air; u_linehaul_so2_air; u_van_round_co2_fossil_air; u_van_round_co_air; u_van_round_no_air; u_van_round_no2_air; u_van_round_n2o_air; u_van_round_ch4_air; u_van_round_so2_air | 仅在确切物质、适用的化石/生物源限定、空气接收区室及实测或燃料/技术专属计算均有证据时。仅车辆使用阶段排放；根据实测燃料/运行及有证据的单物种因子计算一次。不得用 NOx、总烃、CO2e 或通用尾气混合物代替此行。 | 所列各清单行既有的采集协议和证据。 |
| inv_van_scope | u_van_round_diesel; u_van_round_gasoline; u_van_round_traction_electricity; u_van_round_vehicle_factory_gate; u_van_round_mineral_lubricant; u_van_round_waste_mineral_lubricant; u_van_round_retired_vehicle; u_van_round_co2_fossil_air; u_van_round_co_air; u_van_round_no_air; u_van_round_no2_air; u_van_round_n2o_air; u_van_round_ch4_air; u_van_round_so2_air | 实际外购非冷链厢式车辆收寄/投递；展开的是承运背景，不改变为邮政运营方自有运输。 | 所列各清单行既有的采集协议和证据。 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | postal_letter_service | 不在文件化普遍服务义务、普通国内有址信函及所定场站和外包公路配置内时拒绝适用。不得把 narrower 映射视为完整 CPC 覆盖，也不得将服务等级、载荷、地域、距离和时效视为等价。 | `un-cpc3-68011` |
| validate_service_interfaces | svc_linehaul; svc_van_round; svc_sorting_asset; svc_premises | 读取行数量前核对事件/组成责任矩阵。外部服务组成仅启用其接口；已覆盖的对应实物明细处于不适用状态，不是实测零。核对单一属性/单位、原生活动原始量、原全用户分配及仅一次最终归一；失败/返工/空驶事件遵循原队列规则。检验部分合同、自有能源/资产/保留废物、已分配供应方清单、零产出队列及补充覆盖缺失。拒绝重复计入、虚构身份/数量、强制采集供应方内部数据或无记录改变分支。核对双语及生成guidance中全部服务行ID和协议/规则引用。 |  |
| v_counts | delivered_letter | 检查唯一标识、A = D + T + L + X、未结为零、D > 0、实际终态证据及结转负担。拒绝重复计试投、将退回当作妥投、丢弃未结记录或跨队列转移。 | `usps-undeliverable-mail` |
| v_balance | 全部清单行 | 检查各行单位属性、来源活动、分配份额和、表计库存废物平衡、承运范围及一次性 J/D 除法。检查双语和机器投影中的全部边界、分配、采集及质量规则和准确行协议引用；仅 schema 和 fingerprint 通过不足。 检验A期产生留存废物、B期外运：原A责任及分母保留，实际证据替换同一事件模型，不再给B追加负担。 |  |
| v_completion | 全部过程 | 前景证据不完整或流身份未核实须持续披露，并阻止声称结果完全核实。candidate 编写完成及 aligned 翻译不代表科学审查、方法批准或发布授权。 |  |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_atomic_support | 所有支持过程和排放清单行 | 读取行数量前核对事件/组成责任矩阵。外部服务组成仅启用其接口；已覆盖的对应实物明细处于不适用状态，不是实测零。核对单一属性/单位、原生活动原始量、原全用户分配及仅一次最终归一；失败/返工/空驶事件遵循原队列规则。检验部分合同、自有能源/资产/保留废物、已分配供应方清单、零产出队列及补充覆盖缺失。拒绝重复计入、虚构身份/数量、强制采集供应方内部数据或无记录改变分支。核对双语及生成guidance中全部服务行ID和协议/规则引用。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_capital_restatement | mail_tray; tray_waste; u_linehaul_vehicle_factory_gate; u_linehaul_retired_vehicle; u_van_round_vehicle_factory_gate; u_van_round_retired_vehicle; u_sorting_asset_factory_gate; u_sorting_asset_retired_asset; u_premises_construction_gate; u_premises_retired_asset | 必须核对calc_capital_restatement的原队列/原分母、全用户驱动、来源版本、已记量及重算差额；禁止冻结旧历史再只改后续分母，禁止将退役余额转给无关当期产品，禁止负实物交换。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景服务过程数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 限定条件匹配且证据完整的所声明普通国内信函服务配置。 |
| excluded_use | 完整信函纸张制造；快递特快或包裹；CPC 68011 全覆盖；未限定平均信函；其他车队或场站技术；未证明功能质量等价的比较。 |
| required_metadata | 全部参考流限定；保管队列及终态尾期；准确供应商接口；分配和资本模型；数据年度与地域。；普通废物产生来源、原份额/分母、留存库存及处理修订链；签署的前景/接口责任矩阵、原生服务活动及背景覆盖；仅对前景责任组成保留原实物活动、制造/终态配对及物种基准 |
| required_quality_disclosure | 完整性；抽样及计量不确定性；未结与失败结果；流身份状态；缺失及排除；narrower 范围。 |
| update_trigger | 普遍服务及等级、路线、承运方燃料、场站技术、投递边界接口、供应商覆盖、分配证据或实质活动变化。；后来普通废物回执/去向或产生量更正须更新原事件/队列模型；前景实物身份/物种变化或外部接口配置/单位/覆盖变化须复审适用具体卡并更新投影 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-68011 | official_guidance | 联合国统计司 CPC 3.0 68011 解释性说明。 https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/68011 | 普遍服务义务分类边界；本候选刻意仅覆盖更窄的服务及运行配置。 |
| upu-postal-ghg-2010 | official_guidance | 万国邮联、国际邮政公司及欧洲邮政协会《邮政部门温室气体清单标准》，2010年3月，PDF第7及24–25页（原则、活动与分配）。 https://www.uncclearn.org/wp-content/uploads/library/upu05.pdf | 仅支持邮政活动及完整性和分配背景。PCR所定层级和公式是声明的前景方法，不冒充邮联默认方法；不采用历史排放因子。 |
| usps-undeliverable-mail | official_guidance | 美国邮政《无法投递及误投邮件如何处理？》，无法投递、退回和投递点章节。 https://faq.usps.com/articles/Knowledge/How-is-Undeliverable-and-Misdelivered-Mail-Handled | 区分妥投、退回和无法投递结果的官方运营商实例；不是通用国家服务规则，不提供默认改寄期限。 |
