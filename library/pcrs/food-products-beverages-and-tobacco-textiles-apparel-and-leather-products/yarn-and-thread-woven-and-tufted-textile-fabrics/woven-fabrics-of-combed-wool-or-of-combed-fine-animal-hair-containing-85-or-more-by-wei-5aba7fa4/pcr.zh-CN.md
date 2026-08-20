---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-combed-wool-or-of-combed-fine-animal-hair-containing-85-or-more-by-wei-5aba7fa4
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 含羊毛或动物细毛重量达85%或85%以上的、精梳羊毛或精梳动物细毛机织织物

## 1. 范围与适用性

本 PCR 适用于以精梳羊毛纱线或精梳动物细毛纱线生产机织织物的工厂门生产，且羊毛与动物细毛合计至少占纤维总质量的 85%。前景边界从精梳纱线接收开始，涵盖织造准备、织造、报告工厂实施的湿法后整理、检验以及可选包装。动物饲养、原毛洗涤、毛条制造、纺纱、服装制造、分销、使用和生命周期末端均不在前景边界内。外购纱线保留为上游产品输入，并须连接适用的上游数据集。

本规则不涵盖粗梳毛织物、羊毛与动物细毛合计低于 85% 的织物、针织或钩编织物、起绒织物、地毯或制成的纺织品。生产者特定数据集须声明纤维种类及份额、织物组织、单位面积质量、整理状态、回潮或调湿基准、地域、报告期以及是否纳入包装。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-combed-wool-or-of-combed-fine-animal-hair-containing-85-or-more-by-wei-5aba7fa4` |
| classification_refs | CPC 3.0 `26530`（精确） |
| covered_products | 羊毛与动物细毛合计至少占纤维质量 85% 的精梳羊毛或精梳动物细毛机织织物 |
| excluded_products | 粗梳毛织物；低于 85% 的织物；针织、钩编、起绒、地毯和制成的纺织产品 |
| representative_product | 报告工厂门口的可销售精梳羊毛或精梳动物细毛机织织物 |
| production_route | 接收精梳纱线；整经及可选的经纱上油或上浆；织造；有条件的洗涤、染色或整理；检验及可选包装 |
| market_state | 成品，已制造；须声明坯布或整理后状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合 CPC 3.0 `26530` 的可销售机织织物 |
| How much | 报告工厂门口 1,000 kg 净织物质量，不含包装质量 |
| How well | 去除非纤维物质后，羊毛与动物细毛合计至少占纤维总质量 85%；声明织物组织、单位面积质量、整理状态和质量等级 |
| How long or cycle | 代表正常运行的一个连续 12 个月报告期 |
| reference_flow_link | 最终检验后合格可销售织物的工厂门质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 含羊毛或动物细毛重量达85%或85%以上的、精梳羊毛或精梳动物细毛机织织物 `0b5c66df-5a09-41f4-8e09-39c43dd16a76` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 干基或声明的调湿质量基准；羊毛和动物细毛的种类及纤维份额；每种其他纤维的身份和份额；织物组织；单位面积质量；坯布、染色、洗涤或其他整理状态；回潮或调湿方法；质量等级；场址和地域；报告期；包装纳入状态 |

构建前景数据包时，每项必需限定信息均须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺失限定信息时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measure_reference_mass` | 参考产品以及固体材料、废物、化学品和包装交换 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将净织物质量归一化为 1,000 kg；声明回潮或调湿基准，并从参考质量中排除包装。 |
| `measure_composition` | 产品类别阈值 | 质量分数 | %（质量） | 去除非纤维物质后测定纤维组成；羊毛与动物细毛合计须至少占纤维总质量 85%。 |
| `measure_electricity` | 电力交换 | 能量 | kWh | 使用场址电表或分配电表读数；仅使用有记录的换算系数。 |
| `measure_thermal_energy` | 外购蒸汽和单独供应的热水 | 能量 | MJ | 记录交付的有用能；不得合并蒸汽、热水或场内燃料。 |
| `measure_water` | 工艺水 | 体积 | m3 | 按水源和过程记录取水体积；不得扣减排水量。 |
| `measure_emissions` | 排向空气或水体的基本流排放 | 质量 | kg | 每种具名物质分别报告为实测负荷，或以浓度乘以实测排水体积或烟气流量计算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 精梳羊毛纱线、精梳动物细毛纱线及其他已声明纱线到达报告工厂，可直接用于整经或织造准备 |
| starting_condition_role | 外购或转入的上游产品输入 |
| product_classification_scope | CPC 3.0 `26530`；羊毛与动物细毛合计至少占纤维总质量 85% |
| recursive_input_rule | 如果外购同一类别的坯布或整理后织物，则在其进入的过程中作为一个外部产品输入记录一次；不得在本前景数据集内递归展开 |
| upstream_dataset_requirement | 每种外购纱线、织物、化学品、燃料、公用工程和包装组件均使用有代表性的上游数据集；披露地域、技术和时间不匹配 |
| disclosure | 声明起始纱线状态、任何外包工序、纳入的整理步骤、排除的场内作业、内部转移处理和包装边界 |

