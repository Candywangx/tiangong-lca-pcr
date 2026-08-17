---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.silk-yarn-and-yarn-spun-from-silk-waste-silk-worn-gut
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 蚕丝纱线和绢纺丝；蚕丝钓线

## 1. 范围与适用性

本 PCR 适用于以进厂生丝生产可销售蚕丝纱线、以丝绸废料生产绢纺丝，以及以剥取的蚕丝腺形成蚕丝钓线的前景生产。产品边界为生产者工厂门，且位于染色、增重、织造、针织、零售包装和出厂运输之前。

前景数据包应声明具体路线，不得把缫制或捻制长丝纱、废丝绢纺丝和蚕丝钓线合并成未声明的生产混合。栽桑养蚕、蚕茧生产、生丝生产以及外购丝绸废料的生产属于上游过程，应链接数据集，不得虚构前景数值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.silk-yarn-and-yarn-spun-from-silk-waste-silk-worn-gut |
| classification_refs | CPC 3.0：26310，蚕丝纱线和绢纺丝；蚕丝钓线 |
| covered_products | 以进厂生丝制成的并合、加捻或捻制长丝蚕丝纱线；以丝绸废料制成的绢纺丝；以蚕丝腺形成的蚕丝钓线 |
| excluded_products | 未加捻生丝（CPC 26110）；机织或针织丝绸；未明确作为新增前景过程纳入的染色或增重蚕丝；合成或再生长丝纱线；成品缝合线或钓具；零售包装 |
| representative_product | 以脱胶丝绸废料制成的未染色绢纺丝 |
| production_route | 声明下列一种路线：生丝长丝纱成形；丝绸废料脱胶、精整与纺纱；或酸辅助蚕丝钓线成形 |
| market_state | 工厂门未包装、未染色、未增重的可销售纱线或蚕丝钓线，并声明含水率/调湿状态和质量规格 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供已声明纺织纱线或钓线丝体规格的可销售蚕丝纱线或蚕丝钓线 |
| How much | 1 kg 净干产品质量，不含筒管、锥管、包裹物、托盘或其他包装 |
| How well | 符合已声明路线、材料来源、适用时的丝胶状态、纱线结构、线密度或钓线直径、适用时的捻度以及拉伸质量规格 |
| How long or cycle | 在工厂门交付的一个生产批次；该中间产品不规定使用阶段持续时间 |
| reference_flow_link | `reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净干产品 |
| 参考产品流 | Spun Silk `6c639604-29e8-44b6-be18-4e0ad97fdef8` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品路线；已知时的蚕丝来源和物种；长丝或短纤形态；适用时的丝胶状态；单纱、合股或缆线结构；以 tex 表示的线密度，或蚕丝钓线的直径和长度；适用时的捻向和捻度；含水率或调湿基准；质量试验方法；生产地域；纳入的加工步骤；生产期间 |

构建前景数据包时，应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明`必需限定信息`的每一项。路线不适用的限定信息应明确标为不适用，不得直接省略。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_dry_mass` | 参考产品及全部质量平衡流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明的干基或调湿基报告净产品质量；保留实测毛重、包装皮重、含水率或调湿方法及换算过程。 |
| `linear_density_tex` | 规定线密度的蚕丝纱线和蚕丝钓线 | Linear density | tex | 使用 Tex 制表示和换算线密度；若从纱线卷装测量，应声明调湿和试验程序。 |
| `electricity_metering` | 每张电力卡片 | Energy | kWh | 记录电力供给电压和供给情景，保留实测 kWh，不得将电力与蒸汽、天然气或其他能源载体合并。 |
| `steam_metering` | 外供蒸汽 | Mass | kg | 记录外供蒸汽质量、压力、冷凝水回流边界以及仪表或账单依据；换算为能量时应保留实测蒸汽状态和计算输入。 |
| `fuel_metering` | 气态天然气 | Mass | kg | 保留外购燃料质量和声明的供给状态；原始记录为体积或能量时，应保留实测状态和场址特定换算因子。 |
| `chemical_active_mass` | 碳酸钠和乙酸 | Mass | kg | 根据供应商浓度和批次领料记录，分别报告每种化学品的产品质量或活性物质当量质量；不得合并化学品。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_gate` | 所有路线 | 仅纳入直接受前景控制的已声明路线过程，起点为生丝、丝绸废料或剥取蚕丝腺的接收，终点为工厂门未包装可销售产品。 | `unsd-cpc-3-0-2025`; `iso-14044-2006` |
| `boundary_upstream_links` | 外购投入 | 为生丝、丝绸废料、蚕丝腺、水、化学品、电力、蒸汽和天然气链接并披露地域、技术和供给情景的上游数据集；不得为外购投入分配零负荷。 | `iso-14044-2006` |
| `boundary_route_selection` | 产品身份 | 选择一种路线并声明每个纳入的可选步骤。废丝纱线需要脱胶/精整和纺纱；长丝纱线需要成形/加捻/络筒；蚕丝钓线需要酸辅助蚕丝腺拉伸。 | `eu-textiles-bref-2023`; `yin-et-al-2021-spun-silk`; `cenis-et-al-2015-silkworm-gut` |
| `boundary_wet_operations` | 脱胶和水洗 | 纳入工艺用水、每种化学品、外供蒸汽、电力、产出时的可销售回收丝胶，以及离开过程的含丝胶废水。 | `eu-textiles-bref-2023`; `ifc-textiles-ehs-2007` |
| `boundary_actual_atomic_exchanges` | 所有前景过程 | 将每项实际材料、化学品、电力供给、蒸汽供给、燃料、废物流、回收产品和直接基本流排放分别记录；本 PCR 未预列的流仍须作为一个具体原子交换新增。 | `eu-textiles-bref-2023`; `ifc-textiles-ehs-2007` |
| `boundary_exclusions` | 上下游过程 | 栽桑养蚕、蚕茧生产、生丝生产、染色、增重、织物形成、产品使用、零售包装和出厂运输不属于前景边界，除非声明的研究将其明确加入为独立过程。 | `unsd-cpc-3-0-2025`; `eu-textiles-bref-2023` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在前景设施接收一种路线特定材料：生丝、丝绸废料或剥取的蚕丝腺 |
| starting_condition_role | 直接控制的纱线或钓线成形路线的上游产品投入 |
| product_classification_scope | CPC 3.0 代码 26310 产出；进厂生丝和回收丝绸废料保留其各自产品身份 |
| recursive_input_rule | 作为烧毛或另一直接控制整理步骤投入的 CPC 26310 蚕丝纱线仍为明确产品投入，并链接上游过程；不得在同一过程内递归展开。 |
| upstream_dataset_requirement | 每项外购投入和公用工程均须使用地域和技术具有代表性的上游数据集；代理使用必须披露并说明理由。 |
| disclosure | 声明路线、起始材料、丝胶状态、纳入的机械和湿法过程、烧毛状态、生产地域和期间、分配方法以及所有未解析或代理身份。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `silk_filament_yarn_forming` | 长丝蚕丝纱成形、加捻和络筒 | conditional | 声明产品为以进厂生丝制成的长丝蚕丝纱线时必需 | 前景长丝纱生产 | 每 1 kg 净干长丝蚕丝纱线产出 |
| `silk_waste_degumming_dressing` | 丝绸废料脱胶和精整 | conditional | 声明产品为以丝绸废料制成的纱线时必需 | 前景湿法准备和纤维精整 | 每 kg 转入纺纱的脱胶蚕丝纤维产出 |
| `spun_silk_spinning` | 绢纺牵伸、纺纱、合股和络筒 | conditional | 声明产品为以丝绸废料制成的纱线时必需 | 前景绢纺丝生产 | 每 1 kg 净干绢纺丝产出 |
| `spun_silk_gassing` | 绢纺丝烧毛 | conditional | 使用燃气火焰去除突出纤维和棉结时纳入 | 前景路线特定纱线整理 | 每 1 kg 净干烧毛绢纺丝产出 |
| `silkworm_gut_forming` | 蚕丝钓线酸处理和拉伸 | conditional | 声明产品为蚕丝钓线时必需 | 前景钓线丝体成形 | 每 1 kg 净干蚕丝钓线产出 |

### 过程：长丝蚕丝纱成形、加捻和络筒（`silk_filament_yarn_forming`）

#### 输入

##### 产品流

###### 进厂生丝（`filament_raw_silk_input`）

生丝跨入前景边界，经并合、加捻、捻制和络筒形成长丝纱。

- 选定流：Raw Silk `343df125-d682-4ffa-8829-5fbc785bdbc9`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发往路线的实测净干或调湿质量，扣除退回的未用材料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干长丝蚕丝纱线产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filament_batch_records`
- 来源：`eu-textiles-bref-2023`

