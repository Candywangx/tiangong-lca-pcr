---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.synthetic-or-reconstructed-precious-or-semi-precious-stones-unworked
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 氧氢焰熔未加工无色合成蓝宝石

## 1. 范围与适用性

本方法仅适用于从外购高纯未熔融氧化铝粉，经外购气态H2/O2氧氢焰熔生长、实际稳定处理、分级与包装，交付未加工无色无故意掺杂的宝石级合成蓝宝石单晶。纯度、晶体质量、缺陷、批次、验收等级、实际SKU和供方须在未来前景采集中确认，不给默认配方、收率、炉温、周期或能耗。（`stettler-verneuil`; `orbray-sapphire-production`; `sebal-sapphire`; `gia-synthetic-gems`）

排除天然宝石、再造宝石/粘结混合物、掺色蓝宝石与红宝石、尖晶石、合成金刚石、其他生长路线、研磨刚玉、烧结陶瓷以及切割、抛光、钻孔或镶嵌成品。技术用途的再熔晶体不属于参考产品，但实际销售须另列实物输出。外购氢氧生产及氧化铝精制属于上游；本方法不包含现场气体生产。实际非电稳定处理、湿法净化或不同物料须先补充相容原件与独立清单，不能宣称已在本边界中完成。CPC 34560仅提供宽分类，不能据此扩大方法。（`un-cpc-3-2025`; `stettler-verneuil`; `orbray-sapphire-production`）

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.synthetic-or-reconstructed-precious-or-semi-precious-stones-unworked |
| classification_refs | CPC 3.0:34560; narrower |
| covered_products | 未加工无色无故意掺杂宝石级焰熔蓝宝石单晶 |
| excluded_products | 天然/再造/掺色宝石；其他晶体生长路线；再熔料作为参考；加工宝石与技术部件 |
| representative_product | 按买方宝石级规范验收的未加工无色蓝宝石晶体 |
| production_route | 未熔融氧化铝粉 + 外购H2/O2 → 焰熔籽晶生长 → 实际稳定 → 分级包装 |
| market_state | 工厂交付、未加工干净晶体；排除净质量中的包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供可供后续宝石加工的已验收无色单晶原料 |
| How much | 1 千克验收净晶体 |
| How well | 声明单晶Al2O3身份、无故意掺杂、颜色、缺陷与宝石级验收规范，不指定数值纯度 |
| How long or cycle | 一次生产期的工厂交付；不作使用寿命功能等价声明 |
| reference_flow_link | accepted_sapphire |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 未经加工的人造或再造宝石或半宝石 `7821e8ad-ee2f-4cb9-bccd-5e2ce4169481` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 实际SKU/批次；宝石级验收；单晶Al2O3组成及杂质；无故意掺杂；无色；Verneuil氧氢路线；未加工状态；净干质量；实际稳定过程；供气来源及基准；场址/年份；包装；等外品去向 |