| rule_id | 规则 |
| --- | --- |
| `sb_gate_to_gate` | 纳入对参考产品有贡献的所有场内准备、织造、有条件湿法后整理、检验、内部搬运、污染控制和包装。 |
| `sb_recursive_fabric` | 同类别外购织物作为一个外部产品输入记录并披露其进入阶段；不得在同一前景数据集内递归展开。 |
| `sb_upstream_yarn` | 动物饲养、原毛洗涤、毛条制造和纺纱留在前景边界外；每种接收纱线须连接适当的上游数据集。 |
| `sb_downstream_exclusion` | 排除服装制造、分销、使用和生命周期末端，除非采用另行声明的扩展研究边界。 |
| `sb_atomic_inventory` | 每种公用工程、燃料、制冷剂、化学品、包装组件、废物、废水物质和空气排放物质均作为独立原子交换记录；禁止聚合的载能体或残余物占位项。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `weaving` | 纱线准备与织造 | required | 始终纳入 | 将接收的精梳纱线转化为机织坯布 | 坯布输出 kg |
| `wet_finishing` | 湿法后整理 | conditional | 报告边界内实施洗涤、染色、缩绒、漂洗、干燥或化学整理时纳入 | 将坯布转化为整理后织物 | 整理后织物输出 kg |
| `final_inspection_packaging` | 最终检验与包装 | required | 始终纳入；包装卡仅在使用相应组件时适用 | 放行可销售参考产品 | 1,000 kg 净参考产品输出 |

### 过程：纱线准备与织造（`weaving`）

#### 输入

##### 产品流

###### 精梳羊毛纱线（`weaving_combed_wool_yarn`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：精梳羊毛纱线
- 流属性/单位：质量 / kg
- 数量规则：称量归属于合格产品生产的接收或领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`iwto-wool-lca-guidelines-2016`

###### 精梳动物细毛纱线（`weaving_combed_fine_hair_yarn`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：精梳动物细毛纱线
- 流属性/单位：质量 / kg
- 数量规则：称量接收或领用质量；仅在已声明配方不含动物细毛纱线时记为零
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`unsd-cpc-3-0-2025`

###### 整经与织造用电（`weaving_electricity`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：电力
- 流属性/单位：能量 / kWh
- 数量规则：计量归属于整经、织机运行、局部抽风和内部搬运的电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`ec-jrc-textiles-bref-2023`

###### 经纱上浆工艺水（`weaving_process_water`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：工艺水
- 流属性/单位：体积 / m3
- 数量规则：计量配制经纱浆料所用水；未进行水基上浆时方可标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`ec-jrc-textiles-bref-2023`

###### 经纱上油用液体石蜡（`weaving_liquid_paraffin`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：液体石蜡
- 流属性/单位：质量 / kg
- 数量规则：羊毛经纱上油的领用质量；未使用时标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`ec-jrc-textiles-bref-2023`

###### 淀粉浆料（`weaving_starch_size`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：淀粉浆料
- 流属性/单位：质量 / kg
- 数量规则：以干物质当量计的领用质量；未使用该浆料时标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`ec-jrc-textiles-bref-2023`

