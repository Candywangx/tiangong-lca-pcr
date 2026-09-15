---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-of-mammals-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他哺乳动物肉，冷冻

## 1. 范围与适用性

本候选 PCR 覆盖 CPC 3.0 21139 内的一个前景数据包实例。该实例为养殖红鹿（*Cervus elaphus*）肉，采用 UNECE 9237 长切后腿内侧部位、去骨，以聚酰胺/聚乙烯真空袋包装，装入带聚丙烯标签的瓦楞纸箱，在采用 R717 氨制冷系统的强制空气鼓风冻结机内速冻，随后冷冻储存，并在工厂装货月台以产品热中心温度不高于 -18 deg C 的状态交付。

CPC 21139 的范围宽于本实例。未找到整个 CPC 范围内权威的物种份额，因此红鹿是强制的数据包实例门禁，而不是所声称的默认市场份额。采用其他物种、切块、带骨状态、冻结技术、制冷剂系统、包装配置或交付温度规格的数据集，必须建立单独评审的实例，不得与本实例平均。

前景边界始于接收指定的冷藏去骨红鹿切块，止于冷冻肉到达工厂装货月台。边界包括接收、真空包装、强制空气鼓风速冻、冷冻储存、清洗消毒、场内好氧废水处理和交付。上游切块专属数据集必须包括养鹿、屠宰、胴体整理、冷却、去骨、切块制备及其分配。装货月台后的配送、零售、烹饪、消费和消费后包装处置不在范围内。可食用内脏、鲜或冷藏肉、带骨肉、绞碎或细碎肉、混合物种生产、低温介质冻结、平板冻结和静止空气冻结均排除。

所选冻结机使用电力和 R717 氨。热气除霜使 R717 在制冷系统内部循环，不构成跨边界的热载体流。除非修订实例门禁并将新增流作为独立原子行采集，否则不得加入燃料、蒸汽、冰、运输服务或其他热载体。

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-of-mammals-frozen |
| classification_refs | CPC 3.0 21139，较窄实例 |
| covered_products | 仅覆盖养殖红鹿（*Cervus elaphus*）的冷冻食用肉，且仅以 UNECE 9237 长切后腿内侧部位、去骨，并采用所声明的包装、冻结、制冷和交付温度配置进行表示 |
| excluded_products | 其他物种；其他切块；带骨、绞碎、细碎、熟制、腌制、熏制或内脏产品；鲜或冷藏肉；混合物种平均；低温介质、平板、静止空气或未指定冻结；热中心交付温度高于 -18 deg C 的配置 |
| representative_product | 净冷冻去骨养殖红鹿长切后腿内侧部位，UNECE 9237 |
| production_route | 冷藏去骨切块接收 -> 真空包装 -> 采用 R717 氨的强制空气鼓风速冻 -> 冷冻储存 -> 装货月台交付 |
| market_state | 瓦楞运输纸箱内的真空袋装冷冻切块，交付时产品热中心温度 <= -18 deg C |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 净食用冷冻去骨养殖红鹿长切后腿内侧部位，UNECE 9237 |
| How much | 1,000 kg 净肉质量，不包括真空袋、标签和纸箱 |
| How well | 物种、来源动物状态、切块代码、去骨状态、包装、冻结技术、R717 系统和热中心交付温度符合实例门禁；批次通过有文件记录的食品安全与质量放行 |
| How long or cycle | 从冷藏切块接收到装货月台交付的一个有身份标识的生产批次 |
| reference_flow_link | `dispatched_frozen_red_deer_inner_leg` |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Other meat of mammals, frozen `1fc83e3b-ac93-4d3b-899e-eed337072097` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species=Cervus elaphus; source_animal=farmed red deer; incoming_cut=UNECE 9237 inner part of the leg, long-cut; bone_state=boneless; freezing_technology=forced-air blast quick freezing; refrigeration_system=R717 ammonia; primary_packaging=polyamide/polyethylene vacuum pouch; secondary_packaging=corrugated cardboard carton; label=polypropylene; delivery_temperature=thermal-centre product temperature <= -18 deg C; reference_mass_basis=net edible meat excluding packaging; lot_id; facility_id; production_period |

## 4. 测量与单位规则

| rule_id | 适用于 | 必需属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass | kg | 报告 1,000 kg 净食用肉；参考质量不包括真空袋、标签、纸箱、托盘、霜、冰衣和游离液体。 |
| `mass_balance_basis` | 所有含肉过程 | Mass | kg | 在同一批次基础上使用经校准的接收、转移、拒收和交付质量；计算的转移必须保持 `incoming mass = outgoing meat + meat rejects + measured mass change`，并披露任何未解决差异。 |
| `packaging_mass_basis` | 每种包装材料 | Mass | kg | 分别测量聚酰胺/聚乙烯袋、聚丙烯标签和瓦楞纸箱；不得报告合并的包装质量。 |
| `electricity_unit` | 每个电力行 | Energy | kWh | 保留按过程分开的分表 kWh；若使用共享电表，应应用并披露一种因果分配计算，不得合并过程电力行。 |
| `refrigerant_mass_balance` | 每个 R717 制冷过程 | Mass | kg | 对每个设备组和期间按 `opening charge + make-up - closing charge - documented recovery` 计算 R717 损失；不得合并鼓风冻结与冷冻储存系统泄漏。 |
| `water_volume_mass` | 清洗水和废水 | Volume and mass | m3 and kg | 饮用水和废水体积以 m3 记录，污染物负荷以 kg 记录；用时间匹配的流量和浓度记录计算污染物负荷。 |
| `temperature_basis` | 冻结、储存和交付 | Temperature | deg C | 记录经校准的冻结完成与交付产品热中心温度，以及连续或日志化的库内空气温度；实例门禁为产品热中心温度 <= -18 deg C。 |

## 5. 系统边界