广义参考流只作物理定位，须用以上限定信息证明实际子集；不能代表所有合成或再造宝石。功能单位、参考流、清单、采集聚合及计算均以同一1千克验收净干晶体为分母。缺少限定信息时数据包参考定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用校准秤逐批称验收净干晶体，扣除包装、水、松粉和异物。Q为同一生产期的验收净晶体总质量，按cp_product采集，必须为正；件数或克拉不改变分母。 |
| gas_basis | hydrogen_supply; oxygen_supply | H2: Mass; O2: Volume | kg; m3 | 用实测温度、绝压、湿干组成、压缩因子和供方条件进行必要体积/质量换算；不得把次级属性系数作为通用密度。无法证明数量/背景基准兼容时保持链接不完整。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已交付的无掺杂未熔融氧化铝粉、分别外购H2/O2及相容籽晶 |
| starting_condition_role | 前景起点；原料/气体生产负荷接上游 |
| product_classification_scope | CPC 34560中的已声明较窄子集 |
| recursive_input_rule | 外购同类籽晶按供应数据链接上游，不无限递归；内部重复使用仅作库存/内部转移，不新增外部流 |
| upstream_dataset_requirement | 每项外购原料、气体、电力和包装须匹配路线、组成、状态、地域、时间及参考基准；不得用UUID身份代替背景数据完整性 |
| disclosure | 实际场址/年份、供方、路线、稳定/冷却/治理配置、前景与上游分界及无数据项 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_gate | foreground_system_boundary | 纳入原料/气体接收、供料、焰熔生长、实际稳定、分级、包装及相关供电、冷却和污染治理。已在外购背景中包含的供应运输不得再次计入；实际未覆盖运输须独立增加服务交换。 | stettler-verneuil; orbray-sapphire-production; sebal-sapphire |
| single_unit | foreground_process_links | 同一晶体在生长、稳定、包装之间的实物交接聚合为一个前景单元，保留阶段独立计量。仅一个宝石级成品参考输出；内部链接两端同量，不能虚造另一UUID。 | sebal-sapphire; jrc-sic-bref-2007 |
| release_scope | environment_boundary | 实物质量/水平衡涵盖晶体、粉尘、废料、凝水、实际液体排出和空气排放。内部回用不作为外排；废水送处理与向自然水体排放分开。新增实际药剂、燃料、污染物或废流必须逐个独立列出，未知不能按不存在。 | jrc-sic-bref-2007 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| verneuil_production | 接收、焰熔生长、实际稳定、分级包装 | required | 实际声明的外购气体、无色无掺杂路线；稳定、冷却及包装设备按实际纳入 | foreground production | 每 1 kg 参考流 |

### 过程：无色蓝宝石焰熔生产（`verneuil_production`）

#### 输入

##### 产品流

###### 高纯未熔融氧化铝粉（`alumina_feed`）

逐批称量干氧化铝进料并检验水分、Al2O3纯度与非预期杂质。本范围不包含掺杂剂或预混着色进料。

- 选定流：氧化铝（铝的氧化物），人造刚玉除外 `2b64b550-00d6-4210-aa50-7c061511518d`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_materials实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：`stettler-verneuil`; `orbray-sapphire-production`

###### 外购气态氢气 H2（`hydrogen_supply`）

分别计量供入H2和O2，采集纯度、交付质量与库存。钢瓶皮重或气体体积换算必须可追溯；不以加氢油、原料气或过氧化物代替。

- 选定流：外购气态氢气 H2
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_gases实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_gases`
- 来源：`stettler-verneuil`; `orbray-sapphire-production`

###### 外购气态氧气 O2（`oxygen_supply`）

气态O2按Volume参考属性以m3计。记录温度、绝对压力、湿干组成及压缩因子，匹配供方/背景的体积条件。本身份限定工业氧气分离及标准条件体积基准。原件1.429 kg/Nm3不是运行工况密度或PCR换算默认值；须取得底层标准温压约定和供方条件。体积基准兼容性未知时阻止数据集链接。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 单位组：`93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则：采用cp_gases实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_gases`
- 来源：`stettler-verneuil`; `orbray-sapphire-production`

###### 外购中压电网电力（`electricity`）

分阶段计量粉料供给、火焰控制、抽风、冷却泵、实际电加热稳定炉、检验及包装。本UUID仅适用于CN、1–35千伏、电网平均消费组合到用户；其他供应须匹配相应流。保留净热值/MJ；电表kWh按精确单位关系1 kWh = 3.6 MJ换算。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组：`93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_power实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_power`
- 来源：`jrc-sic-bref-2007`

###### 冷却补充用处理自来水（`cooling_makeup`）

仅纳入实际外购处理自来水补充量，不计内部循环量。本流参考属性为Mass/kg；液态水体积按实测密度和温度换算，不套用数据库筛查密度。其他实际取水或处理药剂须新增独立具体行。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_water实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_water`
- 来源：`jrc-sic-bref-2007`

###### 外购未加工无掺杂合成蓝宝石籽晶（`seed_crystal`）

使用来源和生长历史明确且相容的未加工蓝宝石片段。称量外部新购籽晶消耗量，核对期初期末库存。前景内部重复使用的籽晶属于内部转移，不重复计入上游负荷。

- 选定流：未经加工的人造或再造宝石或半宝石 `7821e8ad-ee2f-4cb9-bccd-5e2ce4169481`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_materials实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：`stettler-verneuil`; `orbray-sapphire-production`

