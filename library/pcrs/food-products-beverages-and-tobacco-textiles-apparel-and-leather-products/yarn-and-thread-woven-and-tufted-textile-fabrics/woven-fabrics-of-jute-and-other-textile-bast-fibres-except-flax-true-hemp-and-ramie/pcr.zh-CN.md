---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-jute-and-other-textile-bast-fibres-except-flax-true-hemp-and-ramie
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 黄麻和其他纺织用韧皮纤维（亚麻、大麻和苎麻除外）机织织物

## 1. 范围与适用性

本 PCR 适用于黄麻或其他纺织用韧皮纤维机织织物的工厂门生产，并明确排除亚麻、大麻和苎麻。前景边界从织物工厂接收已纺韧皮纤维纱线开始，包括纱线准备、整经、适用时的上浆、织造、实际发生的路线特定预处理或整理、检验以及发运包装。

只有在数据包声明实际纤维组成和整理状态时，本 PCR 才覆盖坯布和成品机织织物。范围不包括纱线进入织物工厂之前的种植、沤麻、纤维准备和纺纱；针织、钩编、非织造、簇绒和特种织物；亚麻、大麻或苎麻织物；服装或制品制造；分销、使用和寿命终止。外购纱线、公用工程、化学品和包装的上游负荷由独立上游数据集表示。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-jute-and-other-textile-bast-fibres-except-flax-true-hemp-and-ramie |
| classification_refs | CPC 3.0：26570，精确匹配 |
| covered_products | 声明纺织纤维为黄麻或 CPC 26570 范围内其他韧皮纤维、且不含已排除纤维的机织织物 |
| excluded_products | 亚麻、大麻和苎麻织物；棉或人造纤维织物；针织、钩编、非织造、簇绒和特种织物；纱线及纺织制成品 |
| representative_product | 织物工厂门的黄麻或其他范围内韧皮纤维机织织物 |
| production_route | 接收已纺纱线；整经和可选上浆；织造；路线特定预处理或整理；检验和包装 |
| market_state | 以卷装或其他已声明发运形式、在工厂门销售的坯布或整理织物 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 黄麻或其他范围内纺织用韧皮纤维机织织物，不包括亚麻、大麻和苎麻 |
| How much | 1 kg 不含包装的织物净质量 |
| How well | 符合已声明的纤维组成、织法、单位面积质量、幅宽、整理状态和质量等级 |
| How long or cycle | 织物工厂门的一个生产批次；不规定使用寿命 |
| reference_flow_link | `reference_woven_fabric_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Woven fabrics of jute and other textile bast fibres (except flax, true hemp and ramie) `97e92077-1caf-4f27-9d87-9b49e9d6a4e2` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 韧皮纤维种类；按质量计的纤维组成；纱线规格；织法；单位面积质量；织物幅宽；坯布或整理状态；预处理和整理路线；含水或调湿状态；发运形式；生产场址与地域；生产期间 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少任何限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品及基于质量的清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录不含纸管、薄膜、标签和其他发运包装的织物净质量；声明称量采用的含水或调湿状态。 |
| `composition_basis` | 纤维组成 | 质量分数 | mass % | 报告机织织物中每种纤维的质量百分比，并证明亚麻、大麻和苎麻不属于所声明的产品范围。 |
| `areal_density` | 织物规格 | 单位面积质量 | g/m2 | 将实测或规格规定的单位面积质量和幅宽记录为限定信息；不得以面积功能单位替代 1 kg 参考数量。 |
| `lot_normalization` | 所有前景清单数量 | 与原子交换相适用的数量 | 每 1 kg 参考产品的报告单位 | 用同一核算期间合格范围内织物的净质量归一化各批次记录，并保留未归一化原始记录。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在织物工厂门接收的已纺黄麻或其他范围内韧皮纤维纱线，并声明纤维身份、组成、纱线规格、供应商和接收质量 |
| starting_condition_role | 外购产品投入及前景织物制造起点 |
| product_classification_scope | 仅限 CPC 3.0 代码 26570；排除亚麻、大麻、苎麻、针织、非织造、簇绒和特种织物 |
| recursive_input_rule | 前景过程间转移的同类别中间品记录为内部产品流，不附加上游织物负荷；外购同类别织物必须使用独立上游数据集并予以披露 |
| upstream_dataset_requirement | 对跨越前景边界的纱线、电力、蒸汽或热、水、化学品和包装使用独立上游数据集 |
| disclosure | 声明是否发生上浆、退浆、洗涤、漂白、染色、热处理或其他整理；声明废水去向、包装形式、截断项和任何场外工序 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `system_boundary_1` | 前景制造 | 从接收纱线到工厂门合格织物，应纳入纱线准备、整经、适用时的上浆、织造、所有场内路线特定预处理或整理、检验和发运包装。 | `jrc-textiles-bref-2023`; `eu-2022-2508-textiles-bat` |
| `system_boundary_2` | 外购投入 | 工厂门之前的负荷使用独立上游数据集表示，不得在内部中间织物转移中重复计入。 | `iso-14044-2006` |
| `system_boundary_3` | 条件工序 | 只有在实际发生时才纳入各湿法、热法、化学、废水和大气排放工序；否则记录有据可查的不适用决定。 | `jrc-textiles-bref-2023`; `eu-2022-2508-textiles-bat` |
| `system_boundary_4` | 原子清单覆盖 | 将每项实际纱线、电力供应、蒸汽或热供应、燃料、水供应、工艺化学品、包装组件、废物流和直接基本流排放分别记录为原子交换；不得在一行合并不同交换。 | `eu-2022-2508-textiles-bat` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabric_formation` | 纱线准备与织造 | `required` | 所有范围内机织织物均必需；上浆剂和上浆用水仅在实际使用时纳入 | 将范围内已纺韧皮纤维纱线转化为坯布 | 离开织造的坯布质量 |
| `finishing_and_dispatch` | 路线特定整理、检验与发运 | `required` | 检验与发运必需；湿法或热法处理投入仅在相应工序发生时适用 | 生产处于已声明市场状态的合格织物并准备发运 | 合格范围内参考织物净质量 |