前景系统是门到门的冷冻肉后处理操作。产品身份继承自切块专属上游数据集，并通过批次级质量和追溯记录保持。

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收的冷藏、食品安全合格、去骨养殖红鹿（*Cervus elaphus*）UNECE 9237 长切后腿内侧部位，具有批次身份、实测净质量和温度 |
| starting_condition_role | 冷冻肉后处理前景系统的上游产品投入 |
| product_classification_scope | CPC 3.0 21139 内较窄的数据包实例；不是 CPC 范围的物种或技术混合 |
| recursive_input_rule | 若满足本 PCR 的任何冷冻肉进入前景系统，将其作为带上游数据集的独立产品投入记录，并从新生产输出中扣除；不得递归重建或与参考输出静默合并。 |
| upstream_dataset_requirement | 使用覆盖养殖红鹿生产、屠宰、胴体整理、冷却、去骨、UNECE 9237 切块制备和分配的切块专属数据集；活体动物、通用胴体、通用鹿肉或混合物种数据集不充分。 |
| disclosure | 声明确切物种、养殖状态、切块代码和描述、去骨状态、产地、上游数据集、工厂、生产日期、冻结设备、R717 设备组、包装规格、储存时长、交付温度及所有边界偏离。 |

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_instance_gate` | 所有前景数据包 | 仅纳入所声明的红鹿 UNECE 9237 去骨强制空气/R717 配置；不得平均其他物种、切块、带骨状态、冻结技术、制冷系统、包装配置或温度规格。 | `unstats-cpc-3-2025`; `unece-deer-meat-2013`; `dinz-farmed-venison`; `wiklund-et-al-2014-venison` |
| `boundary_upstream_cut` | 冷藏肉投入 | 要求上游切块专属数据集覆盖至冷藏去骨切块制备，并将所有上游负荷排除在后处理前景清单之外，以避免重复计算。 | `unece-deer-meat-2013`; `fao-who-cxc-58-2005` |
| `boundary_quick_freezing` | 鼓风冻结与冷链 | 纳入实测冻结和储存操作直至交付；只有产品热中心温度达到 <= -18 deg C 时速冻才完成，冷链必须保持该状态，仅允许有文件记录的法定温度容差。 | `fao-who-cxc-8-1976`; `fao-meat-cold-store-manual` |
| `boundary_on_site_wastewater` | 清洗废水 | 纳入所声明的场内好氧处理和直接排放；其他废水路线必须单独声明情景，不得平均到本路线中。 | `fao-who-cxc-58-2005` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `incoming_cut_receipt` | 冷藏红鹿切块接收与验收 | required | 所声明实例始终纳入 | 接收、称重、识别、测温并验收或拒收指定上游切块 | kg 冷藏去骨切块接收量 |
| `vacuum_packaging` | 真空包装和装箱 | required | 所声明的 PA/PE 袋、PP 标签和瓦楞纸箱配置始终纳入 | 在不改变物种、切块或去骨状态的情况下包装验收切块 | kg 真空包装冷藏肉输出 |
| `blast_quick_freezing` | 强制空气鼓风速冻 | required | 所声明的冻结技术和 R717 设备组始终纳入 | 快速通过最大冰晶形成区并使热中心温度达到 <= -18 deg C | kg 鼓风冷冻肉输出 |
| `frozen_storage` | R717 冷冻储存 | required | 从冻结机出口到批次放行交付始终纳入 | 保持批次冷冻并记录储存时长和温度 | kg 冷冻储存放行肉 |
| `sanitation` | 食品接触面清洗消毒 | required | 所声明的氢氧化钠洗涤剂和过氧乙酸消毒剂制度始终纳入 | 清洁并消毒接收、包装和冻结接触设备 | 与生产批次关联的清洗消毒活动 |
| `onsite_wastewater_treatment` | 场内好氧废水处理和排放 | required | 所声明的废水路线始终纳入；其他路线需要单独情景 | 处理清洗废水并量化污泥和直接水体排放 | m3 原清洗废水处理量 |
| `cold_dock_dispatch` | 冷冻产品放行和装货月台交付 | required | 质量和温度放行后始终纳入 | 在工厂装货月台称重并放行参考产品 | 1,000 kg 净冷冻肉交付量 |

### 过程：冷藏红鹿切块接收与验收（`incoming_cut_receipt`）

#### 输入

##### 产品流

###### 接收冷藏去骨红鹿 UNECE 9237 切块（`chilled_red_deer_inner_leg_input`）

本卡仅记录从切块专属上游数据集跨入后处理工厂的指定冷藏养殖红鹿切块。

- 选定流：冷藏去骨养殖红鹿长切后腿内侧部位，UNECE 9237
- 流属性/单位：Mass / kg
- 数量规则：identified lot 的 foreground net mass measured at receipt
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_incoming_cut_receipt`
- 来源：`unece-deer-meat-2013`; `dinz-farmed-venison`

###### 接收设备电力（`receiving_electricity`）

本卡记录分配给该批次的接收秤、输送机和温控设备实测电力。

- 选定流：接收设备电力
- 流属性/单位：Energy / kWh
- 数量规则：submetered electricity, or calculated causal share from equipment power and operating time
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_electricity`
- 来源：`mass-balance-identity`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 验收冷藏去骨红鹿切块（`accepted_chilled_red_deer_inner_leg`）

本卡记录放行进入包装的合格 UNECE 9237 去骨切块实测质量。

- 选定流：验收冷藏去骨养殖红鹿长切后腿内侧部位，UNECE 9237
- 流属性/单位：Mass / kg
- 数量规则：received mass minus rejected meat mass and documented receipt-stage mass change
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per kg chilled cut accepted from `incoming_cut_receipt`
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_meat_mass_balance`
- 来源：`mass-balance-identity`

##### 废物流

###### 拒收冷藏红鹿肉（`rejected_chilled_red_deer_meat`）

本卡记录接收阶段拒收并转移至有文件记录的废物管理路线的冷藏红鹿肉。

- 选定流：拒收冷藏红鹿肉
- 流属性/单位：Mass / kg
- 数量规则：foreground reject mass measured by rejection reason for the identified lot
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_meat_rejects`
- 来源：`fao-who-cxc-58-2005`

##### 基本流

无。

### 过程：真空包装和装箱（`vacuum_packaging`）

#### 输入

##### 产品流

###### 送入包装的验收冷藏红鹿切块（`packaging_red_deer_meat_input`）

本卡记录在不改变身份的情况下转入真空包装质量平衡的验收冷藏切块。

- 选定流：验收冷藏去骨养殖红鹿长切后腿内侧部位，UNECE 9237
- 流属性/单位：Mass / kg
- 数量规则：calculated transfer mass from the accepted output of `incoming_cut_receipt`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per kg vacuum-packed chilled meat output
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_meat_mass_balance`
- 来源：`mass-balance-identity`