###### 聚乙烯醇浆料（`weaving_pva_size`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：聚乙烯醇浆料
- 流属性/单位：质量 / kg
- 数量规则：以干物质当量计的领用质量；未使用该浆料时标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`ec-jrc-textiles-bref-2023`

###### 合成酯织机润滑剂（`weaving_loom_lubricant`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：合成酯织机润滑剂
- 流属性/单位：质量 / kg
- 数量规则：织机润滑剂库存领用量减去有记录的回收量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`ec-jrc-textiles-bref-2023`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 精梳羊毛或动物细毛机织坯布（`weaving_greige_fabric`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：精梳羊毛或动物细毛机织坯布
- 流属性/单位：质量 / kg
- 数量规则：称量转入后整理或最终检验的合格坯布
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality`
- 来源：`ec-jrc-textiles-bref-2023`

##### 废物流

###### 废精梳羊毛纱线（`weaving_waste_wool_yarn`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：废精梳羊毛纱线
- 流属性/单位：质量 / kg
- 数量规则：称量离开过程的羊毛纱线头、织机废纱和不合格羊毛纱线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`iwto-wool-lca-guidelines-2016`

###### 废精梳动物细毛纱线（`weaving_waste_fine_hair_yarn`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：废精梳动物细毛纱线
- 流属性/单位：质量 / kg
- 数量规则：称量离开过程的动物细毛纱线头和不合格纱线
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`iwto-wool-lca-guidelines-2016`

###### 废机织坯布（`weaving_waste_fabric`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：废精梳羊毛或动物细毛机织坯布
- 流属性/单位：质量 / kg
- 数量规则：称量离开过程的布边、裁片和不合格坯布
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 坯布输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`iwto-wool-lca-guidelines-2016`

##### 基本流

### 过程：湿法后整理（`wet_finishing`）

#### 输入

##### 产品流

###### 湿法后整理用坯布（`finishing_greige_fabric`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：精梳羊毛或动物细毛机织坯布
- 流属性/单位：质量 / kg
- 数量规则：称量进入纳入的湿法后整理工序的坯布
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`ec-jrc-textiles-bref-2023`

###### 湿法后整理工艺水（`finishing_process_water`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：工艺水
- 流属性/单位：体积 / m3
- 数量规则：计量场内洗涤、染色、漂洗、缩绒和化学整理的取水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`ec-jrc-textiles-bref-2023`

###### 单独供应的热水（`finishing_hot_water`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：热水
- 流属性/单位：能量 / MJ
- 数量规则：热水跨越过程边界供应时，计量其交付热量；否则标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`ec-jrc-textiles-bref-2023`

###### 湿法后整理用电（`finishing_electricity`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：电力
- 流属性/单位：能量 / kWh
- 数量规则：计量纳入的湿法后整理、泵送、脱水和干燥设备用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`ec-jrc-textiles-bref-2023`

###### 外购蒸汽（`finishing_steam`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：外购蒸汽跨越边界时，计量交付的蒸汽能量；否则标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`ec-jrc-textiles-bref-2023`

###### 场内供热用天然气（`finishing_natural_gas`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：天然气
- 流属性/单位：能量 / MJ
- 数量规则：计量场内纳入后整理工序燃烧的低位热值能量；未使用天然气时标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`ec-jrc-textiles-bref-2023`

###### 酸性染料（`finishing_acid_dye`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：酸性染料
- 流属性/单位：质量 / kg
- 数量规则：实施酸性染料染色时，以干物质当量计领用质量；否则标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`roos-textile-chemical-inventory-2019`

###### 乙酸（`finishing_acetic_acid`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：乙酸
- 流属性/单位：质量 / kg
- 数量规则：使用时，以纯物质当量计领用质量；否则标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`roos-textile-chemical-inventory-2019`

###### 硫酸钠（`finishing_sodium_sulfate`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：硫酸钠
- 流属性/单位：质量 / kg
- 数量规则：使用时，以纯物质当量计领用质量；否则标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`roos-textile-chemical-inventory-2019`

###### 非离子表面活性剂（`finishing_nonionic_surfactant`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：非离子表面活性剂
- 流属性/单位：质量 / kg
- 数量规则：使用时，以活性物质当量计领用质量；否则标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`roos-textile-chemical-inventory-2019`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 整理后机织织物（`finishing_finished_fabric`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：整理后的精梳羊毛或动物细毛机织织物
- 流属性/单位：质量 / kg
- 数量规则：称量转入最终检验的合格织物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality`
- 来源：`ec-jrc-textiles-bref-2023`

