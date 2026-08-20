---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-spices-and-aromatics-processed
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他经加工的香辛料和芳香料

## 1. 范围与适用性

本 PCR 覆盖加工与包装设施门口的完整 CPC 3.0 子类 23929。适用产品包括经加工的藏红花；姜黄（Curcuma 或 Indian saffron）；莳萝草和莳萝籽；咖喱粉和咖喱酱；百里香；月桂叶；几内亚胡椒或黑胡椒籽（Xylopia aethiopica）；当归茎；以及啤酒花球果。只要保留本子类的产品身份及烹饪或芳香用途，整料、破碎、切制、干燥、研磨、粉末、混合或酱状市场形态均在范围内。

前景数据包从已声明的接收植物材料或外购香辛料配料开始，以可销售加工产品结束；按路线纳入接收、分选、清理、洗涤或浸泡、切制、干燥、研磨、筛分、混合、酱料制备、经验证的微生物降低处理、包装、卫生清洁和场内储存。外购配料、包装、公共工程、燃料、清洁剂、制冷剂和处理服务的生产及种植阶段以相连的上游数据集表示，不得静默并入前景过程。

明确排除 CPC 01961 的活植物、鳞茎、块茎、根、插条、接穗和菌种，以及 CPC 01962 的切花、花蕾、花束、花环、花篮和类似制品。也排除未经加工的农产品香辛料和芳香料、提取物和精油，以及归入其他加工香辛料子类的产品。前景数据包必须写明实际植物材料、产品形态、路线、配方、水分状态、微生物降低状态、包装形式和地理范围；通用 Tiangong baseName `Spice` 本身不足以构成完整元数据。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-spices-and-aromatics-processed |
| classification_refs | CPC 3.0：23929，其他经加工的香辛料和芳香料（exact） |
| covered_products | 藏红花；姜黄/Curcuma/Indian saffron；莳萝草；莳萝籽；咖喱粉；咖喱酱；百里香；月桂叶；几内亚胡椒/negro pepper/Xylopia aethiopica 籽；当归茎；啤酒花球果，以及适用的整料、破碎、切制、干燥、研磨、粉末、混合或酱状形态 |
| excluded_products | CPC 01961 活植物及繁殖材料；CPC 01962 切花及花卉制品；未经加工的农产品；精油和提取物；CPC 23921-23928 兄弟加工香辛料子类，但作为 CPC 23929 咖喱产品的实际配料时除外 |
| representative_product | 一种已声明、可销售且属于 CPC 23929 的加工香辛料、芳香料、咖喱粉或咖喱酱 |
| production_route | 干制整料/破碎料路线：接收/检验 -> 清理及可选洗涤/浸泡/切制 -> 必要时干燥 -> 可选处理 -> 包装；研磨/粉末路线增加研磨/筛分/粉尘控制；咖喱粉路线增加配方特定混合；咖喱酱路线增加配方特定湿配料，并仅在实际采用时增加烹煮/巴氏处理/冷却；所有路线最终进入包装和声明的场内储存 |
| market_state | 加工设施门口的食品级整料、破碎、切制、干燥、研磨、粉末、混合或酱状产品，并声明实际水分、配方、处理和包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在 CPC 23929 内提供已声明烹饪风味、香气、颜色、调味、酿造或等效功能的加工香辛料或芳香料产品 |
| How much | 1 kg 可销售产品净质量 |
| How well | 符合所声明的植物身份或配方、物理形态、水分或固形物规格、研磨产品粒度规格、微生物降低状态以及适用的食品安全和客户规格 |
| How long or cycle | 交付至设施门口的一个生产批次；声明储存时长和保质期基准 |
| reference_flow_link | `spice_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 香料 `4425d417-e7f4-4569-9985-3468985b4a1f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CPC 23929 产品身份；植物种或完整咖喱配方；整料/破碎/切制/研磨/粉末/酱状形态；来料和最终水分或固形物基准；处理路线；微生物降低方法和状态；包装形式和净含量；生产地理范围和参考年 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。缺少任一必需限定信息即表示该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按声明的水分或固形物基准，将每项清单结果归一化至 1 kg 可销售产品净质量；产品质量不含包装皮重。 |
| `moisture_basis` | 接收、干燥及最终香辛料材料 | Mass fraction | kg water/kg wet material or % wet basis | 记录每个相关批次实测的水分或固形物基准；没有明确换算时不得比较湿基与干基质量。 |
| `energy_carrier_units` | 电力及每一种燃料 | Energy or fuel mass/volume | kWh, MJ, kg, or m3 | 保留计量或发票原始单位，并记录任何能量换算采用的低位/高位热值约定。 |
| `packaging_mass` | 每个包装组件 | Mass | kg | 每 1 kg 净产品分别测量或计算每种聚合物、纸板、玻璃、钢、标签及其他组件。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_steps` | 前景加工 | 纳入从接收植物材料或外购配料到可销售包装产品的每个直接控制且路线适用步骤，包括声明批次的卫生清洁和储存负荷。 | `fao-who-cxc-42-1995`; `fao-herb-spice-quality-assurance-1995` |
| `boundary_purchased_inputs` | 外购投入 | 将每种外购香辛料配料、配方配料、包装组件、电力供应、热载体、燃料、清洁剂、制冷剂和处理服务保留为显式原子产品投入，并连接上游数据集。 | `eu-pef-2021-2279` |
| `boundary_direct_releases` | 直接排放 | 记录实测或计算的空气、水和土壤直接排放及每项废物流；不得用燃料投入代替直接烟气排放，也不得用废水体积代替其实测污染物清单。 | `eu-pef-2021-2279` |
| `boundary_no_hidden_cutoff` | 完整性 | 不得仅因数量小而省略已知材料、能源、废物或排放；任何研究特定截断都必须在本 PCR 外定量、论证并披露。 | `eu-pef-2021-2279` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收的未加工植物材料、部分加工香辛料或外购配方配料，并声明供应商、产地、植物身份、物理形态、质量及水分或固形物基准 |
| starting_condition_role | 前景加工门口投入；种植和先前加工保留为上游产品系统 |
| product_classification_scope | 仅完整 CPC 3.0 子类 23929；明确排除 CPC 01961 和 CPC 01962 |
| recursive_input_rule | 已归入 CPC 23929 的外购投入仍作为显式产品投入，连接其自身上游数据集并声明形态；不得在同一前景过程中递归应用本 PCR 重新创建 |
| upstream_dataset_requirement | 将每项外购材料、配料、包装组件、公共工程、燃料、清洁剂、制冷剂和处理服务连接到地理与技术上具有代表性的上游数据集 |
| disclosure | 声明所有纳入和省略的路线步骤、原料状态、配方、干燥技术和热源、微生物降低路线、分配选择、包装形式、储存条件、数据年份、地理范围和未解决身份 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receiving_cleaning` | 接收、检验、分选与清理 | required | 始终纳入；湿式洗涤、浸泡、切制和检测器步骤是路线特定的子操作 | 前景制备 | kg 接收的清洁物料 |
| `drying_conditioning` | 干燥与水分调节 | conditional | 去除或增加水分时纳入，包括洗涤后的再干燥 | 前景加工 | kg 干燥或调节后的物料 |
| `size_reduction` | 切制、研磨与筛分 | conditional | 市场形态为切制、破碎、研磨或粉末时纳入 | 前景加工 | kg 粒度减小后的物料 |
| `blending_paste` | 混合与咖喱酱制备 | conditional | 咖喱粉、香辛料混合物和咖喱酱纳入 | 前景配方 | kg 配制中间产品 |
| `paste_cooking_cooling` | 咖喱酱烹煮、巴氏处理与冷却 | conditional | 仅在声明的咖喱酱路线实际采用加热和冷却时纳入 | 前景热处理 | kg 热处理咖喱酱 |
| `microbial_reduction` | 微生物降低处理 | conditional | 采用蒸汽、辐照、熏蒸或其他经验证处理时纳入 | 前景处理 | kg 处理后物料 |
| `packaging` | 灌装、封口、贴标与二次包装 | required | 声明的可销售产品始终纳入 | 前景包装 | kg 净包装产品 |
| `storage` | 场内受控储存 | conditional | 设施门口前发生能源、制冷或材料损失时纳入 | 前景储存 | kg 放行产品及储存日 |
| `sanitation` | 设备与房间卫生清洁 | required | 预期采用干式清洁；湿式清洁和消毒为条件步骤，重启前必须完全干燥 | 前景支持 | 按加工质量分配的批次级卫生清洁负荷 |