### 过程：纱线准备与织造（`fabric_formation`）

#### 输入

##### 产品流

###### 范围内韧皮纤维纱线（`bast_fibre_yarn_input`）

已纺黄麻或其他范围内韧皮纤维纱线进入工厂进行整经和织造。记录必须识别纤维种类，并排除亚麻、大麻和苎麻。

- 选定流：Jute and other in-scope textile bast-fibre yarn
- 流属性/单位：Mass / kg
- 数量规则：供应商和批次记录的投用于生产批次的纱线质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_formation_materials`
- 来源：`un-cpc-v3-26570`

###### 织物形成用电网电力（`grid_electricity_formation`）

计量的电网电力供应整经、上浆辅助设备、织机驱动、压缩空气、调湿和分配给织物形成的局部抽风。

- 选定流：Grid electricity supplied to the fabric-formation process
- 流属性/单位：Energy / kWh
- 数量规则：计量或与发票核对后分配给织物形成的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_formation_energy`
- 来源：`eu-2022-2508-textiles-bat`

###### 变性淀粉上浆剂（`modified_starch_size`）

当变性淀粉用于在织造期间保护和润滑经纱时，应记录该投入。

- 选定流：modified starch `09797370-6632-42aa-9d77-e9d41ff82c75`
- 流属性/单位：Mass / kg
- 数量规则：供应商和批次记录的加入上浆工序的变性淀粉质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_formation_materials`
- 来源：`eu-2022-2508-textiles-bat`

###### 上浆用工艺水（`process_water_sizing`）

当工艺水用于配制或施加浆液时，应单独记录。

- 选定流：Process water supplied for sizing
- 流属性/单位：Volume / m3
- 数量规则：计量或按批次记录的上浆供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_formation_materials`
- 来源：`eu-2022-2508-textiles-bat`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 黄麻机织坯布（`greige_woven_fabric_output`）

坯布是在路线特定湿法或热法整理前离开织物形成过程的实测中间品。

- 选定流：Greige woven jute or other in-scope bast-fibre fabric
- 流属性/单位：Mass / kg
- 数量规则：织造放行的坯布批次记录质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_formation_materials`
- 来源：`jrc-textiles-bref-2023`

##### 废物流

###### 黄麻纱线废物（`jute_yarn_waste_output`）

断头、织机废纱和其他废弃范围内纱线作为单一黄麻纱线废物流记录，并与织物边角料分开。

- 选定流：Jute yarn waste
- 流属性/单位：Mass / kg
- 数量规则：称量或库存核对后送往已声明回收或处置路线的质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabric_formation_materials`
- 来源：`eu-2022-2508-textiles-bat`

##### 基本流

### 过程：路线特定整理、检验与发运（`finishing_and_dispatch`）

#### 输入

##### 产品流

###### 黄麻机织坯布投入（`greige_woven_fabric_input`）

实测坯布中间品进入路线特定整理和发运过程；内部转移时不附加上游织物负荷。