###### 氧化铝陶瓷生长基座（`alumina_pedestal`）

仅在实际使用氧化铝陶瓷基座时纳入；记录陶瓷组成、牌号、更换质量及寿命。陶瓷部件不等于外购氧化铝粉或坩埚。炉内其他实际耐火材料组成须分别增行。

- 选定流：氧化铝陶瓷生长基座
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_materials实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：`jrc-sic-bref-2007`

###### 产品包装用聚乙烯薄膜（`pe_film`）

仅在实际使用PE薄膜时纳入；确认聚合物CAS 9002-88-4、牌号及供方。称量消耗薄膜并排除晶体净质量，核对复用包装。披露来源CPC箱包分类冲突；不得扩展到PET或混合复合膜。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_materials实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：`jrc-sic-bref-2007`

###### 瓦楞纸板运输箱（`corrugated_box`）

仅在实际使用该包装时纳入；称量纸箱，取得供方实测纤维/胶黏剂/涂层组成。未经实际SKU证据一致性确认，不采用固定16.6%原生/83.4%再生配比候选；折叠纸盒构造不同。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_materials实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_materials`
- 来源：`jrc-sic-bref-2007`

#### 输出

##### 产品流

###### 验收未加工无色焰熔蓝宝石（`accepted_sapphire`）

1 千克。实际稳定处理和质量分级后、切割抛光镶嵌前，称量验收干晶体净质量。排除包装、松散粉料、基座、水及再熔级物料。按等级验收支持宝石用途，不虚构纯度或收率默认值。

- 选定流：未经加工的人造或再造宝石或半宝石 `7821e8ad-ee2f-4cb9-bccd-5e2ce4169481`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：1 千克
- 数值来源模式：fixed_value
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：source_rule
- 采集协议：`cp_product`
- 来源：`stettler-verneuil`; `sebal-sapphire`

###### 作为再熔原料销售的等外合成蓝宝石晶体（`remelt_coproduct`）

仅在实际向其他生长路线销售时纳入。记录实物质量、等级、销售合同及接收方，与宝石级参考输出分开。未核实独立精确流身份；不得隐去该输出，或为满足检查器而套用宝石UUID。完成联产数据集前须解决身份。

- 选定流：作为再熔原料销售的等外合成蓝宝石晶体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_product实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_product`
- 来源：`stettler-verneuil`; `sebal-sapphire`

##### 废物流

###### 送处置的不合格无掺杂蓝宝石晶体（`rejected_crystal`）

仅计实际跨界弃置的物料；记录组成、实测干质量及接收处理路线。内部返工不属于废物外运；可售再熔原料列入remelt_coproduct，不得两行重复。

- 选定流：送处置的不合格无掺杂蓝宝石晶体
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_waste`
- 来源：`jrc-sic-bref-2007`

###### 外运收集氧化铝粉尘（`captured_alumina_dust`）

称量该单一捕集粉料流并检验组成/污染情况。广义粉尘废物身份在此限定为实际捕集氧化铝粉。返回供料的内部粉尘仍为内部转移；治理后外排颗粒物另计。

- 选定流：粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_waste`
- 来源：`jrc-sic-bref-2007`

###### 废氧化铝陶瓷生长基座（`spent_alumina_pedestal`）

仅在更换时纳入；保留实际陶瓷组成、质量、污染情况及接收方。拒用限定铝生产来源的耐火材料废物流。

- 选定流：废氧化铝陶瓷生长基座
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_waste`
- 来源：`jrc-sic-bref-2007`

###### 送处理的未处理冷却排污水（`cooling_bleed`）

仅在实际外排冷却排污水时纳入；采集质量、体积、温度、悬浮固体及每种实际添加剂/污染物。候选限定二/三级处理，不能识别未处理排污水。本行不表示向受纳水体直接排放。

- 选定流：送处理的未处理冷却排污水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_water实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_water`
- 来源：`jrc-sic-bref-2007`

###### 未清洗废弃聚乙烯包装膜（`waste_pe_film`）

仅在产生废膜时纳入；实测质量、聚合物及污染状态，记录接收方。不得把回收厂已清洗流用于该未处理厂界废物。