### 过程：接收、检验、分选与清理 (`receiving_cleaning`)

#### 输入

##### 产品流

###### 藏红花柱头（`raw_saffron`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 藏红花柱头
- 流属性/单位： Mass / kg
- 数量规则： 记录进入对应产品路线的供应商批次接收质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 接收的清洁物料
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

###### 姜黄根茎（`raw_turmeric`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 姜黄根茎
- 流属性/单位： Mass / kg
- 数量规则： 记录进入对应产品路线的供应商批次接收质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 接收的清洁物料
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

###### 莳萝草（`raw_dill_herb`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 莳萝草
- 流属性/单位： Mass / kg
- 数量规则： 记录进入对应产品路线的供应商批次接收质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 接收的清洁物料
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

###### 莳萝籽（`raw_dill_seed`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 莳萝籽
- 流属性/单位： Mass / kg
- 数量规则： 记录进入对应产品路线的供应商批次接收质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 接收的清洁物料
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

###### 百里香草（`raw_thyme`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 百里香草
- 流属性/单位： Mass / kg
- 数量规则： 记录进入对应产品路线的供应商批次接收质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 接收的清洁物料
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

###### 月桂叶（`raw_bay_leaves`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 月桂叶
- 流属性/单位： Mass / kg
- 数量规则： 记录进入对应产品路线的供应商批次接收质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 接收的清洁物料
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

###### 几内亚胡椒籽（`raw_guinea_pepper`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： Xylopia aethiopica 籽（几内亚胡椒籽）
- 流属性/单位： Mass / kg
- 数量规则： 记录进入对应产品路线的供应商批次接收质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 接收的清洁物料
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

###### 当归茎（`raw_angelica_stems`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 当归茎
- 流属性/单位： Mass / kg
- 数量规则： 记录进入对应产品路线的供应商批次接收质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 接收的清洁物料
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

###### 啤酒花球果（`raw_hop_cones`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 啤酒花球果
- 流属性/单位： Mass / kg
- 数量规则： 记录进入对应产品路线的供应商批次接收质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 接收的清洁物料
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

###### 清理用电（`receiving_electricity`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 中压电力
- 流属性/单位： Energy / kWh
- 数量规则： 对输送机、风选机、筛网、磁选器、检测器、洗涤机和切割机进行分表计量的用电量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 接收的清洁物料
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy_records`

###### 洗涤用水（`receiving_water`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 饮用水
- 流属性/单位： Volume / m3
- 数量规则： 仅在实施洗涤或浸泡时记录计量的补充水。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 路线特定（`route_specific`）
- 归一化基准： 每 kg 洗涤物料
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_water_records`

#### 输出

##### 产品流

###### 清洁后的香辛料中间产品（`cleaned_spice_intermediate`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 香料 `4425d417-e7f4-4569-9985-3468985b4a1f`
- 流属性/单位： Mass / kg
- 数量规则： 记录分选和清理后接收输出的称量质量，并记录产品身份和水分。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 过程输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

##### 废物流

###### 去除的矿物质异物（`cleaning_stones_waste`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 废石块和矿物质异物
- 流属性/单位： Mass / kg
- 数量规则： 记录从批次中去除的石块、土壤和矿物组分称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 接收的清洁物料
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 去除的植物残屑（`cleaning_plant_debris`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 废植物残屑
- 流属性/单位： Mass / kg
- 数量规则： 记录去除的糠壳、茎段、叶片和其他植物物质称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 接收的清洁物料
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 拒收的香辛料材料（`cleaning_rejects`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 废香辛料材料
- 流属性/单位： Mass / kg
- 数量规则： 记录因霉变、虫害、污染或不合格而退出食品用途的材料称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 接收的清洁物料
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 洗涤废水（`receiving_wastewater`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 食品洗涤废水
- 流属性/单位： Volume / m3
- 数量规则： 记录送往场内或场外处理的计量或水量平衡废水。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 路线特定（`route_specific`）
- 归一化基准： 每 kg 洗涤物料
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_water_records`

##### 基本流

###### 清理粉尘排放至空气（`cleaning_dust_air`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 未特定颗粒物，排放至空气
- 流属性/单位： Mass / kg
- 数量规则： 采用烟囱或工作场所排气实测，或依据已捕集和未捕集粉尘记录计算。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 接收的清洁物料
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

### 过程：干燥与水分调节 (`drying_conditioning`)

#### 输入

##### 产品流

###### 清洁香辛料进料（`drying_spice_feed`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 香料 `4425d417-e7f4-4569-9985-3468985b4a1f`
- 流属性/单位： Mass / kg
- 数量规则： 记录进入干燥的清洁物料称量质量及实测水分。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 干燥输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

###### 干燥机用电（`drying_electricity`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 中压电力
- 流属性/单位： Energy / kWh
- 数量规则： 对风机、输送机、热泵、控制及辅助设备进行分表计量的用电量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 干燥输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy_records`