###### 中压电网供电（`filament_electricity`）

加捻、捻制、络筒、通风及直接归属辅助设备的电力应与热和燃料分开记录。

- 选定流：Electricity, medium voltage, grid supply at plant
- 流属性/单位：Energy / kWh
- 数量规则：路线归属的区间电表读数或有记录的分表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干长丝蚕丝纱线产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filament_electricity_meter`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售长丝蚕丝纱线（`filament_yarn_output`）

产出为符合已声明结构和线密度规格的捻制或加捻长丝蚕丝纱线。

- 选定流：Silk filament yarn, thrown and wound
- 流属性/单位：Mass / kg
- 数量规则：实测净干或调湿合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：包装前路线产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filament_batch_records`
- 来源：`iso-1144-2016`; `iso-2060-1994`; `iso-2062-2009`

###### 回收丝绸废料（`filament_recovered_silk_waste`）

作为可用投入转移到另一生产系统的蚕丝边角料和断丝，按本产品输出记录。

- 选定流：Silk waste `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：已接受回收并转出过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干长丝蚕丝纱线产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filament_batch_records`
- 来源：`yin-et-al-2021-spun-silk`

##### 废物流

###### 废弃丝绸废料（`filament_discarded_silk_waste`）

未被接受回收并送往废物管理的蚕丝残余物，与回收丝绸废料分开记录。