##### 废物流

###### 废上浆液（`finishing_spent_sizing_liquor`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：废上浆液
- 流属性/单位：质量 / kg
- 数量规则：称量或以体积和实测密度推算作为废物送出场外的浆液；排入废水的浆液不得重复计入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`ec-jrc-textiles-bref-2023`

###### 湿法后整理废水（`finishing_wastewater`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：毛织物湿法加工废水
- 流属性/单位：体积 / m3
- 数量规则：计量纳入的湿法后整理工序排放的废水，并明确记录处理前或处理后状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`ec-jrc-textiles-bref-2023`

##### 基本流

###### 排入水体的化学需氧量（`finishing_cod_to_water`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：化学需氧量，排入水体
- 流属性/单位：质量 / kg
- 数量规则：实测化学需氧量浓度乘以声明排放点的实测排水体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`ec-jrc-textiles-bref-2023`

###### 排入水体的总氮（`finishing_total_nitrogen_to_water`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：总氮，排入水体
- 流属性/单位：质量 / kg
- 数量规则：实测总氮浓度乘以实测排水体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`ec-jrc-textiles-bref-2023`

###### 排入水体的总磷（`finishing_total_phosphorus_to_water`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：总磷，排入水体
- 流属性/单位：质量 / kg
- 数量规则：实测总磷浓度乘以实测排水体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`ec-jrc-textiles-bref-2023`

###### 排入水体的悬浮固体（`finishing_suspended_solids_to_water`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：悬浮固体，排入水体
- 流属性/单位：质量 / kg
- 数量规则：实测悬浮固体浓度乘以实测排水体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`ec-jrc-textiles-bref-2023`

###### 排入水体的氯化物（`finishing_chloride_to_water`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：氯化物，排入水体
- 流属性/单位：质量 / kg
- 数量规则：氯化物适用时，实测氯化物浓度乘以实测排水体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`ec-jrc-textiles-bref-2023`

###### 排入水体的硫酸盐（`finishing_sulfate_to_water`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：硫酸盐，排入水体
- 流属性/单位：质量 / kg
- 数量规则：硫酸盐适用时，实测硫酸盐浓度乘以实测排水体积
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_monitoring`
- 来源：`ec-jrc-textiles-bref-2023`

###### 排入空气的化石二氧化碳（`finishing_fossil_co2_to_air`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：化石二氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：采用烟气实测值，或以天然气用量乘以有记录的燃料特定排放因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-textiles-bref-2023`

###### 排入空气的一氧化碳（`finishing_co_to_air`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：一氧化碳，排入空气
- 流属性/单位：质量 / kg
- 数量规则：实测烟气负荷，或燃料用量乘以有记录的适用因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-textiles-bref-2023`

###### 排入空气的一氧化氮（`finishing_no_to_air`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：一氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：实测烟气负荷，或按有记录的方法拆分实测氮氧化物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-textiles-bref-2023`

###### 排入空气的二氧化氮（`finishing_no2_to_air`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：二氧化氮，排入空气
- 流属性/单位：质量 / kg
- 数量规则：实测烟气负荷，或按有记录的方法拆分实测氮氧化物
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-textiles-bref-2023`

###### 排入空气的二氧化硫（`finishing_so2_to_air`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：二氧化硫，排入空气
- 流属性/单位：质量 / kg
- 数量规则：实测烟气负荷，或天然气用量乘以有记录的含硫量特定因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-textiles-bref-2023`