###### 干燥用天然气（`drying_natural_gas`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 天然气
- 流属性/单位： Energy / MJ
- 数量规则： 记录直接或间接干燥供热的天然气计量量；仅在证明确实不存在时记零。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 干燥输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_fuel_records`

###### 干燥用液化石油气（`drying_lpg`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 液化石油气
- 流属性/单位： Mass / kg
- 数量规则： 记录干燥机消耗的液化石油气称量或发票量；仅在证明确实不存在时记零。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 干燥输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_fuel_records`

###### 干燥用柴油（`drying_diesel`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 柴油
- 流属性/单位： Mass / kg
- 数量规则： 记录干燥机消耗的柴油罐存或采购量；仅在证明确实不存在时记零。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 干燥输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_fuel_records`

#### 输出

##### 产品流

###### 干燥香辛料中间产品（`dried_spice_intermediate`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 香料 `4425d417-e7f4-4569-9985-3468985b4a1f`
- 流属性/单位： Mass / kg
- 数量规则： 记录达到实测最终水分的输出称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 过程输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

##### 废物流

###### 干燥机细料（`drying_fines_waste`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 废香辛料细料
- 流属性/单位： Mass / kg
- 数量规则： 记录从托盘、旋风器和过滤器收集并送往声明去向的细料称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 干燥输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

##### 基本流

###### 干燥机燃烧产生的化石二氧化碳（`drying_co2_air`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 化石二氧化碳，排放至空气
- 流属性/单位： Mass / kg
- 数量规则： 使用已声明燃烧因子，按每种已记录燃料分别计算。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 干燥输出
- 基准类型： 燃料清单（`fuel_inventory`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_fuel_records`

###### 干燥机燃烧产生的甲烷（`drying_ch4_air`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 化石甲烷，排放至空气
- 流属性/单位： Mass / kg
- 数量规则： 按每种已记录燃料及已声明燃烧因子计算，或采用烟囱实测。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 干燥输出
- 基准类型： 燃料清单（`fuel_inventory`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_fuel_records`

###### 干燥机燃烧产生的一氧化碳（`drying_co_air`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 一氧化碳，排放至空气
- 流属性/单位： Mass / kg
- 数量规则： 采用烟囱实测，或按每种已记录燃料及已声明燃烧因子计算。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 干燥输出
- 基准类型： 燃料清单（`fuel_inventory`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

###### 干燥机燃烧产生的氧化亚氮（`drying_n2o_air`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 氧化亚氮，排放至空气
- 流属性/单位： Mass / kg
- 数量规则： 按每种已记录燃料及已声明燃烧因子计算，或采用烟囱实测。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 干燥输出
- 基准类型： 燃料清单（`fuel_inventory`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_fuel_records`

###### 干燥机燃烧产生的氮氧化物（`drying_nox_air`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 氮氧化物，排放至空气
- 流属性/单位： Mass / kg
- 数量规则： 采用烟囱实测，或按每种已记录燃料及已声明因子计算。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 干燥输出
- 基准类型： 燃料清单（`fuel_inventory`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

###### 干燥机燃烧产生的二氧化硫（`drying_so2_air`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 二氧化硫，排放至空气
- 流属性/单位： Mass / kg
- 数量规则： 采用烟囱实测，或按每种已记录燃料的含硫量计算。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 干燥输出
- 基准类型： 燃料清单（`fuel_inventory`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

###### 干燥机颗粒物排放至空气（`drying_pm_air`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 未特定颗粒物，排放至空气
- 流属性/单位： Mass / kg
- 数量规则： 采用烟囱实测，或依据粉尘控制捕集记录计算。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 干燥输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

###### 干燥产生的挥发性有机物（`drying_voc_air`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 挥发性有机物，排放至空气
- 流属性/单位： Mass / kg
- 数量规则： 当燃烧或产品挥发产生直接排放时，采用烟囱实测或路线特定计算。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 干燥输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

### 过程：切制、研磨与筛分 (`size_reduction`)

#### 输入

##### 产品流

###### 粒度减小用干燥香辛料进料（`milling_spice_feed`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 香料 `4425d417-e7f4-4569-9985-3468985b4a1f`
- 流属性/单位： Mass / kg
- 数量规则： 记录进入切割机或粉碎机的物料称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 粒度减小输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

###### 粉碎机用电（`milling_electricity`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 中压电力
- 流属性/单位： Energy / kWh
- 数量规则： 对切割、粉碎、筛分、抽排和输送设备进行分表计量的用电量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 粒度减小输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy_records`

#### 输出

##### 产品流

###### 粒度减小后的香辛料中间产品（`milled_spice_intermediate`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 香料 `4425d417-e7f4-4569-9985-3468985b4a1f`
- 流属性/单位： Mass / kg
- 数量规则： 记录符合声明粒度规格的切制、破碎、研磨或粉末输出称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 过程输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

##### 废物流

###### 不合格研磨香辛料（`milling_offspec_waste`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 废研磨香辛料
- 流属性/单位： Mass / kg
- 数量规则： 记录未返工并送往声明去向的材料称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 粒度减小输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

##### 基本流

###### 研磨粉尘排放至空气（`milling_dust_air`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 未特定颗粒物，排放至空气
- 流属性/单位： Mass / kg
- 数量规则： 实测或平衡已捕集与未捕集的研磨粉尘。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 粒度减小输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

### 过程：混合与咖喱酱制备 (`blending_paste`)

#### 输入

##### 产品流

###### 姜黄粉配料（`blend_turmeric_powder`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 姜黄粉
- 流属性/单位： Mass / kg
- 数量规则： 存在时记录配方投入的称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 配制输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_recipe_records`

###### 孜然粉配料（`blend_cumin_powder`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 孜然粉
- 流属性/单位： Mass / kg
- 数量规则： 存在时记录配方投入的称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 配制输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_recipe_records`

###### 芫荽粉配料（`blend_coriander_powder`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 芫荽粉
- 流属性/单位： Mass / kg
- 数量规则： 存在时记录配方投入的称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 配制输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_recipe_records`

###### 辣椒粉配料（`blend_chilli_powder`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 辣椒粉
- 流属性/单位： Mass / kg
- 数量规则： 存在时记录配方投入的称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 配制输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_recipe_records`

###### 葫芦巴粉配料（`blend_fenugreek_powder`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 葫芦巴粉
- 流属性/单位： Mass / kg
- 数量规则： 存在时记录配方投入的称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 配制输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_recipe_records`