###### 聚酰胺/聚乙烯真空袋（`pa_pe_vacuum_pouch_input`）

本卡仅记录向已识别包装批次发放并消耗的 PA/PE 真空袋。

- 选定流：聚酰胺/聚乙烯真空袋
- 流属性/单位：Mass / kg
- 数量规则：foreground issued mass minus returned unused mass, reconciled with pouch count and measured unit mass
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`unece-deer-meat-2013`; `fao-who-cxc-8-1976`

###### 聚丙烯标签（`polypropylene_label_input`）

本卡记录用于批次和产品识别而消耗的聚丙烯标签。

- 选定流：聚丙烯标签
- 流属性/单位：Mass / kg
- 数量规则：foreground used label count multiplied by measured or supplier-declared unit mass
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`unece-deer-meat-2013`; `fao-who-cxc-8-1976`

###### 瓦楞纸箱（`corrugated_carton_input`）

本卡仅记录已识别批次消耗的瓦楞纸箱。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass / kg
- 数量规则：foreground used carton count multiplied by measured or supplier-declared unit mass
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`unece-deer-meat-2013`; `fao-who-cxc-8-1976`

###### 真空包装和装箱电力（`packaging_electricity`）

本卡记录真空包装机、封口机、贴标机和纸箱搬运设备使用的电力。

- 选定流：真空包装和装箱电力
- 流属性/单位：Energy / kWh
- 数量规则：submetered electricity, or calculated causal share from equipment power and operating time
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_electricity`
- 来源：`mass-balance-identity`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 真空包装冷藏红鹿切块（`vacuum_packed_chilled_red_deer`）

本卡记录密封于合格 PA/PE 真空袋并放行至鼓风冻结的冷藏肉质量。

- 选定流：真空包装冷藏去骨养殖红鹿长切后腿内侧部位，UNECE 9237
- 流属性/单位：Mass / kg
- 数量规则：packaging meat input minus measured meat rejects and documented packaging-stage mass change
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per kg vacuum-packed chilled meat output
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_meat_mass_balance`
- 来源：`mass-balance-identity`

##### 废物流

###### 废弃 PA/PE 真空袋（`rejected_pa_pe_pouch_waste`）

本卡记录以废物形式离开包装过程的未用损坏、封口测试和拒收 PA/PE 真空袋材料。

- 选定流：废弃聚酰胺/聚乙烯袋废物
- 流属性/单位：Mass / kg
- 数量规则：foreground waste mass reconciled with issued, returned, and product-packed pouch material
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`mass-balance-identity`

###### 废弃聚丙烯标签（`rejected_polypropylene_label_waste`）

本卡记录以废物形式离开过程的错印、损坏和已发放未使用聚丙烯标签。

- 选定流：废弃聚丙烯标签废物
- 流属性/单位：Mass / kg
- 数量规则：foreground waste mass reconciled with issued, returned, and applied labels
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`mass-balance-identity`

###### 废弃瓦楞纸箱（`rejected_corrugated_carton_waste`）

本卡记录以废物形式离开过程的损坏和拒收瓦楞纸箱。

- 选定流：废弃瓦楞纸箱废物
- 流属性/单位：Mass / kg
- 数量规则：foreground waste mass reconciled with issued, returned, and packed cartons
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`mass-balance-identity`

##### 基本流

无。

### 过程：强制空气鼓风速冻（`blast_quick_freezing`）

#### 输入

##### 产品流

###### 送入鼓风冻结机的真空包装冷藏红鹿肉（`blast_freezer_packaged_meat_input`）

本卡记录装入已识别强制空气鼓风冻结批次的合格包装冷藏肉。

- 选定流：真空包装冷藏去骨养殖红鹿长切后腿内侧部位，UNECE 9237
- 流属性/单位：Mass / kg
- 数量规则：calculated transfer mass from `vacuum_packed_chilled_red_deer`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per kg blast-frozen meat output
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_meat_mass_balance`
- 来源：`mass-balance-identity`

###### 强制空气鼓风速冻电力（`blast_freezing_electricity`）

本卡记录归属于鼓风冻结的压缩机、蒸发器风机、冷凝器、泵、控制和批次装载电力。

- 选定流：强制空气鼓风速冻电力
- 流属性/单位：Energy / kWh
- 数量规则：submetered blast-freezer system electricity for the batch, or calculated causal share from logged equipment power and operating time
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_electricity`
- 来源：`fao-who-cxc-8-1976`; `fao-meat-cold-store-manual`

###### 鼓风冻结制冷 R717 氨补充量（`blast_freezer_r717_makeup`）

本卡记录报告期间加入鼓风冻结机制冷设备组的 R717 氨。

- 选定流：制冷剂 R717 氨，鼓风冻结系统补充
- 流属性/单位：Mass / kg
- 数量规则：foreground make-up mass from refrigerant service and inventory records assigned to the blast-freezer equipment group
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_r717_mass_balance`
- 来源：`fao-who-cxc-8-1976`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 鼓风冷冻真空包装红鹿切块（`blast_frozen_red_deer_output`）

本卡记录在强制空气鼓风速冻后热中心温度已达到 -18 deg C 或更低的包装肉。

- 选定流：鼓风冷冻真空包装去骨养殖红鹿长切后腿内侧部位，UNECE 9237
- 流属性/单位：Mass / kg
- 数量规则：freezer input mass minus measured freezer rejects and documented mass change; release requires thermal-centre temperature <= -18 deg C
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per kg blast-frozen meat output
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_batch`
- 来源：`fao-who-cxc-8-1976`; `mass-balance-identity`

##### 废物流

无。

##### 基本流

###### 鼓风冻结机制冷 R717 氨排放至空气（`blast_freezer_r717_to_air`）