###### 排入空气的粒径小于 10 微米颗粒物（`finishing_pm10_to_air`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：粒径小于 10 微米的颗粒物，排入空气
- 流属性/单位：质量 / kg
- 数量规则：实测纳入的燃烧或干燥源烟气中 PM10 负荷
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-textiles-bref-2023`

###### 排入空气的甲醛（`finishing_formaldehyde_to_air`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：甲醛，排入空气
- 流属性/单位：质量 / kg
- 数量规则：使用含甲醛整理剂或热处理使其适用时，实测烟气负荷；仅有化学品证据时方可标记不适用
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 整理后织物输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_air_emissions`
- 来源：`ec-jrc-textiles-bref-2023`

### 过程：最终检验与包装（`final_inspection_packaging`）

#### 输入

##### 产品流

###### 直接销售用坯布（`inspection_greige_fabric`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：精梳羊毛或动物细毛机织坯布
- 流属性/单位：质量 / kg
- 数量规则：称量进入最终检验的坯布；纳入湿法后整理时标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality`
- 来源：`ec-jrc-textiles-bref-2023`

###### 检验用整理后织物（`inspection_finished_fabric`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：整理后的精梳羊毛或动物细毛机织织物
- 流属性/单位：质量 / kg
- 数量规则：称量进入最终检验的整理后织物；产品以坯布销售时标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality`
- 来源：`ec-jrc-textiles-bref-2023`

###### 检验与包装用电（`inspection_electricity`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：电力
- 流属性/单位：能量 / kWh
- 数量规则：计量或分表分配检验、卷装、裁切和包装用电
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_utility_meters`
- 来源：`iwto-wool-lca-guidelines-2016`

###### 纸质卷芯（`packaging_paper_core`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：纸质卷芯
- 流属性/单位：质量 / kg
- 数量规则：称量或由采购质量推算参考产品使用的纸质卷芯；未使用时标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`iwto-wool-lca-guidelines-2016`

###### 低密度聚乙烯包裹膜（`packaging_ldpe_film`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：低密度聚乙烯薄膜
- 流属性/单位：质量 / kg
- 数量规则：称量或由采购质量推算参考产品使用的薄膜；未使用时标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`iwto-wool-lca-guidelines-2016`

###### 瓦楞纸箱（`packaging_cardboard_box`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：瓦楞纸箱
- 流属性/单位：质量 / kg
- 数量规则：称量或由采购质量推算参考产品使用的纸箱；未使用时标记不适用
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`iwto-wool-lca-guidelines-2016`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售参考织物（`reference_product_output`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：含羊毛或动物细毛重量达85%或85%以上的、精梳羊毛或精梳动物细毛机织织物 `0b5c66df-5a09-41f4-8e09-39c43dd16a76`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：最终检验后 1,000 kg 合格净织物，不含包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1,000 kg 参考产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_quality`
- 来源：`unsd-cpc-3-0-2025`、`iso-1833-4-2023`、`iso-3801-1977`

##### 废物流

###### 检验废织物（`inspection_waste_fabric`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：废精梳羊毛或动物细毛机织织物
- 流属性/单位：质量 / kg
- 数量规则：称量离开过程的检验不合格品和裁切损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`iwto-wool-lca-guidelines-2016`

###### 废纸质卷芯（`inspection_waste_paper_core`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：废纸质卷芯
- 流属性/单位：质量 / kg
- 数量规则：称量离开过程的纸质卷芯废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`iwto-wool-lca-guidelines-2016`

###### 废瓦楞纸箱（`inspection_waste_cardboard_box`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：废瓦楞纸箱
- 流属性/单位：质量 / kg
- 数量规则：称量离开过程的瓦楞纸箱废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`iwto-wool-lca-guidelines-2016`

###### 废低密度聚乙烯薄膜（`inspection_waste_ldpe_film`）

本卡仅将具名流记录为一个原子交换。该流按所在标题声明的方向和流类型跨越过程边界，其数量依照所述规则与采集协议取得。

- 选定流：废低密度聚乙烯薄膜
- 流属性/单位：质量 / kg
- 数量规则：称量离开过程的聚乙烯薄膜废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 参考产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`iwto-wool-lca-guidelines-2016`

##### 基本流

如果实际使用但上文未列出的其他纤维（处于允许的剩余份额内）、燃料、制冷剂、化学品、包装组件、废物、废水物质或空气排放物质，生产者数据集须按每个具体身份新增一条原子交换。不得将其并入通用载能体、化学品、包装、残余物、废水或排放行。