###### 氯化钠配料（`blend_salt`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 氯化钠
- 流属性/单位： Mass / kg
- 数量规则： 声明配方中存在时记录盐的称量投入。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 配制输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_recipe_records`

###### 菜籽油配料（`paste_rapeseed_oil`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 菜籽油
- 流属性/单位： Mass / kg
- 数量规则： 咖喱酱中存在时记录油的称量投入。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 咖喱酱
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_recipe_records`

###### 咖喱酱配方用水（`paste_water`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 饮用水
- 流属性/单位： Mass / kg
- 数量规则： 记录掺入咖喱酱的计量或称量水。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 咖喱酱
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_recipe_records`

###### 乙酸配料（`paste_acetic_acid`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 乙酸
- 流属性/单位： Mass / kg
- 数量规则： 声明咖喱酱配方中存在时记录乙酸的称量投入。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 咖喱酱
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_recipe_records`

###### 混合机用电（`blending_electricity`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 中压电力
- 流属性/单位： Energy / kWh
- 数量规则： 对粉碎机、混合机、搅拌机、泵和均质机进行分表计量的用电量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 配制输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy_records`

#### 输出

##### 产品流

###### 咖喱粉或咖喱酱中间产品（`blended_product_intermediate`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 香料 `4425d417-e7f4-4569-9985-3468985b4a1f`
- 流属性/单位： Mass / kg
- 数量规则： 记录配制输出的称量质量；具体数据包中的每种实际配料都必须有独立原子投入行。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 过程输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_recipe_records`

##### 废物流

###### 不合格混合物或酱料（`blending_offspec_waste`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 废咖喱混合物
- 流属性/单位： Mass / kg
- 数量规则： 记录未返工并送往声明去向的配制产品称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 配制输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

##### 基本流

### 过程：咖喱酱烹煮、巴氏处理与冷却 (`paste_cooking_cooling`)

#### 输入

##### 产品流

###### 配制咖喱酱进料（`paste_heat_feed`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 咖喱酱
- 流属性/单位： Mass / kg
- 数量规则： 记录进入已声明烹煮或巴氏处理步骤的配制酱料称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 热处理咖喱酱
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_recipe_records`

###### 咖喱酱热处理用电（`paste_heat_electricity`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 中压电力
- 流属性/单位： Energy / kWh
- 数量规则： 对烹煮、巴氏处理、泵送、真空和冷却进行分表计量的用电量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 热处理咖喱酱
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy_records`

###### 咖喱酱热处理蒸汽（`paste_heat_steam`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 饱和蒸汽
- 流属性/单位： Energy / MJ
- 数量规则： 使用时记录供给烹煮或巴氏处理的计量蒸汽。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 热处理咖喱酱
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy_records`

###### 咖喱酱冷却水（`paste_cooling_water`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 冷却水
- 流属性/单位： Volume / m3
- 数量规则： 使用时记录供给酱料冷却系统的计量补充水。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 冷却咖喱酱
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_water_records`

#### 输出

##### 产品流

###### 热处理咖喱酱（`heat_treated_curry_paste`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 香料 `4425d417-e7f4-4569-9985-3468985b4a1f`
- 流属性/单位： Mass / kg
- 数量规则： 记录达到声明时间/温度及冷却控制后放行酱料的称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 过程输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_treatment_records`

##### 废物流

###### 咖喱酱热处理冷凝水（`paste_heat_condensate`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 食品热处理废水
- 流属性/单位： Volume / m3
- 数量规则： 记录送往声明去向的计量或蒸汽/水量平衡冷凝水及排污水。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 热处理咖喱酱
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_water_records`

##### 基本流

### 过程：微生物降低处理 (`microbial_reduction`)

#### 输入

##### 产品流

###### 微生物降低处理的香辛料进料（`treatment_spice_feed`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 香料 `4425d417-e7f4-4569-9985-3468985b4a1f`
- 流属性/单位： Mass / kg
- 数量规则： 记录进入经验证处理的物料称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 处理输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_treatment_records`

###### 处理用电（`treatment_electricity`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 中压电力
- 流属性/单位： Energy / kWh
- 数量规则： 记录处理及辅助设备分表计量的用电量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 处理输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy_records`

###### 饱和蒸汽（`treatment_steam`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 饱和蒸汽
- 流属性/单位： Energy / MJ
- 数量规则： 记录输送至产品处理系统的外购或场内蒸汽计量量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg steam-处理输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy_records`

###### 电离辐照处理服务（`treatment_irradiation_service`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 食品辐照服务
- 流属性/单位： Mass treated / kg
- 数量规则： 记录服务提供方的处理质量及声明吸收剂量规格。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 路线特定（`route_specific`）
- 归一化基准： 每 kg 辐照处理输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_treatment_records`

###### 环氧乙烷处理气体（`treatment_ethylene_oxide`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 环氧乙烷
- 流属性/单位： Mass / kg
- 数量规则： 仅在法律允许且实际使用时记录处理剂计量消耗量；否则不适用。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 路线特定（`route_specific`）
- 归一化基准： 每 kg gas-处理输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_treatment_records`

#### 输出

##### 产品流

###### 处理后的香辛料中间产品（`treated_spice_intermediate`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 香料 `4425d417-e7f4-4569-9985-3468985b4a1f`
- 流属性/单位： Mass / kg
- 数量规则： 记录经验证处理和核验试验后放行输出的称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 过程输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_treatment_records`

##### 废物流

###### 蒸汽处理冷凝水（`treatment_condensate`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 蒸汽处理废水
- 流属性/单位： Volume / m3
- 数量规则： 记录送往声明去向的计量或蒸汽平衡冷凝水。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg steam-处理输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_water_records`

##### 基本流

###### 环氧乙烷排放至空气（`treatment_ethylene_oxide_air`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 环氧乙烷, emitted to air
- 流属性/单位： Mass / kg
- 数量规则： 采用气体处理路线实测排放或处理剂质量平衡。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg gas-处理输出
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

### 过程：灌装、封口、贴标与二次包装 (`packaging`)

#### 输入

##### 产品流

###### 包装产品进料（`packaging_product_feed`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 香料 `4425d417-e7f4-4569-9985-3468985b4a1f`
- 流属性/单位： Mass / kg
- 数量规则： 记录进入灌装机的未包装产品称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 净包装产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_material_mass_balance`

###### 包装用电（`packaging_electricity`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 中压电力
- 流属性/单位： Energy / kWh
- 数量规则： 记录灌装、封口、贴标和装箱分表计量的用电量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 净包装产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_energy_records`

###### 低密度聚乙烯薄膜（`packaging_ldpe`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 低密度聚乙烯薄膜
- 流属性/单位： Mass / kg
- 数量规则： 使用时按包装物料清单和核实的包装称重记录组件质量。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 净包装产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_packaging_bom`