- 选定流：Silk waste `690d2d6b-d573-4ab5-9e50-742a2ee12275`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：跨越废物管理边界的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干长丝蚕丝纱线产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_filament_batch_records`

##### 基本流

### 过程：丝绸废料脱胶和精整（`silk_waste_degumming_dressing`）

#### 输入

##### 产品流

###### 进厂丝绸废料（`waste_degumming_silk_input`）

丝绸废料是路线特定原料，在外购或转入回收时作为产品投入记录。

- 选定流：Silk waste `e8fb97e6-a2ec-40d6-8dee-2cafe1a25106`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：发往批次的实测接收质量，并换算至声明含水率基准
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 脱胶蚕丝纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_degumming_batch_records`
- 来源：`yin-et-al-2021-spun-silk`

###### 工艺用水（`waste_degumming_water`）

进入脱胶、水洗和漂洗的水作为一个水产品投入记录。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测工艺水质量，或用记录的水密度将实测体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 脱胶蚕丝纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_degumming_water_meter`
- 来源：`eu-textiles-bref-2023`

###### 碳酸钠（`waste_degumming_sodium_carbonate`）

仅当有记录的脱胶配方实际使用该具体碱剂时记录碳酸钠。

- 选定流：Sodium carbonate `5462c2da-d3dd-41f0-a78f-51024d2d1a69`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由称重领料记录或供应商账单核对得到的批次净化学品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 脱胶蚕丝纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_degumming_batch_records`
- 来源：`eu-textiles-bref-2023`

###### 外供蒸汽（`waste_degumming_steam`）

跨越过程边界用于浴液加热的蒸汽应与电力和燃料分开记录。

- 选定流：Steam, 10 bar, supplied to plant
- 流属性/单位：Mass / kg
- 数量规则：分配至批次的实测外供蒸汽质量；声明压力和冷凝水回流边界
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 脱胶蚕丝纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_degumming_steam_meter`
- 来源：`eu-textiles-bref-2023`

###### 中压电网供电（`waste_degumming_electricity`）

浴液循环、水洗、精整、梳理及直接归属辅助设备的电力独立记录。

- 选定流：Electricity, medium voltage, grid supply at plant
- 流属性/单位：Energy / kWh
- 数量规则：路线归属的区间电表读数或有记录的分表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 脱胶蚕丝纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_degumming_electricity_meter`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 脱胶蚕丝纤维（`degummed_silk_fibre_output`）

精整纤维已按路线声明去除部分丝胶和污染物，可转入牵伸与纺纱。

- 选定流：Degummed silk fibre
- 流属性/单位：Mass / kg
- 数量规则：转入纺纱的实测净干或调湿纤维质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：脱胶和精整批次产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_degumming_batch_records`
- 来源：`eu-textiles-bref-2023`; `yin-et-al-2021-spun-silk`

###### 回收丝胶（`recovered_sericin_output`）

仅当丝胶回收、产品质量和转移均有记录时，才将分离出的可销售丝胶作为产品；仍溶于废水的丝胶不属于该产品。

- 选定流：Recovered sericin
- 流属性/单位：Mass / kg
- 数量规则：符合声明产品规格的实测干回收丝胶质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 脱胶蚕丝纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_degumming_batch_records`
- 来源：`eu-textiles-bref-2023`

##### 废物流

###### 蚕丝脱胶废水（`degumming_wastewater`）

送往场内或场外处理的含丝胶水流作为一个路线特定废物流记录。

- 选定流：Silk degumming wastewater
- 流属性/单位：Mass / kg
- 数量规则：处理前分配至批次的实测排放质量，或用记录密度换算的实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 脱胶蚕丝纤维产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_degumming_batch_records`
- 来源：`eu-textiles-bref-2023`; `ifc-textiles-ehs-2007`

##### 基本流

### 过程：绢纺牵伸、纺纱、合股和络筒（`spun_silk_spinning`）

#### 输入

##### 产品流

###### 脱胶蚕丝纤维投入（`spinning_degummed_silk_input`）

脱胶和精整后的蚕丝纤维作为一个具体中间产品进入牵伸与纺纱。

- 选定流：Degummed silk fibre
- 流属性/单位：Mass / kg
- 数量规则：发往纺纱的实测净干或调湿纤维质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干绢纺丝产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_batch_records`
- 来源：`yin-et-al-2021-spun-silk`

###### 中压电网供电（`spinning_electricity`）

牵伸、粗纱、纺纱、合股、络筒、通风及直接归属辅助设备的电力独立记录。