- 选定流：Greige woven jute or other in-scope bast-fibre fabric
- 流属性/单位：Mass / kg
- 数量规则：从织物形成过程转入的批次记录质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`jrc-textiles-bref-2023`

###### 整理用工艺水（`process_water_finishing`）

当工艺水用于退浆、洗涤、漂白、染色、漂洗或分配给产品路线的设备清洗时，应予记录。

- 选定流：Process water supplied for textile finishing
- 流属性/单位：Volume / m3
- 数量规则：计量或按批次记录的适用整理工序供水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`eu-2022-2508-textiles-bat`

###### 氢氧化钠投入（`sodium_hydroxide_input`）

当氢氧化钠用于适用的煮练、退浆、pH 控制或其他已声明整理工序时，应予记录。交付浓度必须随前景记录保留。

- 选定流：Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：供应商和批次记录的交付质量，并声明浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`eu-2022-2508-textiles-bat`

###### 过氧化氢溶液投入（`hydrogen_peroxide_solution_input`）

仅在使用过氧化氢溶液进行无氯漂白时记录该投入；溶液浓度是必需前景字段。

- 选定流：Hydrogen peroxide solution used for textile bleaching
- 流属性/单位：Mass / kg
- 数量规则：供应商和批次记录的交付溶液质量，并声明浓度
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_materials`
- 来源：`eu-2022-2508-textiles-bat`

###### 整理和发运用电网电力（`grid_electricity_finishing`）

计量的电网电力供应湿处理设备、干燥或固化辅助设备、检验、卷绕和分配给本过程的包装设备。

- 选定流：Grid electricity supplied to finishing and dispatch
- 流属性/单位：Energy / kWh
- 数量规则：计量或与发票核对后分配给整理和发运的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_energy`
- 来源：`eu-2022-2508-textiles-bat`

###### 整理用外购蒸汽（`purchased_steam_finishing`）

当外购蒸汽为洗涤、干燥、固化或其他路线特定热负荷供能时，应单独记录。

- 选定流：Purchased steam supplied to textile finishing
- 流属性/单位：Energy / MJ
- 数量规则：分配给适用整理工序的计量蒸汽能量或供应商声明量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_energy`
- 来源：`eu-2022-2508-textiles-bat`

###### 纸板管投入（`paperboard_tube_input`）

当合格织物卷绕在纸板管上发运时，应记录纸板管。

- 选定流：Paperboard tube for a textile roll
- 流属性/单位：Mass / kg
- 数量规则：采购或包装记录的纸板管消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_records`
- 来源：

###### 聚乙烯薄膜投入（`polyethylene_film_input`）

当聚乙烯薄膜用于包裹织物卷以供发运时，应予记录。

- 选定流：Polyethylene film used for textile-roll packaging
- 流属性/单位：Mass / kg
- 数量规则：采购或包装记录的聚乙烯薄膜消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格参考机织织物（`reference_woven_fabric_output`）

合格范围内机织织物以已声明的坯布或整理状态离开前景边界；参考数量不含包装质量。

- 选定流：Woven fabrics of jute and other textile bast fibres (except flax, true hemp and ramie) `97e92077-1caf-4f27-9d87-9b49e9d6a4e2`
- 流属性/单位：Mass / kg
- 数量规则：称量并放行发运的合格织物净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_records`
- 来源：`un-cpc-v3-26570`

##### 废物流

###### 送处理的纺织废水（`textile_wastewater_to_treatment`）

送往场内或场外处理的合并废水应单独记录，并与任何直接排入水体的基本流区分。

- 选定流：Textile wastewater transferred to treatment
- 流属性/单位：Volume / m3
- 数量规则：计量并分配给适用产品路线的废水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-2022-2508-textiles-bat`

###### 黄麻织物边角料（`jute_fabric_offcuts_output`）

范围内织物的废边、样品和裁片作为织物边角料废物流记录，并与纱线废物分开。