###### 聚丙烯编织袋（`packaging_pp_sack`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 聚丙烯编织袋
- 流属性/单位： Mass / kg
- 数量规则： 使用时按包装物料清单和核实的袋重记录组件质量。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 净包装产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_packaging_bom`

###### 瓦楞纸板箱（`packaging_corrugated_box`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 瓦楞纸板箱
- 流属性/单位： Mass / kg
- 数量规则： 使用时按包装物料清单和核实的箱重记录组件质量。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 净包装产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_packaging_bom`

###### 玻璃罐（`packaging_glass_jar`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 玻璃包装罐
- 流属性/单位： Mass / kg
- 数量规则： 使用时按包装物料清单和核实的罐重记录组件质量。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 净包装产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_packaging_bom`

###### 钢制封盖（`packaging_steel_closure`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 钢制包装封盖
- 流属性/单位： Mass / kg
- 数量规则： 使用时按包装物料清单和核实的封盖质量记录组件质量。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 净包装产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_packaging_bom`

###### 纸标签（`packaging_paper_label`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 纸标签
- 流属性/单位： Mass / kg
- 数量规则： 使用时按包装物料清单和核实的标签质量记录组件质量。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 净包装产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_packaging_bom`

###### 铝箔（`packaging_aluminium_foil`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 铝包装箔
- 流属性/单位： Mass / kg
- 数量规则： 使用时按包装物料清单和核实的箔材质量记录组件质量。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 净包装产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_packaging_bom`

###### 气调包装用氮气（`packaging_nitrogen`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 氮气
- 流属性/单位： Mass / kg
- 数量规则： 采用计量或气瓶平衡记录气密包装使用的氮气。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 路线特定（`route_specific`）
- 归一化基准： 每 kg 净包装产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_packaging_bom`

#### 输出

##### 产品流

###### 可销售的加工香辛料产品（`spice_reference_product`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 香料 `4425d417-e7f4-4569-9985-3468985b4a1f`
- 流属性/单位： Mass / kg
- 数量规则： 在声明水分或固形物基准下恰为 1 kg 可销售产品净质量，不含包装皮重。
- 数值来源模式： 固定值（`fixed_value`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 1 kg 参考产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 身份引用（`identity_reference`）

##### 废物流

###### 低密度聚乙烯包装废料（`packaging_ldpe_scrap`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 废低密度聚乙烯薄膜
- 流属性/单位： Mass / kg
- 数量规则： 记录送往声明去向的 LDPE 边角料和拒收薄膜称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 净包装产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 聚丙烯包装废料（`packaging_pp_scrap`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 废聚丙烯袋材料
- 流属性/单位： Mass / kg
- 数量规则： 记录送往声明去向的拒收聚丙烯材料称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 净包装产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 瓦楞纸板废料（`packaging_paperboard_scrap`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 废瓦楞纸板
- 流属性/单位： Mass / kg
- 数量规则： 记录送往声明去向的箱材废料和拒收箱称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 净包装产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 玻璃包装废料（`packaging_glass_scrap`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 废包装玻璃
- 流属性/单位： Mass / kg
- 数量规则： 记录送往声明去向的破损或拒收玻璃罐称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 净包装产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 钢制封盖废料（`packaging_steel_scrap`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 废钢制包装
- 流属性/单位： Mass / kg
- 数量规则： 记录送往声明去向的拒收封盖称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 净包装产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 纸标签废料（`packaging_label_scrap`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 废纸标签
- 流属性/单位： Mass / kg
- 数量规则： 记录送往声明去向的拒收标签和底纸称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 净包装产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 铝箔废料（`packaging_aluminium_scrap`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 废铝包装箔
- 流属性/单位： Mass / kg
- 数量规则： 记录送往声明去向的箔材边角料和拒收箔称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 净包装产品
- 基准类型： 参考流（`reference_flow`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

##### 基本流

### 过程：场内受控储存 (`storage`)

#### 输入

##### 产品流

###### 进入储存的已包装香辛料（`storage_product_feed`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 香料 `4425d417-e7f4-4569-9985-3468985b4a1f`
- 流属性/单位： Mass / kg
- 数量规则： 记录进入声明储存期的已包装产品称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 每 kg 储存放行产品
- 基准类型： 储存时长（`storage_duration`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_storage_records`

###### 储存用电（`storage_electricity`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 中压电力
- 流属性/单位： Energy / kWh
- 数量规则： 记录声明储存期内照明、通风、除湿和制冷分表计量的用电量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 产品及声明的储存日
- 基准类型： 储存时长（`storage_duration`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_storage_records`

###### R-134a 制冷剂补充量（`storage_r134a_input`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 1,1,1,2-四氟乙烷
- 流属性/单位： Mass / kg
- 数量规则： 冷藏系统含 R-134a 时，按维护记录分配其补充量。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 冷藏产品及声明的储存日
- 基准类型： 储存时长（`storage_duration`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant_records`

###### R-404A 制冷剂补充量（`storage_r404a_input`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： R-404A 制冷剂
- 流属性/单位： Mass / kg
- 数量规则： 冷藏系统含 R-404A 时，按维护记录分配其补充量。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 冷藏产品及声明的储存日
- 基准类型： 储存时长（`storage_duration`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant_records`

#### 输出

##### 产品流

###### 储存后的可销售产品（`stored_spice_product`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 香料 `4425d417-e7f4-4569-9985-3468985b4a1f`
- 流属性/单位： Mass / kg
- 数量规则： 记录声明储存期后在设施门口放行产品的称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 产品特定（`product_specific`）
- 归一化基准： 过程输出
- 基准类型： 储存时长（`storage_duration`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_storage_records`

##### 废物流

###### 储存中损坏的香辛料产品（`storage_damaged_product`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 废包装香辛料
- 流属性/单位： Mass / kg
- 数量规则： 记录因受潮、虫害、过期或包装失效而废弃产品的称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 储存放行产品
- 基准类型： 储存时长（`storage_duration`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

##### 基本流

###### R-134a 排放至空气（`storage_r134a_air`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 1,1,1,2-四氟乙烷, emitted to air
- 流属性/单位： Mass / kg
- 数量规则： 对含 R-134a 的设备进行制冷剂质量平衡。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 冷藏产品及声明的储存日
- 基准类型： 储存时长（`storage_duration`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant_records`

###### R-404A 排放至空气（`storage_r404a_air`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： R-404A 制冷剂, emitted to air
- 流属性/单位： Mass / kg
- 数量规则： 对含 R-404A 的设备进行制冷剂质量平衡。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 技术特定（`technology_specific`）
- 归一化基准： 每 kg 冷藏产品及声明的储存日
- 基准类型： 储存时长（`storage_duration`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_refrigerant_records`