本卡将鼓风冻结机制冷设备组的 R717 氨逸散损失记录为直接空气排放。

- 选定流：氨，R717，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：opening charge + R717 make-up - closing charge - documented recovery for the blast-freezer equipment group
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_r717_mass_balance`
- 来源：`fao-who-cxc-8-1976`; `mass-balance-identity`

### 过程：R717 冷冻储存（`frozen_storage`）

#### 输入

##### 产品流

###### 送入冷冻储存的鼓风冷冻红鹿肉（`frozen_storage_meat_input`）

本卡记录转入已识别冷库批次的合格鼓风冷冻产品。

- 选定流：鼓风冷冻真空包装去骨养殖红鹿长切后腿内侧部位，UNECE 9237
- 流属性/单位：Mass / kg
- 数量规则：calculated transfer mass from `blast_frozen_red_deer_output`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per kg frozen meat released from storage
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_meat_mass_balance`
- 来源：`mass-balance-identity`

###### 冷冻储存电力（`frozen_storage_electricity`）

本卡记录按批次储存时长因果分配的压缩机、蒸发器风机、冷凝器、泵、照明和控制电力。

- 选定流：冷冻储存电力
- 流属性/单位：Energy / kWh
- 数量规则：submetered cold-store electricity allocated by documented storage duration and occupied mass or volume, preserving the separate storage row
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：储存时长（`storage_duration`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_electricity`
- 来源：`fao-who-cxc-8-1976`

###### 冷冻储存制冷 R717 氨补充量（`frozen_storage_r717_makeup`）

本卡记录报告期间加入冷冻储存制冷设备组的 R717 氨。

- 选定流：制冷剂 R717 氨，冷冻储存系统补充
- 流属性/单位：Mass / kg
- 数量规则：foreground make-up mass from refrigerant service and inventory records assigned to the frozen-storage equipment group
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_r717_mass_balance`
- 来源：`fao-who-cxc-8-1976`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 冷冻储存放行红鹿肉（`stored_frozen_red_deer_output`）

本卡记录在审查温度历史和包装完整性后从储存放行的冷冻批次。

- 选定流：储存冷冻真空包装去骨养殖红鹿长切后腿内侧部位，UNECE 9237
- 流属性/单位：Mass / kg
- 数量规则：storage input mass minus measured storage rejects and documented mass change
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per kg frozen meat released from storage
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_frozen_storage_lot`
- 来源：`fao-who-cxc-8-1976`; `mass-balance-identity`

##### 废物流

无。

##### 基本流

###### 冷冻储存制冷 R717 氨排放至空气（`frozen_storage_r717_to_air`）

本卡将冷冻储存制冷设备组的 R717 氨逸散损失记录为直接空气排放。

- 选定流：氨，R717，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：opening charge + R717 make-up - closing charge - documented recovery for the frozen-storage equipment group
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：储存时长（`storage_duration`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_r717_mass_balance`
- 来源：`fao-who-cxc-8-1976`; `mass-balance-identity`

### 过程：食品接触面清洗消毒（`sanitation`）

#### 输入

##### 产品流

###### 清洗消毒饮用水（`sanitation_potable_water`）

本卡记录分配给生产批次相关清洗消毒活动的实测饮用水。

- 选定流：饮用水
- 流属性/单位：Volume / m3
- 数量规则：metered sanitation water volume assigned to the lot; exclude staff amenities and unrelated facility water
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sanitation_water`
- 来源：`fao-who-cxc-58-2005`

###### 氢氧化钠洗涤剂（`sodium_hydroxide_detergent`）

本卡按所声明清洗制度使用的氢氧化钠活性成分质量记录配方洗涤剂。

- 选定流：氢氧化钠，洗涤剂活性成分
- 流属性/单位：Mass / kg
- 数量规则：product mass issued multiplied by supplier active-ingredient fraction, minus returned unused product
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_chemicals`
- 来源：`fao-who-cxc-58-2005`

###### 过氧乙酸消毒剂（`peracetic_acid_sanitizer`）

本卡按所声明消毒制度使用的过氧乙酸活性成分质量记录配方消毒剂。

- 选定流：过氧乙酸，消毒剂活性成分
- 流属性/单位：Mass / kg
- 数量规则：product mass issued multiplied by supplier active-ingredient fraction, minus returned unused product
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_chemicals`
- 来源：`fao-who-cxc-58-2005`

###### 清洗消毒设备电力（`sanitation_electricity`）

本卡记录分配给清洗消毒活动的泵、高压清洗机、计量设备和通风电力。

- 选定流：清洗消毒设备电力
- 流属性/单位：Energy / kWh
- 数量规则：submetered electricity, or calculated causal share from equipment power and operating time
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_electricity`
- 来源：`mass-balance-identity`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

无。

##### 废物流

###### 原清洗废水（`raw_sanitation_wastewater`）

本卡记录从清洗消毒转移至所声明场内好氧废水处理过程的废水体积。

- 选定流：肉类工厂原清洗废水
- 流属性/单位：Volume / m3
- 数量规则：measured wastewater volume assigned to sanitation, reconciled with potable water and documented retained or evaporated water
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_sanitation_wastewater`
- 来源：`fao-who-cxc-58-2005`; `mass-balance-identity`

##### 基本流

无。

### 过程：场内好氧废水处理和排放（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 场内好氧废水处理电力（`wastewater_treatment_electricity`）

本卡记录按所分配废水体积使用的废水泵、曝气机、控制和污泥处理设备电力。

- 选定流：场内好氧废水处理电力
- 流属性/单位：Energy / kWh
- 数量规则：submetered treatment electricity allocated by measured sanitation wastewater volume
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`mass-balance-identity`

##### 废物流

###### 送入处理的原清洗废水（`raw_sanitation_wastewater_input`）

本卡记录进入所声明场内好氧处理系统的清洗废水。

- 选定流：肉类工厂原清洗废水
- 流属性/单位：Volume / m3
- 数量规则：calculated transfer volume from `raw_sanitation_wastewater`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per m3 raw wastewater treated
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`mass-balance-identity`

##### 基本流

无。

#### 输出

##### 产品流

无。

##### 废物流

###### 好氧废水处理污泥（`wastewater_treatment_sludge`）

本卡记录从场内好氧处理系统转移至有文件记录废物路线的脱水污泥。

- 选定流：好氧废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：foreground wet sludge mass with dry-matter fraction recorded separately
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_treatment`
- 来源：`mass-balance-identity`