- 选定流：Electricity, medium voltage, grid supply at plant
- 流属性/单位：Energy / kWh
- 数量规则：路线归属的区间电表读数或有记录的分表分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干绢纺丝产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_electricity_meter`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 绢纺丝（`spun_silk_output`）

合格产出是丝绸废料纺纱路线的代表性参考产品。

- 选定流：Spun Silk `6c639604-29e8-44b6-be18-4e0ad97fdef8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测净干或调湿合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：包装前路线产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_batch_records`
- 来源：`iso-1144-2016`; `iso-2060-1994`; `iso-2062-2009`; `yin-et-al-2021-spun-silk`

##### 废物流

###### 废弃丝绸废料（`spinning_silk_waste`）

送往废物管理的短纤维、棉结和不合格蚕丝作为一个丝绸废物流记录。

- 选定流：Silk waste `690d2d6b-d573-4ab5-9e50-742a2ee12275`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：跨越废物管理边界的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干绢纺丝产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_batch_records`
- 来源：`yin-et-al-2021-spun-silk`

##### 基本流

### 过程：绢纺丝烧毛（`spun_silk_gassing`）

#### 输入

##### 产品流

###### 未烧毛绢纺丝（`gassing_spun_silk_input`）

仅当使用燃气火焰去除突出纤维和棉结时，绢纺丝才进入该可选过程。

- 选定流：Spun Silk `6c639604-29e8-44b6-be18-4e0ad97fdef8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入烧毛线的实测净干或调湿质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净干烧毛绢纺丝产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gassing_batch_records`
- 来源：`yin-et-al-2021-spun-silk`

###### 气态天然气（`gassing_natural_gas`）

烧毛火焰消耗的天然气作为一个燃料投入记录。

- 选定流：natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：分配至烧毛线和生产批次的实测或开票燃料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干烧毛绢纺丝产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gassing_gas_meter`
- 来源：`yin-et-al-2021-spun-silk`

###### 中压电网供电（`gassing_electricity`）

烧毛机、驱动、控制和直接归属抽风设备的电力应与天然气分开记录。

- 选定流：Electricity, medium voltage, grid supply at plant
- 流属性/单位：Energy / kWh
- 数量规则：生产线分表读数或区间电表记录的有据分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干烧毛绢纺丝产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gassing_electricity_meter`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 烧毛绢纺丝（`gassing_spun_silk_output`）

产出为完成已声明烧毛操作后的合格绢纺丝。

- 选定流：Spun Silk `6c639604-29e8-44b6-be18-4e0ad97fdef8`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测净干或调湿合格产出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：包装前路线产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gassing_batch_records`
- 来源：`yin-et-al-2021-spun-silk`

##### 废物流

###### 烧毛捕集丝绸废料（`gassing_silk_waste`）

送往废物管理的捕集烧焦纤维、棉结和不合格蚕丝作为丝绸废料记录。

- 选定流：Silk waste `690d2d6b-d573-4ab5-9e50-742a2ee12275`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：跨越废物管理边界的实测捕集物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干烧毛绢纺丝产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gassing_batch_records`
- 来源：`yin-et-al-2021-spun-silk`

##### 基本流

###### 化石源一氧化碳排放至空气（`gassing_carbon_monoxide_air`）

由路线特定监测或经验证的场址排放清单记录烧毛过程排至未指定空气的化石源一氧化碳。

- 选定流：carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：减排后实测或场址清单排放质量；本 PCR 不提供默认因子
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干烧毛绢纺丝产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gassing_air_monitoring`
- 来源：`yin-et-al-2021-spun-silk`; `ifc-textiles-ehs-2007`

###### 细颗粒物排放至空气（`gassing_particulate_air`）

未被抽风或减排系统捕集的直接细颗粒物应与捕集丝绸废料分开记录。

- 选定流：Particulate matter, <2.5 µm, to air
- 流属性/单位：Mass / kg
- 数量规则：减排后实测排放质量；本 PCR 不提供默认因子
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干烧毛绢纺丝产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gassing_air_monitoring`
- 来源：`yin-et-al-2021-spun-silk`; `ifc-textiles-ehs-2007`

### 过程：蚕丝钓线酸处理和拉伸（`silkworm_gut_forming`）

#### 输入

##### 产品流

###### 蚕丝腺（`silk_gland_input`）

剥取的家蚕（Bombyx mori）丝腺是进入钓线成形路线的具体生物材料。

- 选定流：Silkworm silk gland
- 流属性/单位：Mass / kg
- 数量规则：发往成形批次的实测鲜丝腺质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干蚕丝钓线产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gut_batch_records`
- 来源：`cenis-et-al-2015-silkworm-gut`

###### 工艺用水（`silkworm_gut_water`）

制备酸浴和漂洗成形钓线所用的水应与乙酸分开记录。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测水质量，或用记录的水密度换算的实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干蚕丝钓线产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gut_water_meter`
- 来源：`cenis-et-al-2015-silkworm-gut`

###### 乙酸（`silkworm_gut_acetic_acid`）

处理浴中的乙酸按纯酸当量质量记录，并与浴水分开。