### 过程：设备与房间卫生清洁 (`sanitation`)

#### 输入

##### 产品流

###### 卫生清洁用电（`sanitation_electricity`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 中压电力
- 流属性/单位： Energy / kWh
- 数量规则： 记录分配至批次的吸尘、洗涤、干燥和卫生设备分表计量用电。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 加工产品
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_sanitation_records`

###### 湿式清洁用水（`sanitation_water`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 饮用水
- 流属性/单位： Volume / m3
- 数量规则： 仅在必须湿式清洁时记录计量用水；干制品区域优先干式清洁。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 加工产品
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_sanitation_records`

###### 氢氧化钠清洁剂（`sanitation_sodium_hydroxide`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 氢氧化钠
- 流属性/单位： Mass / kg
- 数量规则： 适用时按采购或投加记录记录湿式清洁用氢氧化钠。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 加工产品
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_sanitation_records`

###### 乙醇消毒剂（`sanitation_ethanol`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 乙醇
- 流属性/单位： Mass / kg
- 数量规则： 适用时按采购或投加记录记录醇基局部消毒剂。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 加工产品
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_sanitation_records`

###### 纸质清洁擦拭物（`sanitation_paper_wipes`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 纸质清洁擦拭物
- 流属性/单位： Mass / kg
- 数量规则： 记录批次消耗擦拭物的称量或采购量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 加工产品
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_sanitation_records`

#### 输出

##### 产品流

##### 废物流

###### 干式清洁香辛料残渣（`sanitation_dry_residue`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 废香辛料粉尘
- 流属性/单位： Mass / kg
- 数量规则： 记录吸尘或清扫后送往声明去向的残渣称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 加工产品
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

###### 卫生清洁废水（`sanitation_wastewater`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 设备清洁废水
- 流属性/单位： Volume / m3
- 数量规则： 记录送往声明处理去向的计量或水量平衡废水。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 加工产品
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_sanitation_records`

###### 使用后的纸质清洁擦拭物（`sanitation_used_wipes`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 废纸质清洁擦拭物
- 流属性/单位： Mass / kg
- 数量规则： 记录送往声明去向的使用后擦拭物称量质量。
- 数值来源模式： 前景记录（`foreground_record`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 加工产品
- 基准类型： 过程输出（`process_output`）
- 证据类型： 采集记录（`collected_record`）
- 采集协议： `cp_waste_records`

##### 基本流

###### 乙醇排放至空气（`sanitation_ethanol_air`）

该原子交换按所声明路线单独记录；其数量按下述规则获得。