- 选定流：未清洗废弃聚乙烯包装膜
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_waste`
- 来源：`jrc-sic-bref-2007`

###### 包装产生的破损纸板箱（`waste_cardboard`）

仅在工厂包装产生边角料/破损箱时纳入；称量实际纸板废物并记录污染及接收方。身份来源提及专家2%假设，本方法不采用该数值。进料包装废物须使用另行相容的交换。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_waste实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_waste`
- 来源：`jrc-sic-bref-2007`

##### 基本流

###### 向室外空气排放的PM2.5（`pm25_air`）

实测治理后排出的空气动力学直径不大于2.5微米颗粒物；相关时纳入已评估可凝结贡献。区分有组织与无组织源，不在互斥粒径之上叠加PM10或总颗粒物。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_air实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_air`
- 来源：`epa-201a-2020`; `jrc-sic-bref-2007`

###### 向室外空气排放的PM2.5–PM10（`pm25_10_air`）

仅计大于2.5且不大于10微米的互斥区间；仅由相容同期PM10及PM2.5测量之差或直接分级采样确定。未知粒径分布保留不完整，不填零。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_air实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_air`
- 来源：`epa-201a-2020`; `jrc-sic-bref-2007`

###### 向室外空气排放的大于PM10颗粒物（`pmover10_air`）

采用相容总量/可过滤颗粒物测量及明确粒径分离，采集大于10微米互斥区间。不得仅从PM10推算，也不得把捕集粉尘计为该排放。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_air实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_air`
- 来源：`epa-201a-2020`; `jrc-sic-bref-2007`

###### 向室外空气排放的水蒸气（`water_vapour_air`）

根据实际耗氢燃烧、气体水分与冷却蒸发，以实测气体/水平衡确定实际排出水蒸气。分开核算回收冷凝液或液态外运量。数据库属性系数或完全燃烧理论假设不能替代泄漏及湿度测量。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_air实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_air`
- 来源：`jrc-sic-bref-2007`

###### 向室外空气排放的未燃氢（`hydrogen_air`）

使用经校准测量或可追溯且包含不确定性的闭合平衡，评估实际供气泄漏、启停吹扫及出口未燃H2。不存在须有评估证据；无默认排放因子。

- 选定流：氢 `08a91e70-3ddc-11dd-949c-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_air实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_air`
- 来源：`jrc-sic-bref-2007`

###### 向室外空气排放的一氧化氮（`nitric_oxide_air`）

仅在氮进入高温火焰且实际检测或定量到NO时纳入。测量NO物种实际质量；按NO2当量汇总的NOx不等于NO质量。排除N2O且不得重复计入NOx总量。

- 选定流：一氧化氮 `08a91e70-3ddc-11dd-96ee-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_air实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_air`
- 来源：`jrc-sic-bref-2007`

###### 向室外空气排放的二氧化氮（`nitrogen_dioxide_air`）

仅在实际检测或定量到NO2时纳入；记录物种实际质量及采样基准。仅有NOx汇总时须取得相容物种分离结果；不得将全部数量同时赋给NO和NO2，也不得声称为零。