- 选定流：Acetic acid (acetic acid) `c7564d76-47c4-440c-9eb8-3242c38eeb1b`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：使用 `calc_acetic_acid_active_mass`，将溶液质量乘以供应商认证的乙酸质量分数
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干蚕丝钓线产出
- 基准类型：过程输出（`process_output`）
- 证据类型：基于采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_gut_acid_records`
- 来源：`cenis-et-al-2015-silkworm-gut`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 可销售蚕丝钓线（`silkworm_gut_output`）

产出为符合已声明直径、长度和拉伸规格的酸处理拉伸蚕丝钓线。

- 选定流：Silkworm gut
- 流属性/单位：Mass / kg
- 数量规则：实测净干合格产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：包装前路线产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gut_batch_records`
- 来源：`cenis-et-al-2015-silkworm-gut`; `iso-2062-2009`

##### 废物流

###### 蚕体组织废物（`silkworm_tissue_waste`）

剥取丝腺后送往废物管理的剩余生物组织作为一个具体废物流记录。

- 选定流：Silkworm tissue waste
- 流属性/单位：Mass / kg
- 数量规则：跨越废物管理边界的实测湿质量，并在测量时保留干物质含量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干蚕丝钓线产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gut_batch_records`
- 来源：`cenis-et-al-2015-silkworm-gut`

###### 废蚕丝钓线乙酸浴（`silkworm_acidic_wastewater`）

送往处理的废乙酸水浴应与蚕体组织废物分开记录。

- 选定流：Spent silkworm-gut acetic-acid bath
- 流属性/单位：Mass / kg
- 数量规则：排往处理的实测浴液质量，或用记录密度换算的实测体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净干蚕丝钓线产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_gut_batch_records`
- 来源：`cenis-et-al-2015-silkworm-gut`; `ifc-textiles-ehs-2007`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | 所有路线 | 在采用分配前，细分路线特定过程，并分别计量批次、公用工程和产出。 | `iso-14044-2006` |
| `allocation_recovered_silk` | 回收丝绸废料 | 回收丝绸废料作为有用产品转移时，保留为产品输出并记录分配关系；送往废物管理的材料仍为 Waste flow，不获得产品抵扣。 | `iso-14044-2006`; `yin-et-al-2021-spun-silk` |
| `allocation_recovered_sericin` | 回收丝胶 | 产出可销售丝胶时，先细分回收操作；共享负荷无法细分时，采用反映过程的有据物理关系，且仅在没有可辩护物理关系时采用经济分配。 | `iso-14044-2006`; `eu-textiles-bref-2023` |
| `allocation_no_unreported_credit` | 所有废物与共产品 | 除非研究明确建模新增功能并报告方法、替代产品、地域和敏感性结果，否则不得应用避免负荷、替代或回收抵扣。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_filament_batch_records` | `silk_filament_yarn_forming` | 材料、产品和丝绸废料质量 | 称重单和批次记录 | batch_id; row_id; gross_mass; tare_mass; moisture_or_conditioning_basis; accepted_output_mass; recovered_mass; discarded_mass | 经校准衡器关联生产和去向记录 | kg | 每批 | 有代表性的连续 12 个月，或声明的较短期间全部批次 | 所有纳入的长丝纱生产线 | 按 row_id 和批次求和；扣除皮重和退回材料；使用 `calc_normalize_reference` 归一化 | 校准记录、批次谱系、回收验收和废物转移记录 |
| `cp_filament_electricity_meter` | `silk_filament_yarn_forming` | 中压电网供电 | 区间电表或分表 | meter_id; voltage; supplier; interval_start; interval_end; opening_kwh; closing_kwh; excluded_load_kwh | 校准电表；扣除有据非路线负荷 | kWh | 每区间并每月核对 | 与产品批次相同期间 | 所有纳入的长丝纱设备 | 汇总路线 kWh；共享实测负荷按披露驱动因子分配 | 电表校准、账单和负荷分配工作表 |
| `cp_degumming_batch_records` | `silk_waste_degumming_dressing` | 丝绸废料、碳酸钠、纤维产出、回收丝胶和废水 | 衡器、配方和批次记录 | batch_id; row_id; gross_mass; tare_mass; moisture_basis; recipe_issue_mass; output_mass; wastewater_mass_or_volume; density; destination | 校准衡器及批次配方/去向记录 | kg | 每批 | 有代表性的连续 12 个月，或声明的较短期间全部批次 | 所有纳入的脱胶和精整线 | 每个 row 单独求和；废水体积仅用记录密度换算 | 校准、配方批准、批次谱系、排放和转移记录 |
| `cp_degumming_water_meter` | `silk_waste_degumming_dressing` | 工艺用水 | 水表 | meter_id; opening_volume; closing_volume; density; batch_id; reused_water_mass | 校准水表并分配至批次 | kg | 每批或计量区间 | 与脱胶批次相同期间 | 所有纳入的湿法生产线 | 仅计新鲜投入；内部回用水单列且不得重复计数 | 水表校准和水量平衡 |
| `cp_degumming_steam_meter` | `silk_waste_degumming_dressing` | 外供蒸汽 | 蒸汽表或供应商记录 | meter_id; steam_mass; pressure; condensate_return_mass; batch_id | 校准蒸汽表或核对后的供应商记录 | kg | 每批或计量区间 | 与脱胶批次相同期间 | 所有纳入的湿法生产线 | 汇总跨边界外供蒸汽；披露冷凝水回流约定 | 仪表校准、蒸汽平衡和账单核对 |
| `cp_degumming_electricity_meter` | `silk_waste_degumming_dressing` | 中压电网供电 | 区间电表或分表 | meter_id; voltage; supplier; interval_start; interval_end; opening_kwh; closing_kwh; excluded_load_kwh | 校准电表；扣除有据非路线负荷 | kWh | 每区间并每月核对 | 与脱胶批次相同期间 | 所有纳入的湿法和精整设备 | 汇总路线 kWh；共享实测负荷按披露驱动因子分配 | 电表校准、账单和分配工作表 |
| `cp_spinning_batch_records` | `spun_silk_spinning` | 脱胶纤维、绢纺丝和丝绸废料质量 | 称重单和批次记录 | batch_id; row_id; gross_mass; tare_mass; moisture_or_conditioning_basis; accepted_output_mass; discarded_mass | 经校准衡器关联纺纱和去向记录 | kg | 每批 | 有代表性的连续 12 个月，或声明的较短期间全部批次 | 所有纳入的纺纱线 | 按 row_id 和批次求和；扣除皮重；使用 `calc_normalize_reference` 归一化 | 校准、批次谱系、质量放行和废物转移记录 |
| `cp_spinning_electricity_meter` | `spun_silk_spinning` | 中压电网供电 | 区间电表或分表 | meter_id; voltage; supplier; interval_start; interval_end; opening_kwh; closing_kwh; excluded_load_kwh | 校准电表；扣除有据非路线负荷 | kWh | 每区间并每月核对 | 与纺纱批次相同期间 | 所有纳入的纺纱设备 | 汇总路线 kWh；共享实测负荷按披露驱动因子分配 | 电表校准、账单和分配工作表 |
| `cp_gassing_batch_records` | `spun_silk_gassing` | 纱线投入、纱线产出和捕集丝绸废料 | 称重单和批次记录 | batch_id; row_id; gross_mass; tare_mass; conditioning_basis; accepted_output_mass; captured_waste_mass | 经校准衡器关联烧毛和去向记录 | kg | 每批 | 声明期间全部烧毛批次 | 所有纳入的烧毛线 | 每个 row 单独求和，并使用 `calc_normalize_reference` 归一化 | 校准、批次谱系、质量放行和废物转移记录 |
| `cp_gassing_gas_meter` | `spun_silk_gassing` | 气态天然气 | 燃气表或账单 | meter_id; raw_volume_or_mass; temperature; pressure; conversion_factor; assigned_batch; supplier | 校准仪表或含场址特定换算的供应商记录 | kg | 每区间并每月核对 | 与烧毛批次相同期间 | 所有纳入的烧毛燃烧器 | 用保留的实测状态将原始记录换算为 kg；共享用量按披露驱动因子分配 | 仪表校准、燃气账单和换算工作表 |
| `cp_gassing_electricity_meter` | `spun_silk_gassing` | 中压电网供电 | 区间电表或分表 | meter_id; voltage; supplier; opening_kwh; closing_kwh; excluded_load_kwh | 校准电表；扣除有据非路线负荷 | kWh | 每区间并每月核对 | 与烧毛批次相同期间 | 烧毛驱动、控制和归属抽风设备 | 汇总路线 kWh；共享实测负荷按披露驱动因子分配 | 电表校准、账单和分配工作表 |
| `cp_gassing_air_monitoring` | `spun_silk_gassing` | 一氧化碳和细颗粒物排放 | 烟道或工作区排风监测及运行日志 | sampling_point; pollutant; concentration; gas_flow; duration; abatement_state; batch_id; detection_limit | 在纳入减排设施下游使用经认可或有记录的场址方法 | kg | 有代表性运行监测及实质变更后 | 覆盖声明期间正常、启动和停机状态 | 每个纳入的烧毛排气口 | 由实测浓度、流量和时长计算排放质量；报告低于检出限的处理 | 方法、校准、检出限、实验室报告和运行日志 |
| `cp_gut_batch_records` | `silkworm_gut_forming` | 丝腺、钓线产品、组织废物和废酸浴 | 衡器、浴液和批次记录 | batch_id; row_id; gross_mass; tare_mass; acid_bath_mass_or_volume; density; product_dry_mass; tissue_wet_mass; destination | 校准衡器和批次/去向记录 | kg | 每批 | 声明生产期间全部批次 | 所有纳入的钓线成形工位 | 每个 row 单独求和；保留湿/干基；使用 `calc_normalize_reference` 归一化 | 校准、批次谱系、产品质量和废物转移记录 |
| `cp_gut_water_meter` | `silkworm_gut_forming` | 工艺用水 | 水表或称重加水 | batch_id; water_volume_or_mass; density; reused_water_mass | 校准水表或衡器 | kg | 每批 | 与钓线批次相同期间 | 所有纳入的浴液和漂洗工位 | 仅计新鲜投入；体积仅用记录密度换算 | 仪表或衡器校准和浴液单 |
| `cp_gut_acid_records` | `silkworm_gut_forming` | 乙酸 | 供应商证书和溶液称重领料 | batch_id; solution_mass; certified_acetic_acid_mass_fraction; returned_solution_mass | 称重领料并与供应商浓度核对 | kg 活性乙酸 | 每批及每供应商批号 | 与钓线批次相同期间 | 所有纳入的酸浴 | 应用 `calc_acetic_acid_active_mass`；不得与工艺用水合并 | 衡器校准、分析证书和批次配方 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | 每个清单 row | normalized_amount = 路线期间 row 数量 / 路线期间净干合格产品质量 | row amount; net dry conforming product mass | 每 1 kg 参考产品的数量 | `iso-14044-2006` |
| `calc_net_dry_product_mass` | 纱线或钓线产品 | net_dry_mass = 调湿毛重 - 包装皮重 - 高于声明干基的实测水质量 | gross mass; tare; moisture or conditioning result | kg 净干产品 | `iso-2060-1994` |
| `calc_acetic_acid_active_mass` | `silkworm_gut_acetic_acid` | active_acetic_acid_mass = 净溶液质量 × 供应商认证乙酸质量分数 | solution mass; certified mass fraction; returned solution mass | kg 活性乙酸 | `cenis-et-al-2015-silkworm-gut` |
| `calc_direct_air_emission` | 烧毛基本流产出 | emitted_mass = 实测浓度 × 实测排气流量 × 运行时长，并进行单位换算和记录低于检出限处理 | concentration; exhaust flow; duration; abatement state | kg 污染物排放 | `ifc-textiles-ehs-2007` |
| `calc_route_mass_balance` | 每个路线过程 | mass_balance_gap = 实测总质量投入 - 实测产品、废物和排放总质量，并报告含水率与积存项 | all mass inputs; all mass outputs; moisture change; stock change | 披露的 kg 和质量平衡缺口百分比 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 每张流卡片 | 保留 row_id、流向、流类型、选定流名称和已确认 UUID；未解析 UUID 应保持显式，不得用宽泛候选替换。 | flow list/get 核验记录和 manifest 审查元数据 |
| `dq_route` | 产品和过程图 | 路线、起始材料、丝胶状态、烧毛状态和纳入过程应可追溯至批次。 | 产品规格和批次谱系 |
| `dq_measurement` | 前景数量 | 使用校准仪表或衡器，保留原始记录、皮重、单位换算、分配驱动因子和检出限处理。 | 校准证书、仪表导出、称重单和计算工作簿 |
| `dq_temporal` | 发布平均值 | 覆盖有代表性的连续 12 个月；较短活动仅在披露生产日期、批次覆盖和季节性限制时允许。 | 生产日历和完整性计算 |
| `dq_completeness` | 所有过程 | 核对生产、材料、化学品、公用工程、废物、废水和直接排放记录；解释每项省略或低于检出限的交换。 | 路线质量平衡、公用工程核对和省略日志 |
| `dq_external_links` | 上游数据集 | 尽可能匹配投入身份、地域、技术、电压、蒸汽压力和燃料供给状态；披露每项代理和不匹配。 | 上游数据集元数据和代理理由 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | 参考产品 | 数据包应归一化至 1 kg 净干产品；代表性绢纺产品使用已确认 Spun Silk UUID `6c639604-29e8-44b6-be18-4e0ad97fdef8`；其他覆盖路线在发布前应使用经审查的精确产品 UUID。 | `unsd-cpc-3-0-2025`; `iso-14044-2006` |
| `validation_route_declaration` | 过程图 | 应且仅应声明一种覆盖产品路线，并包含路线必需的每个过程及每个实际采用的可选过程。 | `eu-textiles-bref-2023`; `yin-et-al-2021-spun-silk`; `cenis-et-al-2015-silkworm-gut` |
| `validation_atomic_inventory` | 所有清单 row | 每个交换应有一个 row_id、一个流向、一个流类型和一个具体选定流；合并的公用工程、化学品、包装、废物或排放不通过校验。 | `eu-textiles-bref-2023`; `ifc-textiles-ehs-2007` |
| `validation_foreground_amounts` | 所有前景 row | 每个数量应来自保留的前景记录或基于采集记录的明确计算；本 PCR 不提供猜测默认数量或推理估算范围。 | `iso-14044-2006` |
| `validation_wet_route` | 丝绸废料脱胶 | 湿法路线数据包应包含丝绸废料、工艺用水、每种实际化学品、发生转移时的蒸汽、电力、脱胶纤维、产出时的回收丝胶以及路线特定废水，并分别核对全部数量。 | `eu-textiles-bref-2023`; `ifc-textiles-ehs-2007`; `yin-et-al-2021-spun-silk` |
| `validation_gassing` | 烧毛路线 | 纳入烧毛时，应实测或明确记录减排后低于检出限的天然气、电力、纱线投入/产出、捕集丝绸废料、化石源一氧化碳和细颗粒物排放。 | `yin-et-al-2021-spun-silk`; `ifc-textiles-ehs-2007` |
| `validation_gut_route` | 蚕丝钓线成形 | 钓线路线数据包应分别记录丝腺、工艺用水、活性乙酸、钓线产出、组织废物和废酸浴，并声明直径、长度和拉伸质量证据。 | `cenis-et-al-2015-silkworm-gut`; `iso-2062-2009` |
| `validation_mass_balance` | 每条路线 | 路线质量平衡应在一致基准下报告投入、产品、回收材料、废物、废水、实测排放、含水率变化、库存变化和剩余缺口。 | `iso-14044-2006` |
| `validation_uuid_resolution` | 发布就绪性 | 在 active 或 published 发布前，每项路线必需未解析流身份应完成解析或正式审查接受；已确认的参考产品、Mass 属性和质量单位组身份应保持不变，除非有记录的公共数据审查取代；不得替换语义被拒候选。 | `unsd-cpc-3-0-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一种已声明 CPC 26310 蚕丝纱线或蚕丝钓线路线的前景生产数据集 |
| downstream_use | `secondary_dataset`; 经审查和发布后可作为 `background_dataset` |
| allowed_use | 当路线、地域、期间、产品规格和上游链接与研究匹配时，用于产品足迹、LCA 和供应链建模 |
| excluded_use | 未声明的长丝纱、绢纺丝和蚕丝钓线平均；不得代理生丝、织物、染色或增重蚕丝、成品缝合线，或湿法加工/能源供给存在实质差异的路线 |
| required_metadata | PCR id 和版本；产品路线；产品和流 UUID；地域；参考期间；已知时的蚕丝来源/物种；丝胶状态；纱线结构或钓线尺寸；线密度或直径；适用时的捻度；含水率基准；过程清单；公用工程供给情景；分配方法；数据所有者和审查状态 |
| required_quality_disclosure | 前景覆盖；仪表和衡器校准；质量平衡缺口；代理数据集；未解析身份；低于检出限处理；废水去向；减排状态；分配敏感性；排除过程 |
| update_trigger | 起始材料、路线、脱胶配方、烧毛技术、能源供给、产品规格、分配方法、废水处理、减排设施、地域或实测清单发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC Version 3.0 Explanatory Notes，代码 26310，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索于 2026-08-12） | 产品类别范围和分类身份 |
| `eu-textiles-bref-2023` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Textiles Industry，2023，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf（检索于 2026-08-12） | 蚕丝投入边界、纱线加工、蚕丝精练、公用工程、废水和监测 |
| `ifc-textiles-ehs-2007` | 官方指南（`official_guidance`） | IFC / 世界银行集团，Environmental, Health, and Safety Guidelines for Textile Manufacturing，2007-04-30，https://www.ifc.org/content/dam/ifc/doc/2000/2007-textiles-manufacturing-ehs-guidelines-en.pdf（检索于 2026-08-12） | 废水、能源、空气排放和监测要求 |
| `iso-1144-2016` | 标准（`standard`） | ISO 1144:2016，Textiles — Universal system for designating linear density (Tex System)，https://www.iso.org/standard/70774.html（检索于 2026-08-12） | 线密度声明和单位约定 |
| `iso-2060-1994` | 标准（`standard`） | ISO 2060:1994，Textiles — Yarn from packages — Determination of linear density (mass per unit length) by the skein method，https://www.iso.org/standard/6837.html（检索于 2026-08-12） | 纱线单位长度质量测量和调湿声明 |
| `iso-2062-2009` | 标准（`standard`） | ISO 2062:2009，Textiles — Yarns from packages — Determination of single-end breaking force and elongation at break using constant rate of extension，https://www.iso.org/standard/45642.html（检索于 2026-08-12） | 纱线和钓线拉伸质量证据 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines，https://www.iso.org/standard/38498.html（检索于 2026-08-12） | 边界、清单、分配、归一化和数据质量方法 |
| `yin-et-al-2021-spun-silk` | 文献（`literature`） | Yin, R. et al., Cleaner Production of Mulberry Spun Silk Yarns via a Shortened and Gassing-free Production Route, Journal of Cleaner Production, DOI: 10.1016/j.jclepro.2020.123690 | 废丝脱胶、精整、纺纱、烧毛和废物流分解 |
| `cenis-et-al-2015-silkworm-gut` | 文献（`literature`） | Cenis, J. L. et al., Mechanical behaviour and formation process of silkworm silk gut, Soft Matter 11 (2015) 8981–8991, DOI: 10.1039/C5SM01877C | 蚕丝钓线的丝腺、酸浴和拉伸路线 |