- 选定流： 乙醇, emitted to air
- 流属性/单位： Mass / kg
- 数量规则： 对醇基卫生清洁进行溶剂质量平衡，扣除回收或进入废水的部分。
- 数值来源模式： 计算值（`calculated_value`）
- 适用范围： 场址特定（`site_specific`）
- 归一化基准： 每 kg 加工产品
- 基准类型： 过程输出（`process_output`）
- 证据类型： 由采集记录计算（`calculated_from_collection`）
- 采集协议： `cp_emission_records`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 可分离的产品、路线和批次 | 首先细分过程并使用产品、路线、批次和仪表特定记录，从而避免分配。 | `eu-pef-2021-2279` |
| `allocation_rework` | 返回同一产品路线的返工料 | 按质量平衡将返工料返回同一路线，不得同时计作废物输出和原生投入。 | `eu-pef-2021-2279` |
| `allocation_recovered_material` | 在产品系统外销售或利用的残余物 | 仅在有文件化用途和市场时将残余物视为共产品；披露决定，有可证明物理因果关系时按其分配，否则采用质量分配并对经济分配作敏感性分析。 | `eu-pef-2021-2279` |
| `allocation_shared_support` | 共享卫生清洁、储存和公共工程 | 按设备时间、储存日、计量能源、水或清洁面积等实测因果驱动分配共享负荷；仅在无更佳驱动时使用加工质量，并披露选择。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `receiving_cleaning`; `drying_conditioning`; `size_reduction`; `packaging` | 材料投入、中间产品和可销售输出 | 地磅、秤、水分和批次记录 | lot_id; product_identity; gross_mass; tare_mass; net_mass; moisture_or_solids; timestamp | 经校准的秤及代表性水分试验 | kg; % wet basis or % solids | 每个批次及过程交接 | 有代表性的 12 个月或声明生产期 | 所有纳入的生产线和场址 | 按产品路线汇总净质量，并平衡投入、输出、水分变化和库存 | 校准证书；批次表；水分实验室记录 |
| `cp_recipe_records` | `blending_paste` | 每种配方配料和配制输出 | 批准配方和批次投料记录 | batch_id; ingredient_identity; supplier_lot; target_mass; actual_mass; output_mass; rework_mass | 经校准投料和批次平衡 | kg | 每个批次 | 有代表性的 12 个月或声明生产期 | 所有纳入的混合机和场址 | 按配方汇总实际配料质量和输出；任何配料不得保留在集合标签下 | 批准配方；秤校准；签署的批次记录 |
| `cp_energy_records` | 所有适用过程 | 电力和蒸汽 | 仪表、发票和运行日志 | meter_id; opening; closing; unit; process; lot; runtime; steam_mass_or_energy | 优先分表；否则采用文件化因果分配 | kWh; MJ; kg steam | continuous or 每个批次 | 有代表性的 12 个月或声明生产期 | 所有纳入的设备和场址 | 扣除非生产用途并按实测驱动分配 | 仪表校准；发票；运行日志 |
| `cp_fuel_records` | `drying_conditioning` | 每种燃料 | 储罐、质量、体积、发票和热值记录 | fuel_identity; quantity; unit; LHV_or_HHV; stock_change; process; lot | meter or stock balance for 每种燃料 separately | kg; m3; MJ | 每次交付及报告期 | 有代表性的 12 个月或声明生产期 | 所有纳入的燃烧设备 | 期初库存 + 采购 - 期末库存，归一化至干燥输出 | 发票；储罐校准；燃料规格 |
| `cp_water_records` | `receiving_cleaning`; `microbial_reduction` | 过程水和废水 | 仪表和水量平衡 | meter_id; input_volume; condensate; recirculation; wastewater_volume; lot | 分表或文件化平衡 | m3 | 每个批次 or daily | 有代表性的 12 个月或声明生产期 | 所有纳入的湿式操作 | 净补充量和排放量归一化至路线输出 | 仪表校准；排放日志；平衡检查 |
| `cp_packaging_bom` | `packaging` | 每个包装组件 | 物料清单和组件称量 | component_id; material; unit_mass; units_used; rejects; product_net_mass | 以代表性称量核验供应商规格 | kg | 每个包装规格及变更 | 当前包装规格 | 每种声明的包装形式 | 组件单位质量 x 消耗件数，并与废料平衡 | 供应商规格；称量记录；批准的包装 BOM |
| `cp_waste_records` | 所有适用过程 | 每项废物流 | 容器称量和转移记录 | waste_identity; mass_or_volume; source_process; destination; treatment; lot; date | 称量每项分流废物或使用经核实容器质量 | kg; m3 | 每次清运 | 有代表性的 12 个月或声明生产期 | 所有纳入的过程和场址 | 按原子废物身份和去向汇总；扣除有记录的返工 | 废物联单；运输方和处理记录 |
| `cp_emission_records` | `receiving_cleaning`; `drying_conditioning`; `size_reduction`; `microbial_reduction`; `sanitation` | 每项直接空气或水排放 | 实测或活动量-因子计算 | pollutant_identity; measurement; fuel_or_agent_activity; factor; control_efficiency; method; period | 优先烟气/废水实测；否则采用已声明因子计算 | kg | 按许可证、生产期或报告期 | 有代表性的 12 个月或声明生产期 | 每个直接排放点 | 分别计算每种污染物并归一化至路线输出 | 实验室报告；因子来源；控制日志；计算表 |
| `cp_treatment_records` | `microbial_reduction` | 处理投入和处理输出 | 处理批次和服务方记录 | treatment_type; input_mass; output_mass; electricity; steam; agent; absorbed_dose_or_process_parameter; validation_result | 经验证的处理记录和放行试验 | kg; kWh; MJ; 路线特定参数 | 每个处理批次 | 有代表性的 12 个月或声明生产期 | 所有场内及外包处理 | 仅在身份和参数匹配后按处理路线汇总 | 验证研究；服务方证书；放行结果 |
| `cp_storage_records` | `storage` | 储存能源、时间、吞吐量和损失 | 库存、仪表和环境日志 | product_mass_in; product_mass_out; storage_days; temperature; humidity; electricity; loss_reason | 连接储存分区仪表的库存台账 | kg; day; kWh | 每日或每次批次移动 | 有代表性的 12 个月或声明生产期 | 每个纳入的仓库或冷库 | 按质量-储存日加权能源并保留损失原因 | 仪表记录；库存台账；温湿度日志 |
| `cp_refrigerant_records` | `storage` | 每种制冷剂投入和排放 | 维护和设备记录 | equipment_id; refrigerant_identity; initial_charge; make_up; recovery; final_charge; service_date | 按化学身份进行制冷剂质量平衡 | kg | 每次维护及每年 | 有代表性的 12 个月 | 每台纳入的制冷设备 | 初始 + 补充 - 回收 - 最终；按冷藏储存日分配 | 维护发票；技术员日志；充注铭牌 |
| `cp_sanitation_records` | `sanitation` | 清洁用电、水、化学品和擦拭物投入 | 卫生日志、仪表和投加记录 | area_or_equipment; method; electricity; water; chemical_identity; dose; wipe_mass; drying_completion; lot | 分别记录每次清洁事件和每种化学品 | kWh; m3; kg | 每次清洁事件 | 有代表性的 12 个月或声明生产期 | 所有产品接触和加工区域 | 按文件化因果驱动分配并核验干燥后重启 | 卫生计划；投加记录；检查放行 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化数量 = 路线归属数量 / 声明水分或固形物基准下的可销售产品净质量 | 路线归属数量；可销售产品净质量 | 每 1 kg 参考产品的数量 | `eu-pef-2021-2279` |
| `calc_drying_mass_balance` | 干燥物料平衡 | 使用实测水分平衡湿料投入、干料输出、去除水、细料和库存变化；调查任何无法解释的残差 | 投入/输出质量和水分；细料；库存变化 | 经平衡的干物质和水量 | `fao-who-cxc-42-1995` |
| `calc_recipe_balance` | 咖喱粉和咖喱酱 | 汇总每种单独识别的配料及返工料，并与配制输出、废物和库存变化核对 | 配料质量；返工；输出；废物；库存变化 | 配方质量平衡残差 | `eu-pef-2021-2279` |
| `calc_packaging_mass` | 每个包装组件 | 包装质量 = 经核实的组件单位质量 x 消耗件数 / 产品净质量 | 组件单位质量；消耗件数；产品净质量 | kg 组件/kg 净产品 | `eu-pef-2021-2279` |
| `calc_refrigerant_release` | 每种制冷剂 | 排放 = 初始充注 + 补充 - 回收量 - 最终充注，不得合并不同化学品 | 按制冷剂区分的充注和维护记录 | kg 制冷剂排放 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 产品和配料 | 植物种或完整配方、形态、处理状态及 CPC 23929 资格均可按批次追溯；CPC 01961 和 01962 项不得采用本 PCR。 | 供应商规格；批准配方；来料与放行记录 |
| `dq_temporal` | 前景记录 | 除非有理由采用较短生产期，否则使用有代表性的连续 12 个月；披露季节性、停机和异常批次。 | 带日期的仪表、批次、发票和生产记录 |
| `dq_technology_geography` | 公共工程和上游链接 | 将电力、热、燃料、配料、包装、处理和废物数据集与实际技术、地理范围和参考年匹配。 | 供应商数据集元数据及文件化代表性审查 |
| `dq_completeness` | 所有过程 | 平衡产品质量，并把每项已知材料、能源、包装、制冷剂、废物、废水和直接排放交换记录为原子行。 | 签署的完整性和质量平衡审查 |
| `dq_measurement` | 仪表和试验 | 保留材料、能源、水和排放数据的校准、采样、检出限、水分方法及不确定性证据。 | 校准证书；实验室方法；QA 记录 |
| `dq_range_gate` | 所有数量范围 | 不接受来自单篇论文、单一案例或单点值的数量范围；本 PCR 当前不保留数量范围，具体数据包必须依赖前景记录和计算。 | 双语 PCR 范围审计及生成投影 |
| `dq_conditional_pollutants` | 直接燃烧/烟熏干燥及废水直接排放 | 这些路线存在时，分别测试或计算适用的 PAH、甲醛、二噁英、重金属、COD/TOC、悬浮固体、氮、磷和氯化物排放；路线不存在时不得推断其存在。 | 路线声明；烟气/废水试验；计算记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | 产品身份 | 确认产品属于完整 CPC 23929 纳入清单，且不是 CPC 01961 活植物/繁殖材料或 CPC 01962 切花/花卉制品。 | `un-cpc-3-0-explanatory-notes` |
| `validate_reference` | 参考流 | 确认恰为 1 kg 可销售产品净质量、Mass 属性、kg 单位，并具备全部必需身份、形态、水分/固形物、处理、包装、地理和年份限定信息。 | `un-cpc-3-0-explanatory-notes` |
| `validate_route` | 过程覆盖 | 确认纳入每个路线适用步骤，并为每个省略的条件过程记录不适用理由。 | `fao-who-cxc-42-1995`; `fao-herb-spice-quality-assurance-1995` |
| `validate_atomic_inventory` | 清单交换 | 拒绝集合或选择器行；电力、蒸汽、每种燃料、每种配料、每种清洁剂、每个包装组件、每种制冷剂、每项废物、废水和每种污染物必须分开。 | `eu-pef-2021-2279` |
| `validate_mass_balance` | 物料和配方平衡 | 平衡接收材料或配料、中间产品、水分变化、返工、可销售输出、废物和库存变化；调查并披露残差。 | `eu-pef-2021-2279` |
| `validate_hygiene` | 产品安全和处理 | 核验安全水分或固形物、污染控制、适用时的处理验证、干燥环境卫生清洁、包装保护及批次追溯。 | `fao-who-cxc-42-1995` |
| `validate_direct_drying_pollutants` | 直接燃烧或烟熏干燥 | 燃烧烟气或烟雾可能接触产品时，要求对 PAH 及其他适用直接干燥污染物进行路线特定监测或计算并披露控制；否则记录路线不适用。 | `fao-who-cxc-68-2009` |
| `validate_mycotoxin_control` | 干制香辛料和芳香料 | 核验快速干燥、产品特定的安全水分或水活度、拒收控制及污染物料处置；不得把干制品水活度规则用于咖喱酱。 | `fao-who-cxc-78-2017` |
| `validate_range_evidence` | 数量范围 | 拒绝任何单一来源、单一案例、复制单点、上下限相等或伪精确范围；本版本必须投影零数量范围。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 归一化至设施门口 1 kg 加工香辛料或芳香料净产品的前景产品加工数据集 |
| downstream_use | 经审查和发布后用作 `secondary_dataset`；`background_dataset` |
| allowed_use | 为声明的 CPC 23929 产品、形态、配方、处理、包装、地理范围和参考期构建 LCA 过程和生命周期模型 |
| excluded_use | 无限定的通用香辛料代理；活植物或繁殖材料；切花或花卉制品；其他香辛料子类；消费者使用；药用或精油功能；未披露配方或处理路线 |
| required_metadata | CPC 23929 身份；植物种或完整配方；产品形态；来料/最终水分或固形物；路线和设备；处理状态；包装 BOM；储存；地理范围；参考年；分配；上游数据集链接 |
| required_quality_disclosure | 一手数据覆盖；仪表和秤校准；采样和水分方法；质量平衡残差；分配驱动；供应商数据代表性；条件过程排除；未解决 UUID；数据缺口和不确定性 |
| update_trigger | 配方、植物来源、水分规格、处理、干燥机或粉碎机技术、燃料、电力供应、包装、制冷剂、储存制度、场址、地理范围或数据期发生实质变化 |