- 选定流：Jute fabric offcuts
- 流属性/单位：Mass / kg
- 数量规则：称量或库存核对后送往已声明回收或处置路线的边角料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考织物
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_records`
- 来源：`eu-2022-2508-textiles-bat`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_rule_1` | 多过程工厂记录 | 通过计量、批次记录和过程细分避免分配，使织物形成和整理负荷归属于实际产品路线。 | `iso-14044-2006`; `eu-2022-2508-textiles-bat` |
| `allocation_rule_2` | 返工和内部中间织物 | 前景边界内的内部转移和返工不得再次附加上游负荷；披露返回质量和重复进行的过程。 | `iso-14044-2006` |
| `allocation_rule_3` | 无法避免的共享负荷和共产品 | 过程细分无法解决共享负荷时，应采用并记录能够反映因果关系的物理关系；只有质量具有代表性时才按质量分配，且仅在没有可辩护物理关系时使用经济分配。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabric_formation_materials` | `fabric_formation` | 纱线、上浆剂、上浆用水、坯布输出和纱线废物 | 地磅、仓库领料、批次、仪表和废物转移记录 | lot_id; flow_name; supplier; fibre_identity; quantity; unit; timestamp; destination | 按生产批次核对领用投入、计量水、坯布输出、库存变化和废物 | 记录所用 kg 或 m3 | 每批次，按月汇总 | 至少一个具有代表性的生产年度或完整声明期间 | 服务于声明产品的全部织物形成设备 | 按原子流和批次求和，再按合格参考织物质量归一化 | 经校准秤或仪表证据、供应商文件、库存核对和废物接收凭证 |
| `cp_fabric_formation_energy` | `fabric_formation` | 电网电力 | 分表和发票记录 | meter_id; opening_reading; closing_reading; period; production_line; allocation_key | 优先直接分表计量；与场址发票核对并记录任何分配 | kWh | 仪表间隔或每月 | 与产品输出相同期间 | 织物形成设备及分配的辅助设施 | 汇总直接读数或有据可查的过程分配 | 仪表校准、发票核对和分配工作表 |
| `cp_finishing_materials` | `finishing_and_dispatch` | 坯布、水、氢氧化钠和过氧化氢溶液 | 批次配方、领料、仪表、供应商和转移记录 | lot_id; operation; chemical_name; concentration; quantity; unit; water_meter; fabric_mass | 记录每项适用工序，并将化学品领用和水表与批次核对 | 记录所用 kg 或 m3 | 每批次或连续生产运行 | 与产品输出相同期间 | 声明产品的全部场内湿法或化学工序 | 每个原子流分别求和，不得汇总不同化学品 | 批次单、安全数据表、供应商规格、仪表校准和库存核对 |
| `cp_finishing_energy` | `finishing_and_dispatch` | 电力和外购蒸汽 | 分表、蒸汽表和供应商记录 | meter_id; energy_carrier; reading; unit; pressure; temperature; period; operation | 分别计量各能源载体，并与供应商声明核对 | kWh 或 MJ | 仪表间隔或每月 | 与产品输出相同期间 | 整理、检验、包装及分配的辅助设施 | 归一化前按能源载体和过程求和 | 仪表校准、发票核对和有据可查的换算因子 |
| `cp_wastewater_records` | `finishing_and_dispatch` | 送处理的纺织废水 | 排水仪表和处理转移记录 | meter_id; volume; timestamp; destination; treatment_route; product_allocation | 在相关过程或处理转移点计量废水并记录分配 | m3 | 连续累计或每批次 | 与湿法处理相同期间 | 声明产品路线产生的废水 | 按去向汇总计量体积，并将直接排放分开 | 仪表校准、处理记录和路线识别 |
| `cp_dispatch_records` | `finishing_and_dispatch` | 包装、合格织物和织物边角料 | 装箱单、秤、质量放行、仓库和废物记录 | lot_id; net_fabric_mass; moisture_state; tube_mass; film_mass; offcut_mass; destination | 称量不含包装的合格织物，并核对包装领用和边角料 | kg | 每批次 | 完整声明生产期间 | 声明产品的最终检验、卷绕、包装和发运 | 分别汇总合格净质量以及每项包装或废物流 | 秤校准、质量放行记录、装箱单和废物接收凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot_records` | 每个前景清单行 | 将声明期间采集的原子流数量除以同一期间合格参考织物净质量；保留原始记录和报告单位。 | 原子流数量；合格参考织物净质量 | 每 1 kg 参考织物的前景数量 | `iso-14044-2006` |
| `reconcile_internal_fabric` | 坯布转移 | 按批次核对坯布输出与投入；说明库存变化、拒收或返工，且不得向内部转移附加第二次上游负荷。 | 坯布输出；坯布投入；库存变化；拒收；返工 | 已核对的内部织物转移 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 确认 CPC 26570 产品语义、纤维种类与组成、织法、单位面积质量、幅宽、市场状态，并排除亚麻、大麻和苎麻。 | 产品规格、物料清单、测试报告和质量放行记录 |
| `dq_atomic_completeness` | 清单 | 分别记录每项实际投入、废物和直接排放；合并的公用工程、化学品、包装、废物或排放标签不完整。 | 过程级投入产出清单及核对 |
| `dq_temporal_match` | 所有记录 | 使用同一声明生产期间的投入和输出，并披露停机、异常批次、外包和库存变化。 | 带时间戳的记录和生产日志 |
| `dq_measurement` | 计量和称量数量 | 识别仪表或秤、单位、校准状态，以及对缺失读数采用的任何估算或分配。 | 校准证书、仪表日志、发票和分配工作表 |
| `dq_chemical_identity` | 工艺化学品 | 记录化学品名称、交付浓度、供应商以及批次或领用数量；不得以通用化学品组数量替代。 | 供应商规格、安全数据表、仓库领料和批次配方 |
| `dq_no_default_values` | 缺失前景数据 | 不得用 AI 生成范围或无来源默认数量替代缺失前景记录；应报告缺口以供审查。 | 数据缺口登记和审查处置 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_rule_1` | 参考流 | 确认 UUID `97e92077-1caf-4f27-9d87-9b49e9d6a4e2`、Product flow 类型、CPC 26570 身份、Mass 属性、1 kg 数量以及包装质量排除。 | `un-cpc-v3-26570` |
| `validation_rule_2` | 范围 | 拒绝将亚麻、大麻、苎麻、针织、非织造、簇绒或特种织物计入本参考产品的数据包。 | `un-cpc-v3-26570` |
| `validation_rule_3` | 必需限定信息 | 缺少纤维身份与组成、织法、单位面积质量、幅宽、整理状态、含水状态、发运形式、地域或生产期间时，拒绝不完整参考流。 | `un-cpc-v3-26570` |
| `validation_rule_4` | 过程覆盖 | 确认织物形成、检验和发运记录；适用时确认每项已声明湿法或热法工序及其分开的水、化学品、能源、废水、废物和排放记录。 | `jrc-textiles-bref-2023`; `eu-2022-2508-textiles-bat` |
| `validation_rule_5` | 原子交换 | 拒绝合并不同燃料、公用工程、化学品、包装组件、废物或基本流排放的行，也拒绝以选择指令替代单一交换的行。 | `eu-2022-2508-textiles-bat` |
| `validation_rule_6` | 核对 | 要求按批次或期间核对纱线投入、内部坯布转移、合格织物、纱线废物、织物边角料、返工和库存变化；调查并披露物料不平衡。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 从完整前景数据包生成的 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 黄麻或其他范围内韧皮纤维机织织物的前景过程数据集和 lifecyclemodel 投影 |
| allowed_use | 产品、地域、技术、纤维组成、整理路线、含水状态和生产期间与已披露数据集相容的研究 |
| excluded_use | 亚麻、大麻、苎麻、棉、人造纤维、针织、非织造、簇绒或特种织物；未披露的代理使用；替代缺失场址记录 |
| required_metadata | PCR id 和版本；参考 UUID；CPC 26570；全部参考流限定信息；过程路线；场址和地域；生产期间；数据所有者；源数据集版本；分配和截断决定 |
| required_quality_disclosure | 记录覆盖、测量与校准证据、分配、质量核对、数据缺口、废水去向、场外工序、不确定性和局限 |
| update_trigger | 纤维组成、纱线规格、织法、整理路线、过程技术、场址、能源或供水、化学配方、废水路线、包装、分配或生产期间发生实质影响代表性的变化 |

## 11. 数据源

| Source id | Type | Reference | 用途 |
| --- | --- | --- | --- |
| `un-cpc-v3-26570` | 官方指南（`official_guidance`） | United Nations Statistics Division, Central Product Classification Version 3.0 structure, code 26570, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-08-12 | 产品身份、纳入项、排除项和分类范围 |
| `jrc-textiles-bref-2023` | 官方指南（`official_guidance`） | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, JRC131874, EUR 31392 EN, DOI 10.2760/355887, 2023, https://doi.org/10.2760/355887, retrieved 2026-08-12 | 过程分解、湿法加工、织物生产、整理和环境清单背景 |
| `eu-2022-2508-textiles-bat` | 官方指南（`official_guidance`） | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, ELI http://data.europa.eu/eli/dec_impl/2022/2508/oj, retrieved 2026-08-12 | 上浆、织造、水、能源、化学品、废水、废物、监测和原子投入产出覆盖规则 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, including Amendments 1:2017 and 2:2020, https://www.iso.org/standard/38498.html, retrieved 2026-08-12 | 系统边界、分配、清单计算、核对、报告和数据质量原则 |