##### 基本流

###### 处理后废水排放至受纳水体（`treated_wastewater_to_water`）

本卡记录从场内系统直接排放至所声明受纳水体环境舱的处理后出水体积。

- 选定流：水，处理后废水，排放至水体
- 流属性/单位：Volume / m3
- 数量规则：metered final-effluent discharge volume assigned to the sanitation wastewater input
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_effluent`
- 来源：`fao-who-cxc-58-2005`

###### 化学需氧量排放至水体（`cod_to_water`）

本卡将处理后出水中的 COD 负荷记录为独立直接水体排放。

- 选定流：化学需氧量，排放至水体
- 流属性/单位：Mass / kg
- 数量规则：matched treated-effluent volume multiplied by laboratory COD concentration with unit conversion
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_effluent`
- 来源：`mass-balance-identity`

###### 总氮排放至水体（`total_nitrogen_to_water`）

本卡将处理后出水中的总氮负荷记录为独立直接水体排放。

- 选定流：氮，总量，排放至水体
- 流属性/单位：Mass / kg
- 数量规则：matched treated-effluent volume multiplied by laboratory total-nitrogen concentration with unit conversion
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_effluent`
- 来源：`mass-balance-identity`

### 过程：冷冻产品放行和装货月台交付（`cold_dock_dispatch`）

#### 输入

##### 产品流

###### 送入交付的储存冷冻红鹿肉（`dispatch_stored_frozen_red_deer_input`）

本卡记录在放行审查后从储存转入冷装货月台的冷冻产品。

- 选定流：储存冷冻真空包装去骨养殖红鹿长切后腿内侧部位，UNECE 9237
- 流属性/单位：Mass / kg
- 数量规则：calculated transfer mass from `stored_frozen_red_deer_output`
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：per kg net frozen reference product dispatched
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_dispatch_release`
- 来源：`mass-balance-identity`

###### 冷装货月台交付设备电力（`dispatch_electricity`）

本卡记录分配给交付批次的冷月台搬运、称重和温控设备电力。

- 选定流：冷装货月台交付设备电力
- 流属性/单位：Energy / kWh
- 数量规则：submetered electricity, or calculated causal share from equipment power and operating time
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：per 1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_electricity`
- 来源：`mass-balance-identity`

##### 废物流

无。

##### 基本流

无。

#### 输出

##### 产品流

###### 交付冷冻去骨红鹿后腿内侧部位（`dispatched_frozen_red_deer_inner_leg`）

本卡是唯一参考产品行，记录在工厂装货月台放行的净食用冷冻肉。

- 选定流：其他哺乳动物肉类，冷冻 `1fc83e3b-ac93-4d3b-899e-eed337072097`
- 流属性/单位：Mass / kg
- 数量规则：1,000 kg net edible meat excluding pouch, label, carton, pallet, frost, glaze, and free liquid; thermal-centre product temperature <= -18 deg C
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg net frozen reference product dispatched
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_dispatch_release`
- 来源：`unece-deer-meat-2013`; `fao-who-cxc-8-1976`; `mass-balance-identity`

##### 废物流

无。

##### 基本流

无。

## 7. 分配与联产品处理