## 11. 数据源

| Source id | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-explanatory-notes` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 23929, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Complete inclusion scope and classification exclusions |
| `fao-who-cxc-42-1995` | standard | Codex Alimentarius, Code of Hygienic Practice for Spices and Dried Aromatic Herbs, CXC 42-1995, revised 2014. https://www.fao.org/input/download/standards/27/CXP_042e_2014.pdf | Broad product definition; cleaning, drying, grinding, microbial reduction, packaging, sanitation, storage, traceability, and process-control rules |
| `fao-herb-spice-quality-assurance-1995` | official_guidance | Fellows, P.; Axtell, B.; Dillon, M., Quality Assurance for Small-scale Rural Food Industries, FAO Agricultural Services Bulletin 117, section 2.4 Herb and Spice Products, 1995. https://www.fao.org/4/V5380E/V5380E09.htm | Receiving checks, moisture measurement, washing conditions, cleaning, drying, grinding, sieving, packaging, storage, dust, and plant-record requirements |
| `fao-who-cxc-78-2017` | standard | Codex Alimentarius, Code of Practice for the Prevention and Reduction of Mycotoxins in Spices, CXC 78-2017. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B78-2017%252FCXC_078e.pdf | Conditional washing, rapid drying, dried-product water-activity control, rejection, and contaminated-material disposal; no numeric amount range used |
| `fao-who-cxc-68-2009` | standard | Codex Alimentarius, Code of Practice for the Reduction of Contamination of Food with Polycyclic Aromatic Hydrocarbons from Smoking and Direct Drying Processes, CXC 68-2009. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B68-2009%252FCXC_068e.pdf | Conditional direct-fired and smoke-drying contamination controls and pollutant review |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, 2021, corrected 2022. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Functional unit, reference flow, company-specific inventory, 完整性, atomic input/output coverage, allocation, calculation, data quality, and validation principles |
| `bolliger-spice-footprint-2026` | literature | Bolliger, C.; Itten, R.; Stucki, M. From Farm to Flavor: Carbon and Biodiversity Footprint of the Global Spice Market. Environmental Science & Technology 60 (2026) 11421-11433. https://doi.org/10.1021/acs.est.5c04846; full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC13104020/ | Peer-reviewed full-text context for 1 kg spice reporting, cultivation/processing/retail separation, drying, grinding, steam treatment, and packaging representation; no quantity range copied |
| `llano-et-al-2022-turmeric-drying` | literature | Llano, S. M.; Gomez, J. A.; Duarte-Correa, Y. Effect of Drying Methods and Processing Conditions on the Quality of Curcuma longa Powder. Processes 10 (2022) 702. https://doi.org/10.3390/pr10040702; OpenAlex W4226152751; full text: https://www.mdpi.com/2227-9717/10/4/702 | Turmeric-only original full-text evidence for optional washing, slicing, drying, grinding, and sealed packing steps; not generalized into a quantity range or mandatory whole-category route |
| `dharmasena-et-al-2006-spice-dust` | literature | Dharmasena, D. A. N.; et al. Dust filtration during spice grinding. Journal of Agricultural Sciences. https://doi.org/10.4038/jas.v1i2.8098; OpenAlex W2396079490; original PDF: https://storage.googleapis.com/jnl-sljo-j-jassl-files/journals/1/articles/8098/submission/proof/8098-1-28547-1-10-20160426.pdf | Original full-text evidence that spice grinding creates airborne dust and requires collection/control; case values are not copied into ranges |