## 7. 分配与共产品处理

| rule_id | 规则 |
| --- | --- |
| `alloc_avoid` | 首先通过过程细分以及不同织物生产线、整理路线和生产期的独立计量避免分配。 |
| `alloc_single_product` | 当前景只生产参考织物和非产品残余物时，在考虑残余物处理收益前，将 100% 过程输入和排放归于参考产品。 |
| `alloc_residuals` | 将废纱、废织物、废液、废水和废包装记录为输出。不得仅因其出售或回收而视为共产品；任何避免负荷仅在另行披露的下游情景中建模。 |
| `alloc_unavoidable` | 多种可销售纺织产品间无法避免分配时，优先采用有记录的物理因果参数，例如机器时间或质量。仅在物理因果关系不可辩护时采用经济分配，并披露价格、时期、敏感性和分配份额。 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `weaving`；`wet_finishing` | 纱线和内部织物输入 | 地磅、台秤、ERP 领料、配方 | 材料身份；供应商；批次；毛重和皮重；纤维组成；过程去向 | 按具名材料和批次核对接收与领用质量 | kg | 每批，按月核对 | 连续 12 个月 | 报告工厂及纳入的外包转移 | 按原子材料身份求和；不得按材料族聚合 | 校准秤记录；发票；批次票据；纤维证书 |
| `cp_utility_meters` | 所有过程 | 电力、工艺水、热水、蒸汽、天然气 | 公用工程计量表和账单 | 起止表读数；倍率；燃料热值；分表归属 | 读取专用计量表；共享计量表采用有记录的因果驱动量分配 | kWh；m3；MJ | 至少每月 | 连续 12 个月 | 纳入的前景作业 | 按公用工程身份和过程求和；保持不同载能体分离 | 仪表校准；账单；计量表图；分配工作表 |
| `cp_chemical_records` | `weaving`；`wet_finishing` | 每种浆料、润滑剂、染料、酸、盐、表面活性剂及其他化学品 | 批次配方和库存记录 | 产品身份；可得时的 CAS；浓度；批次领用；退料；回收 | 核对库存变动与批次配方；按声明基准将商业产品换算为活性或纯物质当量 | kg | 每批，按月核对 | 连续 12 个月 | 纳入的前景作业 | 仅相同产品且浓度基准相同时求和 | 安全数据表；技术数据表；配方；库存台账 |
| `cp_product_quality` | 所有过程 | 坯布、整理后织物和参考织物 | 布卷检验和实验室记录 | 布卷质量；长度；幅宽；单位面积质量；纤维份额；回潮基准；等级；不合格品 | 称量合格转移，并检测类别界定用组成和织物质量 | kg；%；g/m2 | 每批并按月核对 | 连续 12 个月 | 报告工厂 | 按声明的组织和整理状态汇总合格产品；保留等级拆分 | 校准秤；ISO 方法检测报告；质量放行记录 |
| `cp_waste_records` | 所有过程 | 每项具名固体或液体废物 | 废物转移和称量记录 | 废物身份；容器皮重；质量；去向；处理；回收状态 | 称量每项废物流，或以体积和实测密度推算质量 | kg | 每次出运并按月核对 | 连续 12 个月 | 纳入的前景作业 | 仅相同废物身份和去向时求和 | 转移联单；称量票据；承包商收据 |
| `cp_wastewater_monitoring` | `wet_finishing` | 废水体积和每种具名水污染物 | 排水计量表和实验室分析 | 排放点；处理状态；体积；采样时间；浓度；方法；检出限 | 计量排水量，并按适用许可或 BAT 监测计划分析有代表性的样品 | m3；mg/L；kg | 连续或按许可证要求，适用物质至少每年一次 | 与生产相同的 12 个月期间 | 每个纳入的排放点 | 分别计算每种物质负荷；不得聚合污染物 | 实验室认可；样品流转记录；仪表记录；许可申报 |
| `cp_air_emissions` | `wet_finishing` | 每种具名燃烧或整理排放 | 烟气检测和燃料记录 | 排放源；运行小时；烟气流量；浓度；燃料量；因子；氧化基准 | 要求时使用烟气实测；否则以实测燃料量和排放源、燃料特定的有记录因子计算 | kg；Nm3；MJ | 按许可证要求并年度核对 | 与生产相同的 12 个月期间 | 每个纳入的燃烧、干燥或焙烘源 | 按排放源分别计算每种物质，再汇总相同物质 | 烟气报告；燃料证书；计量表；因子引文 |
| `cp_packaging_records` | `final_inspection_packaging` | 每个包装组件 | 包装材料清单和库存记录 | 组件身份；单位质量；使用数量；采购和库存记录 | 称量有代表性的组件，并将数量与已包装布卷或批次核对 | kg | 每种包装规格并按月核对 | 连续 12 个月 | 报告工厂 | 每个组件分别求和；从参考产品质量中排除包装 | 包装规格；称量记录；采购台账 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize` | 所有交换 | 归一化量 = 报告期交换总量 / 报告期合格产品净质量 × 1,000 kg | 交换总量；参考产品净质量 | 每 1,000 kg 产品的量 | `iwto-wool-lca-guidelines-2016` |
| `calc_composition` | 类别识别 | 合格份额 =（羊毛纤维干质量 + 动物细毛纤维干质量）/ 纤维总干质量 × 100；合格份额须至少为 85% | 去除非纤维物质后的组成检测 | 合格纤维质量份额 | `unsd-cpc-3-0-2025`；`iso-1833-4-2023` |
| `calc_mass_balance` | 每个过程和完整前景 | 输入纺织材料质量 = 合格纺织品输出 + 具名纺织废物 + 实测库存变化 + 有记录的回潮或取样调整 | 纱线或织物输入；输出；废物；库存；回潮基准 | 质量平衡残差及核对结果 | `iwto-wool-lca-guidelines-2016` |
| `calc_wastewater_load` | 每种废水物质 | 负荷（kg）= 浓度（mg/L）× 排水量（m3）× 10^-3；多次样品代表同一时期时采用流量加权平均 | 浓度；体积；采样覆盖 | 一种具名物质的 kg | `ec-jrc-textiles-bref-2023` |
| `calc_combustion_emissions` | 场内天然气燃烧 | 排放（kg）= 实测燃料能量 × 有记录的适用排放因子；一氧化氮与二氧化氮须分开，或记录实测氮氧化物的拆分方法 | 燃料能量；物质特定因子或烟气实测结果 | 一种具名空气物质的 kg | `ec-jrc-textiles-bref-2023` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_temporal` | 所有前景数据 | 覆盖代表正常运行的连续 12 个月；研究完成时一手数据原则上不超过两年。 | 报告期记录；生产日志；异常事件披露 |
| `dq_identity` | 材料、化学品、公用工程、废物和排放 | 每条原子交换保留一个具体身份，并按适用情况记录供应商或产品、浓度基准、去向或环境介质。 | 发票；安全数据表；流记录；废物联单；监测报告 |
| `dq_completeness` | 过程图和清单 | 将过程图与场址作业核对，并记录所有排除项、零值或不适用判定、外包步骤和已知数据缺口。 | 场址核查；过程图；完整性清单 |
| `dq_metering` | 数量和计算排放 | 记录校准、共享计量表分配、检出限、采样覆盖、换算系数以及可能影响结果的不确定性。 | 校准证书；分配工作簿；实验室报告；因子引文 |
| `dq_range_status` | 所有数量字段 | 本 PCR 不提供通用数量范围或默认估计；使用场址特定实测值，且不得将单一工厂或案例研究数值转换为范围。 | 范围审计；前景记录；来源审查日志 |