前景后处理路线只有一种预期肉产品，不产生联产品。包装废物、拒收肉、废水和污泥保持为废物流，除非有文件记录的下游回收合同证明其他处理方式。

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `alloc_upstream_cut_specific` | 上游冷藏切块 | 使用供应商切块专属数据集及其经评审的屠宰/胴体分配；不得在本后处理前景系统内分配通用活体或胴体负荷。 | `unece-deer-meat-2013` |
| `alloc_no_cross_instance_average` | 物种、切块、带骨状态、冻结、制冷剂、包装和废水路线 | 不得将其他配置与本实例平均；应制作单独评审的数据包。 | `unstats-cpc-3-2025`; `unece-deer-meat-2013` |
| `alloc_shared_electricity` | 共享电表 | 优先采用过程分表；否则按有文件记录的运行时间和功率或制冷负荷驱动因素分配各设备组电力，并保留独立原子电力行。不得采用经济分配。 | `mass-balance-identity` |
| `alloc_refrigerant_by_equipment` | R717 补充和损失 | 按设备组质量平衡分配制冷剂；不得合并鼓风冻结和冷冻储存 R717 行。 | `mass-balance-identity` |
| `alloc_waste_no_credit` | 拒收肉、包装废物、废水和污泥 | 报告离开每个过程的废物毛量。前景清单不得使用避免负荷信用；任何下游回收应建模为单独且有文件记录的系统。 | `mass-balance-identity` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_incoming_cut_receipt` | `incoming_cut_receipt` | 冷藏切块接收和身份 | 秤、供应商、追溯和温度记录 | lot_id; species; farmed_status; UNECE_cut_code; bone_state; supplier_dataset_id; origin; receipt_mass_kg; receipt_temperature_deg_c; scale_id; timestamp | 每个接收批次称重，并在验收前核对身份和温度 | kg; deg C | 每批 | 完整报告期 | 所声明工厂接收点 | 按批次汇总验收和拒收质量，不混合物种或切块配置 | 校准证书；供应商规格；追溯记录；温度装置检查 |
| `cp_meat_rejects` | `incoming_cut_receipt` | 拒收肉 | 拒收日志和秤记录 | lot_id; reject_reason; reject_mass_kg; destination; scale_id; timestamp | 称量每个拒收批次并关联原始批次 | kg | 每次拒收事件 | 完整报告期 | 所声明工厂 | 按原因和去向汇总拒收质量 | 秤校准；签字拒收记录；去向接收凭证 |
| `cp_meat_mass_balance` | `incoming_cut_receipt`; `vacuum_packaging`; `blast_quick_freezing`; `frozen_storage` | 肉转移和质量平衡 | 经校准的秤和批次转移记录 | lot_id; process_id; input_mass_kg; output_mass_kg; reject_mass_kg; timestamp; scale_id | 对每个批次核对过程投入、输出、拒收和有文件记录的质量变化 | kg | 每批和每过程 | 完整报告期 | 所有声明的前景肉过程 | 将闭合批次质量平衡归一化为每 1,000 kg 交付净肉 | 秤校准；批次核对；签字偏差调查 |
| `cp_process_electricity` | `incoming_cut_receipt`; `vacuum_packaging`; `blast_quick_freezing`; `frozen_storage`; `sanitation`; `onsite_wastewater_treatment`; `cold_dock_dispatch` | 过程电力 | 分表或设备运行日志 | meter_id; start_kwh; end_kwh; process_id; equipment_id; rated_or_measured_power_kw; operating_hours; lot_id; storage_duration_h | 电表读数相减；共享时采用功率乘记录运行时间或有文件记录的制冷负荷驱动因素 | kWh | 每批或每日，并按月核对 | 包括储存的完整报告期 | 所声明设备组 | 按过程行汇总，再归一化至参考流，不合并各行 | 电表校准；公用事业核对；设备日志；分配工作表 |
| `cp_packaging_materials` | `vacuum_packaging` | 每种包装投入 | 发放、退回、计数和单位质量记录 | material_specification; material_type; issued_count; returned_count; used_count; unit_mass_kg; lot_id | 分别核对 PA/PE 袋、PP 标签和瓦楞纸箱的发放、退回和使用件数 | kg | 每个包装批次 | 完整报告期 | 所声明包装线 | `used mass = used count x unit mass`，按材料分别计算 | 供应商规格；经校准的单位质量样本；库存核对 |
| `cp_packaging_waste` | `vacuum_packaging` | 每种包装废物 | 分类废物秤记录 | material_type; waste_mass_kg; reason; destination; lot_id; scale_id | 分别称量 PA/PE、PP 标签和瓦楞纸箱废物 | kg | 每次废物转移 | 完整报告期 | 所声明包装线 | 按材料和去向汇总，并与包装投入核对 | 秤校准；废物转移凭证；材料核对 |
| `cp_freezing_batch` | `blast_quick_freezing` | 冻结机输出和热力完成 | 批次质量和温度记录仪 | lot_id; freezer_id; load_mass_kg; start_time; end_time; product_thermal_centre_temperature_deg_c; sensor_id; reject_mass_kg | 平衡后测量代表性产品热中心温度，并关联批次质量和时间 | kg; deg C; h | 每个冻结批次 | 完整报告期 | 所声明强制空气鼓风冻结机 | 仅验收达到 <= -18 deg C 的批次；调查并隔离不合格批次 | 经校准温度探针/记录仪；冻结批次记录；纠正措施记录 |
| `cp_frozen_storage_lot` | `frozen_storage` | 储存质量和温度历史 | 仓库和温度记录 | lot_id; entry_mass_kg; exit_mass_kg; entry_time; exit_time; storage_air_temperature_deg_c; product_check_temperature_deg_c; packaging_reject_mass_kg | 跟踪已识别批次质量、时长、连续空气温度和放行检查 | kg; h; deg C | 连续温度和每次批次移动 | 完整储存驻留期 | 所声明 R717 冷库 | 按批次计算储存时长并核对入库、出库和拒收 | 经校准记录仪；仓库记录；报警和纠正措施历史 |
| `cp_r717_mass_balance` | `blast_quick_freezing`; `frozen_storage` | R717 补充和空气损失 | 制冷剂库存和维修记录 | equipment_group; opening_charge_kg; additions_kg; closing_charge_kg; recovered_kg; service_date; lot_or_period_basis | 分别闭合鼓风冻结和冷冻储存设备组的 R717 质量平衡 | kg | 每次维修事件，至少每年闭合 | 报告期和充注量平衡区间 | 所声明 R717 设备组 | `loss = opening + additions - closing - recovered`；按有文件记录的设备组生产或储存驱动因素分配 | 技师记录；钢瓶质量；库存核对；泄漏维修记录 |
| `cp_sanitation_water` | `sanitation` | 饮用水 | 专用水表或清洗消毒日志 | meter_id; start_m3; end_m3; campaign_id; lot_ids; date | 计量分配的清洗消毒活动饮用水 | m3 | 每次活动或每日 | 完整报告期 | 所声明食品接触清洗消毒系统 | 仅将活动体积分配给关联生产批次 | 水表校准；清洗消毒计划；水质可饮用证据 |
| `cp_sanitation_chemicals` | `sanitation` | 氢氧化钠和过氧乙酸活性成分 | 发放/退回和供应商成分记录 | chemical_name; product_mass_kg; returned_mass_kg; active_fraction; campaign_id; lot_ids | 称量配方产品并分别计算各化学品活性质量 | kg active ingredient | 每次活动 | 完整报告期 | 所声明清洗消毒系统 | `active mass = (issued product mass - returned mass) x active fraction` | 供应商 SDS/规格；秤校准；加药日志 |
| `cp_sanitation_wastewater` | `sanitation` | 原废水 | 废水表和水量平衡记录 | campaign_id; influent_volume_m3; potable_water_m3; retained_or_evaporated_water_m3; lot_ids | 计量废水并按分配活动与清洗水核对 | m3 | 每次活动或每日 | 完整报告期 | 清洗消毒排水至场内处理入口 | 汇总匹配活动体积并归一化至参考流 | 水表校准；水量平衡工作表；排水路线核验 |
| `cp_wastewater_treatment` | `onsite_wastewater_treatment` | 处理投入、电力和污泥 | 处理仪表、运行和污泥记录 | influent_volume_m3; treatment_kwh; wet_sludge_kg; sludge_dry_matter_fraction; operating_period; linked_campaign_ids | 计量进水和电力并称量脱水污泥 | m3; kWh; kg | 每日或每个处理批次 | 完整报告期 | 所声明场内好氧处理设施 | 按匹配的清洗进水体积分配 | 仪表校准；运行日志；污泥分析；转移凭证 |
| `cp_wastewater_effluent` | `onsite_wastewater_treatment` | 处理水体积、COD 和总氮 | 最终出水计量和认可实验室结果 | sample_id; sampling_start; sampling_end; effluent_volume_m3; cod_mg_l; total_nitrogen_mg_l; receiving_water_compartment | 使用时间匹配的代表性样品和最终出水流量记录 | m3; mg/L; kg | 按许可要求，且至少覆盖每个代表性报告区间 | 完整报告期 | 最终排放点 | `pollutant kg = volume_m3 x concentration_mg_l / 1000`；汇总匹配区间 | 实验室认可；监管链；仪表校准；许可报告 |
| `cp_dispatch_release` | `cold_dock_dispatch` | 参考产品质量和放行 | 经校准交付秤、追溯、包装和温度记录 | lot_id; net_meat_mass_kg; pouch_mass_kg; label_mass_kg; carton_mass_kg; pallet_mass_kg; thermal_centre_temperature_deg_c; dispatch_time; facility_id | 将净肉与包装分开称量或核对，并核验放行限定项和温度 | kg; deg C | 每个交付批次 | 完整报告期 | 工厂冷装货月台 | 汇总合格净肉并精确归一化为 1,000 kg 参考产品 | 秤校准；放行证书；温度校准；批次追溯 |

### 计算规则

| rule_id | 适用于 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_process_meat_balance` | 每个含肉过程 | `output meat = input meat - measured meat rejects - documented mass change`；未解决差异属于质量发现，不得以隐藏流处理 | input_mass_kg; reject_mass_kg; documented_mass_change_kg | output_mass_kg | `mass-balance-identity` |
| `calc_packaging_material_mass` | 每种包装材料 | `used material mass = used count x measured or supplier-declared unit mass`；PA/PE、PP 和瓦楞纸板分别计算 | used_count; unit_mass_kg | material_mass_kg | `mass-balance-identity` |
| `calc_electricity_share` | 共享电表 | `assigned kWh = meter-period kWh x documented causal driver share`；采用运行功率乘时间或制冷负荷与时长，绝不采用收入 | meter_kwh; equipment_power_kw; operating_time_h; refrigeration_load_driver; storage_duration_h | process electricity kWh | `mass-balance-identity` |
| `calc_r717_loss` | 每个 R717 设备组 | `R717 loss = opening charge + additions - closing charge - recovered mass` | opening_charge_kg; additions_kg; closing_charge_kg; recovered_kg | R717 emitted to air, kg | `mass-balance-identity` |
| `calc_active_chemical` | 每种清洗消毒化学品 | `active ingredient mass = (issued formulated-product mass - returned formulated-product mass) x supplier active fraction` | issued_mass_kg; returned_mass_kg; active_fraction | sodium-hydroxide or peracetic-acid active mass, kg | `mass-balance-identity` |
| `calc_effluent_pollutant_load` | COD 和总氮 | `pollutant kg = matched effluent volume_m3 x concentration_mg_l / 1000` | effluent_volume_m3; cod_mg_l or total_nitrogen_mg_l | pollutant load, kg | `mass-balance-identity` |
| `calc_reference_normalization` | 所有清单行 | `normalized amount = reporting-period row amount x 1000 / conforming dispatched net meat mass_kg` | row amount; conforming dispatched net meat mass_kg | row amount per 1,000 kg reference product | `mass-balance-identity` |