- 选定流：二氧化氮 `08a91e70-3ddc-11dd-96e5-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：`93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：采用cp_air实测同一生产期的本项跨界数量，将归属于本产品的实测数量除以同一期验收净干晶体质量Q。条件行无实际交换时须保留不存在的评估证据。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_air`
- 来源：`jrc-sic-bref-2007`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| avoid_allocation | foreground_burden_allocation | 声明产品特定归因型清单目标，先通过实测分段/分批或虚拟单元划分直接归属专属操作，并评估系统扩展是否适用。仅在这些方式不适用或不可行且需要分配时，对未分开的公共负荷逐项应用可证明的决定性物理因果关系；剩余无可证明物理关系的负荷按同一时期、共同过程出口及实际交付状态的可核市场价值经济分配。扣除后续加工/包装/运输差异，披露价格、实物质量、分配范围及敏感性；无默认份额，不宣称该分配规则适用于所有后果型研究。 | jrc-ilcd-allocation-2010; stettler-verneuil |
| physical_before_burden | physical_balance | 实物输出、废物、排放和内部链接以真实物理数量保存，不能乘环境负荷分配份额。另建分配后环境负荷账，仅对联产公共负荷应用已选择份额，各份额和为1；不得对同一共同负荷重复分配。 | jrc-sic-bref-2007 |
| waste_recovery | waste_classification | 记录处置、回收或实际销售身份和接收方；可售再熔料不是负排放或免费副产品。不默认替代信用；需要替代情景时单列实际替代产品、质量及负荷边界。 | jrc-ilcd-allocation-2010; stettler-verneuil |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_product | verneuil_production | 验收晶体及共产品 | weighing_acceptance | SKU；批次；净干质量；Al2O3检验；颜色；缺陷；宝石级验收；再熔销售/去向；期初期末库存 | 经校准称量和可追溯批次验收，分开宝石级、再熔及废物记录 | kg | 每批 | 同一完整代表生产期，覆盖正常运行、启停及返工 | 已声明前景场址及设备 | 每 1 kg 参考流 | 校准、检验、覆盖率、平衡闭合及不确定性记录 |
| cp_materials | verneuil_production | 每项固体输入 | purchase_weighing | 行ID；SKU；供方；组成；纯度；水分；交付/消耗质量；期初期末库存；基座更换/寿命；包装种类 | 每种物料分别经校准称量并取得供方证书，核对采购、库存与消耗 | kg | 每批/更换 | 同一完整代表生产期，覆盖正常运行、启停及返工 | 已声明前景场址及设备 | 每 1 kg 参考流 | 校准、检验、覆盖率、平衡闭合及不确定性记录 |
| cp_gases | verneuil_production | 每项外购气体 | gas_metering | 物种；纯度；质量/体积；温度；绝对压力；湿干基准；压缩因子；供气路线；仪表；库存；吹扫/泄漏；供方参考条件 | 独立校准气表或可追溯钢瓶皮重/净量记录，以实测换算核对供方基准 | kg H2; m3 O2 | 连续及每次交付 | 同一完整代表生产期，覆盖正常运行、启停及返工 | 已声明前景场址及设备 | 每 1 kg 参考流 | 校准、检验、覆盖率、平衡闭合及不确定性记录 |
| cp_power | verneuil_production | 阶段电力 | metering | 阶段；kWh；供电国家；电压；供方；稳定程序；运行/闲置小时；共享负荷 | 阶段分表与发票闭合；kWh按3.6换算MJ；明确实测共享负荷归属 | MJ | 连续 | 同一完整代表生产期，覆盖正常运行、启停及返工 | 已声明前景场址及设备 | 每 1 kg 参考流 | 校准、检验、覆盖率、平衡闭合及不确定性记录 |
| cp_water | verneuil_production | 补水及排污 | metering_sampling | 行ID；供入/排污体积；温度；密度；组成；处理接收方；循环；蒸发；冷凝液；添加剂身份 | 计量真实跨界出入并测密度以使用质量基准，检验实际污染；内部循环单列 | kg | 连续及每次排污 | 同一完整代表生产期，覆盖正常运行、启停及返工 | 已声明前景场址及设备 | 每 1 kg 参考流 | 校准、检验、覆盖率、平衡闭合及不确定性记录 |
| cp_waste | verneuil_production | 每项固体废物 | weighing_transfer | 行ID；组成；污染；干湿质量；水分；截留/回用粉尘；废物/销售状态；接收方 | 按真实流分别校准称量并核对废物转移记录，内部回用不重复外排 | kg | 每次转移 | 同一完整代表生产期，覆盖正常运行、启停及返工 | 已声明前景场址及设备 | 每 1 kg 参考流 | 校准、检验、覆盖率、平衡闭合及不确定性记录 |
| cp_air | verneuil_production | 每项室外空气物种/粒径 | monitoring_balance | 源；物种/CAS；粒径；采样时间；浓度；气体体积；温压水分；运行时间；检出限；捕集/凝水；不确定性；氮进入；物种数量定义 | 逐源/物种/粒径测量释放质量，或使用明确闭合的实测物理平衡；排气方法遵守适用限制，无组织源另评估 | kg | 代表性监测批次及可用连续记录 | 同一完整代表生产期，覆盖正常运行、启停及返工 | 已声明前景场址及设备 | 每 1 kg 参考流 | 校准、检验、覆盖率、平衡闭合及不确定性记录 |

保留同一路线、供货状态、宝石级验收规范及代表期间的未分配原始总量，除启停、待机和返工外，也纳入可归属的失败及零验收产出批次。核对期初期末在制品和成品库存及其累积清单负荷，记录期初转入和期末转出归属，避免负荷遗失或重复。Q只计一次最终验收晶体产量，并与发运及库存核对；退回、返工并再次验收的同一材料不得重复计入，最终拒收品不计入Q。对每项核对后的原始期间总量仅应用一次normalize_inventory；行、协议及计算描述的是同一次除法。完整期间Q <= 0时不能形成每千克数据集，须论证更大的代表期间或报告未完整结果。

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_inventory | all inventory rows | 每行先保存实测物理总量；归一化量 = 该行同一期归属于本产品的交换总量 / Q；Q为cp_product中验收宝石级净干晶体总质量（kg）。参考输出 = 1 kg。联产公共负荷先按已声明分配规则归属，不改变实物平衡。 保留同一路线、供货状态、宝石级验收规范及代表期间的未分配原始总量，除启停、待机和返工外，也纳入可归属的失败及零验收产出批次。核对期初期末在制品和成品库存及其累积清单负荷，记录期初转入和期末转出归属，避免负荷遗失或重复。Q只计一次最终验收晶体产量，并与发运及库存核对；退回、返工并再次验收的同一材料不得重复计入，最终拒收品不计入Q。对每项核对后的原始期间总量仅应用一次normalize_inventory；行、协议及计算描述的是同一次除法。完整期间Q <= 0时不能形成每千克数据集，须论证更大的代表期间或报告未完整结果。 | cp_product; cp_materials; cp_gases; cp_power; cp_water; cp_waste; cp_air | 每 1 kg 参考流的交换量 | jrc-sic-bref-2007 |
| particulate_partition | pm25_air; pm25_10_air; pmover10_air | 只用同基准同期测量分离互斥粒径；PM2.5–10 = 相容PM10 - PM2.5；>10需要相容总颗粒物和粒径证据。可凝结贡献相关时分开评估并防重复；不能对仅过滤结果声称总排放完整。 | cp_air | 互斥粒径质量及完整性声明 | epa-201a-2020 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | reference product; every input | 取得实际SKU、批次、供方原件和检验数据，证明未加工宝石级无色无掺杂单晶及路线；不得把分类名称或UUID等同现场身份确认。 | stettler-verneuil; un-cpc-3-2025; cp_product |
| balances | all inventory rows | 用同一时期氧化铝/晶体实物质量账和独立H/O/水平衡检查进料、籽晶、产品、等外品、废物、粉尘和库存。保留初始残差、原因及测量不确定性；不给默认收率或自动强制闭合。 | jrc-sic-bref-2007; cp_materials; cp_gases; cp_water; cp_air |
| monitoring_applicability | cp_air | EPA201A仅用于相容固定排气源的可过滤分级，液滴及温度限制按原件；湿氧氢排气若不适用须使用可验证替代方案。无组织源、可凝结贡献及气体物种需各自有效方法。未知物种/粒径、汇总NOx或不兼容供气基准不能伪报完整。 | epa-201a-2020; cp_air; cp_gases |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference product | 必须恰有一个已验收宝石级参考输出，与1千克净干质量、同一Q和全部中英文分母一致。未加工广义身份须有明确子集限定，不得包含再熔料、包装、水或其他宝石。 | un-cpc-3-2025; stettler-verneuil |
| validate_exchanges | all inventory rows | 每行一个原子流；核对已采用UUID的名称、CAS（有则）、路线、参考属性、单位和介质，数量/供方兼容另行核验。空UUID是未决，实际适用行未解决前不得声称数据包完整。 | jrc-sic-bref-2007 |
| validate_ledger | physical_and_burden_ledgers | 实物账与分配负荷账分开，内部链接两端同量；三段颗粒物互斥，捕集粉尘不同时算外排；NO/NO2与NOx汇总不得重复。启停、泄漏、库存和回用不得无证据省略。 | jrc-sic-bref-2007; epa-201a-2020 |
| validate_route | method_applicability | 实际掺杂、现场气体生产、其他生长路线或加工宝石超出方法范围。稳定热源、净化、冷却和每种实际材料须有相容清单；缺口应报告而不是假定零或使用邻近产品。 | stettler-verneuil; orbray-sapphire-production; sebal-sapphire |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品特定归因型前景生产清单 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 符合全部限定的未加工无色焰熔蓝宝石生产输入 |
| excluded_use | 完整34560覆盖；其他晶体/再造产品；技术再熔料作为参考；精制氧化铝或加工珠宝替代；缺身份/基准的数据包声称完整 |
| required_metadata | 全部参考限定；实际场址/时间/供方；上游边界；SKU/质量验收；稳定/冷却/治理；计量/平衡；共产品与分配 |
| required_quality_disclosure | 每行身份和数量/背景兼容状态；实际适用与不存在证据；范围/缺项；不确定性及实物平衡残差；PM/气体物种完整性；无数值默认 |
| update_trigger | 供方、SKU、配方/掺杂、生长/稳定路线、供气条件、产率、治理、背景或分类接受裁定变化 |

## 11. 数据源

| source_id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-2025 | official_guidance | UNSD, CPC Version 3.0 Structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; 原件核对日2026-10-14（当地） | 34560宽分类，仅适用较窄子集 |
| stettler-verneuil | handbook | Stettler Sapphire, Le procédé Verneuil, qu’est ce que c’est ?, 21 March 2023 / modified 3 July 2024; https://stettlersapphire.ch/le-procede-verneuil-quest-ce-que-cest/; 原件核对日2026-10-14（当地） | 纯氧化铝/氧氢/籽晶路线；无色晶体及再熔原料反边界；无定量默认值 |
| orbray-sapphire-production | handbook | Orbray, Production of Sapphire, published 14 April 2021, last modified 15 May 2026; https://orbray.com/magazine_en/archives/19; 原件核对日2026-10-14（当地） | 焰熔物理步骤及不同生长路线；不移植红宝石配方或历史尺寸/周期 |
| sebal-sapphire | handbook | Sebal/Timsaph, 100% Swiss sapphire, undated technical page; https://sebal.ch/en/100-swiss-sapphire; 原件核对日2026-10-14（当地） | 生产者原料蓝宝石生长及稳定处理；须声明实际稳定路线 |
| jrc-sic-bref-2007 | official_guidance | European Commission, Speciality Inorganic Chemicals BREF, August 2007; scope pp. xxv–xxvi, §2.3 p.18, §§3.7.1–3.7.3 pp.41–42; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/sic_bref_0907.pdf; 原件核对日2026-10-14（当地） | 仅采用通用物理搬运/集成/计量/废物核算；不认定蓝宝石特定法律/BAT范围，也不移植颜料族限值 |
| epa-201a-2020 | method_factor | US EPA, Method 201A, 7 October 2020, §§1.1–1.6; https://www.epa.gov/sites/default/files/2019-08/documents/method_201a_0.pdf; 原件核对日2026-10-14（当地） | 适用固定排气源的可过滤颗粒物分级；保留液滴、温度、可凝结及总颗粒物限制；无排放因子 |
| gia-synthetic-gems | handbook | GIA, Robert Weldon, An Introduction to Synthetic Gem Materials, undated; https://www.gia.edu/gem-synthetic; 原件核对日2026-10-14（当地） | 合成蓝宝石宝石用途、加工前晶体及不同生长路线；不转移数值或当前法律要求 |
| jrc-ilcd-allocation-2010 | official_guidance | European Commission JRC, ILCD Handbook — General guide for LCA — Detailed guidance, March 2010, §§7.9.3.1–7.9.3.3 and provisions, printed pp.257–258,264,266 / PDF277–278,284,286; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf; 原件核对日2026-10-14（当地） | 分配适用前提、决定性物理因果关系及共同过程出口价值；不设蓝宝石行业分配比例 |