## 9. 校验规则

| rule_id | 规则 |
| --- | --- |
| `val_identity` | 参考输出须使用 UUID `0b5c66df-5a09-41f4-8e09-39c43dd16a76`、质量 UUID `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组 UUID `93a60a57-a4c8-11da-a746-0800200c9a66` 以及 kg。 |
| `val_composition` | 通过适用的组成检测，验证去除非纤维物质后羊毛与动物细毛合计至少占纤维总质量 85%；低于阈值的数据集须拒绝。 |
| `val_reference_mass` | 验证最终检验后恰为 1,000 kg 合格净织物，采用声明的回潮或调湿基准且不含包装质量。 |
| `val_process_coverage` | 必须纳入 `weaving` 和 `final_inspection_packaging`；场内发生任何湿法后整理时必须纳入 `wet_finishing`，并披露每项外包或排除作业。 |
| `val_atomic_flows` | 拒绝聚合的选定流。每种实际公用工程、燃料、制冷剂、化学品、包装组件、废物、废水物质和空气排放物质须为独立原子交换；Tiangong 身份未解决时仍为发布阻断项。 |
| `val_mass_balance` | 每个过程和完整前景分别核对纺织材料；调查并记录残差，不得以静默方式平账。 |
| `val_wastewater` | 湿法加工排放废水时，须提供实测排水量和适用物质的独立负荷，并声明处理状态、采样覆盖和排放点。 |
| `val_air_emissions` | 存在场内燃烧、干燥或化学整理时，须分别记录每种适用空气物质，并说明实测或计算方式；声称不存在时须有过程和化学品证据。 |
| `val_sources` | 拒绝仅基于搜索摘要或文摘的来源主张。每项规范性外部主张须追溯至官方原文或论文全文；不得将案例数值提升为通用范围。 |
| `val_translation` | 英文和中文须具有相同且顺序一致的 `process_id`、`row_id`、Tiangong UUID、受控枚举、source id、系统边界规则、分配规则和校验规则序列。 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 3.0 `26530` 织物工厂门生产的生产者特定前景数据包 |
| downstream_use | 构建已声明的精梳羊毛或精梳动物细毛机织织物 LCA 过程数据集和生命周期模型 |
| allowed_use | 组成、组织、整理、地域、时期和边界相匹配时的场址及路线特定产品评价 |
| excluded_use | 所有毛纺织品的通用默认值；粗梳织物；低于 85% 的织物；针织、起绒、地毯、服装、使用阶段或生命周期末端主张，除非另有规则 |
| required_metadata | 必需参考流限定信息；过程纳入情况；供应商和上游数据集选择；分配；处理状态；计量方法；来源版本 |
| required_quality_disclosure | 一手数据覆盖；计量和采样质量；分配份额；质量平衡残差；排除项；未解决流身份；数据缺口；不提供通用范围 |
| update_trigger | 纤维配方、织物组织、整理路线、能源或水系统、污染控制、包装、生产地域、分配或报告期发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | official_guidance | 联合国统计司，《CPC 3.0 版解释性说明》，2025 年，第 26530 类。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 精确类别范围、85% 阈值和相邻类别排除 |
| `iwto-wool-lca-guidelines-2016` | official_guidance | 国际毛纺织组织，《毛纺织品环境绩效生命周期评价指南》，2016 年 4 月。https://iwto.org/wp-content/uploads/2020/04/IWTO-Guidelines-for-Wool-LCA.pdf | 毛纺织路线、农场后清单、前景数据质量、质量与能量核对、分配层级及通用默认值证据缺口 |
| `ec-jrc-textiles-bref-2023` | official_guidance | 欧盟委员会联合研究中心，《纺织工业最佳可行技术参考文件》，2023 年。https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry | 整经、上浆、织造、湿法后整理、输入输出清单、监测、废水、排放、化学品和能源 |
| `iso-1833-4-2023` | standard | ISO 1833-4:2023，《纺织品——定量化学分析——第 4 部分：某些蛋白质纤维与某些其他纤维的混合物》。https://www.iso.org/standard/86273.html | 去除非纤维物质后的组成测量 |
| `iso-3801-1977` | standard | ISO 3801:1977，《纺织品——机织物——单位长度质量和单位面积质量的测定》。https://www.iso.org/standard/9335.html | 织物质量和单位面积质量限定信息 |
| `roos-textile-chemical-inventory-2019` | literature | Roos 等，“An inventory framework for inclusion of textile chemicals in life cycle assessment”，《The International Journal of Life Cycle Assessment》24（2019），838–847。https://doi.org/10.1007/s11367-018-1537-6 | 纺织湿法加工中逐种化学品清单和独立排放身份 |