### 数据质量要求

| requirement_id | 适用于 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_instance_identity` | 产品和上游投入 | 在批次级保持物种、养殖状态、UNECE 9237 切块、去骨状态、包装、强制空气技术、R717 系统和温度门禁；不得聚合混合实例。 | 供应商规格；追溯链；批次和放行记录 |
| `dq_primary_data` | 所有非上游前景行 | 使用报告期工厂记录；推理估计不得替代发布关键数量。 | 仪表；经校准秤；日志；发票；维修记录；实验室报告 |
| `dq_temporal_coverage` | 前景系统 | 覆盖至少连续 12 个有代表性的月份；若生产具有季节性，则覆盖完整生产活动；披露停机、异常批次和跨期储存。 | 生产日历；仪表期间；批次登记；代表性声明 |
| `dq_completeness` | 原子清单 | 核对肉、每种包装材料、水、每种化学品、按过程电力、按设备组 R717、废物、废水、COD、总氮和污泥；仅在有无流证据时记录零。 | 闭合工作表和签字完整性评审 |
| `dq_measurement` | 质量、能量、体积、温度和浓度 | 使用校准有效期内的仪器和认可或公认实验室方法；保留检出限和采样基础。 | 校准证书；方法报告；监管链 |
| `dq_no_uuid_invention` | 所有流身份 | 仅在 `dispatched_frozen_red_deer_inner_leg` 使用所选 Tiangong UUID；在授权身份对齐评审前，所有其他 UUID 留空。 | manifest 中的 UUID 评审记录 |

## 9. 验证规则

| rule_id | 适用于 | 规则 | source_ids |
| --- | --- | --- | --- |
| `val_instance_identity` | 数据包元数据和参考流 | 若缺失或不符合物种、养殖状态、UNECE 9237 切块、去骨状态、强制空气鼓风技术、R717 系统、包装配置或 <= -18 deg C 交付门禁则失败；不得推断物种市场份额。 | `unstats-cpc-3-2025`; `unece-deer-meat-2013`; `dinz-farmed-venison`; `fao-who-cxc-8-1976` |
| `val_reference_mass` | `dispatched_frozen_red_deer_inner_leg` | 除非参考输出恰为 1,000 kg 净食用肉，且不包括包装、托盘、霜、冰衣、冰和游离液体，否则失败。 | `unece-deer-meat-2013`; `mass-balance-identity` |
| `val_reference_uuid` | 所有清单卡 | 除非 UUID `1fc83e3b-ac93-4d3b-899e-eed337072097` 仅出现在 `dispatched_frozen_red_deer_inner_leg`，且所有其他卡无 UUID，否则失败。 | `mass-balance-identity` |
| `val_atomic_flows` | 过程清单 | 任何集合或类别卡均失败，包括 energy、materials、chemicals、fuels、refrigerants、packaging、wastes、emissions 或 route-specific carriers；每个跨边界流必须有一个 row_id 和非空说明。 | `mass-balance-identity` |
| `val_no_undeclared_route` | 过程和清单 | 若将其他物种、切块、带骨状态、冻结方法、制冷剂、包装配置、废水路线、燃料、蒸汽、冰、热载体或配送运输平均到本实例，则失败。 | `unstats-cpc-3-2025`; `unece-deer-meat-2013`; `fao-who-cxc-8-1976` |
| `val_temperature_chain` | 鼓风冻结、储存和交付 | 若冻结机热中心完成记录和交付产品温度记录不能证明 <= -18 deg C，或缺失储存温度历史和偏离记录，则失败。 | `fao-who-cxc-8-1976`; `fao-meat-cold-store-manual` |
| `val_mass_closure` | 肉和包装 | 未解决肉质量平衡差异，以及缺失 PA/PE、PP 标签和瓦楞纸板各自投入/废物核对，均失败。 | `mass-balance-identity` |
| `val_refrigerant_closure` | 鼓风冻结和储存 R717 系统 | 缺失 R717 补充量或损失、跨设备组合并、或无充注/维修/回收记录支持，均失败。 | `fao-who-cxc-8-1976`; `mass-balance-identity` |
| `val_wastewater_closure` | 清洗消毒和场内处理 | 缺失原废水、处理电力、污泥、处理水排放、COD 或总氮记录，或污染物样品与出水体积不匹配，均失败。 | `fao-who-cxc-58-2005`; `mass-balance-identity` |
| `val_evidence_gap_disclosure` | 候选使用 | 若将前景数量、非参考 UUID 对齐或开放的物种市场份额限制表示为经评审的默认证据，而不是披露为实例门禁或证据缺口，则发布验证为不确定。 | `mass-balance-identity` |

## 10. 发布数据集概况

| 字段 | 值 |
| --- | --- |
| dataset_role | 从完整且经评审的前景数据包派生的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 为所声明的冷冻养殖红鹿 UNECE 9237 去骨配置构建过程和生命周期模型 |
| allowed_use | 仅在研究产品与所声明的物种、切块、带骨状态、包装、强制空气/R717 冻结和储存路线、废水路线、地理和时期相关性及装货月台温度门禁匹配时使用 |
| excluded_use | CPC 范围物种混合；通用鹿肉；其他切块或带骨状态；鲜/冷藏肉；内脏；混合物种生产；替代冻结或制冷系统；替代废水路线；零售、烹饪或消费建模 |
| required_metadata | PCR id 和版本；批次和工厂范围；地理；报告期；物种和养殖状态；UNECE 切块；去骨状态；上游切块数据集；包装规格；冻结机和 R717 设备组；储存时长；废水路线；分配方法；参考流 UUID；交付温度 |
| required_quality_disclosure | 一手数据份额；时间覆盖；校准和实验室状态；肉和包装质量闭合；电力分配；R717 闭合；温度偏离；废水采样；拒收；缺失 UUID；偏离和未解决证据缺口 |
| update_trigger | 物种、切块、带骨状态、来源动物系统、包装、冻结技术、制冷剂、废水路线、交付温度、上游分配、工厂技术、法规、来源证据发生变化，或数据超出所声明代表性期间 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-3-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, code 21139, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-13) | CPC 边界、所含其他哺乳动物，以及鲜/冷藏肉和可食用内脏排除项 |
| `unece-deer-meat-2013` | `standard` | UNECE Standard for Deer Meat - Carcases and Cuts, 2013. https://unece.org/sites/default/files/2024-03/DeerMeat-2013_E.pdf (retrieved 2026-08-13) | 鹿种/切块规格、UNECE 9237 切块身份、去骨状态、包装/追溯限定项和冷冻/深冷产品状态 |
| `dinz-farmed-venison` | `extension_guidance` | Deer Industry New Zealand, Farmed venison. https://deernz.org/home/our-great-products/farmed-venison/ (retrieved 2026-08-13) | 证明养殖红鹿是真实的单一物种鹿肉生产路线，且批次/农场追溯可行；不用于 CPC 范围市场份额默认值 |
| `wiklund-et-al-2014-venison` | `literature` | Wiklund, E., Farouk, M. M. and Finstad, G. (2014), Venison: Meat from red deer (*Cervus elaphus*) and reindeer (*Rangifer tarandus tarandus*), Animal Frontiers 4(4):55-61. https://doi.org/10.2527/af.2014-0034; publisher PDF https://academic.oup.com/af/article-pdf/4/4/55/32410646/55.pdf (OpenAlex discovery and full-text verification 2026-08-20) | 支持养殖红鹿身份、鹿专用屠宰/去骨/加工设施，以及增值切块去骨和去筋膜；不用于 CPC 市场份额或定量 LCI 默认值 |
| `fao-who-cxc-58-2005` | `standard` | Codex Alimentarius, Code of Hygienic Practice for Meat, CXC 58-2005. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/ua/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B58-2005%252FCXC_058e.pdf (retrieved 2026-08-13) | 冷藏切块上游边界、卫生切割/包装、饮用水清洗消毒、排水、废水、过程控制和记录 |
| `fao-who-cxc-8-1976` | `standard` | Codex Alimentarius, Code of Practice for the Processing and Handling of Quick Frozen Foods, CXC 8-1976, revised 2008. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/fr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B8-1976%252FCXC_008e.pdf (retrieved 2026-08-13) | 速冻定义、热中心完成、-18 deg C 冷链、温度监测、包装、电力连续性、冷冻储存和制冷剂泄漏控制 |
| `fao-meat-cold-store-manual` | `handbook` | FAO, Manual on Meat Cold Store Operation and Management, Freezing section. https://www.fao.org/4/T0098E/T0098E02.htm (retrieved 2026-08-13) | 强制空气鼓风冻结作为所选肉类冻结技术，以及过程分解支持 |
| `mass-balance-identity` | `method_factor` | Conservation-of-mass and metered-activity identity defined in this PCR's calculation rules; no external quantitative default. | 肉、包装、制冷剂、水、污染物负荷、电力分配和归一化计算 |
